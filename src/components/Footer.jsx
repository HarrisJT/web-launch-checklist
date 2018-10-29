import React from 'react';
import styled from 'styled-components';

import {Link} from 'gatsby';
import {colors} from '../styles/variables';

const FooterContainer = styled.footer`
  margin-top: 1.25em;
  padding: 0.85em 1.85em;
  text-align: center;
  font-weight: 300;

  span {
    color: ${colors.border};
    font-weight: 500;
    padding: 0 0.175em;
  }
`;

const Footer = () => (
  <FooterContainer>
    Website created by <Link href="https://harrisjt.com">HarrisJT</Link> and{' '}
    <Link href="https://harrisjt.com">open source contributors</Link>
    {' '}<span>/</span>{' '}View the source code and suggest edits on{' '}
    <Link href="https://github.com/HarrisJT/web-launch-checklist">Github</Link>{' '}<span>/</span>{' '}
    Share on Facebook and Twitter
  </FooterContainer>
);
export default Footer;
