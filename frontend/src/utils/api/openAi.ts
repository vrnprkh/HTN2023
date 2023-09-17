import OpenAI from "openai";
import { getDocFromOutput, parseArrayToText, parseCode, parseExpl } from "../parsers/parser";
import { mainPrompt } from "../prompts/prompt";
import axios from "axios";

export async function createExplainationOpenAi(userInput: string, API_KEY: string, prompt: string = mainPrompt) {
    let completion: OpenAI.Chat.Completions.ChatCompletion;
    return axios.post(
      "http://localhost:4000/openai",
      {
        prompt: mainPrompt,
        code: parseArrayToText(parseCode(userInput)),
      },
      {
        headers: {
          Authorization: 'Zain',
        },
      },
    ).then((response) => {
      completion = response.data;
      return getDocFromOutput(parseExpl(completion.choices[0].message.content));
    });
}
