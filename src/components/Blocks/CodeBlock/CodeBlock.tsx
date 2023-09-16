import { Panel } from 'react-resizable-panels';
import './CodeBlock.css';

export type CodeBlockProps = {
  disabledFrame: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = (props: CodeBlockProps) => {
  return (
    <Panel defaultSize={40} minSize={10}>
      {/* <textarea className="codeEditor">text editor</textarea> */}
      <iframe
        title="Code Editor"
        src="https://bchharaw.github.io/HackTheNorth2023/lab/index.html?kernel=python&toolbar=1"
        width="100%"
        height="100%"
        className={props.disabledFrame ? "disabled" : ""}
      />
    </Panel>
  );
}

export default CodeBlock;