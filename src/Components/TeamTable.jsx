import React from 'react'

class TeamTable extends React.Component{
    
    goalDivercity = () => {
        let DG = this.props.team.DG
        let PG = this.props.team.PG
        let GR = DG-PG
        return GR
    }

    totalPts = () => {
        let W = this.props.team.W
        let D = this.props.team.D
        let Pts = W*3+D
        return Pts
    }

    matchesPlayed = () => {
        let W = this.props.W
        let D = this.props.team.D
        let L = this.props.team.L
        let MP = W+D+L
        return MP
    }

    render(){
        return(
            <tr>
                <td>{this.props.index + 1}</td>
                <td onClick={() => {console.log(this.props)}}>{this.props.team}</td>
                {/* <td>{this.matchesPlayed()}</td>
                <td>{this.props.team.W}</td>
                <td>{this.props.team.D}</td>
                <td>{this.props.team.L}</td>
                <td>{this.props.team.DG}</td>
                <td>{this.props.team.PG}</td>
                <td>{this.goalDivercity()}</td>
                <td>{this.totalPts()}</td> */}
            </tr>
        )
    }
}

export default TeamTable;