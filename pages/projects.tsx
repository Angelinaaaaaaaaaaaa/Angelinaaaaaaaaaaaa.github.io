import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticProps } from 'next';

import { Container, Grid, Text, Title } from '@components';
import { getPosts, Post } from '@posts';

interface ProjectProps {
  projects: Post[];
}

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.03);
  }

  @media (max-width: 600px) {
    height: 200px;
  }
`;

const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem 1.5rem;
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const ProjectRole = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const ProjectDuring = styled.span`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.4);
`;

const ProjectTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
`;

const Tag = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: 0.02em;
`;

const CaptionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const CaptionItem = styled.li`
  font-size: 0.88rem;
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.55;
`;

const ViewButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border-bottom: none;
  transition: background 0.15s ease, transform 0.15s ease;
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
  align-self: flex-start;
  margin-top: 0.25rem;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

const ComingSoonBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.35);
  border: 1px dashed rgba(0, 0, 0, 0.15);
  align-self: flex-start;
  margin-top: 0.25rem;
`;

const LabButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: background 0.15s ease, transform 0.15s ease;
  background: transparent;
  color: rgba(0, 0, 0, 0.55);
  align-self: flex-start;
  margin-top: 0.25rem;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: translateY(-1px);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const SectionDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  margin: 3rem 0 2rem;
`;

const CourseItem = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:last-child {
    border-bottom: none;
  }
`;

const CourseLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  border-bottom: none;

  &:hover {
    color: #000;
    border-bottom: none;
  }
`;

const TopBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #b45309;
  background: #fef3c7;
  padding: 2px 8px;
  border-radius: 999px;
  margin-left: 0.5rem;
`;

const CourseGroupLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(0, 0, 0, 0.35);
  margin: 1.5rem 0 0.25rem;

  &:first-child {
    margin-top: 0;
  }
`;

const Projects = ({ projects }: ProjectProps): JSX.Element => (
  <Container marginBottom="5rem">
    <Head>
      <title>Projects — Runjie Zhang</title>
    </Head>

    <Container alignItems="center" marginBottom="1rem">
      <Title>Projects</Title>
      <Text textAlign="center">
        I&apos;m always working on new projects.{' '}
        Find more on my{' '}
        <a href="https://github.com/Angelinaaaaaaaaaaaa/">GitHub</a>.
      </Text>
    </Container>

    <Grid
      py="1rem"
      gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}
      width="100%"
      gap="1.75rem"
    >
      {projects.map(({ data }) => (
        <ProjectCard key={data.slug}>
          <ProjectImage src={data.preview} alt={data.title} />
          <ProjectBody>
            <ProjectMeta>
              <ProjectRole>{data.position}</ProjectRole>
              <ProjectDuring>{data.during}</ProjectDuring>
            </ProjectMeta>

            <ProjectTitle>{data.title}</ProjectTitle>

            <CaptionList>
              {(data.captions ?? []).map((caption: string) => (
                <CaptionItem key={caption}>{caption}</CaptionItem>
              ))}
            </CaptionList>

            <TagRow>
              {(data.tags ?? []).map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagRow>

            <ButtonRow>
              {data.url && data.url !== '#' ? (
                <ViewButton href={data.url} target="_blank" rel="noopener noreferrer">
                  {data.urlLabel ?? 'View project'} →
                </ViewButton>
              ) : (
                <ComingSoonBadge>Coming soon</ComingSoonBadge>
              )}
              {data.labUrl && (
                <LabButton href={data.labUrl} target="_blank" rel="noopener noreferrer">
                  {data.labName ?? 'Lab'} ↗
                </LabButton>
              )}
            </ButtonRow>
          </ProjectBody>
        </ProjectCard>
      ))}
    </Grid>

    <SectionDivider />

    <Container alignContent="left" alignItems="left">
      <Title fontSize="2rem" as="h2" marginBottom="1rem">
        Course Projects
      </Title>

      {/* UC Berkeley */}
      <CourseGroupLabel>UC Berkeley</CourseGroupLabel>
      <CourseItem>
        <CourseLink href="https://github.com/Angelinaaaaaaaaaaaa/ping-pong-game-290">
          CSE290 — Ping Pong Game
        </CourseLink>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://github.com/cs288-tai/tai_cs288">
          CS288 — TAI-SlideQA: Multimodal Slide QA with VLM-Augmented Retrieval
        </CourseLink>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://github.com/Angelinaaaaaaaaaaaa/lecture_finder">
          CS282 — Lecture Finder
        </CourseLink>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://github.com/Angelinaaaaaaaaaaaa/in-context-transformer-ar">
          CS282 — In-Context Transformer (Autoregressive)
        </CourseLink>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://github.com/Angelinaaaaaaaaaaaa/Conv-Layer-Intuition-Tutor">
          CS282 — Conv Layer Intuition Tutor
        </CourseLink>
      </CourseItem>

      {/* UC San Diego */}
      <CourseGroupLabel>UC San Diego</CourseGroupLabel>
      <CourseItem>
        <CourseLink href="https://github.com/Angelinaaaaaaaaaaaa/DL_for_Climate_Emulation_FinalVersion">
          CSE151B — Climate Emulation with U-Net
        </CourseLink>
        <TopBadge>🏆 Top project in class</TopBadge>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://github.com/Angelinaaaaaaaaaaaa/Replication-Active-learning-for-optimal-intervention-design-in-causal-models">
          DSC180 — Active Learning
        </CourseLink>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://github.com/Angelinaaaaaaaaaaaa/Replication_reducing_inequality">
          DSC180 — Targeted Interventions to Reduce Inequality
        </CourseLink>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://github.com/Angelinaaaaaaaaaaaa/Fake-News-Detection/blob/main/Fake_News_Detection.pdf">
          CSE158 — Fake News Detection
        </CourseLink>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://github.com/Angelinaaaaaaaaaaaa/Skin_Type_Classification">
          CSE151A — Skin Type Classification
        </CourseLink>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://angelinaaaaaaaaaaaa.github.io/Covid-visualization/">
          DSC106 — COVID Visualization
        </CourseLink>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://angelinaaaaaaaaaaaa.github.io/Yelp-visualization/">
          DSC106 — Yelp Visualization
        </CourseLink>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://github.com/COGS108/Group162-FA24">
          COGS108 — Predicting Confusion through EEG
        </CourseLink>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://github.com/Angelinaaaaaaaaaaaa/LOL-Result-Model-2023">
          DSC80 — LOL Result Model 2023
        </CourseLink>
      </CourseItem>
      <CourseItem>
        <CourseLink href="https://github.com/Angelinaaaaaaaaaaaa/Side-Analysis-of-League-Of-Legends-2023">
          DSC80 — Side Analysis of League of Legends 2023
        </CourseLink>
      </CourseItem>
    </Container>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getPosts('projects');
  projects.sort((first, second) => first.data.order - second.data.order);
  return { props: { projects } };
};

export default Projects;
