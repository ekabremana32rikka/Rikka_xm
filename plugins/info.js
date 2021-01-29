let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➵ Dibuat dengan javascript NodeJs
╠➵ Rec: aa akbar
╠➵ Script: @Nurotomo
║
╠➵ Github: https://github.com/Akbarsans
╠➵ Instagram: instagram.com/akbarsan3
╠➵ YouTube: youtube.com/aaakbar
║
╠═〘 Thanks To 〙 ═
╠➵ Nurotomo
╠➵ MfarelS
╠➵ ST4RZ
╠➵ Arya274
╠➵ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➵ ketik .donasi
║
╠═〘 Mirai Kuriyama 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

