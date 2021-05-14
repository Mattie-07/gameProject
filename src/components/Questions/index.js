import React, {useState} from 'react'
import {Button} from '../layout/ButtonStyle'
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
import {ArrowForward, ArrowRight} from '../HeroSection/HeroStyle'
import Video from '../../assets/game.mp4'
import CoopToggle from '../Toggles/CoopToggle'
import DropinToggle from '../Toggles/DropinToggle'




const QuestionHero = ({
    darkBg,
    id, 
    topPurp, 
    videoStart,
    primaryQuestion,
    label
    }) => {
    
    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover)
    }

    const [coop, setCoop] = useState(false);
    const coopFunction = () =>{
        console.log("test")
        setCoop(!coop)
    }

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
                        <CoopToggle/>
                    </ButtonWrap>
                    <ButtonWrap>
                        <Button to='#' onMouseEnter={onHover} onMouseLeave={onHover}>
                            {label} {hover ? <ArrowForward/> : <ArrowRight/>} </Button>
                    </ButtonWrap>
                </Column2>
                </QuestionRow>
            </QuestionWrapper>
        </QuestionContainer>
        </>
    )
}

export default QuestionHero
