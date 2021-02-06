import info from './info.js'

console.log(info)

document.getElementById('header-phone').textContent = info.phone

document.getElementById('contact-name').textContent = info.company
document.getElementById('contact-street').textContent = info.address.street
document.getElementById('contact-state').textContent = info.address.city + ', ' + info.address.state + ' ' + info.address.zip 

document.getElementById('contact-phone').textContent = info.phone
document.getElementById('contact-hours').textContent = info.hours