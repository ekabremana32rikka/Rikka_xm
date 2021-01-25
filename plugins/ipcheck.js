const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'Masukkan ip yang ingin dicheck', m)
    new Promise((resolve, reject) => {
        axios.get(`https://mnazria.herokuapp.com/api/check?ip=` + text)
            .then((res) => {
                const teks = `➸ *City* : ${res.data.city}\n➸ *Continent Code* : ${res.data.continent_code}\n➸ *Continent Name* : ${res.data.continent_name}\n➸ *Country Code* : ${res.data.country_code}\n➸ *Country Name* : ${res.data.country_name}\n➸ *IP* : ${res.data.ip}\n➸ *Latitude* : ${res.data.latitude}\n➸ *Longitude* : ${res.data.longitude}\n➸ *Region Code* : ${res.data.region_code}\n➸ *Region Name* : ${res.data.region_name}\n➸ *Zip* : ${res.data.zip}`

                conn.sendFile(m.chat, res.data.location.country_flag, res.data.location.country_flag_emoji, teks, m)

            })
            .catch(reject)
    })

}

handler.help = ['ip', 'ipcheck'].map(v => v + ' <ip>')
handler.tags = ['tools']
handler.command = /^(ip|ipcheck)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler