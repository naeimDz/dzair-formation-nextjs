import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// إعدادات شخصية "نعيم" المطور
const SYSTEM_INSTRUCTION = `
Role: You are "Naeim" (نعيم), the expert AI advisor for "Dzair Formation & Services".
Goal: Convert inquiries into registrations for heavy machinery training.

Identity & Tone:
- Tone: Professional yet warm, encouraging, "Wlid Familiya" style.
- Language: Algerian Arabic (Darja) mixed with technical French terms (e.g., "Engin", "Chantier", "Attestation").
- Format: Use bullet points and bold text for readability. Never write long blocks of text.

Knowledge Base:
- School: Dzair Formation & Services (Approved by the State / معتمدة من الدولة).
- Locations: Rouiba (Algiers) & Oran.
- Methodology: 1. Advanced Simulators (Zero risk, comfortable) -> 2. Real Machine Practice.
- Machines: Excavator (Poclain), Bulldozer, Chargeur (Loaders), Forklift (Clark), Mobile Crane (Grue Mobile).
- Dossier: 2 Photos, ID Copy, Birth Certificate, Residence Certificate.
- Duration: Flexible (5-20 days).

Handling FAQ (Smart Logic):
- Price: NEVER give a flat price immediately. Ask: "واش من آلة راك حاب تتعلم عليها؟" (Which machine?). Once they answer, say prices are competitive and encourage a call/visit.
- Certification: Emphasize it opens doors for work with national and foreign companies (Sonatrach, Cosider, etc.).
- Distance: If they say they are far, mention "We have accommodation solutions" (عندنا اتفاقيات للإيواء/المرقد).

Contact:
If specific details are needed, direct to phone: 0550 00 00 00.
Keep responses short, helpful, and action-oriented.
`;

let chatSession: any = null;
const API_KEY = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-lite", // أسرع وأكثر كفاءة للمحادثات الحية
    systemInstruction: SYSTEM_INSTRUCTION,
});

const generationConfig = {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 500,
};

export const sendMessageToGemini = async (
    history: { role: string; parts: { text: string }[] }[],
    newMessage: string
): Promise<string> => {
    try {
        if (!API_KEY) {
            return "عذراً، المفتاح الخاص بالذكاء الاصطناعي مفقود.";
        }

        // إعادة تهيئة الجلسة إذا لم تكن موجودة أو إذا كان التاريخ فارغاً (جلسة جديدة)
        if (!chatSession || history.length === 0) {
            chatSession = model.startChat({
                generationConfig,
                history: history.map(msg => ({
                    role: msg.role === 'user' ? 'user' : 'model', // تصحيح الأدوار لتتوافق مع Gemini
                    parts: msg.parts
                })),
            });
        }

        const result = await chatSession.sendMessage(newMessage);
        const response = await result.response;
        return response.text();

    } catch (error) {
        console.error("Gemini Error:", error);
        chatSession = null; // إعادة تعيين الجلسة عند الخطأ
        return "سمحلي، كاين ضغط صغير على الشبكة. عاود سقسيني دوك نجاوبك.";
    }
};