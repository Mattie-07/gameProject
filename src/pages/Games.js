import React, {Component} from 'react'
import Card from '../components/GameSection'
import {data} from '../assets/data'
import {GamesContainer, GamesWrapper} from '../components/GameSection/GameSectionStyle'


const Games = () =>{
    return(
        <>
        <GamesContainer>
            <GamesWrapper>
                {data.map(game =>{
                    return <Card key={game.id} game={game} name={game.name}/> 
                })}
            </GamesWrapper>
        </GamesContainer>
        
        
        </>
    )
    
    
}


// class Games extends Component  {
//     render(){
//     return (
//         <>
//         {data.map(game =>{
//         return <Card key={game.id} game={game} />

//     })}
//         </>
//     )
// }
// }




export default Games
