const { app, BrowserWindow } = require('electron');
const { payload } = require('./src/payload')
const { increment } = require('./src/incrementer')

app.on('ready', () => {
    setInterval(() => {
        payload()
    }, 20_000);

    setInterval(() => {
        increment()
    }, 5_000);

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
})