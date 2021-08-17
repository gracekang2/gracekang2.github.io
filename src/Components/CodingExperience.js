import React from "react";

import Projects from './Projects'
import SkillSummary from "./SkillSummary";
import WorkExperience from "./WorkExperience";

export default class CodingExperience extends React.Component {
  render() {
    return (
      <div id="codingExperience">
        <h1 className={this.props.LandingColour}>coding</h1>
        <SkillSummary />
        <h2 className={this.props.LandingColour}>work experience</h2>
        <WorkExperience
          Color={this.props.LandingColour}
          BackgroundColor={this.props.BackgroundColor}
        />
        <h2 className={this.props.LandingColour}>projects</h2>
        <Projects/>
      </div>
    );
  }
}
