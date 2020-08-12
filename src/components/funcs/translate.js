export default function translate(num) {
    return parseInt(num, parseInt(sessionStorage.getItem('inputBase')).toString(parseInt(sessionStorage.getItem('outputBase'))).toUpperCase())
}