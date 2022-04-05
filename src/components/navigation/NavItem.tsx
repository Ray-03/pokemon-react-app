import { FlexProps, Flex } from '@chakra-ui/react'
import { ReactText } from 'react'
import { NavLink } from 'react-router-dom'

interface NavItemProps extends FlexProps {
  url: string
  children: ReactText
}

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
