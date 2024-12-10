"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
async function run() {
    const name = (0, core_1.getInput)('name');
    console.log(`Hello ${name}`);
    if (name === 'Fail') {
        (0, core_1.setFailed)('This was set to fail');
    }
}
run();
