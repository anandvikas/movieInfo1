import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const SearchControls = () => {
    //-----------------------------------------------------------------------------------
    const navigate = useNavigate()
    // ----------------------------------------------------------------------------------
    const [rawSearchString, setRawSearchString] = useState('')
    const [activeMedia, setActiveMedia] = useState('movie')    
    // ----------------------------------------------------------------------------------
    const parseSearchString = () => {
        let parsedArr = rawSearchString.split(' ')
        // console.log(parsedArr)
        let modifiedData = ''
        parsedArr.forEach((val) => {
            if(val !== ''){
                modifiedData += `+${val}`
            }
        })
        modifiedData = modifiedData.slice(1, modifiedData.length)
        return modifiedData
    }
    // ------------------------------------------------------------------------------------
    const submitForm = (eve) => {
        eve.preventDefault();
        let parsedString = parseSearchString()   
        // console.log(parsedString)
        if(parsedString !== ''){
            navigate(`/search?media=${activeMedia}&query=${parsedString}&page=1`)
        } else {
            alert('Please fill the input field first !')
        }
        
    }
    // ------------------------------------------------------------------------------------
    return (
        <div className='searchControlDiv'>
            <form onSubmit={submitForm} className='searchForm'>
                <input type='text' placeholder='type here' onChange={(e) => { setRawSearchString(e.target.value) }} />
                <select onChange={(e) => { setActiveMedia(e.target.value) }}>
                    <option value='movie'>Movies</option>
                    <option value='tv'>TV Series</option>
                    <option value='person'>People</option>
                    <option value='company'>Companies</option>
                </select>
                <button>Search</button>
            </form>
        </div>
    )
}
export default SearchControls