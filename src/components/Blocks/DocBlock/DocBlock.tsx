import React from "react";
import { Panel } from "react-resizable-panels";
import "./DocBlock.css";
import DocItem, { DocItemProps } from "../../Organisms/DocItem/DocItem";

export type DocBlockProps = {
  docItems?: DocItemProps[];
}

const DocBlock: React.FC<DocBlockProps> = (props: DocBlockProps) => {
  const { docItems } = props;
  const children = docItems?.map((docItem) => {
    return <DocItem {...docItem} />
  })
  return (
    <Panel defaultSize={50} minSize={10} className="docBlock" style={{ overflow: 'auto' }}>
      {children}
    </Panel>
  );
};

export default DocBlock;
