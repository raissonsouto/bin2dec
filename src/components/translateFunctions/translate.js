function translate(num, oldBase, newBase) {
    return parseInt(num, parseInt(oldBase).toString(parseInt(newBase)).toUpperCase())
}


onChangeHandler(input) {
    let output = multipleLinesHandler(input.target.value)

    sessionStorage.setItem('input', input.target.value)
    sessionStorage.setItem('output', output)

    this.setState({input: input.target.value, output: output})
}

multipleLinesHandler(input) {
    let output = ''
    
    input.split('\n').forEach(line => {

        if (line == '') {
            output += '\n'

        } else if (validInput(line)) {
            output += 'Ops, maybe you typed something wrong\n'

        } else {
            output += this.translate(line)+'\n'
        }
    })

    return output
}

validInput(input) {

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