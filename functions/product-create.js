const createGithubFile = require('./utils/createGithubFile.js');
exports.handler = async function () {
  let response;
  try {
    response = createGithubFile('test3.json', { test: true });
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