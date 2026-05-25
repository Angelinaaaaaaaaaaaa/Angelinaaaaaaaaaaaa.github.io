import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Container, Grid, Link, Card } from '@components';

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

/* ── Section shell ── */
const Section = styled.section`
  margin-bottom: 3.5rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 0.75rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.01em;
`;

/* ── Education cards (side by side, not timeline) ── */
const EduCard = styled.div`
  padding: 1.25rem 1.5rem;
  background: #fff;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const EduSchool = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
`;

const EduDegree = styled.p`
  font-size: 0.88rem;
  color: rgba(0, 0, 0, 0.65);
  margin: 0;
  line-height: 1.5;
`;

const EduDetail = styled.p`
  font-size: 0.82rem;
  color: rgba(0, 0, 0, 0.45);
  margin: 0;
`;

/* ── Badge ── */
const RoleBadge = styled.span<{ variant?: 'current' | 'incoming' | 'past' }>`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  align-self: flex-start;

  ${({ variant }) => {
    if (variant === 'current') return `background: #d1fae5; color: #065f46;`;
    if (variant === 'incoming') return `background: #dbeafe; color: #1e40af;`;
    return `background: rgba(0,0,0,0.05); color: rgba(0,0,0,0.45);`;
  }}
`;

/* ── Timeline ── */
const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 6px;
    bottom: 0;
    width: 2px;
    background: rgba(0, 0, 0, 0.08);
    border-radius: 2px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2rem;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -1.71rem;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  &[data-current='true']::before {
    border-color: #059669;
    background: #d1fae5;
  }

  &[data-incoming='true']::before {
    border-color: #2563eb;
    background: #dbeafe;
  }
`;

const TimelineHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
`;

const TimelineRole = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
`;

const OrgName = styled.a`
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  border-bottom: none;
  &:hover { opacity: 0.8; }
`;

const Period = styled.span`
  font-size: 0.78rem;
  color: rgba(0, 0, 0, 0.38);
  margin-bottom: 0.5rem;
  display: block;
`;

const Desc = styled.p`
  font-size: 0.88rem;
  color: rgba(0, 0, 0, 0.62);
  line-height: 1.65;
  margin: 0.4rem 0 0.5rem;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const Tag = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  padding: 2px 9px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: 0.02em;
`;

/* ── Activity mini-cards ── */
const ActivityCard = styled.div`
  padding: 1rem 1.25rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const ActivityOrg = styled.a`
  font-size: 0.92rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  border-bottom: none;
  &:hover { color: #2563eb; }
`;

const ActivityRole = styled.p`
  font-size: 0.82rem;
  color: rgba(0, 0, 0, 0.45);
  margin: 0;
`;

const About = (): JSX.Element => (
  <Container marginBottom="5rem">
    <Head>
      <title>About — Runjie Zhang</title>
    </Head>

    {/* Education */}
    <Section>
      <SectionHeader>
        <SectionTitle>Education</SectionTitle>
      </SectionHeader>
      <Grid gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap="1rem">
        <EduCard>
          <RoleBadge variant="current">Current</RoleBadge>
          <EduSchool>University of California, Berkeley</EduSchool>
          <EduDegree>Master of Engineering, EECS · 09/2025–05/2026</EduDegree>
          <EduDetail>Focus: Data Science &amp; Machine Learning Systems</EduDetail>
        </EduCard>
        <EduCard>
          <RoleBadge variant="past">Graduated 2025</RoleBadge>
          <EduSchool>University of California, San Diego</EduSchool>
          <EduDegree>B.S. Data Science · B.S. Mathematics–Computer Science · Minor: Cognitive Science</EduDegree>
          <EduDetail>GPA 3.94 · Provost Honors · Graduated in 3 years</EduDetail>
        </EduCard>
      </Grid>
    </Section>

    {/* Industry Experience — timeline */}
    <Section>
      <SectionHeader>
        <SectionTitle>Industry Experience</SectionTitle>
      </SectionHeader>
      <Timeline>
        <TimelineItem data-incoming="true">
          <TimelineHeader>
            <TimelineRole>Software Engineer</TimelineRole>
            <RoleBadge variant="incoming">Incoming</RoleBadge>
          </TimelineHeader>
          <Period>
            <OrgName href="https://www.uber.com/" target="_blank" rel="noopener noreferrer">Uber</OrgName>
            {' · '}2026
          </Period>
          <Desc>Joining Uber&apos;s engineering team as a full-time software engineer.</Desc>
          <TagRow>
            <Tag>Backend</Tag>
            <Tag>Distributed Systems</Tag>
          </TagRow>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader>
            <TimelineRole>Software Engineer Intern</TimelineRole>
            <RoleBadge variant="past">Past</RoleBadge>
          </TimelineHeader>
          <Period>
            <OrgName href="https://ventureshares.io/" target="_blank" rel="noopener noreferrer">Venture Shares</OrgName>
            {' · '}06/2024–10/2024
          </Period>
          <Desc>
            Built streaming data pipelines (Kafka, FastAPI, asyncio) processing 1M+ financial records/day.
            Developed RESTful APIs reducing response latency by 60%.
            Engineered MongoDB feature store restoring sub-second query performance on millions of records.
          </Desc>
          <TagRow>
            <Tag>Kafka</Tag><Tag>FastAPI</Tag><Tag>asyncio</Tag><Tag>MongoDB</Tag><Tag>Python</Tag>
          </TagRow>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader>
            <TimelineRole>Software Developer Intern</TimelineRole>
            <RoleBadge variant="past">Past</RoleBadge>
          </TimelineHeader>
          <Period>
            <OrgName href="https://www.tritonfunds.com/team" target="_blank" rel="noopener noreferrer">Triton Funds</OrgName>
            {' · '}06/2023–09/2023
          </Period>
          <Desc>
            Developed Python ETL pipeline processing 500+ SEC filings per batch.
            Integrated GPT-based NLP achieving 99% entity extraction accuracy.
            Built Flask + AWS (EC2, RDS) REST API serving 50+ QPS with p95 latency &lt;200ms.
          </Desc>
          <TagRow>
            <Tag>Python</Tag><Tag>Flask</Tag><Tag>AWS</Tag><Tag>NLP</Tag><Tag>ETL</Tag>
          </TagRow>
        </TimelineItem>
      </Timeline>
    </Section>

    {/* Research — timeline */}
    <Section>
      <SectionHeader>
        <SectionTitle>Research</SectionTitle>
      </SectionHeader>
      <Timeline>
        <TimelineItem data-current="true">
          <TimelineHeader>
            <TimelineRole>ML Engineer · MEng Capstone</TimelineRole>
            <RoleBadge variant="current">Current</RoleBadge>
          </TimelineHeader>
          <Period>
            <OrgName href="https://tai.berkeley.edu/" target="_blank" rel="noopener noreferrer">Berkeley Teaching AI (TAI)</OrgName>
            {' · '}08/2025–Present
          </Period>
          <Desc>
            Building LLM-based file reorganization agents and VLM-augmented slide QA systems for the Berkeley Teaching AI platform.
          </Desc>
          <TagRow>
            <Tag>LLM</Tag><Tag>VLM</Tag><Tag>RAG</Tag><Tag>Python</Tag>
          </TagRow>
        </TimelineItem>

        <TimelineItem data-current="true">
          <TimelineHeader>
            <TimelineRole>Research Assistant</TimelineRole>
            <RoleBadge variant="current">Current</RoleBadge>
          </TimelineHeader>
          <Period>
            <OrgName href="https://bsalimi.github.io/" target="_blank" rel="noopener noreferrer">Trustworthy Data Management and Analysis Lab</OrgName>
            {' · '}07/2024–Present
          </Period>
          <Desc>
            Co-designed Matryoshka, an ML-centric dataset discovery and feature selection system scaling to 100M+ row data lakes using DuckDB and PostgreSQL.
          </Desc>
          <TagRow>
            <Tag>Python</Tag><Tag>DuckDB</Tag><Tag>PostgreSQL</Tag><Tag>ML</Tag>
          </TagRow>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader>
            <TimelineRole>Research Assistant</TimelineRole>
            <RoleBadge variant="past">Past</RoleBadge>
          </TimelineHeader>
          <Period>
            <OrgName href="https://profiles.ucsd.edu/natasia.courchesne/" target="_blank" rel="noopener noreferrer">Courchesne-Krak Lab</OrgName>
            {' · '}06/2024–04/2025
          </Period>
          <Desc>
            Trained ensemble ML models (Ridge, LSTM) on multi-terabyte ABCD datasets for longitudinal adolescent health prediction; achieved AUC &gt;0.80.
          </Desc>
          <TagRow>
            <Tag>PyTorch</Tag><Tag>SHAP</Tag><Tag>Optuna</Tag><Tag>Plotly</Tag>
          </TagRow>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader>
            <TimelineRole>Engineering Research Assistant</TimelineRole>
            <RoleBadge variant="past">Past</RoleBadge>
          </TimelineHeader>
          <Period>
            <OrgName href="https://pwrlab.org" target="_blank" rel="noopener noreferrer">Power Transformation Lab</OrgName>
            {' · '}06/2023–09/2025
          </Period>
          <Desc>
            Built ML forecasting platform processing 50M+ energy rows across 22 provinces; NLP pipeline analyzing 1,000+ policy documents for China&apos;s mid-century power analysis.
          </Desc>
          <TagRow>
            <Tag>Python</Tag><Tag>XGBoost</Tag><Tag>BERT</Tag><Tag>PostgreSQL</Tag>
          </TagRow>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader>
            <TimelineRole>Research Assistant</TimelineRole>
            <RoleBadge variant="past">Past</RoleBadge>
          </TimelineHeader>
          <Period>
            <OrgName href="https://english.cas.cn/" target="_blank" rel="noopener noreferrer">Chinese Academy of Sciences</OrgName>
            {' · '}06/2023–06/2024
          </Period>
          <Desc>
            Co-developed Re-NeRF, optimizing high-resolution NeRF training with deformable convolution; improved rendering quality in 4K scenes (PSNR/SSIM).
          </Desc>
          <TagRow>
            <Tag>PyTorch</Tag><Tag>NeRF</Tag><Tag>Computer Vision</Tag>
          </TagRow>
        </TimelineItem>
      </Timeline>
    </Section>

    {/* Teaching */}
    <Section>
      <SectionHeader>
        <SectionTitle>Teaching</SectionTitle>
      </SectionHeader>
      <Grid gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap="0.75rem">
        <ActivityCard>
          <ActivityOrg as="span" style={{ cursor: 'default' }}>UCSD Math Department</ActivityOrg>
          <ActivityRole>Tutor · 4 quarters</ActivityRole>
        </ActivityCard>
        <ActivityCard>
          <ActivityOrg href="https://iseo.ucsd.edu/programs/" target="_blank" rel="noopener noreferrer">UCSD Global Ambassadors (GAP)</ActivityOrg>
          <ActivityRole>Mentee &amp; Mentor</ActivityRole>
        </ActivityCard>
        <ActivityCard>
          <ActivityOrg href="https://spis.ucsd.edu/people.html" target="_blank" rel="noopener noreferrer">UCSD SPIS</ActivityOrg>
          <ActivityRole>Mentor</ActivityRole>
        </ActivityCard>
      </Grid>
    </Section>

    {/* Extracurricular */}
    <Section>
      <SectionHeader>
        <SectionTitle>Extracurricular</SectionTitle>
      </SectionHeader>
      <Grid gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap="0.75rem">
        <ActivityCard>
          <ActivityOrg href="https://github.com/ucsdtriplec" target="_blank" rel="noopener noreferrer">Triple-C Club</ActivityOrg>
          <ActivityRole>Team Member</ActivityRole>
        </ActivityCard>
        <ActivityCard>
          <ActivityOrg href="https://datascience.ucsd.edu/" target="_blank" rel="noopener noreferrer">UCSD Halıcıoğlu Data Science Institute</ActivityOrg>
          <ActivityRole>External Committee Member</ActivityRole>
        </ActivityCard>
      </Grid>
    </Section>

    {/* Tech Stack */}
    <Container
      paddingY="3rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
    >
      <SectionHeader style={{ width: '100%' }}>
        <SectionTitle>Technologies I Frequently Use</SectionTitle>
      </SectionHeader>
      <Grid
        gridTemplateColumns={['repeat(3, 1fr)', 'repeat(6, 1fr)']}
        gridGap="1rem"
        justifyItems="center"
        maxWidth="40rem"
      >
        {stacks.map(({ Icon, url }) => (
          <Link href={url} key={url}>
            <Card>
              <Icon size="2rem" />
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
  </Container>
);

export default About;
