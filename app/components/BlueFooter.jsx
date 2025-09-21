// BlueFooter.jsx
export default function BlueFooter({
  className = "w-full h-14 text-blue-700 md:hidden",
}) {
  return (
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      aria-hidden
      className={className}
    >
      <path
        d="M0 48 C420 42, 980 18, 1440 0 L1440 160 L0 160 Z"
        fill="currentColor"
      />
    </svg>
  );
}
