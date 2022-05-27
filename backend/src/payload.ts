import { log } from './log';

function payload(): void {
    log(`I am a main process on ${process.platform}! My resources: ${process.resourcesPath}`);
}

// module.exports = { payload }
export { payload }