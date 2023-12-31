import React, { useEffect, useState } from "react";
import { PanelGroup } from "react-resizable-panels";
import DocBlock from "../../Blocks/DocBlock/DocBlock";
import ResizeHandle from "../../Atoms/ResizeHandle/ResizeHandle";
import FormBlock from "../../Blocks/FormBlock/FormBlock";
import { DEFAULT_DOCS } from "./Constants";
import CodeBlock from "../../Blocks/CodeBlock/CodeBlock";
import { DocItemProps } from "../../Organisms/DocItem/DocItem";
import { createExplainationOpenAi } from "../../../utils/api/openAi";
import { Doc } from "../../../utils/parsers/parser";
import Navbar from "../../Blocks/Navbar/Navbar";

const DocurCodeLayout: React.FC = () => {
  const [selectedLines, setSelectedLines] = useState<string>();
  const [inputCode, setInputCode] = useState<string>();
  const [showForm, setShowForm] = useState<boolean>(true);
  const [docs, setDocs] = useState<Doc[]>();
  const [explanationLevel, setExplanationLevel] = useState<string>("low"); // State for explanation level

  const onSubmitForm = () => {
    if (!inputCode || !explanationLevel) {
      return;
    }
    const getData = async () => {
      const data = await createExplainationOpenAi(
        inputCode,
        explanationLevel // Pass explanation level to the function
      );
      setDocs(data);
    };
    getData();
    setShowForm(false);
  };

  const docItems: DocItemProps[] = (docs ?? DEFAULT_DOCS).map((docInfo) => {
    return {
      onClick: () => setSelectedLines(`${docInfo.start}-${docInfo.end}`),
      onExit: () => setSelectedLines(undefined),
      docInfo,
    };
  });
  

  return (
    
    <div className="App">
      <Navbar></Navbar>
      {showForm ? (
        <FormBlock
          setInputCode={setInputCode}
          setExplainationLevel={setExplanationLevel} // Pass the new prop
          onSubmit={onSubmitForm}
        />
        
      ) : (
        <PanelGroup direction="horizontal" className="docUrCodeLayout">
          <DocBlock docItems={docItems} />
          <ResizeHandle />
          <CodeBlock text={inputCode} selectedLines={selectedLines} />
        </PanelGroup>
        
      )}
      
    </div>
  );
};

export default DocurCodeLayout;
