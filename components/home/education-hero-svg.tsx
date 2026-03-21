'use client';

export function EducationHeroSVG() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="w-full h-full"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Background circle */}
      <circle cx="300" cy="300" r="280" fill="#F0F7FF" stroke="#FF9500" strokeWidth="3" />

      {/* Decorative elements */}
      <circle cx="100" cy="120" r="15" fill="#FF9500" opacity="0.3" />
      <circle cx="520" cy="150" r="20" fill="#0066CC" opacity="0.2" />
      <circle cx="550" cy="450" r="18" fill="#FF9500" opacity="0.25" />

      {/* Books stack - left side */}
      <g>
        <rect x="80" y="350" width="60" height="40" rx="4" fill="#FF9500" />
        <rect x="85" y="390" width="60" height="40" rx="4" fill="#0066CC" />
        <rect x="90" y="430" width="60" height="40" rx="4" fill="#4CAF50" />
      </g>

      {/* Light bulb - representing ideas */}
      <g>
        <circle cx="480" cy="200" r="25" fill="#FFD700" stroke="#FF9500" strokeWidth="2" />
        <rect x="470" y="220" width="20" height="15" fill="#FF9500" />
        <line x1="465" y1="235" x2="495" y2="235" stroke="#FF9500" strokeWidth="3" />
      </g>

      {/* Growth arrow */}
      <g>
        <path
          d="M 150 500 L 150 350 L 130 370 M 150 350 L 170 370"
          stroke="#0066CC"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Mentor figure - left */}
      <g>
        <circle cx="200" cy="280" r="20" fill="#8B5A00" />
        <rect x="180" y="310" width="40" height="50" rx="5" fill="#0066CC" />
        <rect x="175" y="310" width="10" height="60" fill="#FDBCB4" />
        <rect x="215" y="310" width="10" height="60" fill="#FDBCB4" />
        <circle cx="190" cy="375" r="8" fill="#FDBCB4" />
        <circle cx="210" cy="375" r="8" fill="#FDBCB4" />
      </g>

      {/* Student figure - center-right */}
      <g>
        <circle cx="380" cy="290" r="22" fill="#5D4037" />
        <rect x="358" y="320" width="44" height="55" rx="5" fill="#FF9500" />
        <rect x="352" y="320" width="12" height="65" fill="#FDBCB4" />
        <rect x="396" y="320" width="12" height="65" fill="#FDBCB4" />
        <circle cx="365" cy="390" r="9" fill="#FDBCB4" />
        <circle cx="391" cy="390" r="9" fill="#FDBCB4" />
      </g>

      {/* Laptop - representing online learning */}
      <g>
        <rect x="280" y="420" width="70" height="45" rx="3" fill="#4CAF50" />
        <rect x="275" y="465" width="80" height="8" rx="2" fill="#333" />
        <circle cx="315" cy="490" r="4" fill="#666" />
      </g>

      {/* Sparkles - around mentors and students */}
      <g fill="#FF9500" opacity="0.6">
        <circle cx="240" cy="250" r="4" />
        <circle cx="420" cy="270" r="4" />
        <circle cx="320" cy="400" r="4" />
      </g>

      {/* Student testimonial stat circle */}
      <circle cx="480" cy="380" r="50" fill="white" stroke="#FF9500" strokeWidth="2" />
      <text x="480" y="375" textAnchor="middle" className="text-base font-bold fill-primary">
        5k+
      </text>
      <text x="480" y="395" textAnchor="middle" className="text-xs fill-muted-foreground">
        Students
      </text>
    </svg>
  );
}
