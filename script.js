let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let input3 = document.querySelector("#input3")
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let list = document.querySelector('.list')

getData()

btn1.addEventListener("click", () => {
    addData()
});
btn2.addEventListener("click", ()=>{
    deleteData()
})
btn3.addEventListener("click",()=>{
    deleteAllData()
})

function addData() {
    let obj = {
        name1: input1.value,
        name2: input2.value,
        name3: input3.value,
    };
    let data = JSON.parse(localStorage.getItem("person")) || []
    data.push(obj)
    localStorage.setItem("person", JSON.stringify(data))
    getData()
    input1.value = "";
    input2.value = "";
    input3.value = "";
}

function getData() {
    list.innerHTML = ""
    let data = JSON.parse(localStorage.getItem("person")) || []
    data.forEach((el) => {
        let div = document.createElement('div')
        let p = document.createElement("p")
        p.innerText = el.name1
        let p2 = document.createElement("p")
        p2.innerText = el.name3
        let p3 = document.createElement("p")
        p3.innerText = el.name2
        div.style.background = 'rgb(144, 2, 53)'
        div.style.borderRadius = '20px'
        p.style.marginLeft = '20px'
        p2.style.marginLeft = '20px'
        p3.style.marginLeft = '20px'

 

        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(p3)
        list.appendChild(div)
    });
}
function deleteData() {
    let data = JSON.parse(localStorage.getItem("person")) || []
    data.pop()
    localStorage.setItem("person", JSON.stringify(data))
    getData()
}
function deleteAllData(){
localStorage.removeItem('person')
getData()    
}