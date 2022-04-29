import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetbyId, GetImage } from '../common/apifetcher';
import LoadingSpinner from '../loader/loadingSpinner';

const PersonProfile = () => {
    document.documentElement.scrollTop = 0;
    const {id} = useParams()    
    let media = 'person'
    
    const [person, updatePerson] = useState(null)
    useEffect(()=>{
        GetbyId(media, id, updatePerson)
    },[])    

    return (
        (person !== null) ?
        <div className='detailDiv'>
                <div className='detailCardDiv'>
                    <div className='detailImgDiv'>
                        <img src={GetImage(person.profile_path)} alt={person.name} />
                    </div>
                    <div className='detailTextDiv'>
                        <h1>{person.name}</h1>
                        <h3>Gender : {person.gender === 2 ? 'Male' : 'Female'}</h3>
                        <h3>Department : {person.known_for_department}</h3>
                        <h3>Birth Date : {person.birthday}</h3>
                        <h3>Place of birth : {person.place_of_birth}</h3>   
                        <h3>Popularity : {person.popularity}</h3>
                        <h3>IMDB id : {person.imdb_id}</h3>
                        <h3>Website : {person.homepage === null ? 'Not available' : <a href={person.homepage} target='_blank'>{person.homepage}</a>}</h3>    
                    </div>
                </div>
                <p>{person.biography}</p>
            </div>
            :
            <div className='detailDiv'><LoadingSpinner/></div>
    )        
}
export default PersonProfile