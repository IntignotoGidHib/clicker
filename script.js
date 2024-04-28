let cookie = document.querySelector(".cookieIMG")
let scoreHTML = document.querySelector(".score")
let score = 0
let cursor = document.querySelector(".cursorIMG")
cookie.addEventListener("click", function(){
    score = score + 1
    scoreHTML.innerHTML = score
})
cursor.addEventListener("click", function(){
    score = score + 1
    scoreHTML.innerHTML = score
})
