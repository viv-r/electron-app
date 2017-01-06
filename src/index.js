
const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    const bw = new BrowserWindow({
        width: 800,
        height: 400
    })

    bw.loadURL('file://' + (require.resolve('./index.html')))
})
