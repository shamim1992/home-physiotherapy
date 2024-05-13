import OpenAI from "openai";

// const openai = new OpenAI({
  
// });
// organization: "",
//   apiKey: "",
// org-cR86cPJtHYWwnYI0PuKadLIU
// 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
export const chatHandler = async (request, response) => {
  try {
    // Check if request.body exists and has a chats property
    if (!request.body || !request.body.chats) {
      throw new Error("Chats must be provided in the request body");
    }

    const chats = request.body.chats;

    // Check if chats is an array
    if (!Array.isArray(chats)) {
      throw new Error("Chats must be an array");
    }

    console.log(chats);

    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a Mitra. You can help with diabetes disease",
        },
        ...chats,
      ],
    });

    response.json({
      output: result.data.choices[0].message,
    });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};
