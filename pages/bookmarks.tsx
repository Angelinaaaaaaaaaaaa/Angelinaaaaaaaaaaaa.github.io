import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Container, Grid, Text, Title } from '@components';

import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { getBookmarks } from '../notion';

const Bookmarks = (): JSX.Element => (
  <Container marginBottom="5rem">
    <Head>
      <title>Bookmarks</title>
      <link rel="preconnect" href="https://rdl.ink" />
    </Head>
    <Container alignItems="center" mb="3rem">
      <Title>Bookmarks</Title>
      <Text textAlign="center">
        Some interesting, useful and random stuff I want to read later.
      </Text>
    </Container>
    <Grid
      alignItems="baseline"
      gridTemplateColumns={['repeat(2, minmax(0, 1fr))', 'repeat(3, 1fr)']}
      gridGap={['1rem', '2rem']}
    >
    </Grid>
  </Container>
);

export interface Bookmark {
  id: string;
  created: string;
  name: string;
  url: string;
}

const formatBookmarks = ({
                           results,
                         }: QueryDatabaseResponse): ReadonlyArray<Bookmark> =>
  results.reduce<Array<Bookmark>>((acc, result) => {
    if (
      result.object === 'page' &&
      'url' in result &&
      result.properties?.Created?.type === 'created_time' &&
      result.properties?.URL?.type == 'url' &&
      result.properties.URL.url &&
      result.properties?.Name?.type == 'title' &&
      result.properties.Name.title?.[0]?.type === 'text'
    ) {
      return [
        ...acc,
        {
          id: result.id,
          url: result.properties.URL.url,
          created: result.properties.Created.created_time,
          name: result.properties.Name.title[0].plain_text,
        },
      ];
    }

    return acc;
  }, []);

export const getStaticProps: GetStaticProps = async () => {
  const bookmarks = await getBookmarks();

  return {
    props: {
      bookmarks: formatBookmarks(bookmarks),
    },
    revalidate: 60, // Optional: Revalidate the page every 60 seconds
  };
};

export default Bookmarks;
