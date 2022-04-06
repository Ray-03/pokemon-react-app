import { FlexProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface PokeListRequestDataType {
  page: number
  limit: number
}

interface PokemonListProps {
  count: number
  next: string
  previous: string
  results: Array<PokemonNameUrlProps>
}

interface PokemonDetailProps {
  sprites: PokemonSpritesProps
  moves: Array<PokemonMoveProps>
  types: Array<PokeType>
}

interface PokeType {
  type: PokeTypeNameUrlProps
  slot: number
}

interface PokeTypeNameUrlProps {
  name: string
  url: string
}

interface PokemonMoveProps {
  move: PokemonMoveNameUrlProps
}

interface PokemonMoveNameUrlProps {
  name: string
  url: string
}

interface PokemonSpritesProps {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_default_female: string | null
  front_female: string | null
  front_shiny_female: string | null
}

interface PokemonNameUrlProps {
  name: string
  url: string
}

interface LinkItemProps {
  name: string
  url: string
}

interface PokemonCatchResultModalProps {
  catchPokemonIsOpen: boolean
  catchPokemonOnClose: () => void
  pokemonIsCatched: boolean | null
  element: PokemonNameUrlProps
  data: PokemonDetailProps | null
}

interface NavItemProps extends FlexProps {
  url: string
  children: ReactNode
}

interface SavedPokemonProps {
  id?: string
  nickname: string
  element: PokemonNameUrlProps
  detail: PokemonDetailProps
}

export type {
  PokeListRequestDataType,
  PokemonListProps,
  PokemonNameUrlProps,
  PokemonDetailProps,
  LinkItemProps,
  NavItemProps,
  PokeTypeNameUrlProps,
  PokemonCatchResultModalProps,
  SavedPokemonProps,
}
