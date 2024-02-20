import client from '../api/client'
import { ICard } from '../util/card'

export interface ICharacterResponse {
  info: {
    count: number
    next: string
    pages: number
    prev: boolean
  }
  results: ICard[]
}

const fetchAll = async () => {
  const { data } = await client.get<ICharacterResponse>(`/character`)
  return data
}

export { fetchAll }
