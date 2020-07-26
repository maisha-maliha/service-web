var ob = {
    1: {
        title:"ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur itaque animisapiente",
        name: "Alex"
    },
    2:{
        title:"nimisapiente atque nostrum, totam facere repellendus veritatis impedit.",
        name:"Bitchi"
    },
    3:{
        title:"lor sit amet consectetur adipisicing elit. Rerum consectetur itaque nimisapiente atque nostrum, totam facere repellendus veritatis impedit.",
        name:"Cannon"
    }
}

const slide =document.querySelector('.slide p')
const name = document.querySelector('.name')

setInterval(slider,7000)
var i = 1
function slider(){
    if(i>0 && i<= 3){
        slide.innerHTML = ob[i].title
        name.innerHTML = ob[i].name
        i++
    } else{
        i=1
        slide.innerHTML = ob[i].title
        name.innerHTML = ob[i].name
        i++
    }
}
