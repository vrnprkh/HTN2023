import './DocUrCodeLayout.css';
import { PanelGroup } from 'react-resizable-panels';
//import CodeBlock from "../../Blocks/CodeBlock/CodeBlock";
import DocBlock from "../../Blocks/DocBlock/DocBlock";
import ResizeHandle from '../../Atoms/ResizeHandle/ResizeHandle';

const DocurCodeLayout: React.FC = () => {
<<<<<<< HEAD
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [inputCode, setInputCode] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");


  const handleInputCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(e.target.value);
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    };

  const handleSubmit = () => {
    // Validate input code and API key if needed.
    // You can add your validation logic here.

    // If validation is successful, hide the prompt box.
    setShowPrompt(false);

    // Perform any necessary actions with input code and API key.
    // For example, make API requests.
  };

  return (
    <div className="App">
      {showPrompt && (
        <div className="prompt-box">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter input code"
              value={inputCode}
              onChange={handleInputCodeChange}
              className="input-field"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter API key"
              value={apiKey}
              onChange={handleApiKeyChange}
              className="input-field"
            />
          </div>
          <div className="input-container">
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="language-dropdown"
            >
              <option value="">Select a language</option>
              {/* Add options for each language */}
              <option value="abap">ABAP</option>
              <option value="actionscript">ActionScript</option>
              {/* Add other languages */}
            </select>
          </div>
          <button onClick={handleSubmit} className="submit-button">
            Submit
          </button>
        </div>
      )}

      {!showPrompt && (
        <PanelGroup direction="horizontal" className="docUrCodeLayout">
          <DocBlock />
          <ResizeHandle onResize={setIsResizing} />

          <DocBlock />
        </PanelGroup>
      )}
    </div>
=======
  return (
    <PanelGroup direction="horizontal" className="docUrCodeLayout" style={{ overflow: 'auto' }}>
      <DocBlock />
      <ResizeHandle />
      <CodeBlock />
    </PanelGroup>
>>>>>>> code-block
  );
};


export default DocurCodeLayout;
