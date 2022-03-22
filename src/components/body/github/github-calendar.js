import React from 'react';
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
    const element = document.querySelector(':root'),
        style = window.getComputedStyle(element),
        color = style.getPropertyValue('--github-color');

      return (
          <section className="container">
              <Row className='row-style'>

                  {/* <h1 className="project-heading" style={{paddingBottom:"20px"}}>
          Days I <strong className="purple">Code</strong>
        </h1> */}
                  <GitHubCalendar
                      username="filtitov2001"
                      blockSize={20}
                      blockMargin={8}
                      blockRadius={2}
                      color={color}
                  />
              </Row>
          </section>
      );
}

export default Github;
