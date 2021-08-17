import React from "react";

export default class AboutMe extends React.Component {
  state = {};

  render() {
    return (
      <div id="aboutMe">
        <h1 className={this.props.LandingColour}>about me</h1>
        <div id="aboutmepic-mobile-div">
          <img src="./AboutMeImages/15_square.jpg" id="aboutmepic-mobile"/>
        </div>
        <table>
          <tr>
            <td id="piccell">
              <img src="./AboutMeImages/15_square.jpg" id="aboutmepic"/>
            </td>
            <td>
            <span className={this.props.BackgroundColour + " aboutMeCategory"}>
              Name:
            </span>
            <span className="aboutMeAns">Grace Kang <span role="img" aria-label="emoji">🤠</span></span>
            <br />
            <br />
            <span className={this.props.BackgroundColour + " aboutMeCategory"}>
              Program:
            </span>
            <span className="aboutMeAns">
              3A Computer Science, University of Waterloo <span role="img" aria-label="emoji">🦆</span>
            </span>
            <br />
            <br />
            <span className={this.props.BackgroundColour + " aboutMeCategory"}>
              Location:
            </span>
            <span className="aboutMeAns">Toronto, Canada <span role="img" aria-label="emoji">🍁</span></span>
            </td>
          </tr>
        </table>
        <div id="aboutMeDesc">
          <p>
            I'm
            <b className={this.props.LandingColour}> Grace </b>
            , and I'm currently a third year{" "}
            Computer Science student
            at the{" "}
            University of Waterloo. Welcome to my website <span role="img" aria-label="emoji">😺</span>!
            <br />
            <br/>
            I have interned at <span className={this.props.LandingColour}>Instagram</span>, <span className={this.props.LandingColour}>Wish</span> and 
            <span className={this.props.LandingColour}> Scotiabank</span> in the past, 
            and will be heading back to Waterloo for a school term in Fall 2021.
            I am still exploring different fields of computer science, but in general, I am interested in opportunities that are both educationally challenging and exciting!
            <br/>
            <b>
              I am currently looking for an internship opportunity for{" "}
              <b>
                <span className={this.props.LandingColour}> Winter 2022</span>
              </b>
              , so I would love to chat :)
            </b>
            <br />
            <br/>
            Speaking in terms of my technical interests, I am mostly
            interested in backend development, though I have experience on the full-stack. Other than math and computer science, 
            I love to take electives in subjects like English and psychology. One of my favorite courses that I've 
            taken in university is an English course on modernist literature! 
            <br />
          </p>
        </div>
      </div>
    );
  }
}
