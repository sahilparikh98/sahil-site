import React from 'react'
import { Badge } from 'react-bootstrap'

export default class PillBox extends React.Component {

  generatePills = () => {
    return this.props.names.map((name) => {
      return <Badge className={name} variant="dark">{name}</Badge>
    })
  }

  render() {
    return this.generatePills();
  }
}
