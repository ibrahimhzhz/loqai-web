interface Props {
  variant?: string;
}

const variantConfig: Record<string, {
  title: string;
  subtitle: string;
  messages: { from: "bot" | "user"; text: string }[];
  quickReplies: string[];
}> = {
  "loqbot-hotel": {
    title: "LoqBot — Grand Palace Hotel",
    subtitle: "AI Concierge · Online",
    messages: [
      { from: "bot", text: "Welcome to Grand Palace Hotel! I'm your AI concierge. How can I help you today?" },
      { from: "user", text: "Can I book a spa appointment for tomorrow at 3pm?" },
      { from: "bot", text: "Absolutely! I have a 60-minute deep tissue massage available tomorrow at 3:00 PM. Shall I confirm that for Room 412?" },
    ],
    quickReplies: ["Yes, confirm", "See other times", "What's included?"],
  },
  "loqbot-restaurant": {
    title: "LoqBot — Ember & Oak",
    subtitle: "Restaurant Assistant · Online",
    messages: [
      { from: "bot", text: "Hi! Welcome to Ember & Oak. Would you like to make a reservation or check our menu?" },
      { from: "user", text: "Table for 4 this Friday at 7pm please" },
      { from: "bot", text: "I have a table for 4 available this Friday, 20th March at 7:00 PM. Any dietary requirements I should note?" },
    ],
    quickReplies: ["Confirm booking", "Vegetarian options", "View menu"],
  },
  "loqbot-ecommerce": {
    title: "LoqBot — ShopSmart",
    subtitle: "Shopping Assistant · Online",
    messages: [
      { from: "bot", text: "Hey! I noticed you left some items in your cart. Your Nike Air Max are almost sold out — can I help you complete your order?" },
      { from: "user", text: "What's the return policy if they don't fit?" },
      { from: "bot", text: "No worries! We offer free returns within 30 days — no questions asked. You can start a return directly from your account." },
    ],
    quickReplies: ["Complete purchase", "Check my size", "View return policy"],
  },
  "loqbot-realestate": {
    title: "LoqBot — Premier Realty",
    subtitle: "Property Assistant · Online",
    messages: [
      { from: "bot", text: "Hello! I'm your property assistant. Are you looking to buy, rent, or sell a property?" },
      { from: "user", text: "Looking to buy a 3-bedroom in East Legon under $250K" },
      { from: "bot", text: "Great! I found 8 listings matching your criteria. Would you like to schedule viewings for the top 3 this week?" },
    ],
    quickReplies: ["See listings", "Book viewings", "Calculate mortgage"],
  },
  default: {
    title: "LoqBot — Custom Assistant",
    subtitle: "AI Assistant · Online",
    messages: [
      { from: "bot", text: "Hi! I'm your custom AI assistant, trained on your business knowledge. How can I help you today?" },
      { from: "user", text: "What are your support hours?" },
      { from: "bot", text: "I'm available 24/7! For complex issues requiring a human, I can connect you with our team instantly — average wait time is under 2 minutes." },
    ],
    quickReplies: ["Talk to a human", "Browse help docs", "Submit a ticket"],
  },
};

export default function LoqBotMockup({ variant = "default" }: Props) {
  const config = variantConfig[variant] ?? variantConfig["default"];

  return (
    <div className="p-5">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/8">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
          LB
        </div>
        <div>
          <p className="text-white/80 text-sm font-semibold">{config.title}</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <p className="text-white/35 text-xs">{config.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4 min-h-[180px]">
        {config.messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            {msg.from === "bot" && (
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-[9px] font-bold text-white mr-2 flex-shrink-0 mt-0.5">
                LB
              </div>
            )}
            <div
              className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                msg.from === "bot"
                  ? "bg-zinc-800/70 text-white/75 rounded-tl-sm"
                  : "bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-tr-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {config.quickReplies.map((reply) => (
          <button
            key={reply}
            className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs rounded-full hover:bg-blue-500/20 transition-colors"
          >
            {reply}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 bg-zinc-800/60 rounded-xl px-3 py-2.5 border border-white/8">
        <input
          className="flex-1 bg-transparent text-xs text-white/50 placeholder-white/25 outline-none"
          placeholder="Type your message..."
          readOnly
        />
        <button className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
        </button>
      </div>
    </div>
  );
}
