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

interface LinkItemProps {
  name: string
  url: string
}

export type {
  RequestDataType,
  PokemonListProps,
  PokemonNameUrlProps,
  LinkItemProps,
}
