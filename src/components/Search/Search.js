import classes from './Search.module.css'
import { useState } from 'react';
import SearchResult from './SearchResult';

const Search = (props) => {
    const [searchTerm  , setSearchTerm] = useState('')

    const handleChange = (e)=>{
        setSearchTerm(e.target.value)
    }
    
    const manualClicked = ()=>{
        setSearchTerm('')
    }
    return (
        <div  className={classes.search} >
        <input className={classes.input}
            placeholder="Search Player..."
            onChange={handleChange}
            value={searchTerm}
            
         />
        
        {searchTerm && <SearchResult  searchTerm={searchTerm}
            onSearchChange={props.onSearchChange}
            onManualClick = {manualClicked}
        />}
        
        </div>
    )
}

export default Search
