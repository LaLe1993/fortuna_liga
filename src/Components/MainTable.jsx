import React from 'react'
import {Table, Container, Row, Col} from 'react-bootstrap'
import Teams from '../data/teams.json'

class MainTable extends React.Component {

    state={
        teams:[],
        sortedTeams: false
    }

    componentDidMount = () => {
        this.sortedTeams(Teams)
        this.setState({teams:Teams})
    }

    sortedTeams = (e) => {
        e.sort((a,b)=>{
            let APts = a.W*3+a.D
            let BPts = b.W*3+b.D
            let AGD = a.DG - a.PG
            let BGD = b.DG - b.PG

            if(BPts < APts) {
                return -1};
            if(BPts > APts){
                return 1};
            if(BGD < AGD) {
                return -1};
            if(BGD > AGD){
                return 1};
            if(a.teamName.toLowerCase() < b.teamName.toLowerCase()){
                return -1
            }
            if(a.teamName.toLowerCase() > b.teamName.toLowerCase()){
                return 1
            }
            return 0
        })
    }

    goalDivercity = (DG,PG) => {
        let GR = DG-PG
        return GR
    }

    totalPts = (W,D) => {
        let Pts = W*3+D
        return Pts
    }

    matchesPlayed = (W,D,L) => {
        let MP = W+D+L
        return MP
    }

    // componentDidMount=async()=>{
    //     let response= await fetch(`http://127.0.0.1:3003/teams`,{
    //         headers: new Headers({
    //             'content-type': 'application/json'
    //         })
    //     })
    //     let teams=await response.json()
    //     this.setState({teams})
    //  }

    render(){
        console.log(Teams)
        return(
            <Container>
                <Row>
                    <Col className='my-5 mx-1'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Team</th>
                                    <th>MP</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>GF</th>
                                    <th>GA</th>
                                    <th>GD</th>
                                    <th>Pts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {this.state.teams.map((team, index) => <TeamTable team={team.team} teamMembers={team.teamMembers} key={team.id} index={index}/>)} */}
                                {this.state.teams.map((team, index) => 
                                                                    <tr key={team.id}>
                                                                        <td>{index + 1}</td>
                                                                        <td>{team.teamName}</td>
                                                                        <td>{this.matchesPlayed(team.W,team.D,team.L)}</td>
                                                                        <td>{team.W}</td>
                                                                        <td>{team.D}</td>
                                                                        <td>{team.L}</td>
                                                                        <td>{team.DG}</td>
                                                                        <td>{team.PG}</td>
                                                                        <td>{this.goalDivercity(team.DG,team.PG)}</td>
                                                                        <td>{this.totalPts(team.W,team.D)}</td>
                                                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainTable;