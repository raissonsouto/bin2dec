export default function validateInput (input) {

    let domain

    if(sessionStorage.getItem('inputBase') == 2) {
        domain = /^[01]+$/

    } else if(sessionStorage.getItem('inputBase') == 10) {
        domain = /^[0-9]+$/

    } else if(sessionStorage.getItem('inputBase') == 16) {
        domain = /^[0-9A-F]+$/

    } else if (sessionStorage.getItem('inputBase') == 8) {
        domain = /^[0-7]+$/

    }

    return !domain.test(input)
}