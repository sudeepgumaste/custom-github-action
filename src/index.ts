import { getInput } from "@actions/core";

async function run(){
    const name = getInput('name');
    console.log(`Hello ${name}`);
}

run();
