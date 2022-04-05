import { FlexProps, Flex, IconButton, Image } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

interface MobileProps extends FlexProps {
  onOpen: () => void
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={'white'}
      borderBottomWidth="1px"
      borderBottomColor={'gray.200'}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Image
        ml={3}
        height="40px"
        objectFit="cover"
        src="https://www.nicepng.com/png/full/1-14636_pokemon-logo-text-png-7-pokemon-gotta-catch.png"
        alt="Pokemon"
        fallbackSrc="https://via.placeholder.com/100"
      />
    </Flex>
  )
}

export default MobileNav
