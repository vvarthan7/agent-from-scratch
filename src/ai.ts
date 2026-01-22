import OpenAI from "openai";

export const openai = new OpenAI();

// const response = openai.responses.create({
//   model: "gpt-4o-mini",
//   input: "write a haiku about ai",
//   store: true,
// });

// response.then((result) => console.log(result.output_text));