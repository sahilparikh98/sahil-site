import React from 'react';

export default function WorkExperience(props){
  return (
    <div>
      <h5><b>{props.position} @ {props.company} ({props.year})</b></h5>
      <h6> - {props.team}</h6>
    </div>
  );
}