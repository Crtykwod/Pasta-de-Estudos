function tidyLink(url, name, hoverText) {
  if (hoverText === undefined) {
    return `[${name}](${url})`
  }
	return `[${name}](${url} "${hoverText}")`
}

console.log(tidyLink("https://www.google.com", "Google", "Search engine"))
console.log(tidyLink("https://www.google.com", "Google"))