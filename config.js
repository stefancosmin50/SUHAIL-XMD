const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "40770811929";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_00_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDksXG4gICAgICAgIDg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM5LFxuICAgICAgICA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDYxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NixcbiAgICAgICAgMTczLFxuICAgICAgICAzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICA0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODksXG4gICAgICAgIDExNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNoQ3FsS29mWHBHSmZFb25oTGFvQnVMdGs1S2hPdzBkclFXWURwVUQ5djA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDA3NzA4MTE5MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRGNEUyNkUyMzlFNjJDOUIxMDUwRjU4RTdBRDE2NTYyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTY3NTYyOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzcwODExOTI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNDYwMjg5QzI1ODA5OEQ3OTBBQzM2M0RDM0FEQzk0RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE2NzU2MzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOEZ1ZHRhYV9UU0s0S2pLcWxtdFVaUVwiLFxuICBcInBob25lSWRcIjogXCIyOWYyN2U3MC0xYjE1LTQ1YTYtOWI4MS0zNzg1YTg3MTIwY2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAyNTQsXG4gICAgICAxODIsXG4gICAgICAxMjYsXG4gICAgICAyMTcsXG4gICAgICA3MixcbiAgICAgIDIsXG4gICAgICA4MixcbiAgICAgIDE5NixcbiAgICAgIDM3LFxuICAgICAgNzQsXG4gICAgICAyNCxcbiAgICAgIDU3LFxuICAgICAgMTEyLFxuICAgICAgMjQxLFxuICAgICAgNjQsXG4gICAgICAxMzksXG4gICAgICAyNTIsXG4gICAgICAzMSxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDEyLFxuICAgICAgMTY3LFxuICAgICAgNTIsXG4gICAgICAyMTcsXG4gICAgICAxNDMsXG4gICAgICAxNTYsXG4gICAgICA3NSxcbiAgICAgIDEzNSxcbiAgICAgIDE0MixcbiAgICAgIDk1LFxuICAgICAgMTcyLFxuICAgICAgMTYxLFxuICAgICAgNDMsXG4gICAgICAzNSxcbiAgICAgIDE1NyxcbiAgICAgIDIyNSxcbiAgICAgIDIyNSxcbiAgICAgIDIwLFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldXRlNCTDNSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0MDc3MDgxMTkyOTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NDMwMjYwNjMzNzI5OjM0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlbnwnZaU8J2VsvCdlobwnZaS8J2WivCdlbnwnZaU8J2Vt/Cdlo7wnZaL8J2WilwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w3RythUUhFT2VMM2JrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicHlqWnNTZWRpdU5ZeEo1b3djNW9naldubFhmVm1qSVJwbFFkM1V4aDh3ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXRklCMDJJbFYxT2d6Ui9aWDgrUDJiU2tFUVRyVisyTHh2UmUwRzNHK2Eyb21QRFRQdEdMbFEwZzJORWxxcE00cjZGdityR3BDK0QrRi9SZ0c3d01Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvamxPZHlTUzdLU0U4M2RxdFY0NnlVc3k3Mm1TZFR6R2diY29BZExsQkdib0gyZHpuN3hadWlsbTFxRmQwV1NjbTJRdnJmSmtLWlZ6cGlXY0lMQVJDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0MDc3MDgxMTkyOTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTY3NTYyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUc3eVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzd5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicllveWprZnZ1RzBtZUtPeHhtZ2hYWmxEa3BhUElFNDdPZEVYeGJNbE9SMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTU2NTM3MTUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE2NzU2MzA4NTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "40770811929",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "ANONIM-XMD",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
