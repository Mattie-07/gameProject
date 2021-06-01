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
import Video from '../../assets/game2.mp4'
import OfflineCoopToggle from '../Toggles/OfflineCoopToggle'




const QuestionHero = ({
    id,
    darkBg,
    topPurp, 
    videoStart,
    primaryQuestion,
    label,
    lightText,
    }) => {
    
    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover)
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
                        <Heading lightText={lightText}>{primaryQuestion}</Heading>
                    </TextWrapper>
                    <ButtonWrap>
                        <OfflineCoopToggle/>
                    </ButtonWrap>
                    <ButtonWrap>
                        <Button 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='http://localhost:3000/questionTwo'
                        }}
                        >
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
