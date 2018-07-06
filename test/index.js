  const { handbooker, } = require("../lib/index.js");

  const target = "rulebook.md";

  const destination = "rulebook";

  const options = {
    "debug": true,
    "style": "genesys",
    "printOptions": {
      displayHeaderFooter: false,
    },
    "outputTypes": ["html","pdf"]
  };

  handbooker( target, destination, options);
