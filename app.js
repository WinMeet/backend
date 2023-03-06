const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cemo99@gmail.com',
        pass: 'jbkynthdjhzbfolt'
    }
})
var ary_to_send = []
let mailToSend = {
    from: 'cemo99@gmail.com',
    to: 'emredurmus06@hotmail.com',
    subject: 'Meeting Details',
    html: '<h1>Invıted to WinMeet</h1>'
}
let mailToSend2 = {
    from: 'cemo99@gmail.com',
    to: 'bariserol761@gmail.com',
    subject: 'Meeting Details',
    html: '<h1>Invıted to WinMeet</h1>'
}
//boris
ary_to_send.push(mailToSend)
ary_to_send.push(mailToSend2)

for(var i=0;i<ary_to_send.length;i++) {
    transporter.sendMail(ary_to_send[i], (err,data) => {
        if (err) console.log(err)
        else console.log('mail sent!')
    })
}
