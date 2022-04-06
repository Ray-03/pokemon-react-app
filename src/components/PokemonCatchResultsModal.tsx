import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
} from '@chakra-ui/react'
import { Formik } from 'formik'
import { InputControl, SubmitButton } from 'formik-chakra-ui'
import React from 'react'
import { PokemonCatchResultModalProps } from '../data/interfaces'

const initialValues = {
  nickname: '',
}

const onSubmit = (values: any) => {
  // sleep(300).then(() => {
  //   window.alert(JSON.stringify(values, null, 2))
  // })
}

const CatchedPokemonForm = () => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({ handleSubmit, handleChange, values }) => (
      <Box>
        <InputControl mb={3} name={'nickname'} label={'Nickname'} />
        <SubmitButton>Submit</SubmitButton>
      </Box>
    )}
  </Formik>
)

const PokemonCatchResultsModal = (props: PokemonCatchResultModalProps) => {
  const { catchPokemonIsOpen, catchPokemonOnClose, pokemonIsCatched, element } =
    props
  return (
    <Modal
      isOpen={catchPokemonIsOpen}
      onClose={catchPokemonOnClose}
      scrollBehavior="outside"
    >
      <ModalOverlay>
        {pokemonIsCatched ? (
          <ModalContent maxW="90%">
            <ModalHeader textTransform="capitalize">
              <Heading>You successfuly catch {element.name}!</Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <CatchedPokemonForm />
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        ) : (
          <ModalContent maxW="90%">
            <ModalHeader textTransform="capitalize">
              <Heading>You failed catch {element.name}</Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Don't give up. Try again!</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={catchPokemonOnClose}>Okay!</Button>
            </ModalFooter>
          </ModalContent>
        )}
      </ModalOverlay>
    </Modal>
  )
}

export default PokemonCatchResultsModal
