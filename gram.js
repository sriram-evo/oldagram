let like = document.getElementById("like")
let liking = document.getElementById("like-output")


let lik = 0
like.addEventListener("click",function(){
lik+=1 
liking.textContent = lik +" likes"
})