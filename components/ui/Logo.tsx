interface LogoProps {
  variant?: 'default' | 'white' | 'icon';
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({
  variant = 'default',
  width,
  height,
  className = ''
}: LogoProps) {
  // Dimensiones por defecto según variante
  const defaultWidth = variant === 'icon' ? 60 : 200;
  const defaultHeight = 60;

  const w = width || defaultWidth;
  const h = height || defaultHeight;

  if (variant === 'icon') {
    return (
      <svg
        width={w}
        height={h}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M30 5L50 17.32V42.68L30 55L10 42.68V17.32L30 5Z"
          fill="url(#gradient1)"
          stroke="#7C3AED"
          strokeWidth="2.5"
        />
        <path
          d="M22 24L16 30L22 36"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38 24L44 30L38 36"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="33"
          y1="21"
          x2="27"
          y2="39"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="gradient1"
            x1="10"
            y1="5"
            x2="50"
            y2="55"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#7C3AED"/>
            <stop offset="100%" stopColor="#EC4899"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === 'white') {
    return (
      <svg
        width={w}
        height={h}
        viewBox="0 0 200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M30 5L45 13.66V30.34L30 39L15 30.34V13.66L30 5Z"
          fill="white"
          fillOpacity="0.1"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M24 18L20 22L24 26"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 18L40 22L36 26"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="32"
          y1="16"
          x2="28"
          y2="28"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text
          x="60"
          y="35"
          fontFamily="Arial, sans-serif"
          fontSize="32"
          fontWeight="bold"
          fill="white"
        >
          Nixi
        </text>
        <text
          x="60"
          y="48"
          fontFamily="Arial, sans-serif"
          fontSize="10"
          fill="white"
          fillOpacity="0.7"
          letterSpacing="2"
        >
          WEB DEV
        </text>
      </svg>
    );
  }

  // Default variant
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 5L45 13.66V30.34L30 39L15 30.34V13.66L30 5Z"
        fill="url(#gradient2)"
        stroke="#7C3AED"
        strokeWidth="2"
      />
      <path
        d="M24 18L20 22L24 26"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 18L40 22L36 26"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="32"
        y1="16"
        x2="28"
        y2="28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="60"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill="#1F2937"
      >
        Nixi
      </text>
      <text
        x="60"
        y="48"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fill="#6B7280"
        letterSpacing="2"
      >
        WEB DEV
      </text>
      <defs>
        <linearGradient
          id="gradient2"
          x1="15"
          y1="5"
          x2="45"
          y2="39"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7C3AED"/>
          <stop offset="100%" stopColor="#EC4899"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
