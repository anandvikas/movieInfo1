import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetbyId, GetImage } from '../common/apifetcher';
import { Ctx1 } from '../common/contextProvider'
import LoadingSpinner from '../loader/loadingSpinner';

const PersonProfile = () => {
    document.documentElement.scrollTop = 0;
    const parms = useParams()
    let {id} = parms
    let media = 'person'
    
    const [person, updatePerson] = useState(null)
    useEffect(()=>{
        GetbyId(media, id, updatePerson)
    },[])
    const { activePerson } = useContext(Ctx1)

    if(person !== null){
        return (
            <div className='detailDiv'>
                <div className='detailCardDiv'>
                    <div className='detailImgDiv'>
                        <img src={GetImage(person.profile_path)} alt={person.name} />
                    </div>
                    <div className='detailTextDiv'>
                        <h1>{person.name}</h1>
                        <h3>Gender : {person.gender === 2 ? 'Male' : 'Female'}</h3>
                        <h3>Department : {person.known_for_department}</h3>
                        {/* <h3>Known for :</h3>
                        <div>
                            {
                                person.known_for.map((knownVal) => {
                                    return <span key={knownVal.id}>{knownVal.title}</span>
                                })
                            }
                        </div> */}
                    </div>
                </div>
                <p>{person.biography}</p>
            </div>
        )
    } 
    return <div className='detailDiv'><LoadingSpinner/></div>
    
}
export default PersonProfile