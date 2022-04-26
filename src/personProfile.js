import React, { useContext } from 'react'
import { GetImage } from './apifetcher';
import { Ctx1 } from './contextProvider'

const PersonProfile = () => {
    document.documentElement.scrollTop = 0;
    const { activePerson } = useContext(Ctx1)
    return (
        <div className='detailDiv'>
            <div className='detailCardDiv'>
                <div className='detailImgDiv'>
                    <img src={GetImage(activePerson.profile_path)} alt={activePerson.name} />
                </div>
                <div className='detailTextDiv'>
                    <h1>{activePerson.name}</h1>
                    <h3>Gender : {activePerson.gender === 2 ? 'Male' : 'Female'}</h3>
                    <h3>Department : {activePerson.known_for_department}</h3>
                    <h3>Known for :</h3>
                    <div>
                        {
                            activePerson.known_for.map((knownVal) => {
                                return <span key={knownVal.id}>{knownVal.title}</span>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonProfile