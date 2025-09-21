export default function GreenSwoosh({
  className = "absolute left-0 right-0 w-full h-36 text-green-600 md:hidden",
  strokeWidth = 50, // thickness of the band
}) {
  return (
    <svg
      viewBox="0 0 1440 300"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      {/* One simple curve from left to right */}
      <path
        d="M-100 160 Q 720 260 1540 140"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
