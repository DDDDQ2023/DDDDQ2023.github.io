let home_center_con = document.querySelector('.home_center_con')
let home_icon = document.querySelectorAll('.home_icon')
home_icon[0].onclick = function () {
    home_center_con.style.transform = 'translateX(0)'
}
home_icon[1].onclick = function () {
    home_center_con.style.transform = 'translateX(-50%)'
}


let imgList = document.querySelectorAll('.imgList')
let mark = document.querySelector('.mark')
let mark_src = document.querySelector('.mark_src')
let mark_btn = document.querySelector('.mark_btn')


for(let i = 0; i < imgList.length; i++){
    imgList[i].onclick = function () {
        mark.style.display = 'flex'
        mark_src.src = this.src
    }
}
mark_btn.onclick = function () {
    mark.style.display = 'none'
}