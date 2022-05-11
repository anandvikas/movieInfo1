import React, { useEffect, useState } from 'react'
import { fetchPersonImages, GetImageSrc } from '../common/apiFetcher'

const Person_Images = ({ id }) => {
  const [data, updateData] = useState({ status_message: 'xyz' })
  useEffect(() => {
    fetchPersonImages(id, updateData)
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
      <div className='expander' onClick={() => { toggle() }}>Images</div>
      <div className={toggleState}>
        {
          (data.id)
            ? <>
              <div className='imgContainer'>
                {
                  data.profiles.map((val, index) => {
                    return (
                      <div key={index}>
                        <img src={GetImageSrc(val.file_path, '200')} alt='poster' />
                      </div>
                    )
                  })
                }
              </div>
            </>
            : <h1>Fail</h1>
        }
      </div>
    </div>
  )
}

export default Person_Images