import './DocUrCodeLayout.css';
import { PanelGroup } from 'react-resizable-panels';
import CodeBlock from "../../Blocks/CodeBlock/CodeBlock";
import DocBlock from "../../Blocks/DocBlock/DocBlock";
import ResizeHandle from '../../Atoms/ResizeHandle/ResizeHandle';

const DocurCodeLayout: React.FC = () => {
  return (
    <PanelGroup direction="horizontal" className="docUrCodeLayout" style={{ overflow: 'auto' }}>
      <DocBlock />
      <ResizeHandle />
      <CodeBlock />
    </PanelGroup>
  );
};

export default DocurCodeLayout;
