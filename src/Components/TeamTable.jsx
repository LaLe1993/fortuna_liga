import React from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap'
import Teams from '../data/teams.json'

class TeamTabel extends React.Component {
    state={
        teams:[Teams]
    }

render(){
    console.log(this.state.teams)
    return(
        <Form className='mx-3'>
            <Row>
                <Col className='col-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>DOMACIN</Form.Label>
                        <Form.Control as="select">
                            { Teams.map(opt => (<option>{opt.teamName}</option>)) }
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col className='col-3' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Col className='col-5'>5</Col>-<Col className='col-5'>6</Col>
                </Col>
                <Col className='col-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>GOST</Form.Label>
                        <Form.Control as="select">
                            { Teams.map(opt => (<option>{opt.teamName}</option>)) }
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
}

export default TeamTabel;