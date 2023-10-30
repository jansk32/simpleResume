function inquiryTemplate(body, firstName, email){
    return `<div><p>Dear Jansen,</p><p>There is a message for you. It reads:<br />${body}</p><p>Sincerely,</p><p>${firstName}</p><p>${email}</p></div>`
    
}

module.exports = inquiryTemplate;