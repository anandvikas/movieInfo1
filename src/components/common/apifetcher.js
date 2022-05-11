const apiKey = 'cfe422613b250f702980a3bbf9e90716'

// this will get the trending media >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const FetechTrending = (media = 'all', time = 'day', update) => {
    const link = `https://api.themoviedb.org/3/trending/${media}/${time}?api_key=${apiKey}`
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            // console.log(res.results)
            update(res.results)
        })
        .catch((error) => {
            console.log(`couldn't fetch the FetchTrending ${media} api`)
        })
}

// this will get the src for image >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const GetImageSrc = (path, width = 200) => {
    const src = `https://image.tmdb.org/t/p/w${width}${path}`
    return src
}

// this will return the array of available generes >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const getAllGeneres = (media, update) => {
    let link = `https://api.themoviedb.org/3/genre/${media}/list?api_key=${apiKey}&language=en-US`
    fetch(link).then(res => res.json()).then((res) => {
        // console.log(res.genres)
        update(res.genres)
    })
}

// this will fetch the discover api >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const fetchDiscover = (media, queryString, update) => {
    let link = `https://api.themoviedb.org/3/discover/${media}?api_key=${apiKey}${queryString}`
    // console.log(link)
    fetch(link).then((res) => { return res.json() }).then((res) => {
        // console.log(res)
        update(res)
    })
}

// this will fetch the search api >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const fetchSearch = (query, media, page, update) => {
    let link = `https://api.themoviedb.org/3/search/${media}?api_key=${apiKey}&query=${query}&page=${page}`
    // console.log(link)
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
            update(res)
        })
        .catch((err) => {
            console.log(`couldn't fetch the FetchSearch ${media} api`)
        })
}

// this will fetch media details >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const fetchMediaDetails = (media, id, update) => {
    let link = `https://api.themoviedb.org/3/${media}/${id}?api_key=${apiKey}`
    // console.log(link)
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            // console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the fetchMediaDetails ${media} api`)
        })
}

//ths will fetch the media credits >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const fetchMediaCredits = (media, id, update) => {
    let link = `https://api.themoviedb.org/3/${media}/${id}/credits?api_key=${apiKey}`
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            // console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the fetchMediaCredits ${media} api`)
        })
}

//thi will fetch the media images >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const fetchMediaImages = (media, id, update) => {
    let link = `https://api.themoviedb.org/3/${media}/${id}/images?api_key=${apiKey}`
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            // console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the fetchMediaImages ${media} api`)
        })
}

//this will fetch the media keywords >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const fetchMediaKeywors = (media, id, update) => {
    let link = `https://api.themoviedb.org/3/${media}/${id}/keywords?api_key=${apiKey}`
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            // console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the fetchMediaKeywors ${media} api`)
        })
}

//tis will fetch the related videos >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const fetchRelatedVideos = (media, id, update) => {
    let link = `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${apiKey}&language=en-US`
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            // console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the fetchRelatedVideos ${media} api`)
        })
}

// this will fetch the similar media >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const fetchSimilarMedia = (media, id, update) => {
    let link = `https://api.themoviedb.org/3/${media}/${id}/similar?api_key=${apiKey}`
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            // console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the fetchSimilarMedia ${media} api`)
        })
}

//this will fetch popular people >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const fetchPopularPerson = (page, update) => {
    let link = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=${page}`
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the fetchPopularPerson person api`)
        })
}

//this will fetch the person details >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const fetchPersonDetails = (id, update) => {
    let link = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            // console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the fetchPopularPerson person api`)
        })
}

//this will fetch person images >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const fetchPersonImages = (id, update) => {
    let link = `https://api.themoviedb.org/3/person/${id}/images?api_key=${apiKey}`
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            // console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the fetchPopularPerson person api`)
        })
}

// this will get media movie credits >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const getPersonMediaCredits = (media, id, update) => {
    let link = `https://api.themoviedb.org/3/person/${id}/${media}_credits?api_key=${apiKey}&language=en-US`
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the getPersonMovieCredits ${media} api`)
        })
}

//this will get comany basic details >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const getCompanyDetails = (id, update) => {
    let link = `https://api.themoviedb.org/3/company/${id}?api_key=${apiKey}`
    // console.log(link)
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the getCompanyDetails company api`)
        })
}

//this will get the watch providers >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const getWatchProviders = (media, update) => {
    let link = `https://api.themoviedb.org/3/watch/providers/${media}?api_key=${apiKey}&language=en-US`
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the getWatchProviders ${media} api`)
        })
}

//this will get the provider details >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const getProviderDetails = (id, update) => {
    let link = `https://api.themoviedb.org/3/network/${id}?api_key=${apiKey}`
    fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
            update(res)
        })
        .catch((res) => {
            console.log(`couldn't fetch the getWatchProviders  api`)
        })
}