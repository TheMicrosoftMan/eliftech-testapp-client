import React, { useState } from "react";

const FileUploader = ({ sendFile }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="FileUploader">
      <div className="FileUploader__block">
        <label htmlFor="file" className="FileUploader__block_label">
          Choose a file:
        </label>
        <input
          name="file"
          id="file"
          className="FileUploader__block_input"
          type="file"
          accept=".csv"
          onChange={e => setSelectedFile(e.target.files[0])}
        />
      </div>
      <button
        className="FileUploader__btn"
        onClick={() => sendFile(selectedFile)}
      >
        Send
      </button>
    </div>
  );
};

export { FileUploader };
