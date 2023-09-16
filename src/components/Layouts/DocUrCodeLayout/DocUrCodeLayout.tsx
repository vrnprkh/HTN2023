import './DocUrCodeLayout.css';
import CodeBlock from "../../Blocks/CodeBlock/CodeBlock";
import DocBlock from "../../Blocks/DocBlock/DocBlock";

const DocurCodeLayout: React.FC = () => {
  return <div className="docUrCodeLayout">
    <DocBlock />
    <CodeBlock />
  </div>
};

export default DocurCodeLayout;
