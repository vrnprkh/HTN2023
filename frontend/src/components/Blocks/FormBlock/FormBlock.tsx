import React, { useState } from "react";
import "./FormBlock.css";
import banner from "./image2.png";

export type FormBlockProps = {
  setInputCode: (code: string) => void;
  setExplainationLevel: (level: string) => void; // New prop
  onSubmit: () => void;
};

const FormBlock: React.FC<FormBlockProps> = (props: FormBlockProps) => {
  const { setInputCode, setExplainationLevel, onSubmit } = props;
  const [explanationLevel, setExplanationLevel] = useState<string>("low"); // State for dropdown value

  return (
    <div className="parent">
      <div className="prompt-box">
        <img src={banner} alt=""></img>
        <p>
          A versatile GPT powered tool to understand code faster <br></br>
          Developed by Brendan Chharawala, Johnathon Xie, Varun Parikh, and Zain
          Salman
        </p>
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
            {/* Dropdown menu */}
            <select
              onChange={(e) => {
                setExplanationLevel(e.target.value);
                setExplainationLevel(e.target.value); // Pass selected level to parent component
              }}
              value={explanationLevel}
              className="input-field"
            >
              <option value="low">Detailed</option>
              <option value="medium">Normal</option>
              <option value="high">Overview</option>
            </select>
          </div>
          <button className="submit-button" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormBlock;
