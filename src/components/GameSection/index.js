import React from 'react'
import { GameCard, GamesIcon, GameH1, GameH2, GamesPara} from '../GameSection/GameSectionStyle'
import {Button} from '../layout/ButtonStyle'
import Icon from '../../assets/awayout.jpg'
import {data} from '../../assets/data.js'

const Games = (data) => {
    return (
        <>
                <GameCard>
                    <GamesIcon src={data.img}/>
                    <GameH1>{data.name}</GameH1>
                    <GamesPara>{data.description}</GamesPara>
                    <Button>Check Buying Options</Button>
                </GameCard>
                
        
        </>
    )
}

export default Games
