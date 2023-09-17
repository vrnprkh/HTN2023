import express from 'express';
import OpenAI from 'openai';
import morgan from 'morgan';
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PORT = parseInt(process.env.PORT ?? "5000");

// app.use('', (req: Request, res: Response, next: NextFunction) => {
//   if (req.headers.authorization) {
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// });

app.get('/mock', (req, res) => {
  res.send("This is a test response for DocUrCode.");
});

app.post('/openai', bodyParser.json(), async (req, res) => {
  const payload = req.body;
  const data = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: payload.prompt,
      },
      {
        role: "user",
        content: payload.code,
      },
    ],
    model: "gpt-3.5-turbo-16k",
    temperature: 0,
  });
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Starting OPENAI proxy at PORT ${PORT}`);
})