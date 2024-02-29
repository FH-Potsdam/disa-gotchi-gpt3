import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003", // GPT 3.5
    // model: "gpt-3.5-turbo",
    prompt: generatePrompt(req.body.input_prompt),
    max_tokens: 256,
    temperature: 0.7,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(inputPrompt) {
  const capitalizedInputPrompt =
    inputPrompt[0].toUpperCase() + inputPrompt.slice(1).toLowerCase();

  // Friendly Ghost
  // return `Write me feedback about this anxiety-triggering situation as a friendly ghost would do, being empathetic with my anxiety and negative thoughts, make metaphors to the otherworldly and being a ghost and be funny and ironical but empowering at the same time: Give me feedback on this: ${capitalizedInputPrompt}.`;

  // Friendly Ghost + Rephrasing
  return `Write me feedback about this anxiety-triggering situation as a friendly ghost would do, being empathetic with my anxiety and negative thoughts, rephrasing negative thoughts in a positive and empowering way, make metaphors to the otherworldly and being a ghost and be funny and ironical but empowering at the same time: Give me feedback on this: ${capitalizedInputPrompt}.`;
  // My own anxiety as a partner
  // return `Write me feedback about this anxiety-triggering situation as if you were my own anxiety, being empathetic with my feelings and negative thoughts, make metaphors to having you (my anxiety) as a partner and as a superpower I can use to overcome difficult situations, and be funny and ironical but empowering at the same time. And don't put pressure on me! Give me feedback on this: ${capitalizedInputPrompt}.`;

  // Friendly Ghost + Anxiety as partner
  //return `Write me feedback about this anxiety-triggering situation as a friendly ghost would do, being empathetic with my anxiety and negative thoughts. Make metaphors to the otherworldly and being a ghost, and also to my anxiety as a partner and as a superpower I can use to overcome difficult situations. Be funny and ironical but empowering at the same time. Give me feedback on this: ${capitalizedInputPrompt}.`;
}
