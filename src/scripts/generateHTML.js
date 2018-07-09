import  _ from "lodash";
import fs from "fs";
import  Markdown from "marked";
import MarkdownIt from "markdown-it";
import MarkdownItAttrs from "markdown-it-attrs";

// ---------------------------------------

const renderer = new Markdown.Renderer();

//Processes the markdown within an HTML block if it's just a class-wrapper
renderer.html = function(html) {
	if (_.startsWith(_.trim(html), "<div") && _.endsWith(_.trim(html), "</div>")) {
		const openTag = html.substring(0, html.indexOf(">") + 1);

		html = html.substring(html.indexOf(">") + 1);

		html = html.substring(0, html.lastIndexOf("</div>"));

		return `${ openTag } ${ Markdown(html) } </div>`;
	}

	return html;
};

// ---------------------------------------

const parseHTML = ( target, markdownOptions, ) => {
	let MdIT = new MarkdownIt({
		html: true,
  		linkify: true
  	});
	MdIT.use(MarkdownItAttrs);

	return MdIT.render(fs.readFileSync(
			target,
			markdownOptions.encoding
		)).split("\\page")
		.map(( page,  pageCount) => {
			return `<div class="phb" id = "p${ pageCount + 1 }">${ page }</div>`;
		})
		.join(" ");

	// return Markdown(
	// 	fs.readFileSync(
	// 		target,
	// 		markdownOptions.encoding
	// 	),
	// 	{ renderer: renderer, }
	// ).split("\\page")
	// 	.map(( page,  pageCount) => {
	// 		return `<div class="phb" id = "p${ pageCount + 1 }">${ page }</div>`;
	// 	})
	// 	.join(" ");
};

const generateHTML = (target, style, markdownOptions, ) => {
	const html = Array.isArray(target) ? target.map( path => parseHTML( path, markdownOptions, ) ).join(" ") : parseHTML( target, markdownOptions, );

	let css = '';

	if(! Array.isArray(style)) {
		style = [style];
	}

	for (var i = style.length - 1; i >= 0; i--) {
		css += fs.readFileSync(style[i], function(err) { if (err) console.log(err); });
	}

	return `
		<html>
			<head>
				<meta charset="UTF-8">
				<style>
					${ css }
				</style>
			</head>

			<body class = "document">
				<div class = "pages">
					${ html }
				</div>
			</body>
		</html>
	`;
};

export { generateHTML, };
