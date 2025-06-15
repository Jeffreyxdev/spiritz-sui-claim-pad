
const faqs = [
  {
    q: "What are SUI Spiritz?",
    a: "SUI Spiritz are exclusive, pixel-themed NFTs celebrating the Sui Network's vibrant community. Only eligible wallets can claim!"
  },
  {
    q: "Who is eligible to claim?",
    a: "Eligibility is for early SUI supporters and handpicked wallets. On this preview, eligibility is randomized for demo purposes."
  },
  {
    q: "How do I know if I'm eligible?",
    a: "Connect your Sui wallet. The claim button will activate if you're selected."
  },
  {
    q: "What if I’m not eligible?",
    a: "Join the waitlist above! You’ll get notified if more spots open up."
  },
  {
    q: "When is the drop?",
    a: "Stay tuned! All info and claim details will be sent to the waitlist and eligible wallets."
  },
];

const FAQSection = () => (
  <div className="mt-16 bg-bluepixel-900/90 rounded-xl py-10 px-6 md:px-20 max-w-4xl mx-auto border-2 border-bluepixel-400 shadow-pixel">
    <h2 className="font-pixel text-2xl text-bluepixel-200 mb-8 text-center">FAQ</h2>
    <div className="space-y-5">
      {faqs.map((f, i) => (
        <div key={i} className="px-4 py-3 rounded bg-bluepixel-800/70 transition-all hover:bg-bluepixel-700/90">
          <div className="font-pixel text-bluepixel-100 mb-1">{f.q}</div>
          <div className="text-bluepixel-300 font-mono">{f.a}</div>
        </div>
      ))}
    </div>
  </div>
);

export default FAQSection;
