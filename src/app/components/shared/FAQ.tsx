import React, { useState } from 'react';
import styled from 'styled-components';

const faqData = [
  { id: 1, question: 'What is Interactive Design?', answer: 'Interactive design focuses on creating engaging user experiences.' },
  { id: 2, question: 'How does Advanced Functionality work?', answer: 'Advanced functionality leverages modern tools and frameworks to enhance performance.' },
  { id: 3, question: 'Why choose Seamless Integration?', answer: 'Seamless integration ensures compatibility and smooth operation with existing systems.' },
];

const FAQItem = styled.div`
  background-color: transparent;
  color: white;
  border: 2px solid #add8e6; // Changed box outline to faint blue
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

const FAQContainer = styled.div`
  background-color: transparent; // Removed white background
  color: white; // Ensured all text is dark white
  padding: 24px;
  border-radius: 8px;
`;

const SearchBar = styled.input`
  background-color: transparent; // Removed white background
  color: white; // Changed search bar text and placeholder color to white
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
  width: 100%;
`;

const FAQHeading = styled.h2`
  color: white; // Changed FAQ heading color to white
  font-size: 2rem;
  text-align: center;
  margin-bottom: 24px;
`;

const FAQItemTitle = styled.h3`
  color: white; // Changed FAQ item titles to white
  font-size: 1.5rem;
  margin-bottom: 8px;
`;



const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <FAQContainer className="faq-section p-8 bg-gray-100 rounded-lg shadow-lg">
      <FAQHeading className="text-3xl font-extrabold mb-6 text-center text-black font-serif">
        Frequently Asked Questions
      </FAQHeading>
      <SearchBar
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        className="w-full p-3 mb-6 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="faq-list space-y-4">
        {filteredFAQs.map((faq) => (
          <FAQItem
            key={faq.id}
            className={`faq-item p-4 bg-transparent rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer ${expandedFAQ === faq.id ? 'border-2 border-blue-500' : ''}`}
            onClick={() => toggleFAQ(faq.id)}
          >
            <FAQItemTitle className="text-xl font-semibold mb-2 text-gray-700">{faq.question}</FAQItemTitle>
            {expandedFAQ === faq.id && (
              <p className="text-gray-600">{faq.answer}</p>
            )}
          </FAQItem>
        ))}
      </div>
    </FAQContainer>
  );
};

export default FAQ;