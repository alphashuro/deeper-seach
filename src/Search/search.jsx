import React from "react";

export default ({ text, onChange }) => (
  <div>
    <input type="text" value={text} onChange={onChange} />
  </div>
);
