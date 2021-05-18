import React from 'react'
import QuestionHero from '../components/Questions/QuestionTwo'
import { QuestionObject2 } from '../components/Questions/Data'

const QuestionPageTwo = () => {
  return (
    <>
      <QuestionHero {...QuestionObject2}/>
    </>
  )
}

export default QuestionPageTwo
