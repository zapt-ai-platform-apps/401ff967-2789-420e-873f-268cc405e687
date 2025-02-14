import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-2 bg-gray-200 text-center">
      <a
        href="https://www.zapt.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 underline cursor-pointer"
      >
        Made on ZAPT
      </a>
    </footer>
  );
}