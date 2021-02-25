import cheerio from "cheerio";

/**
 * Function that receive the page body and
 * search for elements that have ".anchor" class,
 * clean it (removind \n and spaces) and return a array.
 *
 * @param {string} body the body from http request
 *
 * @return {Array<string>} Array of summary formated
 */
function scrap(body) {
  const $ = cheerio.load(body);

  const titleList = [];
  const linksList = [];

  const anchors = $(".anchor");

  if (anchors.length === 0) {
    return false;
  }

  anchors.each((i, element) => {
    linksList.push($(element).prop("href"));
    const parent = $(element).parent().text();
    titleList.push(parent.replace(/ \n |\n |\n/g, ""));
  });

  const finalResult = titleList.map((title, index) => {
    return `* [${title}](${linksList[index]}) `;
  });

  return finalResult;
}

export default scrap;
