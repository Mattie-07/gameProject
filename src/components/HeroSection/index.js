import React, {useState} from 'react'
import Video from '../../assets/gameVideo.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroStyle'
import {Button} from '../layout/ButtonStyle'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }


    return (
    <>
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mpg'/>
                </HeroBg>
                <HeroContent>Gaming Landing Page
                <HeroP>Sign up today and save time on your next game night</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover}
                    onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                </HeroContent>
        </HeroContainer>
    </>
    )
}

export default HeroSection
