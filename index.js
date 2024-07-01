const role = 'admin'

if (role === 'admin') {
    alert('wellcome admin!')
} else{
    document.title = 'erorr!'
}

let txt = prompt("PIN KOD KRITING...")

if (txt === 'abu') {
    document.body.style.backgroundColor = 'lime'
} else {
    document.body.style.backgroundColor = 'red'
}