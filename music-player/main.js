// ./main.js
const { app, BrowserWindow } = require('electron')
const path = require('path');
const url = require('url');

require('dotenv').config();
require('electron-reload'(_dirname));

let win = null;

app.on('ready', function() {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({ width: 1000, height: 600 });

  // Specify entry point
if (process.env.PACKAGE === 'true'){
  // File path for running app
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocal: 'file:',
      slashes: true
    }));
    // URL path for running app
    /* 
    win.loadURL('http://localhost:4200');
    */
} else {
  // Show dev tools
  // Remove this line before distributing
  win.loadURL(process.env.Host);
  win.webContents.openDevTools();
}

  //Remove window once app is closed
  win.on('closed', function() {
    win = null;
  });

});


app.on('activate', ()=> {
  if(win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
