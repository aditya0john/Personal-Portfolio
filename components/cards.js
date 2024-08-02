import Link from "next/link";

export default function Cards({ text, button, src, href, color, SVG }) {
  return (
    <div className={`box con change_button bg-${color}-100 rounded-lg`}>
      <Link href={href}>
        <div className="con_upper p-1">
          <svg
            className={`text-${color}-500 flex items-center`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="0.8"
            stroke={`currentColor`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={src} />
            <text
              x="12"
              y="14"
              fontSize="5"
              strokeWidth={0.4}
              textAnchor="middle"
              className={`text-${color}-500`}
            >
              {SVG}
            </text>
          </svg>
        </div>
      </Link>
      <div className="card-body p-0 con_lower">
        <div className="text-center p-1 h-20 uppercase user-select-none">
          {text}
        </div>
        <div
          className={`py-3 items-center justify-center rounded-md flex card-body bg-${color}-200 text-black`}
        >
          <Link href={href} className="text-decoration-none text-black">
            {button}
          </Link>
        </div>
      </div>
    </div>
  );
}
