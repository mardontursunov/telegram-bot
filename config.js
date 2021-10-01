const TelegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv')
dotenv.config()

const TOKEN = process.env.BOT_TOKEN

const bot = new TelegramBot(TOKEN, {
    polling: true
})

module.exports = bot