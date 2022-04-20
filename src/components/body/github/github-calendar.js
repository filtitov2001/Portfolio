import React from 'react';
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
    const element = document.querySelector(':root'),
        style = window.getComputedStyle(element),
        color = style.getPropertyValue('--github-color');
    const legend = window.screen.width < 625

      return (
              <Row className='row-style container'>
                  <GitHubCalendar
                      username="filtitov2001"
                      blockSize={20}
                      blockMargin={8}
                      blockRadius={2}
                      color={color}
                      fontSize={12}
                      hideColorLegend={legend}
                  />
              </Row>

      );
}

export default Github;
