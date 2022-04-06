import { Badge } from '@chakra-ui/react'
import { PokeTypeNameUrlProps } from '../data/interfaces'

const PokemonTypeBadge = (props: PokeTypeNameUrlProps) => {
  let backgroundColor
  switch (props.name) {
    case 'normal':
      backgroundColor = '#A8A878'
      break
    case 'fighting':
      backgroundColor = '#C03028'
      break
    case 'flying':
      backgroundColor = '#A890F0'
      break
    case 'poison':
      backgroundColor = '#A040A0'
      break
    case 'ground':
      backgroundColor = '#E0C068'
      break
    case 'rock':
      backgroundColor = '#B8A038'
      break
    case 'bug':
      backgroundColor = '#A8B820'
      break
    case 'ghost':
      backgroundColor = '#705898'
      break
    case 'steel':
      backgroundColor = '#B8B8D0'
      break
    case 'fire':
      backgroundColor = '#F08030'
      break
    case 'water':
      backgroundColor = '#6890F0'
      break
    case 'grass':
      backgroundColor = '#78C850'
      break
    case 'electric':
      backgroundColor = '#F8D030'
      break
    case 'psychic':
      backgroundColor = '#F85888'
      break
    case 'ice':
      backgroundColor = '#D8B7D8'
      break
    case 'dragon':
      backgroundColor = '#F0B6BC'
      break
    case 'dark':
      backgroundColor = '#705848'
      break
    case 'fairy':
      backgroundColor = '#F0B6BC'
      break
    case 'unknown':
      backgroundColor = '#79867C'
      break
    case 'shadow':
      backgroundColor = '#705898'
      break

    default:
      break
  }
  return (
    <Badge backgroundColor={backgroundColor} color="white">
      {props.name}
    </Badge>
  )
}

export default PokemonTypeBadge
