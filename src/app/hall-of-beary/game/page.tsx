"use client";

import { useState } from "react";

const questions = [
  {
    type: "choice",
    question: "Berapa hasil dari 1 + 1?",
    choices: ["1", "2", "3", "11"],
    answer: "2",
  },
  {
    type: "input",
    question: "Tulis huruf ketiga dari kata 'kucing'",
    answer: "c",
  },
  {
    type: "choice",
    question: "Yang manakah yang lebih berat?",
    choices: ["1kg kapas", "1kg besi", "Sama berat"],
    answer: "Sama berat",
  },
  {
    type: "input",
    question: "Tuliskan angka yang tidak ada di antara 1-10",
    answer: "0",
  },
];

export default function ParampaQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[current];

  const checkAnswer = () => {
    if (
      userAnswer.trim().toLowerCase() ===
      currentQuestion.answer.toString().trim().toLowerCase()
    ) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
      setUserAnswer("");
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setUserAnswer("");
    setFinished(false);
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center p-4 font-sans">
      <h1 className="text-3xl font-bold mb-6">🧩 Kuis Parampa</h1>

      {finished ? (
        <div className="text-center">
          <p className="text-xl font-semibold">Skor kamu: {score}/{questions.length}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={restart}
          >
            Coba Lagi
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded shadow p-6">
          <p className="mb-4 text-lg font-medium">{currentQuestion.question}</p>

          {currentQuestion.type === "choice" ? (
            <div className="flex flex-col gap-2">
              {currentQuestion.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setUserAnswer(choice);
                    setTimeout(checkAnswer, 300);
                  }}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-left"
                >
                  {choice}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="border px-3 py-2 rounded"
              />
              <button
                onClick={checkAnswer}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Jawab
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
