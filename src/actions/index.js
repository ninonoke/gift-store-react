import {CARDS} from './mockData'

export const FETCH_CATEGORIES='FETCH_CATEGORIES'
export const fetchCategories = () => ({
  type: 'FETCH_CATEGORIES',
  categories: CARDS,
})