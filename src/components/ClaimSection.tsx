
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const ClaimSection = ({ eligible, connected }: { eligible: boolean; connected: boolean }) => {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    if (!connected) {
      toast({ title: "Connect your wallet first!" });
      return;
    }
    if (!eligible) {
      toast({ title: "Not eligible for Spiritz NFT" });
      return;
    }
    setClaimed(true);
    toast({
      title: "Success!",
      description: "You've claimed your SUI Spiritz NFT. Check your wallet soon.",
    });
  };

  return (
    <div className="bg-bluepixel-800 rounded-xl border-4 border-bluepixel-500 px-8 py-10 shadow-pixel flex flex-col items-center w-full max-w-xl mx-auto animate-pixel-pop">
      <Sparkles size={48} className="text-bluepixel-200 mb-4" />
      <h2 className="font-pixel text-2xl text-bluepixel-100 mb-2 tracking-wide animate-bounce">
        Claim your SUI Spiritz NFT
      </h2>
      {claimed ? (
        <div className="text-green-300 font-pixel text-lg mt-4">NFT Claimed!</div>
      ) : (
        <button
          className={`mt-6 px-8 py-3 font-pixel uppercase border-2 rounded transition-all shadow-pixel text-lg ${
            !connected || !eligible
              ? "bg-bluepixel-900 border-bluepixel-500 text-bluepixel-300 cursor-not-allowed opacity-80"
              : "bg-bluepixel-500 border-bluepixel-200 text-white hover:bg-bluepixel-400 hover:scale-105 active:scale-95"
          }`}
          onClick={handleClaim}
          disabled={!connected || !eligible}
          aria-disabled={!connected || !eligible}
        >
          {connected
            ? eligible
              ? "Claim Spiritz"
              : "Not Eligible"
            : "Connect Wallet"}
        </button>
      )}
      <div className="text-bluepixel-300 text-xs mt-6 font-mono">
        Eligible wallets: Early SUI supporters. (Demo: eligibility is <b className="font-bold">random</b> for preview!)
      </div>
    </div>
  );
};

export default ClaimSection;
