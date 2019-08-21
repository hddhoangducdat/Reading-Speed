import React from "react";
import "./Words.css";

const Words = ({ SetLength, word, vt }) => {
  return (
    <div onClick={() => SetLength(vt + 1)} className="Words">
      {word}
    </div>
  );
};

export default Words;
