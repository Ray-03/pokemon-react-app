import { ImageProps, Image } from '@chakra-ui/react'

const Logo = (rest: ImageProps) => {
  return (
    <Image
      height="40px"
      objectFit="cover"
      src="https://www.nicepng.com/png/full/1-14636_pokemon-logo-text-png-7-pokemon-gotta-catch.png"
      alt="Pokemon"
      fallbackSrc="https://via.placeholder.com/100"
    />
  )
}

export default Logo
