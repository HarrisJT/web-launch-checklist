import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import 'typeface-rubik';
import Layout from '../components/Layout';

// TODO: change max-width to breakpoint system, use react.coms?
const FormContainer = styled.form`
  max-width: 1260px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: '. . .' '. . .';
  grid-gap: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const PostContainer = styled.div`
  padding: 0 1.75rem;
  user-select: none;
  display: inline-block;
  position: relative;
  width: 100%;
  //min-height: 1px;
`;

const Checkbox = styled.input`
  position: absolute;
  top: 4px;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 4px;
  opacity: 0;
  margin: 0;
  z-index: 1;
  cursor: pointer;

  & ~ .post__checkbox-indicator:after {
    width: 6px;
    height: 11px;
    top: 0;
    left: 50%;
    transform: translate(-50%, 2px) rotate(45deg);
    border: solid #fff;
    border-width: 0 2px 2px 0;
  }

  &:disabled ~ .post__checkbox-indicator:after {
    border-color: darkgray;
  }

  &:not(:disabled) {
    &:checked {
      & + span {
        transition: all 175ms ease;
        text-decoration: line-through;
        opacity: 0.5;

        & + .post__checkbox-indicator {
          background: blue;

          &:after {
            display: block;
          }
        }
      }

      &:focus,
      &:hover {
        & ~ .post__checkbox-indicator {
          background: darkblue;
        }
      }
    }

    &:focus,
    &:hover {
      & ~ .post__checkbox-indicator {
        border: 1px solid theme-color('primary');
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px blue;
      }
    }
  }

  &:disabled ~ .post__checkbox-indicator {
    background: lightgray;
    opacity: 0.65;
    cursor: not-allowed !important;
  }
`;

const CheckboxTitle = styled.span`
  width: 100%;
  display: inline-block;
`;

const CheckboxIndicator = styled.div`
  z-index: 0;
  position: absolute;
  margin-top: 0.125rem;
  margin-bottom: 0.375rem;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid gray;
  border-radius: 4px;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

const PostInfo = styled.div`
  overflow: hidden;
  max-height: 0;

  &.post__info-container--open {
    max-height: min-content;
  }
`;

// TODO: change "memo" name
const groupByCategory = arr =>
  arr.reduce((memo, edge) => {
    const node = edge.node.frontmatter;
    if (!memo[node['category']]) {
      memo[node['category']] = [];
    }
    memo[node['category']].push(edge);
    return memo;
  }, {});

class Home extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.object.isRequired,
          }),
        ),
      }),
    }).isRequired,
  };

  state = {
    postsStatus: {},
  };

  constructor(props) {
    super(props);

    this.categorizedPosts = groupByCategory(props.data.allMarkdownRemark.edges);

    // Set up the data structure holding each posts open and checked status
    for (let key in this.categorizedPosts) {
      const {postsStatus} = this.state;
      const postsInCategory = {};
      this.categorizedPosts[key].forEach(post => {
        postsInCategory[post.node.id] = {
          checked: false,
          opened: false,
        };
      });
      postsStatus[key] = postsInCategory;
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  handleChecklistChange = (e, category, id) => {
    const {postsStatus} = this.state;
    const element = e.target;

    // check if the checkbox is being checked or unchecked
    postsStatus[category][id].checked = !!element.checked;

    // Update React state
    this.setState({
      postsStatus,
    });

    // Update local storage
    localStorage.setItem('postsStatus', JSON.stringify(postsStatus));
  };

  handleChecklistReset = () => {
    const {postsStatus} = this.state;

    // Loop through each object and set to false
    Object.keys(postsStatus).forEach(category => {
      Object.keys(postsStatus[category]).forEach(postId => {
        postsStatus[category][postId].checked = false;
        postsStatus[category][postId].opened = false;
      });
    });

    // Update React state
    this.setState({
      postsStatus,
    });

    // Update local storage
    localStorage.removeItem('postsStatus');
  };

  // TODO: can this be done better?
  handleExpand = (category, id) => {
    const {postsStatus} = this.state;

    postsStatus[category][id].opened = !postsStatus[category][id].opened;
    console.log(postsStatus[category][id].opened);

    // Update React state
    this.setState({
      postsStatus,
    });

    // Update local storage
    localStorage.setItem('postsStatus', JSON.stringify(postsStatus));
  };

  hydrateStateWithLocalStorage() {
    const key = 'postsStatus';

    if (localStorage.hasOwnProperty(key)) {
      // get the key's value from localStorage
      let value = localStorage.getItem(key);

      // parse the localStorage string and setState
      try {
        value = JSON.parse(value);
        this.setState({[key]: value});
      } catch (e) {
        // handle empty string
      }
    }
  }

  render() {
    const {postsStatus} = this.state;

    return (
      <Layout>
        <input
          onClick={this.handleChecklistReset}
          type="reset"
          value="Reset"
          title="Reset Checkboxes"
        />
        <FormContainer>
          {Object.keys(this.categorizedPosts).map(category => (
            <fieldset key={category}>
              <legend>
                <h2>{category}</h2>
              </legend>
              {this.categorizedPosts[category].map(post => {
                const {id, frontmatter, html} = post.node;
                return (
                  <PostContainer key={id}>
                    <Checkbox
                      type="checkbox"
                      value={frontmatter.title}
                      checked={postsStatus[category][id].checked}
                      onChange={e => this.handleChecklistChange(e, category, id)}
                    />
                    <CheckboxTitle onClick={() => this.handleExpand(category, id)}>
                      {frontmatter.title}
                    </CheckboxTitle>
                    <CheckboxIndicator className="post__checkbox-indicator" />
                    <PostInfo
                      className={
                        postsStatus[category][id].opened
                          ? `post__info-container--open`
                          : `post__info-container`
                      }
                      dangerouslySetInnerHTML={{__html: html}}
                    />
                  </PostContainer>
                );
              })}
            </fieldset>
          ))}
        </FormContainer>
      </Layout>
    );
  }
}

export default Home;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            category
          }
        }
      }
    }
  }
`;
