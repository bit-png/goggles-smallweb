/**
 ** Convert smallweb file list to Goggle
 **/
const fs = require('fs');
const txt = fs.readFileSync('smallweb.txt', 'utf-8');
const sites = txt
	.split("\n")
	.map(url => {
		try {
			return (new URL(url)).origin;
		} catch(ex) {
			//console.error(ex);
			return null;
		}
	})
	.filter(url => !!url)
	.filter((url, i, array)=>array.indexOf(url) === i);
console.log("Sites: ")
console.log(sites);
fs.writeFileSync('smallweb.goggle', `
! name: Small web
! description: Rerank results based on Kagi's open-source list of smallweb blogs.
! public: true
! author: bit-png
! avatar: #9244e0

$discard
${sites.map(site => `$boost=3,site=${site}`).join("\n")}
`);