import './DocUrCodeLayout.css';
import { PanelGroup } from 'react-resizable-panels';
import DocBlock from "../../Blocks/DocBlock/DocBlock";
import ResizeHandle from '../../Atoms/ResizeHandle/ResizeHandle';
import { useEffect, useState } from 'react';
import CodeBlock from '../../Blocks/CodeBlock/CodeBlock';
import { DocItemProps } from '../../Organisms/DocItem/DocItem';
import { DEFAULT_DOCS } from './Constants';
import FormBlock from '../../Blocks/FormBlock/FormBlock';
import { createExplainationOpenAi } from '../../../utils/api/openAi';
import { Doc } from '../../../utils/parsers/parser';

const DocurCodeLayout: React.FC = () => {
  const [selectedLines, setSelectedLines] = useState<string>();
  const [apiKey, setApiKey] = useState<string>();
  const [inputCode, setInputCode] = useState<string>();
  const [language, setLanguage] = useState<string>();
  const [showForm, setShowForm] = useState<boolean>(true);
  const [docs, setDocs] = useState<Doc[]>();
  const onSubmitForm = () => {
    if (!language || !inputCode || !apiKey) {
      return;
    }
    setShowForm(false);
  }

  useEffect(() => {
    const getData = async () => {
      if (inputCode && apiKey) {
        const data = await createExplainationOpenAi(inputCode, apiKey);
        setDocs(data);
      }
    };
    getData();
  }, [inputCode, apiKey]);

  const docItems: DocItemProps[] = (docs ?? DEFAULT_DOCS).map((docInfo) => {
    return {
      onClick: () => setSelectedLines(`${docInfo.start}-${docInfo.end}`),
      onExit: () => setSelectedLines(undefined),
      docInfo,
    };
  });

  return (
    <div className="App">
      {showForm ? <FormBlock
        setInputCode={setInputCode}
        setApiKey={setApiKey}
        setSelectedLanguage={setLanguage}
        onSubmit={onSubmitForm}
      /> :
      <PanelGroup direction="horizontal" className="docUrCodeLayout">
        <DocBlock docItems={docItems}/>
        <ResizeHandle />
        <CodeBlock text={inputCode} selectedLines={selectedLines}/>
      </PanelGroup>
      }
    </div>
  );
};


export default DocurCodeLayout;
