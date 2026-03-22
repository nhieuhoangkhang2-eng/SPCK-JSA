let main = document.querySelector(".main");

fetch("http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news")
.then(res => res.json())
.then(data => {
    let articles = data.articles;

    articles.forEach(article=> {
        console.log(article);
        let title = article.headline;
        let desc = article.description;
        let img = article.images[0].url;
        let link = article.links.web.href;

        main.innerHTML += `
        <div>
            <h2>${title}</h2>
            <p>${desc}</p>
            <img src="${img}">
            <a href="${link}" target="_blank">Xem thêm</a>
        </div>
        `
    });
})