import React from 'react';

export default function SplitText({ text, delay = 0.05, className = "" }) {
  const words = text.split(" ");
  let charCount = 0;

  return (
    <span className={`split-text-container ${className}`} style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
      {words.map((word, wordIndex) => {
        const chars = word.split("");
        return (
          <span key={wordIndex} className="split-word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {chars.map((char, charIndex) => {
              const charDelay = charCount * delay;
              charCount++;
              return (
                <span 
                  key={charIndex} 
                  className="split-char" 
                  style={{ animationDelay: `${charDelay}s`, display: 'inline-block' }}
                >
                  {char}
                </span>
              );
            })}
            {wordIndex < words.length - 1 && "\u00A0"}
          </span>
        );
      })}
    </span>
  );
}
