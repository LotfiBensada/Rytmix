const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');
const isMac = process.platform === "darwin";
const isDev = process.env.MODE_ENV !== 'development'

//Creates th emain window
function createMainWindow(){
    //create a window
    const mainWindow = new BrowserWindow({
        title: 'Rytmix',
        width: isDev ? 1500 : 1000,
        height: 700,
        webPreferences: {
            nodeIntegration: true
        }
    });

    //Checks if the app is opened by the devs
    if(isDev){
        mainWindow.webContents.openDevTools();
    }

    //load a webpage
    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));  
}

//When the app is ready
app.whenReady().then(() => {
    createMainWindow();

    //Implement the custom menu
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);

     //make sure the window is created when the app is on
    app.on('activate',() => {
        if(BrowserWindow.getAllWindows().length === 0){
            createMainWindow();
        }
    })
  
})

//customize the menu of electron
const menu = [
    {
        label: 'File',
        submenu:[
            {
                label: 'quit',
                click: () => app.quit(),
                accelerator: 'CmdOrCtrl+W'
            }
        ]
    }
]

//Makes sure the app closes on mac when closing the window
app.on('window-all-closed', () => {
    if(!isMac){
        app.quit();
    }
})
