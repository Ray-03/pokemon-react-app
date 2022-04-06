import { Center, Heading, Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useQuery } from 'react-query'
import mainApiUrl from '../../data/api'
import {
  PokemonNameUrlProps,
  RequestDataType,
  PokemonListProps,
} from '../../data/interfaces'
import PokemonCardSum from '../PokemonCardSum'

const PokemonList = () => {
  const [hasMoreData, setHasMoreData] = useState<boolean>(true)
  const [pokemonData, setPokemonData] = useState<Array<PokemonNameUrlProps>>([])
  const [requestData, setRequestData] = useState<RequestDataType>({
    limit: 100,
    page: 0,
  })

  const fetchPokemon = async () => {
    const response = await fetch(
      `${mainApiUrl}pokemon?offset=${
        requestData.page * requestData.limit
      }&limit=${requestData.limit}`
    )
    const data = await response.json()

    setPokemonData(Array.from(new Set([...pokemonData, ...data.results])))
    if (data.results.length < requestData.limit) {
      setHasMoreData(false)
    }

    return data
  }

  useQuery<PokemonListProps>(['getPokemonList', requestData], fetchPokemon)

  return (
    <>
      <Heading>Pokemon List</Heading>
      <InfiniteScroll
        dataLength={pokemonData.length}
        next={() =>
          setRequestData({ ...requestData, page: requestData.page + 1 })
        }
        hasMore={hasMoreData}
        loader={
          <Center>
            <Spinner />
          </Center>
        }
        endMessage={
          <Center>
            <Text>Yay! You have seen all pokemon</Text>
          </Center>
        }
      >
        {pokemonData.map((element) => (
          <PokemonCardSum {...element} />
        ))}
      </InfiniteScroll>
    </>
  )
}

export default PokemonList
