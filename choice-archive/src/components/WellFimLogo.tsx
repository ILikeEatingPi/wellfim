import React from "react";
import { cn } from "@/lib/utils";

/**
 * Exact wellFIM Logo with golden smiling neuron arching over the "wellFIM" wordmark:
 * - Cell body (soma) with friendly face (eyes + smile)
 * - Branching dendrites on left
 * - High-arching axon curving over the top
 * - Terminal rootlets with golden glowing tips on right
 * - "wellFIM" text ("well" in white, "FIM" in gold) nestled under the arch
 */
export const WellFimLogo: React.FC<{
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
}> = ({ className, size = "md", showTagline = false }) => {
  const containerSizes = {
    sm: "h-12 min-w-[140px]",
    md: "h-16 min-w-[180px]",
    lg: "h-24 min-w-[260px]",
    xl: "h-32 min-w-[340px]",
  };

  return (
    <a
      href="#top"
      className={cn(
        "inline-flex flex-col items-start group select-none transition-transform hover:opacity-95",
        containerSizes[size],
        className,
      )}
      aria-label="wellFIM Home"
    >
      <svg
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <linearGradient
            id="wellFimGoldGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="35%" stopColor="#FACC15" />
            <stop offset="70%" stopColor="#E29B27" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Arching Axon over the wordmark */}
        <path
          d="M 44 32 C 68 6, 140 6, 172 44"
          stroke="url(#wellFimGoldGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#goldGlow)"
        />
        <path
          d="M 43 34 C 68 10, 138 10, 169 46"
          stroke="#FEF08A"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.9"
          fill="none"
        />

        {/* Axon Terminals (right side) */}
        <g
          stroke="url(#wellFimGoldGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M 172 44 Q 178 37 183 29" />
          <path d="M 183 29 Q 187 24 192 21" />
          <path d="M 183 29 Q 185 23 183 16" />
          <path d="M 172 44 Q 181 46 188 49" />
          <path d="M 188 49 Q 193 50 196 48" />
          <path d="M 188 49 Q 192 55 194 60" />
          <path d="M 172 44 Q 175 53 179 61" />
          <path d="M 179 61 Q 177 68 174 73" />
          <path d="M 179 61 Q 184 66 189 70" />
        </g>

        {/* Cell Body (Soma) */}
        <path
          d="M 38 23 C 43 25, 48 29, 49 35 C 51 41, 47 47, 44 51 C 40 56, 34 57, 28 55 C 22 54, 18 49, 17 43 C 16 37, 20 31, 25 27 C 30 23, 35 22, 38 23 Z"
          fill="url(#wellFimGoldGrad)"
          stroke="url(#wellFimGoldGrad)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Dendrites */}
        <g
          stroke="url(#wellFimGoldGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M 35 24 Q 34 15 31 8" />
          <path d="M 31 8 Q 29 4 25 2" />
          <path d="M 31 8 Q 34 4 37 3" />
          <path d="M 28 27 Q 22 18 18 11" />
          <path d="M 18 11 Q 15 7 11 5" />
          <path d="M 18 11 Q 20 6 22 3" />
          <path d="M 20 34 Q 12 30 5 28" />
          <path d="M 5 28 Q 2 25 1 20" />
          <path d="M 5 28 Q 2 31 1 35" />
          <path d="M 18 43 Q 10 44 4 48" />
          <path d="M 4 48 Q 1 49 1 54" />
          <path d="M 4 48 Q 1 45 2 40" />
          <path d="M 22 52 Q 15 61 9 68" />
          <path d="M 9 68 Q 5 73 3 79" />
          <path d="M 9 68 Q 11 75 13 80" />
          <path d="M 31 56 Q 30 65 28 74" />
          <path d="M 28 74 Q 26 81 22 86" />
          <path d="M 28 74 Q 32 81 35 87" />
          <path d="M 41 53 Q 46 62 49 70" />
          <path d="M 49 70 Q 53 76 57 81" />
          <path d="M 49 70 Q 47 77 45 83" />
        </g>

        {/* Terminal Glowing Dots */}
        <g fill="#FEF08A">
          <circle cx="25" cy="2" r="1.5" />
          <circle cx="37" cy="3" r="1.5" />
          <circle cx="11" cy="5" r="1.5" />
          <circle cx="22" cy="3" r="1.5" />
          <circle cx="1" cy="20" r="1.5" />
          <circle cx="1" cy="35" r="1.5" />
          <circle cx="1" cy="54" r="1.5" />
          <circle cx="2" cy="40" r="1.5" />
          <circle cx="3" cy="79" r="1.5" />
          <circle cx="13" cy="80" r="1.5" />
          <circle cx="22" cy="86" r="1.5" />
          <circle cx="35" cy="87" r="1.5" />
          <circle cx="57" cy="81" r="1.5" />
          <circle cx="45" cy="83" r="1.5" />
          <circle cx="192" cy="21" r="1.5" />
          <circle cx="183" cy="16" r="1.5" />
          <circle cx="196" cy="48" r="1.5" />
          <circle cx="194" cy="60" r="1.5" />
          <circle cx="174" cy="73" r="1.5" />
          <circle cx="189" cy="70" r="1.5" />
        </g>

        {/* Smiling Face inside Soma */}
        <g fill="#0F172A">
          <circle cx="30" cy="38" r="2.5" />
          <circle cx="40" cy="38" r="2.5" />
          <circle cx="29" cy="37" r="0.9" fill="#FFFFFF" />
          <circle cx="39" cy="37" r="0.9" fill="#FFFFFF" />
          <path
            d="M 28 44.5 Q 35 51 42 44.5"
            stroke="#0F172A"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* exact "wellFIM" Wordmark embedded right under the neuron arch */}
        <text
          x="52"
          y="74"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="32"
          letterSpacing="0.02em"
        >
          <tspan fill="#FFFFFF">well</tspan>
          <tspan fill="#E29B27">FIM</tspan>
        </text>

        {showTagline && (
          <text
            x="54"
            y="88"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="600"
            fontSize="8"
            letterSpacing="0.22em"
            fill="rgba(255,255,255,0.75)"
          >
            WHOLE PERSON WELLNESS
          </text>
        )}
      </svg>
    </a>
  );
};
