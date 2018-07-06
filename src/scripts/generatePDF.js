import fs from "fs";
import * as htmlPdfChrome from "html-pdf-chrome";
import { generateHTML, } from "./generateHTML.js";

// ---------------------------------

const pdfOptions = {
	"printOptions": {
		displayHeaderFooter: false,
	},
};

const markdownOptions = {
	"encoding": "utf8",
};

const stylesheets = {
	"dnd": "../lib/styles/homebrewery-styles.css",
	"genesys": "../lib/styles/genesys-styles.css",
};

// ---------------------------------

const generatePDF = ( target, destination, options, ) => {
	const style = options.customStyles ? options.customStyles : ( stylesheets[options.style] || stylesheets.dnd );
	const createWhat = options.outputTypes ? options.outputTypes.join(',').toLowerCase() : "pdf";

	const html = generateHTML( target, style, ( options.markdownOptions || markdownOptions ) );

	console.log("Options:", options);

	if (options.debug) {
		console.log("Saving debug HTML...");

		fs.writeFile("debug.html", html, function(err) {
			if (err) console.log(err);
		});
	}

	if(createWhat.indexOf('html') !== -1 ) {
		console.log("Creating HTML...");
		fs.writeFile(destination+".html", html, function(err) {
			if (err) console.log(err);
		});
	}

	if(createWhat.indexOf('pdf') !== -1 ) {
		console.log("Creating PDF...");
		htmlPdfChrome.create(
			html,
			( options.pdfOptions || pdfOptions )
		).then((newPdf) => newPdf.toFile(destination+".pdf" || "test.pdf"));
	}
};

export default generatePDF;
