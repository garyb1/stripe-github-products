import updateGithubFile from './utils/updateGithubFile';

exports.handler = async function () {
  let response;
  try {
    response = updateGithubFile('test.json', { test: true });
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