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
            fill="#000000"
          />
          <path
            d="M30.08,150.27c-0.03,23.98,7.15,47.42,20.59,67.27l-7.15,4.84c-27.81-41.15-29.47-94.63-4.3-137.41
		c11.31-19.17,27.4-35.09,46.71-46.23l4.3,7.49C53.15,67.59,30.08,107.49,30.08,150.27z"
            
            fill="#000000"
          
          />
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="360 150 150"
            to="0 150 150"
            dur="5s"
            additive="sum"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </Flex>
  )
}

export default Loader
