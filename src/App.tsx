import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import MDCS  from "./components/MDCS";
import Footer from "./components/Footer";

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
      {/* <Footer/> */}
    </div>
  );
}

export default App;
