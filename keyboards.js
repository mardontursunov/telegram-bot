const bot = require('./config')

bot.on('message', async (message) => {
    const chat_id = message.chat.id
    const text = message.text
    const name = message.from.first_name
    const message_id = message.message_id
    
    const inline_keyboard = {
        inline_keyboard: [
            [
                {
                    text: "Toshkent",
                    callback_data: "tashkent"
                },
                {
                    text: "Buxoro",
                    callback_data: "bukhara"
                },
            ],
            [
                {
                    text: "Saytimizga marhamat",
                    url: "https://google.com"
                }
            ]
        ]
    }
    
    const keyboard = {
        resize_keyboard: true,
        one_time_keyboard: true,
        keyboard: [
            [
                {
                    text: "Toshkent",
                    request_contact: true
                },
                {
                    text: "Boshqa",
                    request_location: true
                }
            ]
        ]
    }
    
    if(text == '/start'){
        bot.sendMessage(chat_id, `Salom <b>${name}</b>`, {
            parse_mode: 'HTML',
            reply_to_message_id: message_id,
            reply_markup: inline_keyboard
        })
    }

})