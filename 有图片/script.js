// script.js

/**
 * Fetch news data from mediastack API
 */
async function fetchNews() {
    const apiKey = '6426532e6668c1f29e7875b273f3d800';
    const apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}&languages=en&limit=10`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.data; // mediastack API's articles are in `data`
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

/**
 * Mocked emotion analysis based on simple rules
 * You can replace this with a real sentiment analysis API if required
 */
function analyzeSentiment(text) {
    const positiveWords = ['good', 'great', 'positive', 'happy', 'hope'];
    const negativeWords = ['bad', 'negative', 'sad', 'tragic', 'shocking'];

    const lowerText = text.toLowerCase();
    const isPositive = positiveWords.some(word => lowerText.includes(word));
    const isNegative = negativeWords.some(word => lowerText.includes(word));

    if (isPositive) return 'positive';
    if (isNegative) return 'negative';
    return 'neutral';
}

/**
 * Load and display news on the webpage
 */
async function loadNews() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear previous content

    const articles = await fetchNews();
    for (const article of articles) {
        const sentiment = analyzeSentiment(article.description || article.title);

        // Create a news card element
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.dataset.sentiment = sentiment;
        newsItem.innerHTML = `
            <img src="${article.image || 'https://via.placeholder.com/150'}" alt="${article.title}">
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
        `;

        newsContainer.appendChild(newsItem);
    }
}

/**
 * Filter news by sentiment
 */
function filterNews(sentiment) {
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        if (item.dataset.sentiment === sentiment || sentiment === 'all') {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize the page with news data
document.addEventListener('DOMContentLoaded', () => {
    loadNews();
});
