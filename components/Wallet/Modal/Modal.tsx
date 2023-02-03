import React from 'react'

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react'
import TerraStationConnectButton from 'components/Wallet/Modal/TerraStationConnectButton'

function WalletModal({ isOpenModal, onCloseModal }) {
  return (
    <Modal isOpen={isOpenModal} onClose={onCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack justify="center" align="center" textAlign="center">
            <TerraStationConnectButton onCloseModal={onCloseModal} />
          </VStack>
        </ModalBody>

        {/* <ModalFooter >
            <Button colorScheme='blue' mr={3} onClick={onCloseModal}>
              Close
            </Button>
          </ModalFooter> */}
      </ModalContent>
    </Modal>
  )
}

export default React.memo(WalletModal)
