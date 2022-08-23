function greeting() {    
    const prefix = "/Users/robbiemckinstry/workspace/pulumi/lazy-loading/tracing-loads"
    const module_filename = module.filename.replace(prefix, "");
    console.log("Executing", module_filename);
}
greeting();

// First, import pulumi. Not sure what exactly this does!
import * as pulumi from "@pulumi/pulumi";
// Next, we import command from the top level.
// We believe this will eagerly load all of the modules in the command package.
import * as command from "@pulumi/command";

console.log("About to use the Local command.");
// Now, we actually _do_ use the command package.
// We expect local to not have loaded until this point.
const out = new command.local.Command("random", {
  create: "echo 'hello pulumi'",
});

export const output = out.stdout;