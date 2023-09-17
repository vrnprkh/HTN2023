import { Panel } from 'react-resizable-panels';
import './CodeBlock.css';
import { CodeBlock as InternalCodeBlock, dracula } from 'react-code-blocks';
import { DEFAULT_CODE } from './Constants';

export type CodeBlockProps = {
  text?: string;
  selectedLines?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = (props: CodeBlockProps) => {
  const { text, selectedLines } = props;
  return (
    <Panel defaultSize={50} minSize={10} style={{ overflow: 'auto' }}>
      <InternalCodeBlock
        text={text ?? DEFAULT_CODE}
        highlight={selectedLines}
        language='python'
        theme={dracula}
        showLineNumbers
      />
    </Panel>
  );
}

export default CodeBlock;
