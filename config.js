import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6289637350757', 'ReszBot 𖤍.', true],
['6289637350757', 'Resz Bot 𖤍. v2', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6289637350757'
global.author = 'Resz Store 𖤍.'
global.namebot = '​ReszBot 𖤍'
global.wm = 'ReszStore 𖤍 ʙʏ 𝙁𝙚𝙧𝙕𝘿𝙚𝙫 𝙓𝘿 𖤍.'
global.stickpack = 'ReszStore 𖤍'
global.stickauth = 'Resz Store 𖤍.'
// Link Sosmed
global.sig = 'https://www.instagram.com/ferzdevsxd'
global.sgh = 'https://github.com/ZeroBotz-MD'
global.sgc = 'https://chat.whatsapp.com/LAWdMIQri9SKee5kqmISH0'
// Donasi
global.ppulsa1 = '089637350757'
global.ppulsa2 = '089637350757'
global.psaweria = 'https://saweria.co/FerZXD'
global.ptrakterr = 'https://trakteer.id/ferzxd'
global.povo = '-'
// Emoticon
global.semot = '```'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = '65r5XpwYCY'
global.xyro1 = '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'
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk..
// Mendapatkan Apikey Kamu

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

