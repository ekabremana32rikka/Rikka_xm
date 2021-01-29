let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupDemoteAdmin(m.chat, users)
}
handler.help = ['demote','member','v'].map(v => 'm' + v + ' @user')
handler.tags = ['mods']
handler.command = /^(mdemote|mmember|mv)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
