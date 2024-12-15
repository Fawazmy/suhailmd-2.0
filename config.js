const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2348050938994";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234850938994";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348050938994,2348050938994";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_40_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAzNixcbiAgICAgICAgMTEzLFxuICAgICAgICA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE0LFxuICAgICAgICA0NSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI4LFxuICAgICAgICA0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMixcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9ueTUzVUljZUh5cjdSRXhVbTZkOVFUbmNjNjVpbmJRNVA3ZVZBTXJQQUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBPbHp0TkU3UWFxTE1GdFJjWWtLX1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjg0MDI2NGQtNWIyOS00NGEzLWE1NDMtN2M3M2Q1NzY5MDMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMjE4LFxuICAgICAgMjA2LFxuICAgICAgMTUyLFxuICAgICAgMjUyLFxuICAgICAgMixcbiAgICAgIDE3MyxcbiAgICAgIDI0LFxuICAgICAgMTU3LFxuICAgICAgNDIsXG4gICAgICAyMjcsXG4gICAgICAyMDcsXG4gICAgICAxODAsXG4gICAgICAyNDksXG4gICAgICAxNzEsXG4gICAgICA2OSxcbiAgICAgIDE5OSxcbiAgICAgIDYyLFxuICAgICAgMTg3LFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDExMixcbiAgICAgIDEyNixcbiAgICAgIDE2MSxcbiAgICAgIDE5NCxcbiAgICAgIDE0OSxcbiAgICAgIDY2LFxuICAgICAgMjI2LFxuICAgICAgNixcbiAgICAgIDI0NSxcbiAgICAgIDk1LFxuICAgICAgNDcsXG4gICAgICAwLFxuICAgICAgMTc4LFxuICAgICAgMjE4LFxuICAgICAgMjI4LFxuICAgICAgMTgsXG4gICAgICA4MCxcbiAgICAgIDcwLFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhYQjg0UUw3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDUwOTM4OTk0OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSU5WRVNUT1IgRkFXQVpcIixcbiAgICBcImxpZFwiOiBcIjE1Njk0Njg5NjI4MTY2MDo0OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQbk8ySThHRUxlMS9ib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhsTnVQMGhHakUxQjByWjNPYXV2VXorVWJ6eURpTTBLYXBuZTNjSjhwUmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUEtSRGROUFBtOEFtRU9OM1lXUXJhVkI3S1dLb2hQZEVsbElVRC9CNllPZk5pNGxMSGxnTjdlbUg0RGRjNUtON1ViWVI5eUY2QTZ1K0xGOGZndVhxQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaE1sOERvTm92bCtDbVBNd2d1bHhoQVR2dGl3R2EyVlZwM1JwRzZISUUxU0lBZU5XaWlBSkZBZDFIRC9iTGlMQWFzZU1jTzdqM0xHWnNiTVpmL0lSamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA1MDkzODk5NDo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDMwMjM5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUYzSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjNILmpzb24iOiAie1wia2V5RGF0YVwiOlwiOE83VzkwVnlobDlSZHJpdFh6TVNaTk5rT3lvUHlySGxWdkFteTVVSE9zYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjQzNTIxOTEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM0MzAyMzU1MTExXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
