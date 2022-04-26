import React, { useEffect, useState } from 'react'

// This will fetch trending media according to media type and time 
export const GetTrending = (media = 'all', time = 'day') => {
  const link = `https://api.themoviedb.org/3/trending/${media}/${time}?api_key=cfe422613b250f702980a3bbf9e90716`
  const [data, updateData] = useState([])
  useEffect(() => {
    fetch(link).then(res => res.json()).then(res => updateData(res.results)).catch(err => console.log("couldn't fetch the GetTrending"))
  }, [])
  return data
}

// this will get the src for image 
export const GetImage = (path) => {
  const src = `https://image.tmdb.org/t/p/w200${path}`
  return src
}

// this will fetch media according to type and media id 
export const GetbyId = (media = 'all', id, update) => {
  const link = `https://api.themoviedb.org/3/${media}/${id}?api_key=cfe422613b250f702980a3bbf9e90716`
  // console.log(media, id)
  // const [data, updateData] = useState(null)  
  useEffect(() => {
    fetch(link).then(res => res.json()).then((res) => {
      // console.log(res)      
      update(res)
    }).catch((err) => {
      console.log("couldn't fetch the GetbyId")
    })
  }, [])
  return
}

// this will get the available related videos 
export const GetVideos = (media, id, update) => {
  const link = `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=cfe422613b250f702980a3bbf9e90716&language=en-US`
  fetch(link).then(res => res.json()).then(res => { update(res.results) }).catch(err=>console.log('couldnt get related videos'))
}

// this will search content by media type and search name 
export const SearchByName = (media, name, update) => {
  let link = `https://api.themoviedb.org/3/search/${media}?api_key=cfe422613b250f702980a3bbf9e90716&query=${name}`
  fetch(link)
    .then(res => res.json())
    .then((res) => {
      if (res.results.length !== 0) {
        update([...res.results])
      } else {
        update([{ name: 'No result found', id: 1 }])
      }

    })
    .catch(err => console.log(err))
}
// this will return array of keywords 
export const GetKeywords = (media, id) => {
  let link = `https://api.themoviedb.org/3/${media}/${id}/keywords?api_key=cfe422613b250f702980a3bbf9e90716`
  fetch(link).then(res=>res.json()).then(res=>console.log(res))
}