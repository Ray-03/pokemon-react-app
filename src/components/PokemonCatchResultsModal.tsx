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
import {
  PokemonCatchResultModalProps,
  PokemonDetailProps,
  PokemonNameUrlProps,
} from '../data/interfaces'
import PokemonService from '../service/pokemon.service'

const initialValues = {
  nickname: '',
}

const onSubmit = async (data: any) => {
  await new PokemonService().addPokemon({
    nickname: data.values.nickname as string,
    element: data.element as PokemonNameUrlProps,
    detail: data.detail as PokemonDetailProps,
  })
}

const CatchedPokemonForm = ({
  detail,
  element,
}: {
  detail: PokemonDetailProps | null
  element: PokemonNameUrlProps
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, handleChange, values }) => (
        <Box onSubmit={handleSubmit as any}>
          <InputControl mb={3} name={'nickname'} label={'Nickname'} />
          <SubmitButton
            onClick={() => {
              onSubmit({ detail: detail, element: element, values: values })
            }}
          >
            Submit
          </SubmitButton>
        </Box>
      )}
    </Formik>
  )
}

const PokemonCatchResultsModal = (props: PokemonCatchResultModalProps) => {
  const {
    catchPokemonIsOpen,
    catchPokemonOnClose,
    pokemonIsCatched,
    element,
    data,
  } = props
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
              <CatchedPokemonForm detail={data} element={element} />
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
