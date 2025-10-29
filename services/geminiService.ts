import { GoogleGenAI } from "@google/genai";
import type { FAQ } from '../types';

// Fix: Implement the function using the Gemini API as per the guidelines,
// removing the mock implementation and related constants.
export const generateBotResponse = async (userMessage: string, faqs: FAQ[]): Promise<string> => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const knowledgeBase = faqs.map(faq => `Q: ${faq.question}\nA: ${faq.answer}`).join('\n\n');

    const systemInstruction = `You are a friendly and helpful Bangladeshi eCommerce chatbot assistant named 'ShopAi'.
    Your goal is to help customers with their questions and take orders.
    You must reply in a friendly Bangla-English mix (Banglish).
    Use words like "Vaiya", "Apu", "Sir" to be polite.
    
    Use the following Knowledge Base to answer questions. If you don't know the answer, say you will connect them to a human agent.
    
    KNOWLEDGE BASE:
    ---
    ${knowledgeBase}
    ---
    
    INTENT DETECTION:
    1. If the user asks for price, provide the price.
    2. If the user asks about delivery, use the knowledge base to explain delivery policy.
    3. If the user asks for a discount, reply humorously but politely that prices are fixed but you appreciate them.
    4. If the user wants to confirm an order ('yes', 'confirm', 'order korbo'), your ONLY job is to ask for their Name, Address, and Phone Number. Do not say anything else.
    5. For any other questions, try to answer from the knowledge base or be generally helpful.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userMessage,
            config: {
                systemInstruction: systemInstruction,
            },
        });
        
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Sorry, I'm having trouble connecting. Please try again later.";
    }
};
