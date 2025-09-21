export default function HeroBackdrop() {
  return (
    <svg
      className="absolute inset-0 -z-10 h-full w-full"
      viewBox="0 0 390 800"
      preserveAspectRatio="none"
      aria-hidden
    >
      {/* Yellow top sweep */}
      <path d="M0 0H390 V90 C310 0 0 0 0 0" fill="#FACC15" /* yellow-400 */ />
      {/* Green middle sweep */}
      {/* <path
        d="M0 300C80 250 300 250 390 300V410H0V300Z"
        fill="#22C55E" green-500
      /> */}
      {/* Blue bottom sweep */}
      {/* <path
        d="M0 680C100 730 290 720 390 660V800H0V680Z"
        fill="#1D4ED8" blue-700
      /> */}
    </svg>
  );
}
