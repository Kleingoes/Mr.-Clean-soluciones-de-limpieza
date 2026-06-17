export default function WaveSeparator() {
  return (
    <div className="relative -mb-1">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-20 md:h-28"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z"
          className="fill-brand-blue/10"
        />
        <path
          d="M0,50 C320,110 580,10 860,50 C1100,90 1300,20 1440,40 L1440,0 L0,0 Z"
          className="fill-brand-blue/5"
        />
      </svg>
    </div>
  )
}
