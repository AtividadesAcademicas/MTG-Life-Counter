// Increase life player 1
const btnIncP1 = document.querySelectorAll(".increase")[0]

function incP1(){
    const life = document.querySelectorAll(".life")[0]

    let newLife = parseInt(life.innerHTML) + 1

    life.innerHTML = newLife
}

btnIncP1.addEventListener("click", incP1)

// Decrease life player 1
const btnDecP1 = document.querySelectorAll(".decrease")[0]

function decP1(){
    const life = document.querySelectorAll(".life")[0]

    let newLife = parseInt(life.innerHTML) - 1

    if(newLife == 0){
        life.innerHTML = "Lose"
    } else{
        life.innerHTML = newLife
    }
}

btnDecP1.addEventListener("click", decP1)

// Increase life player 2
const btnIncP2 = document.querySelectorAll(".increase")[1]

function incP2(){
    const life = document.querySelectorAll(".life")[1]

    let newLife = parseInt(life.innerHTML) + 1

    life.innerHTML = newLife
}

btnIncP2.addEventListener("click", incP2)

// Decrease life player 2
const btnDecP2 = document.querySelectorAll(".decrease")[1]

function decP2(){
    const life = document.querySelectorAll(".life")[1]

    let newLife = parseInt(life.innerHTML) - 1

    if(newLife == 0){
        life.innerHTML = "Lose"
    } else{
        life.innerHTML = newLife
    }
}

btnDecP2.addEventListener("click", decP2)

// Reset life
const btnReset = document.querySelector("#reset")

function reset(){
    const life = document.querySelectorAll(".life")

    life.forEach((player => {
        player.innerHTML = "20"
    }))
}

btnReset.addEventListener("click", reset)