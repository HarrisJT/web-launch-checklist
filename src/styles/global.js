import {createGlobalStyle} from 'styled-components';
import {breakpoints, colors, fonts} from './variables';

export default createGlobalStyle`
 :root {
    /* Base sizes */
    --baseSizeSmall: 100%; // 16px
    --baseSizeLarge: 112.5%; // 18px
    
    /* Type scale on smaller screens */
    --ratioSmall: 1.25;  // Major Third
    --stepZeroSmall: calc(1em / var(--ratioSmall));
    --stepOneSmall: calc(1em * var(--ratioSmall));
    --stepTwoSmall: calc(var(--stepOneSmall) * var(--ratioSmall));
    --stepThreeSmall: calc(var(--stepTwoSmall) * var(--ratioSmall));
    
    /* Type scale on larger screens */
    --ratioLarge: 1.414;  // Augmented Fourth
    --stepZeroLarge: calc(1em / var(--ratioLarge));
    --stepOneLarge: calc(1em * var(--ratioLarge));
    --setpTwoLarge: calc(var(--stepOneLarge) * var(--ratioLarge));
    --setpThreeLarge: calc(var(--setpTwoLarge) * var(--ratioLarge));
  }
  
  * {
    box-sizing: border-box;
    
    &:focus {
      outline-color: #d0a233;
    }
  }
  
  html {
    font-size: var(--baseSizeSmall);
    line-height: 1.5;
    
    @media ${breakpoints.desktop} {
      font-size: var(--baseSizeLarge);
    }
    
    ${fonts.body}
  }
  
  body {
    background-color: ${colors.background};
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3 {
     margin: var(--stepOneSmall) 0 0; 
     line-height: 1.1;
     ${fonts.heading}
  }
  
  h1 {
    font-size: var(--stepThreeSmall);
    margin: 0 0 0.5rem;
    
    @media ${breakpoints.desktop} {
      font-size: var(--setpThreeLarge);
    }
  }
  
  h2 {
    font-size: var(--stepTwoSmall);
    
    @media ${breakpoints.desktop} {
      font-size: var(--setpTwoLarge);
    }
  }
  
  h3 {
    font-size: var(--stepOneSmall);
    
    @media ${breakpoints.desktop} {
      font-size: var(--stepOneLarge);
    }
  }
  
  p {
    margin: var(--stepOneSmall) 0 0;
    line-height: 1.5;
  }
  
  a {
    text-decoration: none;
  }
  
  strong {
    font-weight: 600;
    color: ${colors.headingText};
  }
  
  small {
    font-size: var(--stepZeroSmall);
    
    @media ${breakpoints.desktop} {
      font-size: var(--stepZeroLarge);
    }
  }
  
  // Reset fieldset styles
  fieldset {
    border: none;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
`;
