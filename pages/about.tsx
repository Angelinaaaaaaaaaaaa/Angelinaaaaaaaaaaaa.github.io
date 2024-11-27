import React from 'react';
import { Card, Container, Grid, Link, Text, Title } from '@components';
import Head from 'next/head';

import {
  SiAmazonaws,
  SiC,
  SiD3Dotjs,
  SiGooglecloud,
  SiGraphql,
  SiJupyter,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiR,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

const stacks = [
  {
    Icon: SiTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    Icon: SiReact,
    url: 'https://reactjs.org/',
  },
  {
    Icon: SiNextdotjs,
    url: 'https://nextjs.org/',
  },
  {
    Icon: SiGraphql,
    url: 'https://graphql.org/',
  },
  {
    Icon: SiAmazonaws,
    url: 'https://aws.amazon.com/',
  },
  {
    Icon: SiGooglecloud,
    url: 'https://cloud.google.com/',
  },
  {
    Icon: SiPostgresql,
    url: 'https://www.postgresql.org/',
  },
  {
    Icon: SiPython,
    url: 'https://www.python.org/',
  },
  {
    Icon: SiJupyter,
    url: 'https://jupyter.org',
  },
  {
    Icon: SiR,
    url: 'https://www.r-project.org',
  },
  {
    Icon: SiC,
    url: 'https://en.wikipedia.org/wiki/C_(programming_language)',
  },
  {
    Icon: SiD3Dotjs,
    url: 'https://d3js.org',
  },
];

const About = (): JSX.Element => (
  <Container>
    <Head>
      <title>About</title>
    </Head>
    <Container alignContent="left" alignItems="left">
      <Title fontSize="40px" as="h2">
        Education
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          UC San Diego, Bachelor of Science, 09/2022-Present, California, United
          States
        </Text>
        <Text>Major: Data Science, Math-Computer Science</Text>
        <Text>Minor: Cognitive Science</Text>
      </Container>
    </Container>

    <Container alignContent="left" alignItems="left">
      <Title fontSize="40px" as="h2">
        Experience
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://www.tritonfunds.com/team">
            Triton Funds, California, United States
          </a>
        </Text>
        <Text>Developer, 06/2023-09/2023</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://ventureshares.io/">
            Venture Shares, California, United States
          </a>
        </Text>
        <Text>Data Recollection Intern, 06/2024-10/2024</Text>
      </Container>
    </Container>

    <Container alignContent="left" alignItems="left">
      <Title fontSize="40px" as="h2">
        Extracurricular Activities
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://pwrlab.org">Power Transformation Lab</a>
        </Text>
        <Text>Undergraduate Research Assistant, California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://profiles.ucsd.edu/natasia.courchesne">Natasia Courchesne-krak</a>
        </Text>
        <Text>Undergraduate Research Assistant, California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text><a href="https://bsalimi.github.io">
          Trustworthy Data Management and Analysis Lab</a>
        </Text>
        <Text>Undergraduate Research Assistant, California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text><a href="https://ucsdtriplec.github.io">Triple-C Club</a></Text>
        <Text>Team Membe, California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://studentorg.ucsd.edu/Home/Details/18637">
            Halıcıoğlu Data Science Institute
          </a>
        </Text>
        <Text>External Committee Member, California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://math.ucsd.edu/students/undergraduate/tutoring">
            UCSD Math Department (4 quarters)
          </a>
        </Text>
        <Text>UCSD Tutor, California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://iseo.ucsd.edu/programs/">
            UCSD GAP (Global Ambassadors Program)
          </a>
        </Text>
        <Text>Participant, California, United </Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://spis.ucsd.edu/people.html">
            UCSD SPIS (The Summer Program for Incoming Students)
          </a>
        </Text>
        <Text>Mentor, California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          This revision ensures clarity and professionalism while maintaining a
          concise format. Let me know if you'd like to add more details to any
          section!
        </Text>
      </Container>
    </Container>

    <Container
      paddingY="4rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
    >
      <Title fontSize="40px" as="h2">
        Technologies I frequently use
      </Title>
      <Grid
        gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
        gridGap="1rem"
        justifyItems="center"
        maxWidth="40rem"
      >
        {stacks.map(({ Icon, url }, i) => (
          <Link href={url} key={url}>
            <Card key={i}>
              <Icon size="2rem" />
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
  </Container>
);

export default About;
