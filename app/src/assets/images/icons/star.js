import React, { forwardRef, memo } from 'react'
import { SvgXml } from 'react-native-svg'

const StarIcon = (props, svgRef) => {
  // eslint-disable-next-line react/prop-types
  const { color } = props
  const svgMarkup = `<svg
    width="48px"
    height="44px"
    viewBox="0 0 48 44"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        x1="34.2900594%"
        y1="35.2102096%"
        x2="73.7649918%"
        y2="62.6632406%"
        id="linearGradient-1"
      >
        <stop stop-color="#FF7F40" offset="0%"></stop>
        <stop stop-color="#F44C7F" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g
      id="Design"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Property-Leaderboard"
        transform="translate(-32.000000, -329.000000)"
        fill-rule="nonzero"
      >
        <g id="star-1-icon-copy" transform="translate(32.000000, 329.000000)">
          <path
            d="M24.0042,36.483 L10.9644936,43.0944071 C10.4719063,43.3441593 9.87012117,43.1473026 9.62036897,42.6547152 C9.5223096,42.4613123 9.48977214,42.2412759 9.52766066,42.0277699 L12.0042,28.0722 L12.0042,28.0722 L1.52294515,18.2311258 C1.12031854,17.853091 1.10038288,17.22024 1.47841761,16.8176134 C1.6345847,16.6512873 1.84293153,16.5433629 2.06888111,16.5117513 L16.584,14.481 L16.584,14.481 L23.1144498,1.73640496 C23.3663065,1.24489032 23.9689281,1.05060918 24.4604427,1.30246588 C24.6469346,1.39802608 24.7986951,1.54975666 24.894292,1.73622975 L31.428,14.481 L31.428,14.481 L45.9318752,16.5116476 C46.4788253,16.5882245 46.8601381,17.0936931 46.7835611,17.6406432 C46.75194,17.8664965 46.6440703,18.074757 46.47784,18.2308887 L36,28.0722 L36,28.0722 L38.489466,42.0265612 C38.5864625,42.5702616 38.2243374,43.089649 37.680637,43.1866455 C37.4669572,43.2247661 37.2466756,43.1923282 37.0530549,43.0942299 L24.0042,36.483 L24.0042,36.483 Z"
            id="Path"
            fill="${color || 'url(#linearGradient-1)'}"
          ></path>
        </g>
      </g>
    </g>
  </svg>`

  const SvgImage = () => <SvgXml xml={svgMarkup} ref={svgRef} {...props} />

  return <SvgImage />
}

const ForwardRef = forwardRef(StarIcon)
const MemoForwardRef = memo(ForwardRef)

export default MemoForwardRef
