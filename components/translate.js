const translate = require("node-google-translate-skidz");

async function getTranslation(languageCode, text) {
  const t = await translate({
    text: text,
    source: "en",
    target: languageCode,
  });
  return t.translation;
};
module.exports = getTranslation;
