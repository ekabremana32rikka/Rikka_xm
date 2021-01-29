let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = true
  m.reply('Done!')
}
handler.help = ['banchat']
handler.tags = ['mods']
handler.command = /^banchat$/i
handler.mods = true

module.exports = handler
