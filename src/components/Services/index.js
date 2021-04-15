import React from 'react'
import Icon1 from '../../assets/game6.svg'
import Icon2 from '../../assets/game7.svg'
import Icon3 from '../../assets/game8.svg'
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServiceStyle.js"

const Services = () => {
    return (
        <>
        <ServicesContainer id='services'>
            <ServicesH1>What we Provide</ServicesH1>
            <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Saving Time</ServicesH2>
                <ServicesP>We help make sure that you have the most fun</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Having fun</ServicesH2>
                <ServicesP>You have have more fun with your family</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Benefits</ServicesH2>
                <ServicesP>Sign up to recieve beneifts such as a newsletter to save on your next purchase</ServicesP>
            </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        </>
    )
}

export default Services
