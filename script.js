// Replace this with your own API key from NewsAPI
const API_KEY = 'b11702a6aa0a478c98f8a63e8cfcc644';

// The URL to fetch latest headlines (You can modify the country or category)
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

// Function to fetch and display the news using async/await
async function fetchLatestNews() {
    try {
        const response = await fetch(apiUrl);  // Wait for the API response
        const data = await response.json();    // Wait for the JSON conversion
        const articles = data.articles;
        const newsContainer = document.getElementById('news-container');

        // Loop through each article and display it
        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
                <hr>
            `;
            newsContainer.appendChild(articleDiv);
        });
    } catch (error) {
        console.log('Error fetching the news:', error);  // Handle any errors
    }
}

// Call the function to fetch and display news
fetchLatestNews();
