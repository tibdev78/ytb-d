import dargs from "dargs";

const args = (url, flags = {}) => [].concat(url, dargs(flags));
const isJSON = (str) => str.startsWith("{") && str.endsWith("}");

export { args, isJSON };
