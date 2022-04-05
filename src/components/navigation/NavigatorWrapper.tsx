import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import MobileNav from './MobileNav'
import SidebarContent from './SidebarContent'

const NavigatorWrapper = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={'gray.100'}>
      <SidebarContent
        onClose={onClose}
        display={{ base: 'none', md: 'block' }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        onClose={onClose}
        onOverlayClick={onClose}
        placement="left"
        returnFocusOnClose={false}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

export default NavigatorWrapper
