import axios from 'axios'

// 1. HTTP Request & Response Default Setting
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API Setting
// function fetchNewsList() {
//   return axios.get(`${config.baseUrl}news/1.json`)
// }

// function fetchAskList() {
//   return axios.get(`${config.baseUrl}ask/1.json`)
// }

// function fetchJobsList() {
//   return axios.get(`${config.baseUrl}jobs/1.json`)
// }

async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`)
    return response
  } catch(error) {
    console.log(error)
  }
  
}

async function fetchUserInfo(username) {
  try {
    return await axios.get(`${config.baseUrl}user/${username}.json`)
  } catch(error) {
    console.log(error)
  }
}

async function fetchItemInfo(itemid) {
  try {
    return await axios.get(`${config.baseUrl}item/${itemid}.json`)
  } catch(error) {
    console.log(error)
  }
}

export {
  // fetchNewsList,
  // fetchAskList,
  // fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
}