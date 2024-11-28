import React from 'react';
import Head from 'next/head';
import { Container, Grid, Text, Title } from '@components';

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
    ></Grid>
  </Container>
);

export interface Bookmark {
  id: string;
  created: string;
  name: string;
  url: string;
}

export default Bookmarks;
