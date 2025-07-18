import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button, Container, Grid, Link, Text, Title } from '@components';
import styles from '@styles/Home.module.css';

const Home = (): JSX.Element => (
  <Container>
    {/* Container for the top section with centered content */}
    <Container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      textAlign="center"
    >
      {/* Use Grid to split into two columns */}
      <Grid
        gridTemplateColumns={['1fr', '1fr 1fr']} // 2 columns on larger screens
        justifyItems="center"
        alignItems="center"
        style={{ height: '60vh' }} // Ensures full height for centering
      >
        {/* First column: Image */}
        <Container
          alignItems="center"
          justifyContent="center"
          style={{ padding: '0' }} // Remove any padding around the image container
        >
          <Image
            src="/me.webp"
            alt="Runjie Zhang"
            width={240}
            height={320}
            style={{ objectFit: 'cover', padding: '0' }} // Remove extra space around the image
            className={styles.image}
          />
        </Container>

        {/* Second column: Text Content */}
        <Container
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Title>Runjie Zhang</Title>
        </Container>
      </Grid>

      {/* About Me Section */}
      <Container maxWidth="700px" gridGap="3rem" alignItems="center">
        <Text textAlign="left">
          {/*I am Angelina (Runjie) Zhang, and I also go by Angie/Angela/Angel 😉 I*/}
          {/*am currently a third-year student at UC San Diego, double majoring in*/}
          {/*Data Science and Math-Computer Science with a minor in Cognitive*/}
          {/*Science. My research interests lie in trustworthy machine learning,*/}
          {/*with a focus on systematically integrating fairness into algorithm*/}
          {/*design and improving the interpretability of complex models. My goal*/}
          {/*is to develop responsible methodologies that address key challenges in*/}
          {/*data science, promoting equitable and transparent data-driven*/}
          {/*decision-making.*/}
          Hi, I’m Angelina (Runjie) Zhang — or just Angie/Angela/Angel 😉 I’m a
          Data Science and Math–Computer Science double major at UC San Diego,
          with a minor in Cognitive Science. This fall, I’ll be joining the MEng
          program in Electrical Engineering and Computer Sciences at UC
          Berkeley, focusing on data science. My passion lies in trustworthy
          machine learning — especially designing fair algorithms and making
          complex models more interpretable. I’m driven to develop responsible,
          transparent, and equitable approaches to data-driven decision-making.
        </Text>
        <Link href="/about">
          <Button>More about me &rarr;</Button>
        </Link>
      </Container>
    </Container>

    {/* Get in Touch Section */}
    <Container alignItems="center" paddingY="4rem">
      <Container maxWidth="600px" alignItems="center" textAlign="center">
        <Title fontSize="3rem" as="h3">
          Get in touch
        </Title>
        <Text>
          Although I&apos;m not actively looking for job opportunities, my inbox
          is still open for you. Feel free to ask me anything!
        </Text>
        <Grid
          gridGap="2rem"
          marginTop="2rem"
          gridTemplateColumns="1fr"
          justifyItems="center" // Centering horizontally
          alignItems="center" // Centering vertically
        >
          <Link href="mailto:ruz039@ucsd.edu">
            <Button width="auto">
              <motion.span
                initial={{ display: 'inline-block' }}
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2.5,
                }}
              >
                👋
              </motion.span>{' '}
              Say hello
            </Button>
          </Link>
        </Grid>
      </Container>
    </Container>
  </Container>
);

export default Home;
