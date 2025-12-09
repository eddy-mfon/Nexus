/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} ($${p.price}): ${p.description}. Specs: ${p.features.join(', ')}`
  ).join('\n');

  return `You are NEXUS_AI, an advanced technical support unit for a high-end electronics store.
  Your tone is precise, professional, slightly robotic but helpful, and knowledgeable. Use tech terminology correctly.
  
  Here is the current hardware inventory:
  ${productContext}
  
  Answer user queries about specs, compatibility, and performance.
  Keep responses concise and formatted like a system log or terminal output where appropriate.
  If asked about items not in inventory, state that they are outside current parameters.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "ERROR: API_KEY_MISSING. CONNECTION REFUSED.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "ERROR: CONNECTION_TIMEOUT. SERVER UNREACHABLE.";
  }
};