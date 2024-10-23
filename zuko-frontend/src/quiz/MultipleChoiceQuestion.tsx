import React, { useState } from 'react';
import { Edit, RefreshCw } from 'lucide-react';

export const MultipleChoiceQuestion = () => {
  // State to manage the question and answers
  const [question, setQuestion] = useState("What is the capital of France?");
  const [answers, setAnswers] = useState([
    "Paris",
    "London",
    "Berlin",
    "Madrid"
  ]);
  const [isEditingQuestion, setIsEditingQuestion] = useState(false);
  const [editingAnswerIndex, setEditingAnswerIndex] = useState<number | null>(null);

  // Handlers for editing
  const handleQuestionEdit = () => setIsEditingQuestion(true);
  const handleAnswerEdit = (index: number) => setEditingAnswerIndex(index);

  const handleQuestionSave = () => setIsEditingQuestion(false);
  const handleAnswerSave = () => setEditingAnswerIndex(null);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value);
  const handleAnswerChange = (index: number, newValue: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = newValue;
    setAnswers(newAnswers);
  };

  // For refresh functionality
  const handleRefreshAnswer = (index: number) => {
    // Add custom logic for refreshing the answer (e.g., resetting to default value)
    const defaultAnswers = ["Paris", "London", "Berlin", "Madrid"];
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[index] = defaultAnswers[index]; // Example logic to reset to default value
      return newAnswers;
    });
  };

  return (
    <div className="p-6 border rounded-lg bg-white shadow-md max-w-lg mx-auto">
      {/* Question Section */}
      <div className="mb-4">
        {isEditingQuestion ? (
          <div className="flex items-center space-x-2">
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              value={question}
              onChange={handleQuestionChange}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleQuestionSave}
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{question}</h2>
            <button onClick={handleQuestionEdit}>
              <Edit className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>

      {/* Answers Section */}
      {answers.map((answer, index) => (
        <div key={index} className="flex items-center space-x-2 mb-3">
          {editingAnswerIndex === index ? (
            <>
              <input
                className="border border-gray-300 rounded-md p-2 w-full"
                value={answers[index]}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
              />
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={handleAnswerSave}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span className="flex-1">{answer}</span>
              <button onClick={() => handleAnswerEdit(index)}>
                <Edit className="w-5 h-5 text-gray-600" />
              </button>
              <button onClick={() => handleRefreshAnswer(index)}>
                <RefreshCw className="w-5 h-5 text-gray-600" />
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
