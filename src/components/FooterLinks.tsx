
const FooterLinks = () => (
  <footer className="w-full mt-12 py-6 bg-bluepixel-900/80 border-t-4 border-bluepixel-400 flex flex-col md:flex-row items-center justify-between gap-4 px-6">
    <div className="font-pixel text-bluepixel-300">Made with 💙 by SUI Spiritz</div>
    <nav className="flex gap-5">
      <a
        href="https://x.com/sui_network"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-bluepixel-200 font-mono hover:scale-110 transition-transform"
      >
        Twitter/X
      </a>
      <a
        href="https://discord.gg/sui"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-bluepixel-200 font-mono hover:scale-110 transition-transform"
      >
        Discord
      </a>
    </nav>
  </footer>
);

export default FooterLinks;
