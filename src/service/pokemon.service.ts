import { db } from '../firebase-config'
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore'

import { SavedPokemonProps } from '../data/interfaces'

class PokemonService {
  addPokemon = (pokemon: SavedPokemonProps) =>
    addDoc(collection(db, 'pokemon'), pokemon)

  deletePokemon = (id: string) => deleteDoc(doc(db, 'pokemon', id))

  getAllPokemon = () => getDocs(collection(db, 'pokemon'))

  getPokemonDetail = async (nickname: string) => {
    return await getDocs(
      query(collection(db, 'pokemon'), where('nickname', '==', nickname))
    )
  }
}

export default PokemonService
