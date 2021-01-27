import axios from 'axios'
const KEY = 'AIzaSyCJ08TjNxegbNFWKP417CJyPD8xLhLJBpE'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
})