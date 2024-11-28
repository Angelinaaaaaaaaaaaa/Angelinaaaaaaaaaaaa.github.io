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
  { Icon: SiTypescript, url: 'https://www.typescriptlang.org/' },
  { Icon: SiReact, url: 'https://reactjs.org/' },
  { Icon: SiNextdotjs, url: 'https://nextjs.org/' },
  { Icon: SiGraphql, url: 'https://graphql.org/' },
  { Icon: SiAmazonaws, url: 'https://aws.amazon.com/' },
  { Icon: SiGooglecloud, url: 'https://cloud.google.com/' },
  { Icon: SiPostgresql, url: 'https://www.postgresql.org/' },
  { Icon: SiPython, url: 'https://www.python.org/' },
  { Icon: SiJupyter, url: 'https://jupyter.org' },
  { Icon: SiR, url: 'https://www.r-project.org' },
  { Icon: SiC, url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
  { Icon: SiD3Dotjs, url: 'https://d3js.org' },
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
<<<<<<< HEAD
          University of California San Diego (UCSD), Bachelor of Science,
          09/2022-Present
        </Text>
=======
          University of California San Diego (UCSD), California, United States
        </Text>
        <Text>Bachelor of Science, 09/2022-Present</Text>
>>>>>>> 5155c0ca5212d6b67e6b330a3fd569299257dfe1
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
          <Link href="https://www.tritonfunds.com/team">
            Triton Funds, California, United States
          </Link>
        </Text>
        <Text>Developer, 06/2023-09/2023</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <Link href="https://ventureshares.io/">
            Venture Shares, California, United States
          </Link>
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
<<<<<<< HEAD
          <Link href="https://pwrlab.org">Power Transformation Lab</Link>
        </Text>
        <Text>Undergraduate Research Assistant</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <Link href="#">Courchesne-Krak Lab</Link>
        </Text>
        <Text>Undergraduate Research Assistant</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <Link href="#">Trustworthy Data Management and Analysis Lab</Link>
        </Text>
        <Text>Undergraduate Research Assistant</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <Link href="https://github.com/ucsdtriplec">Triple-C Club</Link>
        </Text>
        <Text>Team Member</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <Link href="#">UCSD Halıcıoğlu Data Science Institute (HDSI)</Link>
        </Text>
        <Text>External Committee Member</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <Link href="#">UCSD Math Department</Link>
        </Text>
        <Text>Tutor (4 quarters)</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <Link href="https://iseo.ucsd.edu/programs/">
            UCSD Global Ambassadors Program (GAP)
          </Link>
        </Text>
        <Text>Both a Mentee and a Mentor</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <Link href="https://spis.ucsd.edu/people.html">
            UCSD Summer Program for Incoming Students (SPIS)
          </Link>
        </Text>
        <Text>Mentor</Text>
=======
          <a href="https://pwrlab.org">Power Transformation Lab</a>
        </Text>
        <Text>Undergraduate Research Assistant, California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://profiles.ucsd.edu/natasia.courchesne">
            Natasia Courchesne-krak
          </a>
        </Text>
        <Text>Undergraduate Research Assistant, California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="#">Trustworthy Data Management and Analysis Lab</a>
        </Text>
        <Text>Undergraduate Research Assistant, California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://github.com/ucsdtriplec">Triple-C Club</a>
        </Text>
        <Text>Team Member, California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="#">UCSD Halıcıoğlu Data Science Institute (HDSI)</a>
        </Text>
        <Text>External Committee Member, California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="#">UCSD Math Department</a>
        </Text>
        <Text>Tutor (4 quarters), California, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://iseo.ucsd.edu/programs/">
            UCSD Global Ambassadors Program (GAP)
          </a>
        </Text>
        <Text>Both a Mentee and a Mentor, United States</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://spis.ucsd.edu/people.html">
            UCSD Summer Program for Incoming Students (SPIS)
          </a>
        </Text>
        <Text>Mentor, California, United States</Text>
>>>>>>> 5155c0ca5212d6b67e6b330a3fd569299257dfe1
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
        Technologies I Frequently Use
      </Title>
      <Grid
        gridTemplateColumns={['repeat(3, 1fr)', 'repeat(6, 1fr)']}
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
