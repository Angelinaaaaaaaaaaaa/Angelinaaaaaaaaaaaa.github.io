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
        <Text fontWeight="700">University of California, Berkeley</Text>
        <Text>Master of Engineering, Electrical Engineering &amp; Computer Sciences (EECS), 09/2025–05/2026</Text>
        <Text>Focus: Data Science &amp; Machine Learning Systems</Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text fontWeight="700">University of California San Diego</Text>
        <Text>Bachelor of Science, 09/2022–05/2025 — Graduated in 3 years</Text>
        <Text>Double Major: Data Science, Mathematics–Computer Science · Minor: Cognitive Science</Text>
        <Text>Major GPA: 3.94/4.0 · Provost Honors</Text>
      </Container>
      <Container alignContent="left" alignItems="left">
        <Title fontSize="40px" as="h2">
          Experience
        </Title>
        <Container maxWidth={['100%', '720px']} marginY="1rem">
          <Text fontWeight="700">
            <a href="https://www.uber.com/">Uber</a>
          </Text>
          <Text>Software Engineer (incoming), 2026</Text>
        </Container>
        <Container maxWidth={['100%', '720px']} marginY="1rem">
          <Text fontWeight="700">
            <a href="https://ventureshares.io/">Venture Shares</a>
          </Text>
          <Text>Software Engineer Intern, 06/2024–10/2024</Text>
          <Text>Built streaming data pipelines (Kafka, FastAPI, asyncio) processing 1M+ financial records/day; developed RESTful APIs reducing response latency by 60%; engineered MongoDB feature store restoring sub-second query performance on millions of records.</Text>
        </Container>
        <Container maxWidth={['100%', '720px']} marginY="1rem">
          <Text fontWeight="700">
            <a href="https://www.tritonfunds.com/team">Triton Funds</a>
          </Text>
          <Text>Software Developer Intern, 06/2023–09/2023</Text>
          <Text>Developed Python ETL pipeline processing 500+ SEC filings per batch; integrated GPT-based NLP achieving 99% entity extraction accuracy; built Flask + AWS (EC2, RDS) REST API serving 50+ QPS with p95 latency &lt;200ms.</Text>
        </Container>
      </Container>

      <Container alignContent="left" alignItems="left">
        <Title fontSize="40px" as="h2">
          Extracurricular Activities
        </Title>
        <Container maxWidth={['100%', '720px']} marginY="1rem">
          <Text>
            <a href="https://pwrlab.org"> Power Transformation Lab</a>
          </Text>
          <Text>Undergraduate Research Assistant</Text>
        </Container>

        <Container maxWidth={['100%', '720px']} marginY="1rem">
          <Text>
            <a href="#">Courchesne-Krak Lab</a>
          </Text>
          <Text>Undergraduate Research Assistant</Text>
        </Container>

        <Container maxWidth={['100%', '720px']} marginY="1rem">
          <Text>
            <a href="#">Trustworthy Data Management and Analysis Lab</a>
          </Text>
          <Text>Undergraduate Research Assistant</Text>
        </Container>

        <Container maxWidth={['100%', '720px']} marginY="1rem">
          <Text>
            <a href="https://github.com/ucsdtriplec">Triple-C Club</a>
          </Text>
          <Text>Team Member</Text>
        </Container>

        <Container maxWidth={['100%', '720px']} marginY="1rem">
          <Text>
            <a href="#">UCSD Halıcıoğlu Data Science Institute (HDSI)</a>
          </Text>
          <Text>External Committee Member</Text>
        </Container>

        <Container maxWidth={['100%', '720px']} marginY="1rem">
          <Text>
            <a href="#">UCSD Math Department</a>
          </Text>
          <Text>Tutor (4 quarters)</Text>
        </Container>

        <Container maxWidth={['100%', '720px']} marginY="1rem">
          <Text>
            <a href="https://iseo.ucsd.edu/programs/">
              UCSD Global Ambassadors Program (GAP)
            </a>
          </Text>
          <Text>Both a Mentee and a Mentor</Text>
        </Container>

        <Container maxWidth={['100%', '720px']} marginY="1rem">
          <Text>
            <a href="https://spis.ucsd.edu/people.html">
              UCSD Summer Program for Incoming Students (SPIS)
            </a>
          </Text>
          <Text>Mentor</Text>
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
  </Container>
);
export default About;
