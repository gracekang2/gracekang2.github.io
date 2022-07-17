import React from "react";
import { HeaderLink } from "./HeaderLink";

export default class Header extends React.Component {
  pages = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "about me",
      href: "/about",
    },
  ];

  state = {};

  updateDimensions = () => {
    this.setState((prev) => ({
      Collapsed: window.screen.width <= 450,
      SmallScreen: window.screen.width <= 450,
    }));
  };

  OnMenuIconClick = () => {
    this.setState((prev) => ({
      Collapsed: false,
    }));
  };

  OnMenuCloseClick = () => {
    this.setState((prev) => ({
      Collapsed: true,
    }));
  };

  OnSmallLinkClick = (value) => {
    this.OnMenuCloseClick();
    this.props.OnLinkClick(value);
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div id="header">
        <svg
          id="menuIcon"
          style={{
            width: "24px",
            height: "24px",
            display: this.state.Collapsed ? "inline-block" : "none",
          }}
          viewBox="0 0 24 24"
          onClick={this.OnMenuIconClick}
        >
          <path
            fill="currentColor"
            d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
          />
        </svg>
        <div
          className="linkWrapper"
          style={{ display: !this.state.Collapsed ? "inline-block" : "none" }}
        >
          <svg
            style={{
              width: "24px",
              height: "24px",
              display:
                this.state.SmallScreen && !this.state.Collapsed
                  ? "inline-block"
                  : "none",
            }}
            viewBox="0 0 24 24"
            id="menuClose"
            onClick={this.OnMenuCloseClick}
          >
            <path
              fill="currentColor"
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
          <br />
          {this.pages.map((page) => {
            return (
              <HeaderLink
                key={[page.href]}
                Href={page.href}
                Colour={this.props.Colour}
                Name={page.name}
                OnLinkClick={
                  this.state.SmallScreen
                    ? this.OnSmallLinkClick
                    : this.props.OnLinkClick
                }
              />
            );
          })}
        </div>
      </div>
    );
  }
}
