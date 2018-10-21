import React from 'react';
import styled from 'styled-components';

import {Link} from 'gatsby';
import {colors} from '../styles/variables';

const Title = styled.h1`
  font-size: 3.5em;
  font-weight: 500;
  margin: 0.5em 0.2em 0.375em;
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
        WebLaunchChecklist
      </Link>
    </Title>
    <div
      style={{
        marginBottom: '5px',
        textAlign: 'center',
      }}
    />
  </header>
);

export default Header;
