const electron = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

const { app, BrowserWindow, ipcMain, Notification, Tray, Menu } = electron;

let mainWindow;
let tray = null;
let isShowNotification = true;

ipcMain.on('show-notification', (event, title, body) => {
    if (isShowNotification && mainWindow && !mainWindow.isVisible()) {
        const notification = new Notification({ title, body });
        notification.show();
    }
});

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
    });

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3001'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );

    mainWindow.on('close', (event) => {
        if (process.platform !== 'darwin') {
            event.preventDefault();
            mainWindow.hide();
        }
    });
}

function createTray() {
    tray = new Tray(`${path.join(__dirname, 'icon.png')}`);
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Mute Notifications',
            type: 'checkbox',
            click: (menuItem) => {
                isShowNotification = !menuItem.checked;
            },
        },
        {
            label: 'Quit',
            click: () => {
                if (mainWindow) {
                    mainWindow.destroy(); // Destroy the main window before quit the entire application
                }
                app.quit();
            },
        },]);
    tray.setToolTip('Chatty App');
    tray.setContextMenu(contextMenu);

    tray.on('click', () => {
        if (mainWindow) {
            mainWindow.show();
        }
    });
}

app.on('ready', () => {
    createWindow();
    createTray();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
