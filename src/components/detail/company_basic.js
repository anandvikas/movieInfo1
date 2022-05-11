import React, { useEffect, useState } from 'react'
import { getCompanyDetails, GetImageSrc } from '../common/apiFetcher'
import LoadingSpinner from '../loader/loadingSpinner'

const Company_Basic = ({id}) => {
    const [data, updateData] = useState({ status_message: 'xyz' })
    useEffect(() => {
        getCompanyDetails(id, updateData)
    }, [])
    return (
        (data.id)
            ? <div className='pbd'>
                <div className='dpDiv'><img src={GetImageSrc(data.logo_path)} alt={data.name} /></div>
                <h1 className='dpName'>{data.name}</h1>                
                <p className='biography'>{data.description}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Headquarters</td>
                            <td>{data.headquarters ? data.headquarters : '_'}</td>
                        </tr>
                        <tr>
                            <td>Origin Country</td>
                            <td>{data.origin_country ? data.origin_country : '_'}</td>
                        </tr>                        
                        <tr>
                            <td>Parent Company</td>
                            <td>{data.parent_company ? data.parent_company.name : '_'}</td>
                        </tr>  
                        <tr>
                            <td>Website</td>
                            <td>{data.homepage ? data.homepage : '_'}</td>
                        </tr>                      
                    </tbody>
                </table>
            </div>
            : <LoadingSpinner/>
    )
}

export default Company_Basic