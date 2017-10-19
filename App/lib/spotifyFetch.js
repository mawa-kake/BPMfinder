import Api from "./api"
import _ from 'lodash'
import base64 from 'base-64'
import {tracksLoaded} from '../store/actionTypes'

let accessHeader = null
//Gets JSON
const getData = (trackName) => {
    const name = trackName.replace(" ", "%20")
    //get tracks then shape the data
    return Api.get(`https://api.spotify.com/v1/search?q=${name + "&type=track"}`, null, accessHeader)
}

//Turns JSON into what I can work with
const shapeData = (trackJSON) => {
    let tracks = []

    const trackList = trackJSON.tracks.items
    const size = trackList.length
    let count = 0
    return new Promise((resolve,reject) => {
        _.forEach(trackList, function(track) {
            //shape data, add bpm for each track, then dispatch to store
            Api.get("https://api.spotify.com/v1/audio-features/" + track.id, null, accessHeader).then( json => {
                count++

                const x = {
                    name: track.name,
                    bpm: json.tempo,
                    key: track.id,
                    artist: track.artist
                }

                tracks.push(x)
                if (count === size) {

                    resolve(tracks)
                }
            }).catch((err) => {console.log("shapeData Failed") //eslint-disable-line no-console
                return err})

        })
    })
}

export const getTracks = (songName) => {
    const client_id = 
    const client_secret =
    const header = {"Authorization" : 'Basic ' + (base64.encode(client_id + ':' + client_secret)).toString(),'Content-Type':'application/x-www-form-urlencoded'}

    //Get access token then get tracks
    return new Promise((resolve) => {
        Api.post("https://accounts.spotify.com/api/token", "grant_type=client_credentials", header).then(
            json => {
                const accessToken = json.access_token
                accessHeader = {"Authorization" : "Bearer " + accessToken}
                getData(songName).then(
                    data => {
                        shapeData(data).then(
                            tracks => resolve(tracks))})



            })
    })


}






//Change this to backend server


//auth.then(parse token and getData).then(shapedata).catch()

//when error happens say network connectivity bad or something?
