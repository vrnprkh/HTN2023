import { highPrompt, lowPrompt, mainPrompt, mediumPrompt } from "../prompts/prompt";
import { getDocFromOutput, parseArrayToText, parseCode, parseExpl } from "../parsers/parser";
import axios from "axios";

export async function createExplainationOpenAi(userInput: string, promptType: string = mainPrompt) {
  let prompt = mainPrompt;
  if (promptType === "high") {
      prompt = highPrompt;
  }
  else if (prompt === "medium") {
      prompt = mediumPrompt;
  }
  else if (prompt === "low") {
      prompt = lowPrompt
  }
  return axios.post(
    "http://localhost:4000/openai",
    {
      prompt,
      code: parseArrayToText(parseCode(userInput)),
    },
    {
      headers: {
        Authorization: 'Zain',
      },
    },
  ).then((response) => {
    return getDocFromOutput(parseExpl(response.data.choices[0].message.content));
  });
};