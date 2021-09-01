const sgMail = require('@sendgrid/mail')
const apikey ='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'
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendemail = (email,name)=>{
    sgMail.send({
    to:email,
    from:'op745891@gmail.com',
    subject:'welcome to join',
    text:'how are you '
})
}

module.exports ={
    sendemail
}