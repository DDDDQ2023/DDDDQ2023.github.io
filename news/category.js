// API 请求地址
const apiUrl = "http://api.mediastack.com/v1/news?access_key=6426532e6668c1f29e7875b273f3d800";

// 加载不同类别的新闻内容
function loadCategory(category) {
    // 确定API调用的类别参数
    let url = `${apiUrl}&categories=${category}`;
    
    // 显示加载中的状态
    document.getElementById(`${category}-news`).innerHTML = "<p>Loading news...</p>";
    
    // 调用API获取新闻
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let content = `<h4>Top News in ${category.charAt(0).toUpperCase() + category.slice(1)}</h4>`;
            
            // 遍历并展示新闻
            data.data.forEach(article => {
                content += `
                    <div class="article">
                        <h5><a href="${article.url}" target="_blank">${article.title}</a></h5>
                        <p>${article.description}</p>
                    </div>
                `;
            });
            
            // 在页面中显示新闻内容
            document.getElementById(`${category}-news`).innerHTML = content;
        })
        .catch(error => {
            document.getElementById(`${category}-news`).innerHTML = `<p>Sorry, we couldn't fetch the news for ${category}. Please try again later.</p>`;
            console.error('Error fetching news:', error);
        });
}

// 加载各个类别的新闻
window.onload = function() {
    loadCategory("health");
    loadCategory("sports");
    loadCategory("entertainment");
    loadCategory("technology");
    loadCategory("business");
};
