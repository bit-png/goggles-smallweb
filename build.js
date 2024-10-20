/**
 ** Convert smallweb file list to Goggle.
 **/
const fs = require('fs');
const txt = fs.readFileSync('smallweb.txt', 'utf-8');
// From https://radar.cloudflare.com/domains
// cloudflare-radar_top-10000-domains_20241007-20241014.csv
const topSiteData = fs.readFileSync('top10000sites.csv', 'utf-8').split("\n");
const topSites = topSiteData.reduce((all, current) => [...all, current, 'www.' + current], []);
const sites = txt
	.split("\n")
	.map(url => {
		try {
			return (new URL(url)).host;
		} catch (ex) {
			//console.error(ex);
			return null;
		}
	})
	.filter((url, i, array) => array.indexOf(url) === i)
	.filter(url => !!url);
const smallerSites = sites
	.filter(url => {
		if (topSites.includes(url)) {
			console.log(`Skipping: ${url} is in top sites`);
			return false;
		}
		return true;
	});

fs.writeFileSync('smallweb.goggle',
`! name: Small web
! description: Rerank results based on Kagi's open-source list of smallweb blogs.
! public: true
! author: bit-png
! homepage: https://github.com/bit-png/goggles-smallweb/
! avatar: #feb319

$discard
${smallerSites.map(site => `$boost=3,site=${site}`).join("\n")}
`);