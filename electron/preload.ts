import {contextBridge,ipcRenderer} from 'electron';
contextBridge.exposeInMainWorld('versions',{
  node:()=>process.versions.node,
})
contextBridge.exposeInMainWorld('electronAPI', {
  loadPreferences: () => ipcRenderer.invoke('load-prefs')
})
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector:string, text?:string) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = String(text)
  }
  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})