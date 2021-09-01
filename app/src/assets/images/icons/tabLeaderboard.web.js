import React, { forwardRef, memo } from 'react'

function TabLeaderboardActiveIcon(props, svgRef) {
  // eslint-disable-next-line react/prop-types
  const { color } = props

  const SvgImage = () => (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <title>leaderboard default - icon</title>
      <g
        id="Design"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Browse"
          transform="translate(-274.000000, -736.000000)"
          fill={`${color || '#B5C3D6'}`}
          fillRule="nonzero"
        >
          <path
            d="M274,736 L274,741 C274,743.581847 276.004608,746 279.176773,746 C279.607224,747.661835 280.863327,748.973251 282.487702,749.491821 C282.264999,750.663239 281.852478,752.130447 281.084045,753.5 L279,753.5 L279,756 L289,756 L289,753.5 L286.915955,753.5 C286.147522,752.130447 285.735001,750.663239 285.512299,749.491821 C287.136673,748.973251 288.392777,747.661835 288.823227,746 C291.984925,746 294,743.589726 294,741 L294,736 L274,736 Z M276.5,741 L276.5,738.5 L279,738.5 L279,743.5 C277.621826,743.5 276.5,742.378784 276.5,741 Z M291.5,741 C291.5,742.378784 290.378174,743.5 289,743.5 L289,738.5 L291.5,738.5 L291.5,741 Z"
            id="leaderboard-default---icon"
          />
        </g>
      </g>
    </svg>
  )

  return <SvgImage />
}

const ForwardRef = forwardRef(TabLeaderboardActiveIcon)
const MemoForwardRef = memo(ForwardRef)

export default MemoForwardRef
