//console.log("This script can be run with arguments passed to the node repl");
import print from "./stars.mjs";
const args = process.argv.slice(2);

print(args[0], args[1]);
