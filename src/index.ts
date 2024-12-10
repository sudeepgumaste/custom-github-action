import { getInput, setFailed } from "@actions/core";

async function run(){
    const name = getInput('name');
    console.log(`Hello ${name}`);

    if(name === 'Fail'){
        setFailed('This was set to fail');
    }
}

run();
