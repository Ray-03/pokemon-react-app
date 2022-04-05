import { BoxProps, Box, Flex, CloseButton, Image } from '@chakra-ui/react'

import { LinkItems } from '../../data/LinkItems'
import NavItem from './NavItem'

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={'white'}
      borderRight="1px"
      borderRightColor={'gray.200'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image
          height="40px"
          objectFit="cover"
          src="https://www.nicepng.com/png/full/1-14636_pokemon-logo-text-png-7-pokemon-gotta-catch.png"
          alt="Pokemon"
          fallbackSrc="https://via.placeholder.com/100"
        />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} url={link.url}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent
