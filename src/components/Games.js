import React, {Component} from 'react'
import Card from '../components/layout/Card'
import {data} from '../assets/data'


class Games extends Component  {
    render(){
    return (
        <>
        {data.map(game =>{
        return <Card key={game.id} game={game} />

    })}
        </>
    )
}
}
export default Games
