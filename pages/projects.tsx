import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticProps } from 'next';

import { Button, Container, Grid, Link, List, Text, Title } from '@components';
import { getPosts, Post } from '@posts';

interface ProjectProps {
  projects: Post[];
}

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
  transition: 0.2s ease-in-out 0s;

  :hover {
    transform: scale(1.02);
  }
`;

const ProjectContainer = styled(Container)`
  :hover > * img {
    transform: scale(1.03);
  }
`;

const ProjectTag = styled.li`
  color: rgb(105, 105, 105);
  font-size: 13px;
  letter-spacing: 0.03em;
`;

const ProjectButton = styled(Button)`
  padding: 12px 30px;
`;

const Projects = ({ projects }: ProjectProps): JSX.Element => (
  <Container marginBottom="5rem">
    <Head>
      <title>Projects</title>
    </Head>
    <Container alignItems="center">
      <Title>Projects</Title>
      <Text textAlign="center">
        I&apos;m always working on new projects. <br />
        You can find them on my&nbsp;
        <a href="https://github.com/Angelinaaaaaaaaaaaa/">Github</a>.
      </Text>
    </Container>

    <Grid
      py="2rem"
      gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
      width="100%"
      gridGap="2rem"
    >
      {projects.map(({ data }) => (
        <ProjectContainer
          key={data.slug}
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
          gridGap="1.5rem"
        >
          <Link href={data.url} width="100%" target="_blank">
            <ProjectImage src={data.preview} />
          </Link>
          <Container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Link href={data.url} target="_blank">
              <Title fontSize="2rem" as="h2">
                {data.title}
              </Title>
            </Link>
            <Link href={data.url} target="_blank">
              <ProjectButton variant="secondary">View Project</ProjectButton>
            </Link>
          </Container>
          <Container gridGap="1rem">
            <List marginY="1rem" margin={0}>
              {data.captions.map((caption: string) => (
                <ProjectTag key={caption}>{caption}</ProjectTag>
              ))}
            </List>
            <List marginY="1rem">
              {data.tags.map((tag: string) => (
                <ProjectTag key={tag}>{tag}</ProjectTag>
              ))}
            </List>
          </Container>
        </ProjectContainer>
      ))}
    </Grid>

    <Container alignContent="left" alignItems="left">
      <Title fontSize="40px" as="h2">
        Course Projects
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://github.com/Angelinaaaaaaaaaaaa/LOL-Result-Model-2023">
            DSC80 - LOL-Result-Model-2023
          </a>
        </Text>
        <Text>
          <a href="https://github.com/Angelinaaaaaaaaaaaa/Side-Analysis-of-League-Of-Legends-2023">
            DSC80 - Side-Analysis-of-League-Of-Legends-2023
          </a>
        </Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://github.com/Angelinaaaaaaaaaaaa/Replication-Active-learning-for-optimal-intervention-design-in-causal-models">
            DSC180 - Capstone Project - Model - Ongoing
          </a>
        </Text>
        <Text>
          <a href="https://github.com/Angelinaaaaaaaaaaaa/Replication_reducing_inequality">
            DSC180 - Targeted Interventions to Reduce Inequality - Ongoing
          </a>
        </Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://github.com/Angelinaaaaaaaaaaaa/Skin_Type_Classification">
            CSE151A - Skin Type Classification
          </a>
        </Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://angelinaaaaaaaaaaaa.github.io/Covid-visualization/">
            DSC106 - COVID Visualization
          </a>
        </Text>
        <Text>
          <a href="https://angelinaaaaaaaaaaaa.github.io/Yelp-visualization/">
            DSC106 - Yelp Visualization
          </a>
        </Text>
      </Container>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>
          <a href="https://github.com/COGS108/Group162-FA24">
            COGS108 FA24's Final Project - Ongoing
          </a>
        </Text>
      </Container>
    </Container>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getPosts('projects');

  projects.sort((first, second) => first.data.order - second.data.order);

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
