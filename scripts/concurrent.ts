import {type ExecOptions, type ExecException,exec} from 'child_process';
import {resolve} from 'path';
const cwd = resolve(__dirname,'../');
function execAsync(command:string,options:ExecOptions):Promise<ExecException|number>{
  return new Promise((resolve,reject)=>{
    exec(command,options,(err)=>{
      if(err)reject(err)
      resolve(+new Date())
    })
  })
}
(async ()=>{
  await Promise.all([execAsync('pnpm build:electron-main',{cwd}),execAsync('pnpm build:electron-preload',{cwd}),execAsync('pnpm build:electron-render',{cwd})])
})()
