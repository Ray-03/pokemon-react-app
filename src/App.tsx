import { Route, Routes } from 'react-router-dom'
import NavigatorWrapper from './components/navigation/NavigatorWrapper'
import PokemonDetail from './components/views/PokemonDetail'
import PokemonList from './components/views/PokemonList'

export const App = () => {
  return (
    <>
      <NavigatorWrapper>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="pokemon">
            <Route path=":pokemonId" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </NavigatorWrapper>
    </>
  )
}
