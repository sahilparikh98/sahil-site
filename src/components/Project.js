import React from 'react';
import Col from 'react-bootstrap/Col'

export default function Project(props){
  return (
    <Col sm={true} lg="4" className="col-padding">
      <div className="rectangle">{props.words}</div>
    </Col>
  );
}