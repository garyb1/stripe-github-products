const updateGithubFile = require('./utils/updateGithubFile.js');
exports.handler = async function ({ body, headers }) {
   console.log({
        body, headers
    })
  let response;
  try {
    response = updateGithubFile('test3.json', { test: true });
  }
  catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }
};