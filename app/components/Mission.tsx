import React from "react";

interface MissionItem {
  number: string | number;
  text: string;
}

interface MissionProps {
  items?: MissionItem[];
  className?: string;
}

import { CUBE } from "@/app/assets/cube";

interface LogoProps {
  className?: string;
}

export default function Mission({ 
  items = [
    { number: "1", text: "mission1" },
    { number: "2", text: "mission2" }
  ],
  className = ""
}: MissionProps) {
  return (
    <div className={`relative align-center justify-center flex flex-col w-[w-full max-w-[1077px] aspect-[1077/465.75] h-[465.75px] text-white ${className}`}>
      {/* Background Layer with Backdrop Blur */}
      <div
        className="absolute left-[-1px] top-[-1px] w-full h-full rounded-xl bg-[#1f1f1f]/40 border border-white/[0.15] backdrop-blur-sm transition-all duration-100 hover:border-white/[0.30]"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      />

      {/* Content Container */}
      <div className="absolute font-mono left-[74px] top-[55px] flex h-[356px] items-center justify-start gap-10 ">
        
        {/* ASCII Art - Using font-mono for strict alignment */}
        <div className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center font-mono leading-tight whitespace-pre select-none bg-gradient-to-tr from-[#02E53F] to-[#95D500] bg-clip-text text-transparent">
{CUBE}
        </div>

        {/* Vertical Divider Line */}
        <svg
          width={1}
          height={356}
          viewBox="0 0 1 356"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-stretch flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path d="M0.5 0V356" stroke="white" strokeOpacity="0.15" />
        </svg>

        {/* Text Column */}
        <div className="font-mono flex w-[539px] flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2.5">
          <div className="font-mono relative flex items-center justify-center gap-2.5 p-2.5 pl-0">
            <h2 className="font-mono text-4xl font-bold text-left text-white tracking-wide">
              OUR MISSION
            </h2>
          </div>
          
          <div className="font-mono flex flex-col items-start justify-start self-stretch gap-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="font-mono relative flex items-start justify-start gap-4 self-stretch pb-1.5"
              >
                <p className="font-mono w-[29px] flex-shrink-0 text-center text-base text-white opacity-25 font-mono">
                  {item.number}
                </p>
                <p className="font-mono w-[494px] flex-grow text-left text-base text-white/80 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}