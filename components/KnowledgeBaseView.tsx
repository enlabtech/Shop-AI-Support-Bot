import React, { useState } from 'react';
import type { FAQ } from '../types';

interface KnowledgeBaseViewProps {
  faqs: FAQ[];
  setFaqs: React.Dispatch<React.SetStateAction<FAQ[]>>;
}

const KnowledgeBaseView: React.FC<KnowledgeBaseViewProps> = ({ faqs, setFaqs }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleAddFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim() || !newAnswer.trim()) return;

    const newFaq: FAQ = {
      id: Date.now(),
      question: newQuestion,
      answer: newAnswer,
    };

    setFaqs([...faqs, newFaq]);
    setNewQuestion('');
    setNewAnswer('');
  };

  const handleDeleteFaq = (id: number) => {
    setFaqs(faqs.filter(faq => faq.id !== id));
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold text-textPrimary mb-6">Knowledge Base</h1>
      <p className="text-textSecondary mb-8 max-w-2xl">Add frequently asked questions and product information here. The AI will use this data to answer customer queries accurately.</p>
      
      <div className="bg-surface rounded-lg border border-border p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-textPrimary">Add New Entry</h2>
        <form onSubmit={handleAddFaq} className="space-y-4">
          <div>
            <label htmlFor="question" className="block text-sm font-medium text-textSecondary mb-1">Question / Keyword</label>
            <input
              id="question"
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="e.g., Delivery charge koto?"
              className="w-full p-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>
          <div>
            <label htmlFor="answer" className="block text-sm font-medium text-textSecondary mb-1">Bot's Answer</label>
            <textarea
              id="answer"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="e.g., Dhakar moddhe delivery charge 60 taka."
              rows={3}
              className="w-full p-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>
          <div className="text-right">
            <button type="submit" className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-200 hover:scale-105">
              Add to Knowledge Base
            </button>
          </div>
        </form>
      </div>

      <div className="bg-surface rounded-lg border border-border overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-textPrimary">Existing Entries</h2>
        </div>
        <ul className="divide-y divide-border">
          {faqs.map(faq => (
            <li key={faq.id} className="p-6 flex justify-between items-start hover:bg-white/5 transition-colors">
              <div>
                <h3 className="font-semibold text-textPrimary">{faq.question}</h3>
                <p className="text-textSecondary mt-1">{faq.answer}</p>
              </div>
              <div className="flex space-x-2 ml-4">
                 <button className="text-textSecondary hover:text-primary p-2 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                 </button>
                 <button onClick={() => handleDeleteFaq(faq.id)} className="text-textSecondary hover:text-red-500 p-2 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                 </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KnowledgeBaseView;