import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Image,
  List,
  ListItem,
  HStack,
  Button,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { PokemonDetailProps, PokemonNameUrlProps } from '../data/interfaces'
import PokemonCatchResultsModal from './PokemonCatchResultsModal'
import PokemonTypeBadge from './PokemonTypeBadge'

const PokemonCardSum = (element: PokemonNameUrlProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: catchPokemonIsOpen,
    onOpen: catchPokemonOnOpen,
    onClose: catchPokemonOnClose,
  } = useDisclosure()
  const id = element.url.split('/')[6]

  const [pokemonData, setPokemonData] = useState<PokemonDetailProps | null>(
    null
  )
  const [pokemonIsCatched, setPokemonIsCatched] = useState<boolean | null>(null)

  const fetchPokemonDetail = async () => {
    const response = await fetch(element.url)
    const data = await response.json()
    setPokemonData(data)
    return data
  }

  useQuery(['getPokemonDetail', element.url], fetchPokemonDetail)

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
            <ModalHeader textTransform="capitalize">
              <Heading>{element.name}</Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {pokemonData && (
                <>
                  <HStack justify="space-between">
                    <Image
                      src={
                        pokemonData.sprites.front_default ??
                        'https://via.placeholder.com/96'
                      }
                    />
                    <Box>
                      {pokemonData.types.map((el) => (
                        <Box>
                          <PokemonTypeBadge {...el.type} />
                        </Box>
                      ))}
                    </Box>
                    <Button
                      aria-label={'catch-pokemon'}
                      onClick={() => {
                        Math.random() > 0.5
                          ? setPokemonIsCatched(true)
                          : setPokemonIsCatched(false)
                        catchPokemonOnOpen()
                      }}
                    >
                      Catch!
                    </Button>
                  </HStack>
                  <Heading>Pokemon Moves</Heading>
                  <List>
                    {pokemonData.moves.map((el) => (
                      <ListItem key={el.move.name}>
                        <Box
                          padding={4}
                          borderWidth={1}
                          mt={4}
                          borderRadius={4}
                          backgroundColor={'white'}
                          _hover={{
                            bg: 'cyan.400',
                            color: 'white',
                          }}
                        >
                          {el.move.name}
                        </Box>
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </ModalOverlay>
      </Modal>
      <PokemonCatchResultsModal
        catchPokemonIsOpen={catchPokemonIsOpen}
        catchPokemonOnClose={catchPokemonOnClose}
        pokemonIsCatched={pokemonIsCatched}
        element={element}
        data={pokemonData}
      />
    </>
  )
}

export default PokemonCardSum
