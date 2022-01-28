import React from 'react';
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import './github-calendar.css'

function Github() {
    // const colourTheme = {
    //     background: "transparent",
    //     text: "#fff000",
    //     grade4: "#5400f5",
    //     grade3: "#764563",
    //     grade2: "#8d60e0",
    //     grade1: "#ab90de",
    //     grade0: "#e0d5f5",
    //   };
      return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            Days I <strong className="purple">Code</strong>
          </h1>
          <GitHubCalendar
            username="filtitov2001"
            blockSize={15}
            blockMargin={5}
            // theme={colourTheme}
            fontSize={16}
          />
        </Row>
      );
}

export default Github;
