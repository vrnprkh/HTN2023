import OpenAI from "openai";
import { getDocFromOutput, parseArrayToText, parseCode, parseExpl } from "../parsers/parser";
import { highPrompt, lowPrompt, mainPrompt, mediumPrompt } from "../prompts/prompt";




export async function createExplainationOpenAi(userInput: string, API_KEY: string, promptType: string = "high") {
    const openai = new OpenAI({
        apiKey: API_KEY,
        dangerouslyAllowBrowser: true,
    });
    let prompt = mainPrompt;
    if (promptType === "high") {
        prompt = highPrompt
    }
    else if (prompt === "medium") {
        prompt = mediumPrompt;
    }
    else if (prompt === "low") {
        prompt = lowPrompt
    }

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }, {role: "user", content: parseArrayToText(parseCode(userInput))}],
        model: "gpt-3.5-turbo-16k",
        temperature: 0,
      });
      let output = getDocFromOutput(parseExpl(completion.choices[0].message.content))
      return output;
}
  