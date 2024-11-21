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
        <Container alignItems="center" justifyContent="center" textAlign="center">
          <Title>Runjie Zhang</Title>
          <Title
            fontSize="2rem"
            color="rgba(0, 0, 0, 0.6)"
            fontWeight="500"
            as="h2"
          >
            I innovate, I create, I explore.
          </Title>
        </Container>
      </Grid>

      {/* About Me Section */}
      <Container maxWidth="700px" gridGap="3rem" alignItems="center">
        <Text textAlign="center">
          I&apos;m a passionate student interested in data science and machine
          learning, with a focus on algorithmic fairness and decision support
          tools. I am eager to expand my knowledge and contribute to the
          ethical use of technology in academia and beyond.
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
