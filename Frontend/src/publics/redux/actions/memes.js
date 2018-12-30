import axios from 'axios';

const IP = "http://192.168.1.109:3333/bootcamp/";

export const getmemes = () => {
    return {
        type: 'GET_MEMES',
        payload: axios.get(IP + 'memes')
    }
}

export const saveproduct = () => {
    return {
        type: 'SAVE_MEMES',
        payload: axios.post(IP +'meme')
    }
}