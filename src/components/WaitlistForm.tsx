
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setEmail("");
    toast({ title: "You're on the waitlist!", description: "We'll notify you about launch & eligibility." });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-lg mx-auto mt-8 bg-bluepixel-900 border-2 border-bluepixel-400 rounded-lg px-4 py-6 shadow-pixel flex-col md:flex-row items-center gap-3 animate-pixel-pop"
    >
      <input
        type="email"
        required
        placeholder="Your email for updates..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-bluepixel-800 text-bluepixel-100 placeholder:text-bluepixel-300 font-mono rounded border border-bluepixel-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-bluepixel-500 shadow-inner text-base"
        autoComplete="email"
        aria-label="Email"
      />
      <button
        type="submit"
        className="font-pixel px-6 py-2 mt-2 md:mt-0 bg-bluepixel-500 text-white rounded border-2 border-bluepixel-300 hover:bg-bluepixel-400 shadow-pixel hover:scale-105 transition-all"
        disabled={sent}
      >
        {sent ? "Added!" : "Join Waitlist"}
      </button>
    </form>
  );
};

export default WaitlistForm;
