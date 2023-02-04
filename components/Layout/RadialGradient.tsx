import React, { FC, useMemo } from 'react'

import { Box } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'

// import { activeChain } from 'state/atoms/activeChain';
import { walletState } from '../../state/atoms/walletAtoms'

const backgrounds = {
  'pisco-1':
    'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)',
  'uni-3':
    'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)',
  'phoenix-1':
    'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)',
  'juno-1':
    'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)',
  'chihuahua-1':
    'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)',
}

const RadialGradient: FC = () => {
  const { chainId } = useRecoilValue(walletState)
  const wallet = useMemo(() => {
    return backgrounds[chainId]
  }, [chainId])

  return (
    <Box
      position="absolute"
      height="718px"
      left="-131px"
      top="-314px"
      background={wallet}
      width="full"
      filter="blur(250px)"
      borderTopRightRadius="20%"
      zIndex="-1"
    />
  )
}

export default RadialGradient
