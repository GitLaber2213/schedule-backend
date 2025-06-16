import { Markup } from "telegraf"


export const actionButton = () => {
    return Markup.inlineKeyboard([
        Markup.button.url('Отрыть Loot Box Simulator', `https://t.me/mvpfullstackbot/MVPDeploy`),
    ])
}