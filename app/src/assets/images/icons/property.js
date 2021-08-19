import React, { forwardRef, memo } from 'react'
import { SvgXml } from 'react-native-svg'

function PropertyIcon(props, svgRef) {
  const color = props.color
  const svgMarkup = `<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>properties-icon</title>
    <defs>
        <linearGradient x1="19.6396828%" y1="24.4102716%" x2="76.0101686%" y2="65.1554274%" id="linearGradient-1">
            <stop stop-color="#FF7F40" offset="0%"></stop>
            <stop stop-color="#F44C7F" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Browse" transform="translate(-16.000000, -58.000000)" fill-rule="nonzero">
            <g id="properties-icon" transform="translate(16.000000, 58.000000)">
                <rect id="base" fill="url(#linearGradient-1)" x="0" y="0" width="32" height="32" rx="8"></rect>
                <g id="Building,-house,-p" transform="translate(9.000000, 9.000000)" fill="${color || '#FFFFFF'}">
                    <path d="M0,3.427025 L0,14 L4.083275,14 L4.083275,2.6614 L0,3.427025 Z M2.916725,12.833275 L1.166725,12.833275 L1.166725,11.666725 L2.916725,11.666725 L2.916725,12.833275 Z M2.916725,10.5 L1.166725,10.5 L1.166725,9.333275 L2.916725,9.333275 L2.916725,10.5 Z M2.916725,8.166725 L1.166725,8.166725 L1.166725,7 L2.916725,7 L2.916725,8.166725 Z M2.916725,5.833275 L1.166725,5.833275 L1.166725,4.666725 L2.916725,4.666725 L2.916725,5.833275 Z" id="Shape"></path>
                    <path d="M5.25,0 L5.25,14 L14,14 L14,1.640625 L5.25,0 Z M8.75,12.833275 L7,12.833275 L7,11.666725 L8.75,11.666725 L8.75,12.833275 Z M8.75,10.5 L7,10.5 L7,9.333275 L8.75,9.333275 L8.75,10.5 Z M8.75,8.166725 L7,8.166725 L7,7 L8.75,7 L8.75,8.166725 Z M8.75,5.833275 L7,5.833275 L7,4.666725 L8.75,4.666725 L8.75,5.833275 Z M8.75,3.5 L7,3.5 L7,2.333275 L8.75,2.333275 L8.75,3.5 Z M12.25,12.833275 L10.5,12.833275 L10.5,11.666725 L12.25,11.666725 L12.25,12.833275 Z M12.25,10.5 L10.5,10.5 L10.5,9.333275 L12.25,9.333275 L12.25,10.5 Z M12.25,8.166725 L10.5,8.166725 L10.5,7 L12.25,7 L12.25,8.166725 Z M12.25,5.833275 L10.5,5.833275 L10.5,4.666725 L12.25,4.666725 L12.25,5.833275 Z" id="Shape"></path>
                </g>
            </g>
        </g>
    </g>
  </svg>`;

  const SvgImage = () => <SvgXml xml={svgMarkup} ref={svgRef} {...props} />

  return <SvgImage />;
}

const ForwardRef = forwardRef(PropertyIcon)
const MemoForwardRef = memo(ForwardRef)

export default MemoForwardRef
