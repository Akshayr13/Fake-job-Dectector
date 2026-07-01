const { contextBridge, ipcMain } = require('electron');

// Expose limited APIs to the renderer process
contextBridge.exposeInMainWorld('electron', {
  getAppVersion: () => ipcMain.invoke('get-app-version'),
});