import './DocUrCodeLayout.css';
import { PanelGroup } from 'react-resizable-panels';
//import CodeBlock from "../../Blocks/CodeBlock/CodeBlock";
import DocBlock from "../../Blocks/DocBlock/DocBlock";
import ResizeHandle from '../../Atoms/ResizeHandle/ResizeHandle';
import { useState } from 'react';

const DocurCodeLayout: React.FC = () => {
  const [isResizing, setIsResizing] = useState<boolean>(false);
  return (
    <PanelGroup direction="horizontal" className="docUrCodeLayout">
      <DocBlock />
      <ResizeHandle onResize={setIsResizing} />

      <DocBlock />
    </PanelGroup>
  );
};

export default DocurCodeLayout;
