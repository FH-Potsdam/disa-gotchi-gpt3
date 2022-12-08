import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body.input_prompt),
    max_tokens: 256,
    temperature: 0.7,
  });
  // res.status(200).json({ result: JSON.stringify(completion.data) });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(inputPrompt) {
  const capitalizedInputPrompt =
    inputPrompt[0].toUpperCase() + inputPrompt.slice(1).toLowerCase();
  return `Write me feedback about this situation as a friendly ghost would do, make metaphors to the otherworldly and being a ghost and be funny and ironical but empowering at the same time: Give me feedback on this: ${capitalizedInputPrompt}.`;

//   return `Suggest three names for an animal that is a superhero.
//
// Animal: Cat
// Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
// Animal: Dog
// Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
// Animal: ${capitalizedAnimal}
// Names:`;
}
