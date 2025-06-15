
import { Sparkles } from "lucide-react";

const PixilatedLogo = () => (
  <div className="flex items-center gap-3 select-none">
    <span
      className="font-pixel text-3xl md:text-4xl text-bluepixel-400 drop-shadow-[1.5px_1.5px_0_rgba(80,187,255,0.3)] tracking-wider"
      style={{ textShadow: "2px 2px 0 #2273f7, 4px 4px 0 #b3d8ff" }}
    >
      SUI SPIRITZ
    </span>
    <Sparkles size={34} className="text-bluepixel-300 animate-pulse ms-2" />
  </div>
);

export default PixilatedLogo;
