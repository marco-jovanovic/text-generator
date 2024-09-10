import React, { useState, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { text } from '../data';

function Generator() {
  const [paragraph, setParagraph] = useState(text);
  const [count, setCount] = useState(1);

  const paraId = nanoid();

  const inputRef = useRef();

  const submitForm = (e) => {
    setCount(inputRef.current.value);
    e.preventDefault();
  };

  useEffect(() => {
    setParagraph(text.slice(0, count));
  }, [count]);

  return (
    <div className="container">
      <h3 className="title">Tire od boring lipsum text?</h3>
      <form onSubmit={submitForm}>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="9"
          ref={inputRef}
        ></input>
        <span>Paragraphs:</span> <button className="btn">Generate</button>
      </form>

      <div className="text">
        {paragraph.map((item, paraId) => {
          return <p key={paraId}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default Generator;
