# Small Web Goggle for Brave Search

This Goggle is made to focus on smaller blogs and personal sites for [Brave Search](https://search.brave.com/) results. To try it out:

**🥽 [Search the Small Web in Brave](https://search.brave.com/goggles?goggles_id=https%3A%2F%2Fraw.githubusercontent.com%2Fbit-png%2Fgoggles-smallweb%2Fmain%2Fsmallweb.goggle)**

## Origin

This Goggle is a fork of, and tribute to, the Kagi Small Web [initiative][0]. When this list is updated, it should add sites from [this repository](https://github.com/kagisearch/smallweb), since it builds off its [smallweb.txt](https://github.com/kagisearch/smallweb/blob/main/smallweb.txt) file. 

## What is the Small Web?

From [Kagi][0]:

> To begin with, while there is no single definition, “small web” typically refers to the non-commercial part of the web, crafted by individuals to express themselves or share knowledge without seeking any financial gain. This concept often evokes nostalgia for the early, less commercialized days of the web, before the ad-supported business model took over the internet (and we started fighting back!)

[0]: https://blog.kagi.com/small-web

## Release instructions

Before building, clone this repository and make sure NodeJS is installed.

To build the goggle, run:
```
node build
```
Then navigate to [Kagi's Goggle page](https://search.brave.com/goggles/create) and paste the URL. For this repository, it is
```
https://github.com/bit-png/goggles-smallweb/blob/main/smallweb.goggle
```