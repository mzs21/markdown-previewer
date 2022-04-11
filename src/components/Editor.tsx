import React from "react";

interface EditorProps {
  textValue: string;
  handleText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Editor = ({ textValue, handleText }: EditorProps) => {
  return (
    <div>
      <h2 className="h2">Editor</h2>

      <textarea value={textValue} onChange={handleText}></textarea>
    </div>
  );
};

export default Editor;
