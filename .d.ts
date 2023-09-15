/// <reference types="./node_modules/electron/electron.d.ts" />

interface IElectronAPI {
  loadPreferences: () => Promise<void>,
}

interface Window {
  electronAPI: IElectronAPI
}

enum ELECTRON_ENV{
  "main",
  "preload",
  "renderer"
}
namespace NodeJS{
  interface ProcessEnv{
    ELECTRON_ENV:keyof typeof ELECTRON_ENV
  }
}