import './DocUrCodeLayout.css';
import CodeBlock from "../../Blocks/CodeBlock/CodeBlock";
import DocBlock from "../../Blocks/DocBlock/DocBlock";

const DocurCodeLayout: React.FC = () => {
  return (
    <div className="docUrCodeLayout">
      <DocBlock />
      {/* <CodeBlock /> */}
      <iframe
        src="https://bchharaw.github.io/HackTheNorth2023/lab/index.html?kernel=python&toolbar=1"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default DocurCodeLayout;
