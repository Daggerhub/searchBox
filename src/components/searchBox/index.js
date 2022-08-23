import React, {useContext} from 'react'
import { AppContext } from '../../context'

const SearchBox = () => {
  const {query, searchStories } = useContext(AppContext)
  return (
    <form>
        <div>
            <input
                type="text"
                placeholder='Type atleast 3 character to search'
                value={query}
                onChange={(e)=> searchStories(e.target.value)}
            />
        </div>
    </form>
  )
}

export default SearchBox