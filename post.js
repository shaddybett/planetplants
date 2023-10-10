async function fetchNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=baaa831db144416cbaeea7ebefdcc54f');
        const data = await response.json();

        const newsList = document.getElementById('news-list');

        for (let i = 0; i < data.articles.length; i++) {
            const article = data.articles[i];
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h2>${article.title}</h2>
                <img src="${article.urlToImage}" 
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
                <hr>
            `;
            newsList.appendChild(listItem);
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}
window.addEventListener('load', fetchNews);
