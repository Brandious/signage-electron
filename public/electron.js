const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// const path = require("path");
// const isDev = require("electron-is-dev");


let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1920, height: 1080, frame: false });
  mainWindow.loadURL(
     `https://ap-signage.web.app/totem1`
  );
  mainWindow.maximize()
  mainWindow.setFullScreen(true)
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
