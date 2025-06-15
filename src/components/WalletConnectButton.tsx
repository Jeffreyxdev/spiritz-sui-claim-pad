
import { useState } from "react";

const WalletConnectButton = () => {
  const [connected, setConnected] = useState(false);

  return (
    <button
      className="relative group px-6 py-3 font-pixel bg-bluepixel-700 text-white border-2 border-bluepixel-400 rounded-md shadow-pixel hover:bg-bluepixel-500 hover:shadow-lg hover:-translate-y-1 transition-all focus-visible:outline-2 focus-visible:outline-bluepixel-200"
      onClick={() => setConnected((c) => !c)}
      aria-label={connected ? "Disconnect Wallet" : "Connect Wallet"}
    >
      {connected ? (
        <span>
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full me-2 align-middle"></span>
          Connected
        </span>
      ) : (
        <span>
          <span className="inline-block w-2 h-2 bg-red-400 rounded-full me-2 align-middle"></span>
          Connect Wallet
        </span>
      )}
    </button>
  );
};

export default WalletConnectButton;
