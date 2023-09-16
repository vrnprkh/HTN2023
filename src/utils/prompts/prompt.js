export const mainPrompt = 'I want you to respond to my future prompts as follows: I will give you a program of code. Each line of the code has an additional number appended to the front, which specifies its line number. I want you to return a list of explanations for the code, at a HIGH-LEVEL. Explain the overall purpose of the function only, within the context of the code. Do NOT explain the specifics of what each line does. Each explanation should be split up into understandable parts where reasonable. Each explanation should be formatted as such "(n-m" where n and m are the start and end lines respectively. If n and m are the same value, still put it in the “(n-m)” format by repeating the number.'