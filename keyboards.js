const bot = require('./config')
const CLICK_TOKEN = `398062629:TEST:999999999_F91D8F69C042267444B74CC0B3C747757EB0E065`

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

    const products = [
        {
            label: "iPhone 13 Pro Max",
            amount: (13000000) * 100
        }
    ]

    if(text == "/payment"){
        bot.sendInvoice(
            chat_id,
            "Umumiy hisob",
            "Siz Havas do'konidan ... narsalarni sotib oldingiz",
            "tulov payload",
            CLICK_TOKEN,
            "nimadir",
            "UZS",
            products
        )
    }
})

bot.on('callback_query', async (query) => {
    const chat_id = query.from.id
    const data = query.data
    const message_id = query.message.message_id

    if(data == "tashkent"){
        bot.editMessageText("Siz Toshkentni tanladingiz!", {
            chat_id: chat_id,
            message_id: message_id
        })
    }
})

bot.on('pre_checkout_query', (checkout) => {
    console.log(checkout);
    bot.answerPreCheckoutQuery(checkout.id, true)
})

bot.on('successful_payment', (answer) => {
    bot.sendMessage(answer.chat.id, "Sizni tulovingiz qabul qilindi, tez orada yetkazib beramiz)")
})