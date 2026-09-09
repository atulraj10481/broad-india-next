import React from 'react';

interface DefinitionBlockProps {
  term: string;
  definition: string;
}

export default function DefinitionBlock({ term, definition }: DefinitionBlockProps) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg shadow-sm">
      <h3 className="text-xl font-bold text-blue-900 mb-2">What is {term}?</h3>
      <p className="text-gray-800 text-lg leading-relaxed">
        <strong>{term}</strong> is {definition}
      </p>
    </div>
  );
}
