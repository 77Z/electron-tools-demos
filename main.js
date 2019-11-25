const {app, BrowserWindow} = require("electron");

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 450,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.on("closed", function() {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow();
    }
});