import React from "react";

export default ({ text = "", onTextChange, onSearchClick }) => (
  <div>
    <input type="text" value={text} onChange={onTextChange} />
    <button onClick={() => onSearchClick(text)}>Search</button>
  </div>
);
