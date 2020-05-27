import React from "react";
import "./Styles/App.css";
import "./Styles/Landing.css";
import "./Styles/AboutMe.css";
import "./Styles/Skills.css";
import "./Styles/Header.css";
import "./Styles/Coding.css";
import Landing from "./Components/Landing.js";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import SkillSummary from "./Components/SkillSummary";
import CodingExperience from "./Components/CodingExperience";

export default class App extends React.Component {
  OnLinkClick = (value) => {
    this.setState((prev) => ({
      Path: value,
    }));
    window.history.replaceState({}, null, value);
  };

  state = {
    HeadingColour: "headingColour1",
    BackgroundColour: "backgroundColour1",
    PictureURL: "Images/bitmoji_transparent_1.png",
    PageIndex: "1",
    Path: window.location.pathname,
  };

  render() {
    return (
      <div className="app">
        <Header
          ColourChange={this.ColourChange}
          BackgroundColour={this.state.BackgroundColour}
          Colour={this.state.HeadingColour}
          OnLinkClick={this.OnLinkClick}
        ></Header>
        <div className="content">
          {(function (path, headingColour, picURL, backgroundColour) {
            switch (path) {
              case "/home":
                return (
                  <Landing
                    LandingColour={headingColour}
                    PictureURL={picURL}
                  ></Landing>
                );
              case "/about":
                return (
                  <AboutMe
                    LandingColour={headingColour}
                    BackgroundColour={backgroundColour}
                  ></AboutMe>
                );
              case "/skills":
                return (
                  <SkillSummary LandingColour={headingColour}></SkillSummary>
                );
              case "/code":
                return (
                  <CodingExperience
                    LandingColour={headingColour}
                    BackgroundColor={backgroundColour}
                  ></CodingExperience>
                );
              default:
                return (
                  <Landing
                    LandingColour={headingColour}
                    PictureURL={picURL}
                  ></Landing>
                );
            }
          })(
            this.state.Path,
            this.state.HeadingColour,
            this.state.PictureURL,
            this.state.BackgroundColour
          )}
        </div>
      </div>
    );
  }
}
