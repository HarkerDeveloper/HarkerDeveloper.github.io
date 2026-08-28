// Генерация новостей 

fetch("data/news.json")
.then(res => res.json())
.then(news => {

	// Генерация последних новостей 

	const lastNews = document.getElementById("last-news");
	if(lastNews) {
		news
		.slice(0, 6)
		.forEach(item => {
			const card = document.createElement("a");
			card.className = "card";
			card.href = `full-news.html?id=${item.id}`;
			card.innerHTML = `<img src="${item.image}">
							  <h2 class="text-of-card">${item.title}</h2>`;
			lastNews.appendChild(card);
		});
	}

	// Все новости

	const allNews = document.getElementById("all-news");
	if(allNews) {
		news.forEach(item => {
			const card = document.createElement("a");
			card.className = "card";
			card.href = `full-news.html?id=${item.id}`
			card.innerHTML = `<img src="${item.image}">
						      <h2 class="text-of-card">${item.title}</h2>`;
			allNews.appendChild(card);
		});
	}

	// Страница новости

	const newsDate = document.querySelector(".news-date")
	if(newsDate) {
		const params = new URLSearchParams(window.location.search);
		const id = params.get("id");
		const item = news.find(n => n.id == id);

		document.title = `Voxelon | ${item.title}`;
		document.querySelector(".news-image").src = item.image;
		document.querySelector(".news-title").textContent = item.title;
		document.querySelector(".news-date").textContent = item.date;
		document.querySelector(".news-text").innerHTML = item.text.join("\n");
	}
		
});

// Навбар

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
	navLinks.classList.toggle("active");
	burger.classList.toggle("active");
});