/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */

import Pagination from 'src/components/Initiation/Pagination';

import LeftPanel from 'src/components/Initiation/LeftPanel';
import RightPanel from 'src/components/Initiation/RightPanel';
import Validate from './Validate';
import Surrender from './Surrender';

import {
  Border,
  Buttons,
  CodeEditor,
  Content,
  Parcours,
  PathTo,
  Wrapper,
} from './style';

/*
 * Component
 */
export default class Exercise extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object.isRequired,
        html: PropTypes.string.isRequired,
      }),
    }).isRequired,
  };

  /*
   * State
   */
  state = {
    page: 1,
  };

  /*
   * Handlers
   */

  /*
   * Actions
   */
  showExpected = () => {
    const { expected } = this.props.data.markdownRemark.frontmatter;

    this.setState({
      hasGiveUp: true,
      value: expected,
    });
  };

  /*
   * Render
   */

  onSubmit = () => {
    /*
     * @IDEA : Cette partie ainsi que le `expected` dans les `.md`
     * seront (peut-être) à retravailler par la suite.
     *
     * À voir comment ça se goupille avec l'arrivé d'autres tests d'Initiation
     * Mais peut-être passer une regex dans le `expected', plutôt que d'attendre
     * une string qui reste un choix très "fermé", et très peu évolutif 🤔
     * (de mon point vue en tout cas)
     */

    // Props
    const { data } = this.props;
    const { value } = this.state;
    const { expected } = data.markdownRemark.frontmatter;

    // Values
    // @TODO : Gérer le cas où la value est vide
    const valueUpdate = value.toLowerCase().replace(/\s*/g, '');
    const expectedUpdate = expected.toLowerCase().replace(/\s*/g, '');

    // It's a success ?
    const isSuccess = valueUpdate === expectedUpdate;

    this.setState({ isSuccess });
  };

  onChange = evt => {
    this.setState({ value: evt.target.value });
  };

  render() {
    // Props
    const { frontmatter, html } = this.props.data.markdownRemark;
    const {
      id,
      code,
      expected,
      language,
      nextPath,
      value,
      image,
    } = frontmatter;
    const isHTML = language === 'HTML';
    return (
      <Wrapper>
        <Parcours>Parcours d’initiation {language}</Parcours>
        {/* @TODO : Voir s'il est éventuellement possible de factoriser
        le header de Practice / Lesson / Quiz pour n'en avoir qu'un seul */}
        <Pagination id={id} language={language} />

        <Content dangerouslySetInnerHTML={{ __html: html }} />

        {/* Panel Left */}
        <Border />
        <CodeEditor>
          <LeftPanel
            id={id}
            code={code}
            context="exercise"
            expected={expected}
            handleChange={this.onChange}
            language={language}
            large
            {...this.state}
          />

          {/* Panel Right */}
          <RightPanel
            context="exercise"
            language={language}
            code={isHTML ? code : null}
            image={image}
            value={isHTML ? this.state.value : value}
            style={isHTML ? '' : this.state.value}
          />
        </CodeEditor>

        {/* CTA - Validate • Surrender */}
        <Buttons>
          <Validate
            isSuccess={this.state.isSuccess}
            onSubmit={this.onSubmit}
            nextPath={nextPath}
          />
          <Surrender showExpected={this.showExpected} />
        </Buttons>

        {/* Next Paths */}
        {nextPath && (
          <PathTo to={nextPath}>
            {nextPath.includes('quiz') ? 'Quiz final' : 'Leçon suivante'}
          </PathTo>
        )}
      </Wrapper>
    );
  }
}
