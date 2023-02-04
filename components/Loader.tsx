import React from 'react'

import { Flex } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Flex w="10rem" h="10rem" justify="center" align="center">
      <svg
        version="1.1"
        id="eTw5qp7ydSE1"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 300.31 300.31"
      >
        <g>
          <path
            d="M221.89,257.1l-4.81-7.18c54.13-36.34,69.33-109.27,34.28-164.24l7.28-4.64
		C296.21,139.98,279.91,218.12,221.89,257.1z"
            fill="#ffcc00"
          
          />
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="360 150 150"
            to="0 150 150"
            dur="1s"
            additive="sum"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </Flex>
  )
}

export default Loader
