import React from 'react';
import styled from 'styled-components';

import {Link} from 'gatsby';
import {colors} from '../styles/variables';

const Title = styled.h1`
  font-size: 3.5em;
  font-weight: 500;
  margin: 0.45em 0.2em 0;
  text-align: center;
`;

const Header = () => (
  <header>
    <Title>
      <Link
        to="/"
        style={{
          color: `${colors.accent}`,
          textDecoration: 'none',
        }}>
        Web Launch Checklist
      </Link>
    </Title>
    <p
      style={{
        margin: '0.25em 0',
        textAlign: 'center',
      }}>
      By:{' '}
      <a
        href="https://harrisjt.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: `${colors.accentDark}`,
          textDecoration: 'none',
        }}>
        Harris Thompson
      </a>
      {' and '}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: `${colors.accentDark}`,
          textDecoration: 'none',
        }}>
        online contributors
      </a>
      .
    </p>
  </header>
);

export default Header;
