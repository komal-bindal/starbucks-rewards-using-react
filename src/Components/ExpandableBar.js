function ExpandableBar(props) {
  return (
    <div className="flex justify-between items-center py-2 mb-4 text-base font-normal">
      <h2 >{props.children}</h2>
      <svg
      className = "h-8 w-8"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path>
        <circle
          fill="transparent"
          cx="50%"
          cy="50%"
          r="75%"
        ></circle>
      </svg>
    </div>
  );
}
export default ExpandableBar;
