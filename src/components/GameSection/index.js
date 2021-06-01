import React from 'react'
import { GameCard, GamesIcon, GameH1, GameH2, GamesPara} from '../GameSection/GameSectionStyle'
import {Button} from '../layout/ButtonStyle'

const Games = () => {
    return (
        <>
                <GameCard>
                    <GamesIcon/>
                    <GameH1>Testing</GameH1>
                    <GamesPara>Information that the person might want to know about this component / game</GamesPara>
                    <Button>Check Buying Options</Button>
                </GameCard>
        
        </>
    )
}

export default Games
