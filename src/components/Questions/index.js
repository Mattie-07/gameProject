import React from 'react'
import {QuestionContainer, 
    QuestionWrapper, 
    VideoSide, 
    QuestionRow, 
    Column1,
    VideoWrap,
    Column2,
    TextWrapper,
    QuestionText,
    Heading,
    ButtonWrap} from './QuestionStyle'
import Video from '../../assets/game.mp4'

const QuestionHero = ({darkBg,
    id, 
    topPurp, 
    videoStart,
    primaryQuestion

    }) => {
    return (
        <>
        <QuestionContainer darkBg={darkBg, id={id}} >
            <QuestionWrapper>
                <QuestionRow videoStart={videoStart}>
                    <Column1>
                    <VideoWrap>
                        <VideoSide autoPlay loop muted src={Video} type='video/mpg'></VideoSide>
                </VideoWrap>
                </Column1>
                <Column2>
                    <TextWrapper>
                        <QuestionText>{topPurp}</QuestionText>
                        <Heading>{primaryQuestion}</Heading>
                    </TextWrapper>
                    <ButtonWrap>
                        
                    </ButtonWrap>
                </Column2>
                </QuestionRow>
            </QuestionWrapper>
        </QuestionContainer>
        </>
    )
}

export default QuestionHero
