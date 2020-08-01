// Action creator
import axios from 'axios'

const API_KEY_FLICKR = "8ca93eb14055b49e97f9c1f071c2e54a"


export const selectImage = (image) => {
    return {
        type: 'SELECTED_IMAGE',
        payload: image
      };
     }

     export const fetchImages = searchTerm => async dispatch => {
      const response = await axios.get(`https://api.flickr.com/services/rest/?
        method=flickr.photos.search&
        api_key=${API_KEY_FLICKR}&
        format=json&
        text=${searchTerm}&
        nojsoncallback=true&
        per_page=40&
        extras=url_s`);
    
      dispatch({type: 'FETCH_IMAGES', payload: response.data.photos.photo});
    }
        
