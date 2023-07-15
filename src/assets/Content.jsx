import React, { useState } from 'react';

const Content = () => {
  const [displayText, setDisplayText] = useState('');
  const [showParagraph, setShowParagraph] = useState(false);

  const handleClick = () => {
    const textAreaValue = document.getElementById('textArea').value;
    setDisplayText(textAreaValue);
    setShowParagraph(true);
  };

  return (
    <main>
      <textarea id="textArea" rows="4" cols="50" placeholder="Enter text here"></textarea>
      <button onClick={handleClick}>Display Text</button>
      {showParagraph && <p>{displayText}</p>}
    </main>
  );
}

export default Content;
