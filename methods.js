const bot = require('./config')

bot.on('message', async (message) => {
    const message_id = message.message_id
    const chat_id = message.chat.id
    const name = message.from.first_name
    const text = message.text
    
    if(text == '/start'){
        bot.sendMessage(chat_id, `Salom <b>${name}</b>`, {
            parse_mode: "HTML",
            reply_to_message_id: message_id
        })
    } else if(text == '/photo'){
        bot.sendPhoto(chat_id, 'https://picsum.photos/300', {
        caption: "<b>Bu rasm</b>",
        parse_mode: "HTML"
    })
    } else if(text == '/document'){
    bot.sendDocument(chat_id, 'https://icrrd.com/media/01-11-2020-043223Atomic%20Habits%20-%20James%20Clear.pdf')
    } else if(text == '/mediagroup') {
        let mediaList = []
        mediaList.push({
            type: "photo",
            media: "https://picsum.photos/300",
            caption: "Bu media group"
        }),
        mediaList.push({
            type: "photo",
            media: "https://picsum.photos/300"
        }),
        mediaList.push({
            type: "photo",
            media: "https://picsum.photos/500"
        }),
        mediaList.push({
            type: "photo",
            media: "https://picsum.photos/400"
        }),
        bot.sendMediaGroup( chat_id, mediaList )
    } else if(text == '/location'){
        bot.sendVenue(chat_id, 41.228478, 69.209407, "55-maktab", "61-poliklinikadan o'tganda keladi...")
    } else if(text == '/contact'){
        bot.sendContact(chat_id, '+998934447844', 'Mardon')
    } else if(text == '/dice'){
        await bot.sendChatAction(chat_id, 'typing')
        await bot.sendDice(chat_id, {
            emoji: '🎲'
        })
    } else if(text == '/whoami'){
        let photos = await bot.getUserProfilePhotos(chat_id)
        let message = await bot.sendPhoto(chat_id, photos.photos[0][2].file_id, {
            caption: "Taniysanmi bu darmayidni?))"
        })
        setTimeout(() => {
            bot.deleteMessage(chat_id, message.message_id)
        }, 1500)
    }
})