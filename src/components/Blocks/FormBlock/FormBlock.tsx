import './FormBlock.css';

export type FormBlockProps = {
  setInputCode: (code: string) => void,
  setApiKey: (key: string) => void,
  setSelectedLanguage: (language: string) => void,
  onSubmit: () => void,
};

const FormBlock: React.FC<FormBlockProps> = (props: FormBlockProps) => {
  const { setInputCode, setApiKey, setSelectedLanguage, onSubmit } = props;
  return (
    <div className="prompt-box">
      <div className="input-container">
        <textarea
          rows={15}
          cols={80}
          placeholder="Enter input code"
          onChange={(e) => setInputCode(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter API key"
          onChange={(e) => setApiKey(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-container">
        <select
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="language-dropdown"
        >
          <option value="">Select a language</option>
          {/* Add options for each language */}
          <option value="abap">ABAP</option>
          <option value="actionscript">ActionScript</option>
          {/* Add other languages */}
        </select>
      </div>
      <button className="submit-button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  )
};

export default FormBlock;