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
    <Container alignContent="center" alignItems="center">
      <Title fontSize="40px" as="h2">
        Education
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>Bachelor of Science, 09/2022-Present</Text>
        <Text>UC San Diego, California, United States</Text>
        <Text>Major: Data Science, Math joint CS</Text>
        <Text>Minor: Cognitive Science</Text>
      </Container>
    </Container>

    <Container alignContent="center" alignItems="center">
      <Title fontSize="40px" as="h2">
        Internship Experience
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://www.tritonfunds.com/team">
            Triton Funds, California, United States
          </a>
        </Text>
        <Text>Developer, 06/2023-09/2023</Text>
        <Text>Project 1: Video Content Creation Project App</Text>
        <Text>
          ➤ Utilized Python&apos;s requests library to make RESTful API calls to
          the EDGAR API, fetching financial statements and quarterly reports,
          and implemented error handling and retries for API requests to ensure
          reliable data retrieval.
        </Text>
        <Text>
          ➤ Designed a script generation pipeline that formats the financial
          data into a structured format suitable for GPT input to generate video
          scripts and integrated the output with Notion using the Notion API.
        </Text>
        <Text>
          ➤ Implemented a Cron Job and set up a Linux-based server to automate
          the execution of the Python script, ensuring timely updates. Created a
          shell script that orchestrates the entire process, from data retrieval
          to Notion integration.
        </Text>
        <Text>
          ➤ Wrote functions to tokenize and process filings data, and set up
          comprehensive logging to monitor data extraction and script execution
          to ensure robust scheduling and error handling within the Cron Job
          configuration.
        </Text>
        <Text>
          ➤ Developed custom tokenization functions using Python&apos;s Natural
          Language Toolkit and Spacy libraries to preprocess text data and
          implemented logging mechanisms to track the progress of each step,
          including data extraction, preprocessing, and script generation.
        </Text>
        <Text>Project 2: Auto-fin Application</Text>
        <Text>
          ➤ Developed an application in Python to automate parts of the
          fund&apos;s investment process, reducing manual workload.
        </Text>
        <Text>
          ➤ Created an RSS Feed parser and utilized Python&apos;s feedparser
          library to parse RSS feeds, and implemented regular expressions to
          extract specific information (e.g., CEO/CFO names, contact
          information) from the press releases. Stored the extracted data in a
          relational database (e.g., PostgreSQL) for easy querying and analysis.
        </Text>
        <Text>
          ➤ Implemented streaming APIs using Flask to detect and download 10-K/Q
          and S3 filings in real-time.
        </Text>
        <Text>
          ➤ Maintained a constantly updated database with ticker symbol
          information, leveraging GPT for data accuracy.
        </Text>
        <Text>
          ➤ Configured AWS Lambda functions for background tasks and data
          processing and Utilized AWS RDS for the database backend to ensure
          high availability and performance, simplifying the data collection
          process and enhancing the system&apos;s scalability.
        </Text>
      </Container>
    </Container>

    <Container alignContent="center" alignItems="center">
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://ventureshares.io/">
            Venture Shares, California, United States
          </a>
        </Text>
        <Text>Data Recollection Intern, 06/2024-10/2024</Text>
        <Text>
          ➤ Developed Python scripts to extract data from various financial
          websites, including Linqto, MarketWatch, and EquityZen, leveraging
          tools such as requests, BeautifulSoup, and APIs to automate data
          retrieval.
        </Text>
        <Text>
          ➤ Managed IPO data extraction by designing a script to scrape
          information on recent, upcoming, and future IPOs, organizing the data
          efficiently for integration into a broader database. Applied data
          cleaning techniques to ensure accurate representation of financial
          metrics.
        </Text>
        <Text>
          ➤ Integrated and processed financial listings data, including funding
          details, company information, and key metrics, storing it in a
          structured format. Utilized MongoDB for efficient data management,
          enabling seamless retrieval and analysis across multiple datasets.
        </Text>
      </Container>
    </Container>

    <Container alignContent="center" alignItems="center">
      <Title fontSize="40px" as="h2">
        Extracurricular Activity
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://ucsdtriplec.github.io">
            Triple-C Club, California, United States
          </a>
        </Text>
        <Text>Team Member, 06/2023-Present</Text>
        <Text>
          ➤ Used Python’s Beautiful Soup to extract housing data related to the
          San Diego area from websites, including information such as prices,
          locations, types of housing, and available amenities.
        </Text>
        <Text>
          ➤ Participated in the development of an application - using Python to
          develop a web crawler to regularly collect the latest data from the
          rental housing market, ensuring that the information we provide is
          up-to-date to assist customers in making informed rental decisions.
        </Text>
        <Text>
          ➤ Collected nutritional data from renters, including renters’ needs
          and preferences such as family size, budget, facility requirements,
          etc., which is used to further personalize rental recommendations for
          customers, ensuring they find housing options that meet their specific
          needs.
        </Text>
      </Container>
    </Container>

    <Container alignContent="center" alignItems="center">
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://studentorg.ucsd.edu/Home/Details/18637">
            Halıcıoğlu Data Science Institute, California, United States
          </a>
        </Text>
        <Text>External Committee Member of HDSI, 09/2024-Present</Text>
        <Text>
          ➤ The HDSI Student Council serves as the governing body advocating for
          the undergraduate and graduate students pursuing academic degrees at
          HDSI.
        </Text>
      </Container>
    </Container>

    <Container alignContent="center" alignItems="center">
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://math.ucsd.edu/students/undergraduate/tutoring">
            UCSD Tutor in Math Department, California, United States
          </a>
        </Text>
        <Text>Tutor, 09/2022-07/2024</Text>
        <Text>
          ➤ Tutored math courses related to Calculus and Differential Equations
          for four regular quarters and summer 2024
        </Text>
      </Container>
    </Container>

    <Container alignContent="center" alignItems="center">
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://iseo.ucsd.edu/programs/">
            UCSD GAP (Global Ambassadors Program), California, United States
          </a>
        </Text>
        <Text>Mentor, 07/2023-08/2023</Text>
        <Text>
          ➤ Provided friendly support in order to engage our incoming
          undergraduate international and out-of-state students and help them
          create solid relationships within our campus community.
        </Text>
      </Container>
    </Container>

    <Container alignContent="center" alignItems="center">
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://spis.ucsd.edu/people.html">
            UCSD SPIS (The Summer Program for Incoming Students), California,
            United States
          </a>
        </Text>
        <Text>Mentor, 08/2024-09/2024</Text>
        <Text>
          ➤ SPIS is a 5-week summer program on the UC San Diego campus for
          students accepted into CSE majors as well as for other UC San Diego
          admitted students who want to explore computer science as a career
          option.
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
