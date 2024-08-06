const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
});

contextBridge.exposeInMainWorld('electron', {
    checkForUpdates: () => ipcRenderer.send('check-for-updates'),
    onAppVersion: (callback) => ipcRenderer.on('app-version', (event, version) => callback(version))
});
