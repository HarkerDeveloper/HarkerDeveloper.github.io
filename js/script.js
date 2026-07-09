// генерация новостей 
fetch("data/news.json")
.then(res => res.json())
.then(news => {
	// генерация последних новостей 
	const lastNews = document.getElementById("last-news");
	if(lastNews) {
		news
		.slice(0, 6)
		.forEach(item => {
			const card = document.createElement("a");
			card.className = "card";
			card.href = `full-news.html?id=${item.id}`;
			card.innerHTML = `<img src="${item.img}"</img>
							  <p>${item.title}</p>`;
			lastNews.appendChild(card);
		});
	}

	//все новости
	const allNews = document.getElementById("all-news");
	if(allNews) {
		news.forEach(item => {
			const card = document.createElement("a");
			card.className = "card";
			card.href = `full-news.html?id=${item.id}`
			card.innerHTML = `<img src="${item.img}"</img>
						      <p>${item.title}</p>`;
			allNews.appendChild(card);
		});
	}
	//страница новости
	const newsDate = document.querySelector(".news-date")
	if(newsDate) {
		const params = new URLSearchParams(window.location.search);
		const id = params.get("id");
		const item = news.find(n => n.id == id);
		document.querySelector(".news-img").src = item.img;
		document.querySelector(".news-title").textContent = item.title;
		document.querySelector(".news-date").textContent = item.date;
		document.querySelector(".news-text").innerHTML = item.text.join("\n");
	}
		
});