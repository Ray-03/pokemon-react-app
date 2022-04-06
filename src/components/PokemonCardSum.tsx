import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { PokemonNameUrlProps } from '../data/interfaces'

const PokemonCardSum = (element: PokemonNameUrlProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const id = element.url.split('/')[6]
  return (
    <>
      <Box
        key={id}
        padding={4}
        borderWidth={1}
        mt={4}
        borderRadius={4}
        backgroundColor={'white'}
        onClick={onOpen}
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
      >
        <Text>{`Poke ID: ${id}`}</Text>
        <Text textTransform="capitalize">{element.name}</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="outside">
        <ModalOverlay>
          <ModalContent maxW="90%">
            <ModalHeader textTransform="capitalize">{element.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody />
            <ModalFooter />
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}

export default PokemonCardSum
