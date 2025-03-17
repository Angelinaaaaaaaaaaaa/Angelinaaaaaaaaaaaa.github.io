import { useRouter } from 'next/router';
import React from 'react';
import Grid from './Grid';
import Container from './Container';
import styled from 'styled-components';
import Menu from '@icons/Menu';
import Close from '@icons/Close';

const NavLink = styled.a<{ active?: boolean }>`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  border-bottom: none;
  margin: 0;
  padding: 8px 16px;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.active ? 'white' : 'transparent')};
  border-radius: 25px;
  box-shadow: ${(props) => (props.active ? '0 2px 4px rgba(0,0,0,0.05)' : 'none')};

  &:hover {
    opacity: ${(props) => (props.active ? 1 : 0.5)};
  }
`;

const MenuContainer = styled(Container)`
  cursor: pointer;
`;

export interface NavProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Links = ({ activePath }: { activePath: string }): JSX.Element => (
  <>
    <NavLink href="/" active={activePath === '/'}>Home</NavLink>
    <NavLink href="/about" active={activePath.startsWith('/about')}>About</NavLink>
    <NavLink href="/projects" active={activePath.startsWith('/projects')}>Projects</NavLink>
    <NavLink href="/publications" active={activePath.startsWith('/publications')}>Publications</NavLink>
  </>
);

const Nav = ({ isOpen, onOpen, onClose }: NavProps): JSX.Element => {
  const router = useRouter();
  const activePath = router.asPath;

  return (
    <Grid
      as="nav"
      px={['2rem', '2rem', '2rem', '0']}
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
      alignContent="center"
      justifyContent={['center', 'center', 'space-between']}
      margin="3rem 0"
    >
      <Container display={['none', 'none', 'flex']}>
        <NavLink href="/">Runjie Zhang</NavLink>
      </Container>
      <MenuContainer display={['flex', 'none', 'none']}>
        {isOpen ? (
          <Close
            size="2rem"
            style={{ margin: '-0.3rem' }}
            onClick={(evt) => evt.type === 'click' && onClose()}
          />
        ) : (
          <Menu
            size="1.6rem"
            onClick={(evt) => evt.type === 'click' && onOpen()}
          />
        )}
      </MenuContainer>
      {isOpen && (
        <Grid gridTemplateColumns="1fr" style={{ fontSize: '2rem' }} py="3rem">
          <Links activePath={activePath} />
        </Grid>
      )}
      <Container alignContent="center" display={['none', 'flex', 'flex']}>
        <Grid
          width="fit-content"
          gridGap="0.5rem"
          alignItems="center"
          justifyItems="center"
          gridTemplateColumns="repeat(4, auto)"
          style={{
            borderRadius: '25px',
            background: 'rgba(0, 0, 0, 0.04)',
            padding: '6px 10px',
            position: 'relative',
          }}
        >
          <Links activePath={activePath} />
        </Grid>
      </Container>
      <Container alignContent="flex-end" display={['none', 'none', 'flex']}>
        <NavLink href="mailto:ruz039@ucsd.edu">Contact</NavLink>
      </Container>
    </Grid>
  );
};

export default Nav;
