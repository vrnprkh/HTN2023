import "./FormBlock.css";

export type FormBlockProps = {
  setInputCode: (code: string) => void;
  setApiKey: (key: string) => void;
  onSubmit: () => void;
};

const FormBlock: React.FC<FormBlockProps> = (props: FormBlockProps) => {
  const { setInputCode, setApiKey, onSubmit } = props;
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
      <div className="bottom">
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter API key"
            onChange={(e) => setApiKey(e.target.value)}
            className="input-field"
          />
        </div>
        <button className="submit-button" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormBlock;
