import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container, Title, Button, Grid, Link, Text } from '@components';
import styles from '@styles/Home.module.css';

const Home = (): JSX.Element => (
  <Container>
    <Container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      paddingY="25px"
      paddingBottom="40px"
      gridGap="4rem"
    >
      <Container alignItems="center" alignContent="center">
        <Image
          src="/me.webp"
          alt="Runjie Zhang"
          width={240}
          height={240}
          style={{ objectFit: 'cover' }}
          className={styles.image}
        />
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

      <Container maxWidth="700px" gridGap="3rem">
        <Container>
          <Text textAlign="center">
            I'm a passionate student interested in data science and machine learning,
            with a focus on algorithmic fairness and decision support tools.
            I am eager to expand my knowledge and contribute to the ethical
            use of technology in academia and beyond.
          </Text>
        </Container>
        <Link href="/about">
          <Button>More about me &rarr;</Button>
        </Link>
      </Container>
    </Container>

    <Container alignItems="center" paddingY="4rem">
      <Container maxWidth="600px" alignItems="center" alignContent="center">
        <Title fontSize="3rem" as="h3">
          Get in touch
        </Title>
        <Text textAlign="center">
          Although I&apos;m not actively looking for job opportunities, my inbox
          is still open for you. Feel free to ask me anything!
        </Text>
        <Grid
          gridGap="2rem"
          marginTop="2rem"
          // gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
          gridTemplateColumns="1fr"
          justifyItems="center"  // Centering horizontally
          alignItems="center"    // Centering vertically
        >
          <Link href="mailto:ruz039@ucsd.edu">
            <Button width="auto">  {/* Width set to auto for centering */}
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
