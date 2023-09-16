import OpenAI from "openai";
import { parseArrayToText, parseCode, parseExpl } from "../parsers/parser";




export async function createExplainationOpenAi(userInput, API_KEY = process.env.OPENAI_API_KEY) {
    const openai = new OpenAI({
        apiKey: API_KEY
    });
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: mainPrompt }, {role: "user", content: parseArrayToText(parseCode(userInput))}],
        model: "gpt-3.5-turbo",
      });


      let output = parseExpl(completion.choices[0].message.content)
      console.log(output)
      return output;
}
  