const createGithubFile = require('./utils/createGithubFile.js');

exports.handler = async function ({ body }) {
  const { data } = JSON.parse(body);
  const { id } = data.object;

  let response;

  try {
    response = await createGithubFile(`lib/shared/products/${id}.json`, data.object);
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
    body: JSON.stringify({ response })
  }
};