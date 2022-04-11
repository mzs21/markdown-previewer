import { marked } from "marked";


interface MarkdownProps {
  markdown: string;
}

const Preview = ({ markdown }: MarkdownProps) => {
  return (
    <div>
      <h2 className="h2">Preview</h2>
      <div
        className="reactMarkDown"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>
    </div>
  );
};

export default Preview;
