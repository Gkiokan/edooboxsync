import { BrowserWindow, app, ipcMain, dialog, shell } from 'electron'

ipcMain.handle('open-dir', async (event, path) => {
    return dialog.showOpenDialog({ properties: ['openDirectory'] })
})

ipcMain.handle('open-url', (e, url) => {
    shell.openExternal(url)
})

ipcMain.handle('closeApplication', () => {
    app.quit()
})
