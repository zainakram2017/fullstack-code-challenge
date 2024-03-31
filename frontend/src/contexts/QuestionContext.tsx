import React, { createContext, useState, useContext, useEffect } from "react";
import { Question } from "../types";

type QuestionContextProps = {
  questions: Question[];
  selectedQuestion: Question | null;
  setSelectedQuestion: (question: Question) => void;
  addQuestion: (question: string) => void;
  editQuestion: (id: string, newText: string) => void;
  deleteQuestion: (id: string) => void;
};

const QuestionContext = createContext<QuestionContextProps>({
  questions: [],
  selectedQuestion: null,
  setSelectedQuestion: () => {},
  addQuestion: () => {},
  editQuestion: () => {},
  deleteQuestion: () => {},
});

export const QuestionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const dummyQuestions = [
        { id: "1", question: "How have you been feeling lately?" },
        {
          id: "2",
          question: "Can you tell me about any recent stressful situations you've encountered?",
        },
        {
          id: "3",
          question: "Have you noticed any patterns in your thoughts or behaviors recently?",
        },
        {
          id: "4",
          question: "Do you feel like you're able to cope with the challenges in your life right now?",
        },
        {
          id: "5",
          question: "Are there any unresolved issues from your past that are affecting you currently?",
        },
        {
          id: "6",
          question: "How is your sleep quality? Are you experiencing any disturbances?",
        },
        {
          id: "7",
          question: "Have you noticed any changes in your appetite or eating habits?",
        },
        {
          id: "8",
          question: "Are you finding it difficult to concentrate or make decisions?",
        },
        {
          id: "9",
          question: "Do you have a support system you can rely on during tough times?",
        },
        {
          id: "10",
          question: "Are there any specific goals you'd like to work towards in therapy?",
        },
        {
          id: "11",
          question: "Do you feel like you're able to express your emotions freely?",
        },
        {
          id: "12",
          question: "Have you experienced any significant changes in your relationships recently?",
        },
        {
          id: "13",
          question: "How do you typically handle conflicts or disagreements with others?",
        },
        {
          id: "14",
          question: "Do you feel overwhelmed by any responsibilities or obligations in your life?",
        },
        {
          id: "15",
          question: "Are you satisfied with your overall level of self-care and relaxation?",
        },
        {
          id: "16",
          question: "Have you been engaging in any activities or hobbies that bring you joy?",
        },
        {
          id: "17",
          question: "Are there any habits or behaviors you'd like to change or improve upon?",
        },
        {
          id: "18",
          question: "Do you feel like you're able to express yourself honestly in our sessions?",
        },
        {
          id: "19",
          question: "How do you typically handle setbacks or disappointments?",
        },
        {
          id: "20",
          question: "Are you open to exploring new coping strategies or techniques?",
        },
      ];

      setQuestions(dummyQuestions);
    };

    fetchData();
    return () => {
      setQuestions([]);
    };
  }, []);

  const addQuestion = (question: string) => {
    // TODO: Save in DB
    const newQuestion: Question = {
      id: String(Date.now()),
      question,
    };
    setQuestions([...questions, newQuestion]);
  };

  const editQuestion = (id: string, newText: string) => {
    // TODO: Update in DB
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, question: newText } : question
      )
    );
  };

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  return (
    <QuestionContext.Provider
      value={{
        questions,
        addQuestion,
        editQuestion,
        deleteQuestion,
        setSelectedQuestion,
        selectedQuestion,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => useContext(QuestionContext);
