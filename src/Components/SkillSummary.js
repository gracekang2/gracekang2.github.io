import React from "react";
import Typing from "react-typing-animation";

export default class SkillSummary extends React.Component {
  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  languages = (
    <span>
      <span className="greenTxt">languages: </span>
      <span className="terminalWhite">
        ['python', 'JavaScript', 'C', 'C++', 'C#']
      </span>
    </span>
  );
  libraries = (
    <span>
      <span className="greenTxt">frameworks + libraries: </span>
      <span className="terminalWhite">
        ['reactJS', 'node.js', 'jQuery', 'ASP.NET']
      </span>
      <br />
    </span>
  );
  databases = (
    <span>
      <span className="greenTxt">databases: </span>
      <span className="terminalWhite">
        ['mongoDB', 'Microsoft SQL Management Server']
      </span>
    </span>
  );

  python = (
    <span>
      <span className="yellowTxt">python: </span>
      <span>
        used Python while interning at Wish, as a SWE intern on the Product
        Payments team. Worked on various backend tasks using Python, including
        work on Wish's customer support chatbot, writing scripts / crons, and
        integrating features of Stripe's payment API.
      </span>
    </span>
  );

  javascript = (
    <span>
      <span className="yellowTxt">JavaScript : </span>
      <span>
        experience using JavaScript for both frontend and backend tasks - used{" "}
        <span className="greenTxt">jQuery</span> during co-op as a full-stack
        developer at Scotiabank, and used{" "}
        <span className="greenTxt">React.js </span>
        while interning at Wish. I also used{" "}
        <span className="greenTxt">Express/Node.js</span> to build an API for a
        hackathon project called EcoStore.
      </span>
    </span>
  );

  cLanguages = (
    <span>
      <span className="yellowTxt">C and C++: </span>
      <span>
        learned both C and C++ in courses at university. Studied C and related
        topics in <span className="neonGreen">CS136 (93%)</span> and C++ in{" "}
        <span className="neonGreen">CS246 (95%)</span>. In CS246, the final
        project was a Tetris replica game called BiQuadris that was completed
        with 2 other group members, which received a grade of 98%.
      </span>
    </span>
  );

  cSharp = (
    <span>
      <span className="yellowTxt">C#: </span>
      <span>
        gained experience in C# while interning at ScotiaBank as a full-stack
        web developer, and used it to create various web forms and razor pages,
        alongside Microsoft's ASP.NET framework.
      </span>
    </span>
  );

  printLanguages = () => {
    this.setState((prev) => ({
      Command: null,
      Output: prev.Output ? (
        <span>
          {prev.Output}
          <br />
          {prev.CommandText}
        </span>
      ) : (
        <span>{prev.CommandText}</span>
      ),
    }));
    this.sleep(1000).then(() => {
      this.setState((prev) => ({
        Output: (
          <span>
            {prev.Output}
            <br />
            {this.python}
          </span>
        ),
        Typing: false,
      }));
      this.sleep(1000).then(() => {
        this.setState((prev) => ({
          Output: (
            <span>
              {prev.Output}
              <br />
              {this.javascript}
            </span>
          ),
        }));
        this.sleep(1000).then(() => {
          this.setState((prev) => ({
            Output: (
              <span>
                {prev.Output}
                <br />
                {this.cLanguages}
              </span>
            ),
          }));
          this.sleep(1000).then(() => {
            this.setState((prev) => ({
              Output: (
                <span>
                  {prev.Output}
                  <br />
                  {this.cSharp}
                  <br />
                  ---------------------------
                </span>
              ),
              Printing: false,
            }));
          });
        });
      });
    });
  };

  printSkillSummary = () => {
    this.setState((prev) => ({
      Command: null,
      Output: prev.Output ? (
        <span>
          {prev.Output}
          <br />
          {prev.CommandText}
        </span>
      ) : (
        <span>{prev.CommandText}</span>
      ),
    }));
    this.sleep(1000).then(() => {
      this.setState((prev) => ({
        Output: prev.Output ? (
          <span>
            {prev.Output}
            <br />
            {this.languages}
          </span>
        ) : (
          <span>{this.languages}</span>
        ),
        Typing: false,
      }));
      this.sleep(1000).then(() => {
        this.setState((prev) => ({
          Output: (
            <span>
              {prev.Output}
              <br />
              {this.libraries}
            </span>
          ),
        }));
        this.sleep(1000).then(() => {
          this.setState((prev) => ({
            Output: (
              <span>
                {prev.Output}
                {this.databases}
                <br />
                ----------------------------
              </span>
            ),
            Printing: false,
          }));
          this.onClickLanguages();
        });
      });
    });
  };

  state = {
    Printing: true,
    Typing: true,
    Command: (
      <Typing className="command" onFinishedTyping={this.printSkillSummary}>
        {" "}
        python skill_summary.py{" "}
      </Typing>
    ),
    Output: null,
    CommandText: "python skill_summary.py",
  };

  startTyping = () => {
    this.setState((prev) => ({
      Typing: true,
    }));
  };

  onClickSkillSummary = () => {
    this.setState((prev) => ({
      Command: (
        <Typing
          className="command"
          onStartedTyping={this.startTyping}
          onFinishedTyping={this.printSkillSummary}
        >
          {" "}
          python skill_summary.py{" "}
        </Typing>
      ),
      CommandText: "python skill_summary.py",
      Printing: true,
    }));
  };

  onClickLanguages = () => {
    this.setState((prev) => ({
      Command: (
        <Typing
          className="command"
          onStartedTyping={this.startTyping}
          onFinishedTyping={this.printLanguages}
        >
          {" "}
          python languages.py{" "}
        </Typing>
      ),
      CommandText: "python languages.py",
      Printing: true,
    }));
  };

  render() {
    return (
      <div>
        <h4>
          <span className={this.props.LandingColour}>
            Don't have a lot of time?
          </span>{" "}
          Click{" "}
          <a
            href="https://drive.google.com/file/d/1K4l_MydekAvCdULXKgtMx6hXh2yEM8F5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#551A8B" }}
          >
            here
          </a>{" "}
          to see my resume.
        </h4>
        <div id="terminal">
          <div id="terminalHeader">
            <div id="redBtn" className="terminalBtn"></div>
            <div id="yellowBtn" className="terminalBtn"></div>
            <div id="greenBtn" className="terminalBtn"></div>
          </div>
          <div id="terminalText">
            <div id="loginText">
              <span className="terminalWhite">
                Last login: Sat Feb 22 23:43:02 on console
              </span>
            </div>
            <div id="outputtedText" className="terminalWhite">
              {this.state.Output}
            </div>
            <div id="commandText">
              <span className="terminalWhite">
                <span className="neonGreen">gkang-mac: </span>
                <span className="neonPink">~desktop$ </span>
                {this.state.Command}
              </span>
              {!this.state.Typing ? (
                <span id="cursor">&nbsp;&nbsp;</span>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
