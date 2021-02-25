const regex = new RegExp(
  "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
);

const whiteList = [
  "http://dev.to",
  "https://dev.to",
  "http://www.dev.to",
  "https://www.dev.to",
];

/**
 * Check if is a valid url format
 *
 * @param {string} url url to test
 *
 * @returns {boolean} true or false
 */
function validateFormat(url) {
  return regex.test(url);
}

/**
 * Check if the url domain is on white list (dev.to urls)
 *
 * @param {string} url
 *
 * @returns {boolean} true or false
 */
function validateDomain(url) {
  const domain = new URL(url);
  return whiteList.includes(domain.origin);
}

export { validateFormat, validateDomain };
