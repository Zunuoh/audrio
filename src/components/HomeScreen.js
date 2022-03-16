import React from 'react'
import { Row, Col } from 'react-bootstrap'
import MainScreen from './MainScreen'
import SidePanel from './SidePanel'

const HomeScreen = () => {
  return (
    <div>
    <Row>
        <Col sm={2}>
            <SidePanel/>
        </Col>
        <Col sm={10}>
            <MainScreen/>
        </Col>
    </Row>
    </div>
  )
}

export default HomeScreen