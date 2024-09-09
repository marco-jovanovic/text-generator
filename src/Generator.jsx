import React, { useState } from 'react';

import { text } from '../data';

function Generator() {
  const [paragraph, setParagraph] = useState(text);
  const [count, setCount] = useState(1);

  console.log(paragraph.length);

  const getFormValue = (e) => {
    setCount(e.target.value);

    console.log(count);
  };

  return (
    <div className="container">
      <h3 className="title">Tire od boring lipsum text?</h3>
      <form>
        <span>Paragraphs:</span>
        <select onChange={getFormValue} value={count}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
      </form>

      <div className="text">{paragraph.slice(0, count)}</div>
    </div>
  );
}

export default Generator;
