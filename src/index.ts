import { mastra } from './mastra';
import { z } from "zod";

const chefAgent = mastra.getAgent("chefAgent");

// Simple output

// async function main() {
//   const query =
//     "In my kitchen I have: toor dhaal, tomato, onion, brinjal. What can I make?";
//   console.log(`Query: ${query}`);
 
//   const response = await chefAgent.generate([{ role: "user", content: query }]);
//   console.log("\n👨‍🍳 Chef Pravin:", response.text);
// }
 

// Streaming Output

// async function main() {
//   const query =
//     "Now I'm over at my friend's house, and they have: chicken thighs, coconut milk, sweet potatoes, and some curry powder.";
//   console.log(`Query: ${query}`);
 
//   const stream = await chefAgent.stream([{ role: "user", content: query }]);
 
//   console.log("\n Chef Pravin: ");
 
//   for await (const chunk of stream.textStream) {
//     process.stdout.write(chunk);
//   }
 
//   console.log("\n\n✅ Recipe complete!");
// }
 

// Structured Ouput 


 
async function main() {
  const query =
    "I want to make Sambar, can you generate Sambar recipie for me?";
  console.log(`Query: ${query}`);
 
  // Define the Zod schema
  const schema = z.object({
    dish: z.string(),
    ingredients: z.array(
      z.object({
        name: z.string(),
        amount: z.string(),
      }),
    ),
    steps: z.array(z.string()),
  });
 
  const response = await chefAgent.generate(
    [{ role: "user", content: query }],
    { output: schema },
  );
  console.log("\n👨‍🍳 Chef Pravin:", response.object);
}
 
main();
