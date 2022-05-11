import { Link } from 'react-router-dom'
import { GetImageSrc } from '../common/apiFetcher'
import './results.css'
const Results = (props) => {
    const { data, media } = props

    return (
        <div className='resultDiv'>
            {
                data.map((val) => {
                    return (
                        <div key={val.id} className='tssCards'>
                            <Link to={`/detail_${media}?id=${val.id}`} className='tssCardsLink'>
                                <img src={GetImageSrc(!val.poster_path ? val.profile_path : val.poster_path)} className='tssImg' alt=''/>
                                <h2 className='tssName'>{!val.title ? val.name : val.title}</h2>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Results