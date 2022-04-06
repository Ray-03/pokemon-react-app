import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
  Image,
  Button,
  HStack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { SavedPokemonProps } from '../../data/interfaces'
import PokemonService from '../../service/pokemon.service'

const MyPokemonList = () => {
  const [pokemonData, setPokemonData] = useState<Array<SavedPokemonProps>>([])
  const fetchMyPokemon = async () => {
    const data = await new PokemonService().getAllPokemon()

    const firebasePokeData: Array<SavedPokemonProps> = []
    data.docs.forEach((element) => {
      firebasePokeData.push({
        id: element.id,
        detail: element.data().detail,
        element: element.data().element,
        nickname: element.data().nickname,
      })
    })
    setPokemonData(firebasePokeData)
  }
  useEffect(() => {
    fetchMyPokemon()
  }, [])

  return (
    <>
      <Heading>My Pokemon List</Heading>
      {pokemonData.length > 0 ? (
        <List>
          {pokemonData.map((el) => (
            <ListItem key={el.id}>
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
                <Flex justify="space-between" align="center">
                  <HStack>
                    <Image
                      src={
                        el.detail.sprites.front_default ??
                        'https://via.placeholder.com/96'
                      }
                      fallbackSrc="https://via.placeholder.com/96"
                    />
                    <VStack align={'start'} justify={'center'}>
                      <Text>Poke ID: {el.element.url.split('/')[6]}</Text>
                      <Text>Name: {el.element.name}</Text>
                      <Text>Nickname: {el.nickname}</Text>
                    </VStack>
                  </HStack>
                  <Button
                    color="black"
                    _hover={{ color: 'red' }}
                    onClick={() => {
                      setPokemonData(
                        pokemonData.filter(function (value) {
                          return value.id !== el.id
                        })
                      )
                    }}
                  >
                    Release
                  </Button>
                </Flex>
              </Box>
            </ListItem>
          ))}
        </List>
      ) : (
        <Text>Uh oh... You don't own any pokemon</Text>
      )}
    </>
  )
}

export default MyPokemonList
