import React from 'react';
import Head from 'next/head';
import { Container, Grid, Text, Title } from '@components';

const Publications = (): JSX.Element => (
  <Container marginBottom="5rem">
    <Head>
      <title>Publications</title>
    </Head>
    <Container alignItems="center" mb="3rem">
      <Title fontSize="40px" as="h2">
        Publications
      </Title>
      <Text textAlign="center">
        Some interesting, useful and random stuff I want to read later.
      </Text>
    </Container>
    <Grid
      alignItems="baseline"
      gridTemplateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
      ]}
      gridGap={['1rem', '2rem', '3rem']}
    >
      {/* Grid items here */}
    </Grid>
  </Container>
);

export default Publications;
