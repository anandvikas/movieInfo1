import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getWatchProviders, GetImageSrc } from '../common/apiFetcher'
import './watchProviderSection.css'

const WatchProviderSection = ({ media }) => {
    const [data, updateData] = useState({ status_message: 'xyz' })
    useEffect(() => {
        getWatchProviders(media, updateData)
    }, [])
    return (
        (data.results)
            ? <div className='section'>
                <h1>Watch Providers</h1>
                <div className='wpDiv'>
                    {
                        data.results.map((val) => {
                            return (
                                <div key={val.provider_id} className='wpCards'>
                                    <Link to={`/detail_provider?id=${val.provider_id}`} className='wpCardsLink'>
                                        <img src={GetImageSrc(val.logo_path, '200')} className='wpImg' alt='' />
                                        <h4 className='wpName'>{val.provider_name}</h4>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            : <h1>failure</h1>
    )
}

export default WatchProviderSection