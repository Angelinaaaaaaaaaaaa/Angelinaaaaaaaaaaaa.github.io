import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdMail } from 'react-icons/md';

import { Container } from '@components';
import styles from '@styles/Home.module.css';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  min-height: 80vh;
  padding: 2rem 0 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    min-height: auto;
    padding: 2rem 0;
    text-align: center;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 520px;
  animation: ${fadeUp} 0.7s ease both;
`;

const HeroName = styled.h1`
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.02em;
`;

const HeroTagline = styled.p`
  font-size: 1.15rem;
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.65;
  margin: 0;
`;

const Highlight = styled.span`
  background: linear-gradient(120deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Badge = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
  letter-spacing: 0.02em;
`;

const CTARow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CTAButton = styled.a<{ primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 11px 22px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;

  ${({ primary }) =>
    primary
      ? `
    background: #0e0e0e;
    color: white;
    border-bottom: none;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.18);
      background: #222;
    }
  `
      : `
    background: rgba(0,0,0,0.05);
    color: #0e0e0e;
    border-bottom: none;
    &:hover {
      transform: translateY(-2px);
      background: rgba(0,0,0,0.09);
    }
  `}
`;

const PhotoWrapper = styled.div`
  flex-shrink: 0;
  animation: ${fadeUp} 0.7s 0.15s ease both;
  opacity: 0;
  animation-fill-mode: forwards;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  margin: 0;
`;


const NewsSection = styled.section`
  padding: 2rem 0;
`;

const NewsSectionLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(0, 0, 0, 0.3);
  margin: 0 0 0.75rem;
`;

const NewsCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1.1rem;
  background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 12px;
  max-width: 580px;
`;

const NewsBadge = styled.span`
  flex-shrink: 0;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 8px;
  border-radius: 999px;
  background: #6366f1;
  color: #fff;
  white-space: nowrap;
`;

const NewsText = styled.p`
  font-size: 0.88rem;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
  margin: 0;
`;

const VisitorMapSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 0 0;
  gap: 0.75rem;
  margin-bottom: 5rem;
`;

const MapLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(0, 0, 0, 0.3);
  margin: 0;
`;

const MapWidget = styled.div`
  width: 440px;
  max-width: 100%;
  overflow: hidden;
  border-radius: 10px;
  line-height: 0;

  & > * {
    display: block !important;
    max-width: 100% !important;
  }
`;


const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 0 2rem;
  gap: 1.5rem;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.02em;
`;

const ContactSubtitle = styled.p`
  font-size: 1.05rem;
  color: rgba(0, 0, 0, 0.6);
  max-width: 460px;
  line-height: 1.6;
  margin: 0;
`;


const Home = (): JSX.Element => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mapRef.current;
    if (!container || container.childElementCount > 0) return;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//clustrmaps.com/map_v2.js?d=izwGsFn4FSSA31w3pRZFwbJPOdlHjaNPILZsaEGV0fk&cl=ffffff&w=440';
    container.appendChild(script);
    return () => {
      if (container.contains(script)) container.removeChild(script);
    };
  }, []);

  return (
  <Container>
    <Head>
      <title>Runjie Zhang — Software Engineer & ML Researcher</title>
      <meta
        name="description"
        content="Runjie (Angelina) Zhang — incoming Uber SWE, UC Berkeley MEng EECS student. I build data-driven systems at the intersection of backend engineering and trustworthy ML."
      />
    </Head>

    <HeroSection>
      <HeroText>
        <HeroName>
          Hi, I&apos;m Angelina 👋
        </HeroName>

        <BadgeRow>
          <Badge>Uber · Incoming SWE</Badge>
          <Badge>UC Berkeley MEng EECS &rsquo;26</Badge>
          <Badge>UC San Diego &rsquo;25</Badge>
        </BadgeRow>

        <HeroTagline>
          I build <Highlight>data-driven systems</Highlight> at the intersection
          of backend engineering, machine learning, and trustworthy AI. I care
          about making models fairer, pipelines faster, and software that
          actually ships.
        </HeroTagline>

        <CTARow>
          <CTAButton
            primary
            href="mailto:angelina_zhang@berkeley.edu"
          >
            <motion.span
              style={{ display: 'inline-block' }}
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2.5 }}
            >
              👋
            </motion.span>
            Say hello
          </CTAButton>
          <CTAButton href="https://github.com/Angelinaaaaaaaaaaaa" target="_blank" rel="noopener noreferrer">
            <SiGithub size={16} />
            GitHub
          </CTAButton>
          <CTAButton href="https://www.linkedin.com/in/angelina-zhang-28a95827a/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin size={16} />
            LinkedIn
          </CTAButton>
          <CTAButton href="/about">
            About me
          </CTAButton>
        </CTARow>
      </HeroText>

      <PhotoWrapper>
        <Image
          src="/me.webp"
          alt="Runjie (Angelina) Zhang"
          width={220}
          height={293}
          style={{ objectFit: 'cover' }}
          className={styles.image}
          priority
        />
      </PhotoWrapper>
    </HeroSection>

    <Divider />

    <NewsSection>
      <NewsSectionLabel>News</NewsSectionLabel>
      <NewsCard>
        <NewsBadge>May 2026</NewsBadge>
        <NewsText>
          Graduating from UC Berkeley MEng EECS this May and joining{' '}
          <strong>Uber</strong> as a Software Engineer this July!
        </NewsText>
      </NewsCard>
    </NewsSection>

    <Divider />

    <ContactSection>
      <ContactTitle>Get in touch</ContactTitle>
      <ContactSubtitle>
        I&apos;m always happy to connect — whether it&apos;s about research,
        engineering, or just a good conversation.
      </ContactSubtitle>
      <CTARow style={{ justifyContent: 'center' }}>
        <CTAButton primary href="mailto:angelina_zhang@berkeley.edu">
          <MdMail size={17} />
          angelina_zhang@berkeley.edu
        </CTAButton>
        <CTAButton href="https://www.linkedin.com/in/angelina-zhang-28a95827a/" target="_blank" rel="noopener noreferrer">
          <SiLinkedin size={16} />
          LinkedIn
        </CTAButton>
        <CTAButton href="https://github.com/Angelinaaaaaaaaaaaa" target="_blank" rel="noopener noreferrer">
          <SiGithub size={16} />
          GitHub
        </CTAButton>
      </CTARow>
    </ContactSection>

    <VisitorMapSection>
      <MapLabel>Visitors around the world</MapLabel>
      <MapWidget ref={mapRef} />
      <a
        href="https://clustrmaps.com/site/1ca3v"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '0.72rem', color: 'rgba(0,0,0,0.35)', textDecoration: 'none', borderBottom: 'none' }}
      >
        View full stats ↗
      </a>
    </VisitorMapSection>
  </Container>
  );
};

export default Home;
