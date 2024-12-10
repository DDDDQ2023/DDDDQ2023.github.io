window.onload = function () {
    let mood = localStorage.getItem('mood')
    console.log(mood);
    let content = document.querySelector('.content')
    if (mood !== null) {
        if (mood == '1') {
            content.style.backgroundColor = '#4672F4'
        }
        if (mood == '2') {
            content.style.backgroundColor = '#FFFFFF'
        }
        if (mood == '3') {
            content.style.backgroundColor = '#FFC610'
        }
    }
}

// JavaScript代码部分将会放在这里
function updateClock() {
    const now = new Date();
    // 创建一个Date对象来获取当前时间
    const hours = now.getHours().toString().padStart(2, '0');
    // 获取当前小时数，并将其转换为字符串，利用padStart方法确保是两位数（不足两位前面补0）
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // 获取当前分钟数，同样转换为字符串并确保两位数格式
    const seconds = now.getSeconds().toString().padStart(2, '0');
    // 获取当前秒数并做相同处理
    const timeString = `${hours}:${minutes}:${seconds}`;
    // 按照格式拼接小时、分钟和秒数形成最终要显示的时间字符串
    document.querySelector('.time').innerHTML = timeString;
    // 将时间字符串更新到页面上id为clock的div元素内
}

setInterval(updateClock, 1000);
// 每隔1000毫秒（即1秒）调用一次updateClock函数来更新时间显示
updateClock();
// 页面加载时先立即调用一次updateClock函数，避免首次加载时出现延迟显示的情况


// API 请求地址
let key = '49ab449ba3f830f6c592653e4eb11cf1'
const apiUrl = `http://api.mediastack.com/v1/news?access_key=${key}`;
// const apiUrl = "http://api.mediastack.com/v1/news?access_key=6426532e6668c1f29e7875b273f3d800";

// 加载不同类别的新闻内容
function loadCategory(category, dom) {
    // 确定API调用的类别参数
    let url = `${apiUrl}&categories=${category}&limit=30&languages=en`;
    let content1 = ``
    let content2 = ``
    let content3 = ``
    let content4 = ``
    let content5 = ``
    let content6 = ``
    let content7 = ``
    let content8 = ``
    // 调用API获取新闻
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (category == '') {
                let arr = data.data.slice(0, 10)
                arr.forEach(article => {
                    content8 += `
                        <div>
                        <img src="${article.image || 'image/img4.png'}"/>
                        <div class="new_list_title">${article.title}</div>
                        <div class="new_list_des">${article.description}</div>

                        <a href="${article.url}">View details</a>
                        </div>`;
                })
            }

            // 遍历并展示新闻
            data.data.forEach(article => {
                switch (article.category) {
                    case 'general':
                        content1 += `
                        <div>
                        <img src="${article.image || 'image/img4.png'}"/>
                        <div class="new_list_title">${article.title}</div>
                        <div class="new_list_des">${article.description}</div>

                        <a href="${article.url}">View details</a>
                        </div>`;
                        break
                    case 'business':
                        content2 += `
                        <div>
                        <img src="${article.image || 'image/img4.png'}"/>
                        <div class="new_list_title">${article.title}</div>
                        <div class="new_list_des">${article.description}</div>

                        <a href="${article.url}">View details</a>
                        </div>`;
                        break
                    case 'entertainment':
                        content3 += `
                        <div>
                        <img src="${article.image || 'image/img4.png'}"/>
                        <div class="new_list_title">${article.title}</div>
                        <div class="new_list_des">${article.description}</div>

                        <a href="${article.url}">View details</a>
                        </div>`;
                        break
                    case 'health':
                        content4 += `
                        <div>
                        <img src="${article.image || 'image/img4.png'}"/>
                        <div class="new_list_title">${article.title}</div>
                        <div class="new_list_des">${article.description}</div>

                        <a href="${article.url}">View details</a>
                        </div>`;
                        break
                    case 'science':
                        content5 += `
                        <div>
                        <img src="${article.image || 'image/img4.png'}"/>
                        <div class="new_list_title">${article.title}</div>
                        <div class="new_list_des">${article.description}</div>

                        <a href="${article.url}">View details</a>
                        </div>`;
                        break
                    case 'sports':
                        content6 += `
                        <div>
                        <img src="${article.image || 'image/img4.png'}"/>
                        <div class="new_list_title">${article.title}</div>
                        <div class="new_list_des">${article.description}</div>

                        <a href="${article.url}">View details</a>
                        </div>`;
                        break
                    case 'technology':
                        content7 += `
                        <div>
                        <img src="${article.image || 'image/img4.png'}"/>
                        <div class="new_list_title">${article.title}</div>
                        <div class="new_list_des">${article.description}</div>

                        <a href="${article.url}">View details</a>
                        </div>`;

                        break
                }
                if (dom == 1) {
                    document.querySelector(`.new_con1`).innerHTML = content8;
                }
                if (dom == 2) {
                    document.querySelector(`.new_con2`).innerHTML = content1;
                    document.querySelector(`.new_con3`).innerHTML = content2;
                    document.querySelector(`.new_con4`).innerHTML = content3;
                    document.querySelector('.new_con9').innerHTML = content1
                }
                if (dom == 3) {
                    document.querySelector(`.new_con5`).innerHTML = content4;
                    document.querySelector(`.new_con10`).innerHTML = content5;
                    document.querySelector(`.new_con6`).innerHTML = content5;
                    document.querySelector(`.new_con7`).innerHTML = content6;
                    document.querySelector(`.new_con8`).innerHTML = content7;
                }

            });

            // 在页面中显示新闻内容
        })
        .catch(error => {
            // document.getElementById(`${category}-news`).innerHTML = `<p>Sorry, we couldn't fetch the news for ${category}. Please try again later.</p>`;
            // console.error('Error fetching news:', error);
        });
}

// loadCategory('','new_con1')
// loadCategory('general','new_con2')
// loadCategory('business','new_con3')
// loadCategory('entertainment','new_con4')
// loadCategory('health','new_con5')
// loadCategory('science','new_con6')
// loadCategory('sports','new_con7')
// loadCategory('technology','new_con8')
function getUrlLink1() {
    content8 = ``
    loadCategory('', 1)
}

function getUrlLink2() {
    content1 = ``
    content2 = ``
    content3 = ``
    loadCategory('general,business,entertainment', 2)
}

function getUrlLink3() {
    content4 = ``
    content5 = ``
    content6 = ``
    content7 = ``
    loadCategory('health,science,sports,technology', 3)
}
getUrlLink1()
getUrlLink2()
getUrlLink3()
let time_text_Arr = document.querySelectorAll('.time_text')
let timeArr = [0, 0, 0, 0, 0, 0, 0, 0]

let new_list_Arr = document.querySelectorAll('.new_list')
let timer = null;
for (let i = 0; i < new_list_Arr.length; i++) {
    //移入
    new_list_Arr[i].onmouseenter = function () {
        timer = setInterval(() => {
            timeArr[i] = timeArr[i] + 1
            time_text_Arr[i].innerHTML = timeArr[i]
        }, 1000)
    }
    // 移除
    new_list_Arr[i].onmouseleave = function () {
        clearInterval(timer)
    }
}

let news2_sel = document.querySelector('.news2_sel')
let news2_btn = document.querySelector('.news2_btns')
let new_con9 = document.querySelector('.new_con9')
news2_btn.onclick = function () {
    let url = `${apiUrl}&categories=${news2_sel.value}&limit=10&languages=en`;
    console.log(new_con9);
    // return
    let content = ``
    // 调用API获取新闻
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.data.forEach(article => {
                content += `
                        <div>
                        <img src="${article.image || 'image/img4.png'}"/>
                        <div class="new_list_title">${article.title}</div>
                        <div class="new_list_des">${article.description}</div>

                        <a href="${article.url}">View details</a>
                        </div>`;
            })
            document.querySelector('.new_con9').innerHTML = content

        }).catch(() => {
    })
    console.log(content);
}