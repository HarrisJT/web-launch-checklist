import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import {graphql, StaticQuery} from 'gatsby';

import Header from './Header';
import '../styles/global';

class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const {children} = this.props;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {name: `description`, content: `Sample`},
                {name: `keywords`, content: `sample, something`},
              ]}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>
              {children}
            </main>

          </React.Fragment>
        )}
      />
    );
  }
}

export default Layout;
