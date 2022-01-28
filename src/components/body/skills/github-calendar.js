import React from 'react';
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import './skills.css'

function Github() {
    
      return (
          
      <Row className='row-style'>
          
        {/* <h1 className="project-heading" style={{paddingBottom:"20px"}}>
          Days I <strong className="purple">Code</strong>
        </h1> */}
        <GitHubCalendar
         username="filtitov2001"
         blockSize={15} 
         blockMargin={5}
         color="#5600F5"
         fontSize={16}
        />
      </Row>
      );
}

export default Github;
