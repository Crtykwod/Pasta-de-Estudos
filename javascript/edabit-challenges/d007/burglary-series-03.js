function findIt(obj, name) {
	return Object.hasOwn(obj, name) ? name.charAt(0).toUpperCase() + name.slice(1) + " is here" : name.charAt(0).toUpperCase() + name.slice(1) + " is not here";
}

console.log(findIt({ timmy: "here", jimmy: "here", billy:"here" }, "timmy"));
console.log(findIt({ timmy: "here", jimmy: "here", billy:"here" }, "billy"));
console.log(findIt({ timmy: "here", jimmy: "here", billy:"here" }, "jimmy"));
console.log(findIt({ timmy: "here", jimmy: "here", billy:"here" }, "bob"));