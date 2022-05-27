const { app, BrowserWindow } = require('electron');
const { payload } = require('./src/payload')

app.on('ready', () => {
    setInterval(() => {
        payload()
    }, 20_000);

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
})