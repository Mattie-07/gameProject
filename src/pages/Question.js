import React from 'react'
import QuestionHero from '../components/Questions/'
import { QuestionObject } from '../components/Questions/Data'


const Question = () => {
    return (
        <>      
        <QuestionHero {...QuestionObject}/>
        </>
    )
}

export default Question
