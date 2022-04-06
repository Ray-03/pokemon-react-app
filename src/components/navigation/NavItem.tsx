import { Flex } from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'
import { NavItemProps } from '../../data/interfaces'

const NavItem = ({ url, children, ...rest }: NavItemProps) => {
  return (
    <NavLink to={url}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {children}
      </Flex>
    </NavLink>
  )
}

export default NavItem
