import fs from 'fs';

module.exports = [{
	method: "GET",
	path: "/api/1/characters",
	config: {
		description: "Returns a collection of Marvel Characters"
	},
	handler(request, reply){
		let data = fs.readFileSync(`${process.cwd()}/app/server/data.json`, {encoding:'utf-8'});
		let json = JSON.parse(data);
		reply(json.characters);
	}
}];