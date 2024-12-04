import { View } from 'react-native'
import AnswerOption from './AnswerOption'
import { Question } from '../types'
import { useState } from 'react'
import Card from './Card'

type Props = {
  question: Question
}

export default function QuestionCard({question}: Props) {
  
  const [selectedOption, setSelectedOption] = useState(question.options[0])

  return (
    <Card title={question.title}>
      <View style={{gap: 8}}>
        {question.options.map((item, index) => (
          <AnswerOption option={item} key={index} isSelected={selectedOption === item} onPress={setSelectedOption}  />
        ))}
      </View>
    </Card>
  )
}

