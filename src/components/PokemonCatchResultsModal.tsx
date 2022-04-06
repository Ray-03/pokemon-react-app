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
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react'
import { Formik } from 'formik'
import { InputControl, SubmitButton } from 'formik-chakra-ui'
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
  try {
    const pokemonService = new PokemonService()
    await pokemonService.addPokemon({
      nickname: data.values.nickname as string,
      element: data.element as PokemonNameUrlProps,
      detail: data.detail as PokemonDetailProps,
    })
  } catch (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Error!</AlertTitle>
        <AlertDescription>{String(error)}</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    )
  }
}

const CatchedPokemonForm = ({
  detail,
  element,
  onClose,
}: {
  detail: PokemonDetailProps | null
  element: PokemonNameUrlProps
  onClose: () => void
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, handleChange, values }) => (
        <Box onSubmit={handleSubmit as any}>
          <InputControl mb={3} name={'nickname'} label={'Nickname'} />
          <SubmitButton
            onClick={() => {
              onSubmit({
                detail: detail,
                element: element,
                values: values,
              })
              onClose()
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
              <CatchedPokemonForm
                detail={data}
                element={element}
                onClose={catchPokemonOnClose}
              />
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
