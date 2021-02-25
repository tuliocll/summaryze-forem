import fetch from "node-fetch";

/**
 * Function to make http GET requests.
 *
 * @param {string} url url to make request, on this project, dev.to urls
 * @param {object} params fetch params, like method, header etc.
 *
 * @return {string} body on string
 */
async function get(url, params) {
  const response = await fetch(url, params);
  const body = await response.text();

  return body;
}

export { get };
