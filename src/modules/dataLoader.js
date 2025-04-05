const axios = require('axios');

async function loadData(url) {
  try {
    const response = await axios.get(url);
    return { data: response.data, isLoading: false, error: null };
  } catch (error) {
    return { data: [], isLoading: false, error: error.message };
  }
}

module.exports = loadData;
