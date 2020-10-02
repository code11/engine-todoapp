import 'regenerator-runtime/runtime'
import { setupJestScreenshot } from "jest-screenshot";
import { setDefaultOptions } from "jsdom-screenshot";

setDefaultOptions({
    launch: { args: ['--no-sandbox'] }
});

setupJestScreenshot();