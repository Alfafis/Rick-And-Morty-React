import { useQuery } from 'react-query'
import { ICharacterResponse, fetchAll } from '../services/charactersService'

const useCharater = () => {
  const data = useQuery<ICharacterResponse, Error>(['fecthCharacter'], fetchAll, {
    refetchOnWindowFocus: false
  })

  return data
}

export { useCharater }

