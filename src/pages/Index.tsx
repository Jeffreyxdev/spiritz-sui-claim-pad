
import PixilatedLogo from "@/components/PixilatedLogo";
// import WalletConnectButton from "@/components/WalletConnectButton";
import ClaimSection from "@/components/ClaimSection";
import WaitlistForm from "@/components/WaitlistForm";
import FAQSection from "@/components/FAQSection";
import FooterLinks from "@/components/FooterLinks";
import { useState, useMemo } from "react";
import hero from "../../public/Aquessa.png"

// Placeholder hero blue pixel image (see context)
const HERO_IMAGE =
  hero

// Desktop-focused full-width layout!
const Index = () => {
  // Simulate wallet connect & eligibility
  const [connected, setConnected] = useState(false);
  // Memo random eligibility (simulate for now). On mainnet, check actual wallet address!
  const eligible = useMemo(() => (Math.random() > 0.5), []);

  return (
    <div className="bg-gradient-to-br from-bluepixel-900 via-bluepixel-800 to-bluepixel-500 min-h-screen w-full">
      <header className="flex flex-col md:flex-row items-center justify-between py-10 px-8 max-w-6xl mx-auto">
        <PixilatedLogo />
        <div className="mt-4 md:mt-0">
      
        </div>
      </header>
      <main className="flex flex-col items-center w-[100%  ] md:w-[60%] mx-auto">
        <div className="text-center mb-8 mt-10">
          <h1 className="font-pixel text-3xl md:text-4xl text-bluepixel-100 mb-2">
            Welcome to the <span className="text-bluepixel-300">SUI Spiritz NFT</span> Whitelist!
          </h1>
          <p className="text-bluepixel-200 font-mono text-lg md:text-xl">
            Claim your exclusive SUI Spiritz NFT as an early supporter of the Sui ecosystem.
          </p>
        </div>
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 py-8 md:py-16 px-4 md:px-0 max-w-6xl mx-auto">
          <div className="md:flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-pixel text-[2.4rem] md:text-5xl leading-tight text-bluepixel-100 mb-6 drop-shadow-lg">
              Claim Your <span className="text-bluepixel-300">SUI Spiritz NFT</span> <br className="hidden md:block" />
              <span className="text-bluepixel-200">Early SUI Supporters</span>
            </h1>
            <div className="text-bluepixel-200 font-mono text-lg md:text-xl mb-7 max-w-xl">
              Only for <span className="text-bluepixel-100 font-semibold">eligible Sui wallets</span>. Not eligible yet? Join the whitelist to be eligible!
            </div>
            <WaitlistForm />
          </div>
          <div className="md:flex-1 flex flex-col items-center gap-6 animate-pixel-pop">
            <img
              src={HERO_IMAGE}
              alt="Pixilated blue hero"
              className="rounded-lg border-4 border-bluepixel-300 shadow-pixel max-w-xs md:max-w-sm"
              style={{ imageRendering: "pixelated" as any }}
              width={350}
              height={250}
            />
            <ClaimSection eligible={eligible} connected={connected} />
          </div>
        </section>
        <FAQSection />
      </main>
      <FooterLinks />
    </div>
  );
};

export default Index;
