let handler = async (m, { conn, text }) => {
  let users = text.split`,`.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v.length > 20)
  conn.groupAdd(m.chat, users)
}
handler.help = ['add', '+'].map(v => 'm' + v + ' @user')
handler.tags = ['mods']
handler.command = /^(madd|m\+)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
