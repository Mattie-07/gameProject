import React from 'react'
import CoopToggle from '../components/Toggles/CoopToggle'
import DropinToggle from '../components/Toggles/DropinToggle'
import OfflineCoopToggle from '../components/Toggles/OfflineCoopToggle'
import OnlineCoopToggle from '../components/Toggles/OnlineCoopToggle'
import OfflineCounter from '../components/Toggles/OfflineCounter'
import OnlineCoopCounter from '../components/Toggles/OnlineCoopCounter'
import OfflineNotCoopCounter from '../components/Toggles/OfflineNotCoopPlayerCount'
import OnlineNotCoopCounter from '../components/Toggles/OnlineNotCoopCounter'
import {Container, Row, Col} from 'react-bootstrap'
// import Button from './Button'
import JumpHigher from '../components/Toggles/FlyButton'

const Explore = () => {
    return (
        <>
        <Container fluid>
            <Row><Col md={{offset:1}} className="textChange2">Click each toggle below that you all would be interested in </Col></Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row>
                <Col md={{offset:6}}><CoopToggle /></Col>
            </Row>
            <Row>
                <Col md={{offset:6}}><DropinToggle /></Col>
            </Row>
            <Row>
                <Col md={{offset:6}}><OfflineCoopToggle /></Col>
            </Row>
            <Row>
                <Col md={{offset:6}}><OnlineCoopToggle /></Col>
            </Row>
            <OfflineCounter />
            <OnlineCoopCounter />
            <OfflineNotCoopCounter/>
            <OnlineNotCoopCounter />
            <Row>
                <Col md={{offset:5}} style={{marginTop:"10px", color:"#2B9348"}}><p>Whenever you're ready click below to make your next Jump</p></Col>
            </Row>
            <Row>
                    <Col md={{offset:6}} style={{marginTop:"10px", fontSize:"30px"}}><JumpHigher /></Col>
            </Row>
        </Container>

        </>
    )
}

export default Explore
