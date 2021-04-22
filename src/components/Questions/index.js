import React from 'react'
import {QuestionContainer, HeroSide, VideoSide} from './QuestionStyle'
import Video from '../../assets/game.mp4'

const QuestionHero = () => {
    return (
        <>
        <QuestionContainer>
            <HeroSide>
                <VideoSide autoPlay loop muted src={Video} type='video/mpg'>

                </VideoSide>
            </HeroSide>
        </QuestionContainer>
        </>
    )
}

export default QuestionHero
