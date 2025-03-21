import styled from 'styled-components';
import Container from './Container';
import Link from './Link';
import Text from './Text';
import React from 'react';
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from 'react-icons/si';
import { MdMail } from 'react-icons/md';

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  padding: 60px 20px 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
`;

// Create a specialized grid for footer navigation that won't be affected by other Grid modifications
const NavGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  & > a {
    margin: 0 1rem;
    @media (min-width: 768px) {
      margin: 0 2rem;
    }
    @media (min-width: 1024px) {
      margin: 0 3rem;
    }
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
  justify-content: center;
`;

const links = [
  {
    url: 'https://github.com/Angelinaaaaaaaaaaaa',
    icon: SiGithub,
  },
  {
    url: 'https://x.com/AngelinaZ_2023',
    icon: SiTwitter,
  },
  {
    url: 'mailto:ruz039@ucsd.edu',
    icon: MdMail,
  },
  {
    url: 'https://www.linkedin.com/in/angelina-zhang-28a95827a/',
    icon: SiLinkedin,
  },
  {
    url: 'https://www.instagram.com/runjiezhang.2022/',
    icon: SiInstagram,
  },
  {
    url: 'https://www.facebook.com/RunjieZhang.2022/',
    icon: SiFacebook,
  }
];

const Footer = (): JSX.Element => (
  <StyledFooter>
    <Container paddingY="25px">
      <NavGrid>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="mailto:ruz039@ucsd.edu">Contact</Link>
      </NavGrid>
    </Container>
    <FooterGrid>
      {links.map(({ url, icon: Icon }) => (
        <Link key={url} target="_blank" opacity={0.7} href={url}>
          <Icon size={22} />
        </Link>
      ))}
    </FooterGrid>
    <Text margin={0} fontSize="0.9rem" color="rgba(0, 0, 0, 0.7)">
      © Runjie Zhang 2022 → {new Date().getFullYear()}
    </Text>
  </StyledFooter>
);

export default Footer;
