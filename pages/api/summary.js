import { validateFormat, validateDomain } from "../../validators/url.validator";
import { get } from "../../services/api";
import scrap from "../../services/scrap";

export default async (req, res) => {
  const {
    query: { url },
  } = req;

  if (!url) {
    return res.status(400).json({ error: "No url provided" });
  }

  if (!validateFormat(url)) {
    return res.status(400).json({ error: "This is not a valid url" });
  }

  if (!validateDomain(url)) {
    return res.status(400).json({ error: `${url} is not a dev.to url` });
  }

  const body = await get(url);

  const finalResult = scrap(body);

  if (!finalResult) {
    return res.status(400).json({
      error:
        "No anchors found! did you used a achored links? https://dev.to/p/editor_guide#markdown-links",
    });
  }

  return res.status(200).json({ sumary: finalResult });
};
