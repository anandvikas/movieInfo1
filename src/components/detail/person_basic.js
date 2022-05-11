import React, { useEffect, useState } from 'react'
import { fetchPersonDetails, GetImageSrc } from '../common/apiFetcher'
import LoadingSpinner from '../loader/loadingSpinner'

const Person_Basic = ({ id }) => {
    const [data, updateData] = useState({ status_message: 'xyz' })
    useEffect(() => {
        fetchPersonDetails(id, updateData)
    }, [])
    return (
        (data.id)
            ? <div className='pbd'>
                <div className='dpDiv'><img src={GetImageSrc(!data.poster_path ? data.profile_path : data.poster_path)} alt={data.name} /></div>
                <h1 className='dpName'>{data.name}</h1>
                <div className='aka'>
                    <h3>Also known as</h3>
                    <div>
                        {
                            data.also_known_as.map((val, index) => {
                                return <span key={index}>{val}</span>
                            })
                        }
                    </div>
                </div>
                <p className='biography'>{data.biography}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Birth Date</td>
                            <td>{data.birthday}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{data.gender === 1 ? 'Female' : 'Male'}</td>
                        </tr>
                        <tr>
                            <td>Known For</td>
                            <td>{data.known_for_department}</td>
                        </tr>
                        <tr>
                            <td>Birth Place</td>
                            <td>{data.place_of_birth}</td>
                        </tr>
                        <tr>
                            <td>Popularity</td>
                            <td>{data.popularity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            : <LoadingSpinner/>
    )
}
export default Person_Basic