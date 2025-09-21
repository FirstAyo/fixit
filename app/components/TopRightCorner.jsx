export default function TopRightCorner({
  className = "w-72 h-auto text-yellow-400",
}) {
  return (
    <svg
      viewBox="0 0 100 60"
      aria-hidden="true"
      className={`absolute right-0 top-0 ${className}`}
    >
      {/* fill uses currentColor so you can style with Tailwind text-* */}
      <path d="M100 0 H60 A60 60 0 0 1 100 40 Z" fill="currentColor" />
    </svg>
  );
}
