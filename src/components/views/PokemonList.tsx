import { Box, Center, Heading, Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useQuery } from 'react-query'
import mainApiUrl from '../../data/api'

interface RequestDataType {
  page: number
  limit: number
}

interface PokemonListProps {
  count: number
  next: string
  previous: string
  results: Array<PokemonNameUrlProps>
}

interface PokemonNameUrlProps {
  name: string
  url: string
}

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
    </>
  )
}

export default PokemonList
