import React, { useEffect, useState } from 'react'
const apiKey = 'cfe422613b250f702980a3bbf9e90716'

// This will fetch trending media according to media type and time 
export const GetTrending = (media = 'all', time = 'day') => {
  const link = `https://api.themoviedb.org/3/trending/${media}/${time}?api_key=${apiKey}`
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
  const link = `https://api.themoviedb.org/3/${media}/${id}?api_key=${apiKey}`
  fetch(link).then(res => res.json()).then((res) => {
    // console.log(res)      
    update(res)
  }).catch((err) => {
    console.log("couldn't fetch the GetbyId")
  })
  return
}

// this will get the available related videos 
export const GetVideos = (media, id, update) => {
  const link = `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${apiKey}&language=en-US`
  fetch(link).then(res => res.json()).then(res => {
    update(res.results)
  }).catch(err => console.log('couldnt get related videos'))
}

// this will search content by media type and search name 
export const SearchByName = (media, name, update) => {
  let link = `https://api.themoviedb.org/3/search/${media}?api_key=${apiKey}&query=${name}`
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
export const GetKeywords = (media, id, updateKeywords) => {
  let link = `https://api.themoviedb.org/3/${media}/${id}/keywords?api_key=${apiKey}`
  fetch(link).then(res => res.json()).then((res) => {
    updateKeywords(res.keywords === undefined ? res.results : res.keywords)
  })
}

// this will search movies related to given set of keywords 
export const getMediaByKeyword = (media, keywords, update) => {
  if (keywords.length !== 0) {
    let keywordStr = ''
    for (let i = 0; keywords.length > 5 ? i < 5 : i < keywords.length; i++) {
      keywordStr += `,${keywords[i].id}`
    }
    keywordStr = keywordStr.slice(1, keywordStr.length)    

    const link = `https://api.themoviedb.org/3/discover/${media}?api_key=${apiKey}&with_keywords=${keywordStr}`
    fetch(link).then(res => res.json()).then((res) => {     
      update(res.results)
    })
  }
}

// this will fetch media with similar generes 
export const GetMediaByGeneres = (media, genereArr, update) => {
  let genereStr = ''
  genereArr.forEach((val) => {
    genereStr += `,${val}`
  })
  genereStr = genereStr.slice(1, genereStr.length)  

  const link = `https://api.themoviedb.org/3/discover/${media}?api_key=${apiKey}&with_genres=${genereStr}`

  fetch(link).then(res => res.json()).then((res) => {
    update(res.results)
  }).catch(err => console.log("couldn't fetch the GetTrending"))
  return
}


// this will return the array of available generes 
export const getAllGeneres = (media, update) => {
  let link = `https://api.themoviedb.org/3/genre/${media}/list?api_key=${apiKey}&language=en-US`
  fetch(link).then(res => res.json()).then((res) => {    
    update(res.genres)
  })
}

// this will genrs of media
export const GetGenrsbyId = (media, id, update) => {
  const link = `https://api.themoviedb.org/3/${media}/${id}?api_key=${apiKey}`
  fetch(link).then(res => res.json()).then((res) => {
    update(() => {
      let gnrArr = res.genres.map((val => {
        return val.id
      }))
      return gnrArr
    })
  }).catch((err) => {
    console.log("couldn't fetch the Get gnr byId")
  })
  return
}

