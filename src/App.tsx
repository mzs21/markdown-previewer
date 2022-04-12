import { useState } from "react";
import Editor from "./components/Editor";
import MDCS from "./components/MDCS";
import Preview from "./components/Preview";

function App() {
  const [text, setText] = useState<string>("");

  const textChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="h1">Markdown Previewer</h1>
      <MDCS />
      <Editor textValue={text} handleText={textChange} />
      <Preview markdown={text} />
    </div>
  );
}

export default App;
