import OpenAI from "openai";
import { getDocFromOutput, parseArrayToText, parseCode, parseExpl } from "../parsers/parser";
import { mainPrompt } from "../prompts/prompt";




export async function createExplainationOpenAi(userInput: string, API_KEY: string) {
    const openai = new OpenAI({
        apiKey: API_KEY,
        dangerouslyAllowBrowser: true,
    });
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: mainPrompt }, {role: "user", content: parseArrayToText(parseCode(userInput))}],
        model: "gpt-3.5-turbo-16k",
      });


      let output = getDocFromOutput(parseExpl(completion.choices[0].message.content))
      return output;
}
  