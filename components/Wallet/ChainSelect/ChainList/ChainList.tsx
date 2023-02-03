import React from 'react'

import { List } from '@chakra-ui/react'
import { useChains } from 'hooks/useChainInfo'

import ChainItem from './ChainItem'

function ChainList({ onChange, onClose, currentWalletState }) {
  const chains = useChains()

  return (
    <List spacing={1} color="white" width="full">
      {chains.map((chain, index) => (
        <ChainItem
          key={chain.chainId + chain?.chainName}
          chain={chain}
          index={index}
          onChange={onChange}
          onClose={onClose}
          chainList={chains}
          active={currentWalletState?.chainId === chain?.chainId}
        />
      ))}
    </List>
  )
}

export default ChainList
