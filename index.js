var fs = require("fs");
var Handlebars = require("handlebars");

function render(resume) {
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
	return Handlebars.compile(template)({
		resume: resume,
		jsonresume: JSON.stringify(resume, null, 4)
	});
}

module.exports = {
	render: render
};
