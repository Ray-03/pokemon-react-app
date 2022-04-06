import { db } from '../firebase-config'
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore'

import { SavedPokemonProps } from '../data/interfaces'

class PokemonService {
  addPokemon = (pokemon: SavedPokemonProps) =>
    addDoc(collection(db, 'pokemon'), pokemon)

  deletePokemon = (id: string) => deleteDoc(doc(db, 'pokemon', id))

  getAllPokemon = () => getDocs(collection(db, 'pokemon'))

  getPokemonDetail = (id: string) => getDoc(doc(db, 'pokemon', id))
}

export default PokemonService
