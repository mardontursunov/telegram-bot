const bot = require('./config')
const CLICK_TOKEN = `398062629:TEST:999999999_F91D8F69C042267444B74CC0B3C747757EB0E065`


bot.on('message', async (message) => {
    const chat_id = message.chat.id
    const text = message.text
    const name = message.from.first_name
    const message_id = message.message_id

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
            products, {
                need_phone_number: true,
                need_shipping_address: true,
                need_name: true,
                photo_url: "https://picsum.photos/300"
            }
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