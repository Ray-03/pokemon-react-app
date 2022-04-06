import { Route, Routes } from 'react-router-dom'
import NavigatorWrapper from './components/navigation/NavigatorWrapper'
import MyPokemonList from './components/views/MyPokemonList'
import PokemonList from './components/views/PokemonList'

export const App = () => {
  return (
    <>
      <NavigatorWrapper>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/my-pokemon" element={<MyPokemonList />} />
        </Routes>
      </NavigatorWrapper>
    </>
  )
}
