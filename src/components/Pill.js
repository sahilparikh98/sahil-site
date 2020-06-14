import React from 'react'
import { Badge } from 'react-bootstrap'

export default function Pill(props) {
  return (
      <Badge className={props.children} variant="dark">{props.children}</Badge>
  );
}
