import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useChat } from '../hooks/useChat';
import { MessageCircle, X, Send, Loader2, Bot, Sparkles, ChevronLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// 1. تعريف الأسئلة خارج المكون (Performance Optimization)
// هذا يضمن أن المصفوفة لا تأخذ مساحة في الذاكرة عند إعادة الرسم
const QUICK_ACTIONS = [
    { label: "💰 شحال السعر؟", text: "ما هي أسعار التكوين في الآلات؟" },
    { label: "📄 الملف المطلوب", text: "ما هو ملف التسجيل المطلوب؟" },
    { label: "🚜 أنواع الآلات", text: "ما هي الآلات المتوفرة للتكوين؟" },
    { label: "📍 وين جايين؟", text: "أين يقع مقر المدرسة؟" },
];

const AIChat: React.FC = () => {
    const { isOpen, toggleChat, messages, input, setInput, isLoading, sendMessage, messagesEndRef, setIsOpen } = useChat();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    // دالة لإرسال السؤال الجاهز مباشرة
    const handleChipClick = (text: string) => {
        setInput(text);
        // نستخدم setTimeout لضمان تحديث الحالة قبل الإرسال
        setTimeout(() => sendMessage(), 0);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans" dir="rtl">

            {/* 2. هذا الشرط {isOpen && ...} يضمن أن كل ما بداخله لا يستهلك موارد المتصفح إذا كان الشات مغلقاً */}
            {isOpen && (
                <div className="mb-4 w-[90vw] sm:w-96 h-[500px] max-h-[80vh] bg-slate-900/95 border border-slate-700 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right animate-in slide-in-from-bottom-10 fade-in">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 flex justify-between items-center shadow-md shrink-0">
                        <div className="flex items-center gap-3 text-slate-900">
                            <div className="bg-white/20 p-1.5 backdrop-blur-sm">
                                <Bot size={24} className="text-slate-900" />
                            </div>
                            <div>
                                <h3 className="font-bold text-base leading-tight">المساعد نعيم 🇩🇿</h3>
                                <p className="text-xs font-medium opacity-80">متصل الآن</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-900 hover:bg-white/20 p-2  transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                        {messages.length === 0 && (
                            <div className="text-center py-8 opacity-50">
                                <Bot size={48} className="mx-auto mb-2 text-yellow-500/50" />
                                <p className="text-sm text-slate-400">مرحباً بك في مؤسسة الجزائر للتكوين</p>
                            </div>
                        )}

                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex w-full ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                                    ? 'bg-slate-700 text-white rounded-br-none mr-auto'
                                    : 'bg-yellow-500/10 border border-yellow-500/20 text-gray-100 rounded-bl-none ml-auto'
                                    }`}>
                                    {msg.role === 'user' ? msg.text : (
                                        <div className="prose prose-invert prose-p:my-1 prose-ul:my-1 prose-strong:text-yellow-400 text-sm">
                                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-end w-full">
                                <div className="bg-yellow-500/5 p-3 rounded-xl rounded-bl-none flex items-center gap-2 ml-auto">
                                    <Loader2 size={16} className="animate-spin text-yellow-500" />
                                    <span className="text-xs text-yellow-500 font-medium">جاري الكتابة...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* 3. قسم الاقتراحات السريعة (Chips Area) */}
                    {/* يظهر فقط إذا لم يكن هناك تحميل، لكي لا يزعج المستخدم */}
                    {!isLoading && (
                        <div className="px-4 pb-2 bg-slate-800/50 backdrop-blur-md">
                            <div className="flex gap-2 overflow-x-auto py-2 scrollbar-hide mask-linear-fade">
                                {QUICK_ACTIONS.map((action, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleChipClick(action.text)}
                                        className="whitespace-nowrap px-3 py-1.5 bg-slate-700 hover:bg-yellow-500 hover:text-slate-900 text-slate-300 text-xs  border border-slate-600 transition-all duration-200 active:scale-95 flex-shrink-0"
                                    >
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input Area */}
                    <div className="p-3 bg-slate-800/50 border-t border-slate-700 backdrop-blur-md">
                        <div className="relative flex items-center gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                placeholder="اكتب سؤالك هنا..."
                                className="flex-1 bg-slate-900 text-white text-sm rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 border border-slate-700 placeholder-slate-500"
                            />
                            <button
                                onClick={() => sendMessage()}
                                disabled={isLoading || !input.trim()}
                                className="absolute left-1.5 bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 text-slate-900 p-2 transition-all"
                            >
                                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className="rtl:rotate-180" />}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <button
                onClick={() => toggleChat()}
                className="group flex items-center justify-center w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 text-slate-900  shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

export default AIChat;