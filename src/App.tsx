import { Route, Routes } from 'react-router-dom'
import NavigatorWrapper from './components/navigation/NavigatorWrapper'
import PokemonList from './components/views/PokemonList'

export const App = () => {
  return (
    <>
      <NavigatorWrapper>
        <Routes>
          <Route path="/" element={<PokemonList />} />
        </Routes>
      </NavigatorWrapper>
    </>
  )
}
