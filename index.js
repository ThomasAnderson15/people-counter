let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let downEl = document.getElementById('count-el')

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function down() {
    count = count - 1

    if (count <= 0 ) {
        count = 0
    }

    countEl.innerText = count

}

console.log("Let's count people on the subway!")
