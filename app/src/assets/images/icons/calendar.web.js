import React, { forwardRef, memo } from 'react'

function CalendarIcon(props, svgRef) {
  // eslint-disable-next-line react/prop-types
  const { color } = props

  const SvgImage = () => (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <g
        id="Design"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Average-Rent-Report---SQFT"
          transform="translate(-158.000000, -246.000000)"
          fill={color || '#F44C7F'}
          fill-rule="nonzero"
        >
          <path
            d="M163,246 L163,248 L165,248 L165,246 L167,246 L167,248 L169,248 L169,246 L171,246 L171,248 L173,248 C173.553,248 174,248.447 174,249 L174,249 L174,261 C174,261.553 173.553,262 173,262 L173,262 L159,262 C158.447,262 158,261.553 158,261 L158,261 L158,249 C158,248.447 158.447,248 159,248 L159,248 L161,248 L161,246 L163,246 Z M172,251 L160,251 L160,260 L172,260 L172,251 Z M164,256 L164,258 L162,258 L162,256 L164,256 Z M167,256 L167,258 L165,258 L165,256 L167,256 Z M170,256 L170,258 L168,258 L168,256 L170,256 Z M164,253 L164,255 L162,255 L162,253 L164,253 Z M167,253 L167,255 L165,255 L165,253 L167,253 Z M170,253 L170,255 L168,255 L168,253 L170,253 Z"
            id="calendar-icon"
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
