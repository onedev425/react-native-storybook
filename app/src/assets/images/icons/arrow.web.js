import React, { forwardRef, memo } from 'react'

function CalendarIcon(props, svgRef) {
  // eslint-disable-next-line react/prop-types
  const { color } = props

  const SvgImage = () => (
    <svg
      width="7px"
      height="16px"
      viewBox="0 0 7 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <title>arrow-icon</title>
      <g
        id="Design"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Management"
          transform="translate(-1023.000000, -462.000000)"
          fill={color || '#D2D4DA'}
          fill-rule="nonzero"
        >
          <path
            d="M1023.54819,462.206838 C1024.07336,461.856721 1024.76976,461.963489 1025.16845,462.433357 L1025.25496,462.54819 L1029.76776,469.317401 C1030.01275,469.684879 1030.03997,470.151259 1029.84942,470.540715 L1029.76776,470.682812 L1025.25496,477.452023 C1024.87791,478.017595 1024.11376,478.170424 1023.54819,477.793375 C1023.02302,477.443259 1022.85373,476.759371 1023.13411,476.210631 L1023.20684,476.086611 L1027.2635,470.000106 L1023.20684,463.913602 C1022.85672,463.388428 1022.96349,462.692036 1023.43336,462.293345 L1023.54819,462.206838 Z"
            id="arrow-icon"
          ></path>
        </g>
      </g>
    </svg>
  )

  return <SvgImage />
}

const ForwardRef = forwardRef(CalendarIcon)
const MemoForwardRef = memo(ForwardRef)

export default MemoForwardRef
