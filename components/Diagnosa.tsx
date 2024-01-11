'use client';

import { PuzzlePieceIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { Gejala, Rule } from '@prisma/client';
import clsx from 'clsx';
import { useState } from 'react';

interface Props {
  rules: any;
}

const Diagnosa = ({ rules }: Props) => {
  const questions1 = [
    {
      questionText: '[B01] Tampilan tidak muncul pada monitor saat PC dinyalakan?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B02] Terdapat garis horizontal/vertical di tengah monitor?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B03] Tampak blok hitam atau gambar terlihat tidak simetris dilayar monitor?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B04] Tampilan monitor buram?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B05] Monitor seperti berkedip-kedip saat digunakan?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
  ];

  const questions2 = [
    {
      questionText: '[B06] Tombol keyboard tidak berfungsi sama sekali?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B07] Keyboard tidak terdeteksi?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B08] Tombol keyboard tertukar huruf?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
  ];

  const questions3 = [
    {
      questionText: '[B18] Komputer sering Hang?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B19] Loading data atau sistem lambat?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B20] Terdengar bunyi tidak normal pada harddisk?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B21] File tiba-tiba hilang?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B22] Muncul pesan “Disk Boot Failure”?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
  ];

  const questions4 = [
    {
      questionText: '[B28] Tidak bisa mengeluarkan suara melalui speaker?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B29] Suara yang dihasilkan tidak jelas?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B30] Sound Card tidak dikenali?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B31] Muncul pesan error saat menjalankan aplikasi audio?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
  ];

  const questions5 = [
    {
      questionText: '[B32] Setting BIOS selalu berubah?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B33] Jam dan tanggal di komputer tidak sesuai?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
  ];

  const questions6 = [
    {
      questionText: '[B34] Tampil bluescreen (Stop code 0 x00000080, stop code 0 x0000009C)?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
    {
      questionText: '[B35] Processor tidak terdeteksi di BIOS?',
      answerOptions: [
        { answerText: 'Ya', isCorrect: true },
        { answerText: 'Tidak', isCorrect: false },
      ],
    },
  ];

  const [gejala, setGejala] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [solusi, setSolusi] = useState('');
  const [questions, setQuestions] = useState(questions1);
  const [kerusakan, setKerusakan] = useState('');
  console.log(gejala);

  const handleAnswerOptionClick = (isCorrect: Boolean, questionText: String) => {
    if (isCorrect) {
      let match = questionText.match(/\[([^)]+)\]/);

      if (match && match.length > 1) {
        let extractedKdGejala = match[1];
        const newGejala = [...gejala, extractedKdGejala];
        setGejala(newGejala);
      } else {
        console.log('No match found');
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const filteredRules = rules.filter((rule: any) => {
        // Check if any element in indications array exists in rule.gejala
        const hasMatchingIndication = rule.gejala.some((gejalaItem: any) =>
          gejala.includes(gejalaItem.kdGejala)
        );

        // Return true if either hasMatchingIndication or hasMatchingGejala is true
        return hasMatchingIndication;
      });

      setKerusakan(filteredRules[0].kerusakan.kerusakan);
      setSolusi(filteredRules[0].kerusakan.solusi);
      setShowResult(true);
    }
  };
  return (
    <div className='bg-[#df2a50] text-white w-[900px] h-min rounded-2xl p-5 shadow-lg flex flex-col justify-evenly'>
      {showResult ? (
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-2xl border-b-4 w-max self-center'>Hasil Diagnosa</h2>
          <div className='font-medium text-xl flex gap-1 border-2 w-max p-2'><PuzzlePieceIcon className='w-5' />{kerusakan}</div>
          <div className='flex flex-col justify-center gap-2 border-2 p-2'>
            <div className='font-medium text-lg flex gap-1'><WrenchScrewdriverIcon className='w-5' />Solusi:</div>
            <div className='text-base overflow-auto h-60'>{solusi}</div>
          </div>
        </div>
      ) : (
        <>
          <div className='w-full relative'>
            <h2 className='mb-5 text-[28px]'>Question</h2>
            <div className='mb-3'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='w-full flex justify-start gap-x-5'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                className={clsx(
                  'w-40 text-base hover:bg-[#adf0ff] hover:text-black rounded-2xl flex p-2 justify-center items-center border-2 border-[#adf0ff]',
                  {
                    'bg-green-600': answerOption.answerText === 'Ya',
                    'bg-red-600': answerOption.answerText === 'Tidak',
                  }
                )}
                onClick={() =>
                  handleAnswerOptionClick(
                    answerOption.isCorrect,
                    questions[currentQuestion].questionText
                  )
                }
                key={index}
              >
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
