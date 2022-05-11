import React, { useEffect, useState } from 'react'
import { getPersonMediaCredits } from '../common/apiFetcher'
import Results from '../results/results'

const Person_Credits = ({ id, media }) => {
  const [data, updateData] = useState({ status_message: 'xyz' })
  useEffect(() => {
    getPersonMediaCredits(media, id, updateData)
  }, [])
  //---------------------------------------------------------------------------------------------
  const [toggleState, setToggleState] = useState('contracted')
  const toggle = () => {
    if (toggleState === 'contracted') {
      setToggleState('expanded')
    } else {
      setToggleState('contracted')
    }
  }
  return (
    <div className='otrDetails'>
      <div className='expander' onClick={() => { toggle() }}>{media} credits</div>
      <div className={toggleState}>
        {
          (data.cast)
            ? <Results data={data.cast} media={media}/>
            : <h1>Fail</h1>
        }
      </div>
    </div>
  )
}

export default Person_Credits