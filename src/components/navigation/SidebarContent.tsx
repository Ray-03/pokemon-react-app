import { BoxProps, Box, Flex, CloseButton } from '@chakra-ui/react'
import { LinkItems } from '../../data/LinkItems'
import Logo from '../Logo'
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
        <Logo />
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
