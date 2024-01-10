'use client';

import { useState } from 'react';

const Diagnosa = ({ kdGejala }: { kdGejala: String[][] }) => {
  const [gejala, setGejala] = useState<string[]>([]);

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: Boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='bg-[#df2a50] text-white w-[450px] min-h-[200px] h-min rounded-2xl p-5 shadow-lg flex justify-evenly'>
      {showScore ? (
        <div className='flex text-2xl items-center'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='w-full relative'>
            <div className='mb-5'>
              <span className='text-[28px]'>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='mb-3'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='w-full flex flex-col justify-between gap-y-1'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button className='w-full text-base hover:bg-[#adf0ff] hover:text-black rounded-2xl flex p-4 justify-start items-center border-4 border-[#adf0ff]' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} key={index}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Diagnosa;
