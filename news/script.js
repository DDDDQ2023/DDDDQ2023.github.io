function searchNews() {
    const searchQuery = document.getElementById('search-input').value;
    if (searchQuery) {
        // 你可以根据输入的查询词调用API进行搜索
        console.log(`Searching news for: ${searchQuery}`);

        // 示例：使用 fetch() 调用一个新闻搜索API（这里只是一个模拟的例子）
        fetch(`https://api.example.com/search?query=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                console.log('Search Results:', data);
                // 在页面中显示搜索结果
                displaySearchResults(data);
            })
            .catch(error => console.error('Error fetching news:', error));
    } else {
        alert('Please enter a search term');
    }
}

// 显示搜索结果的函数
function displaySearchResults(data) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    data.articles.forEach(article => {
        resultsContainer.innerHTML += `
            <div class="article">
                <h4>${article.title}</h4>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </div>
        `;
    });
}
