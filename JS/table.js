let main = document.querySelector(".main");

fetch("https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams")
.then(res => res.json())
.then(data => {

    let teams = data.sports[0].leagues[0].teams;

    teams.forEach(item => {

        let team = item.team;
        main.innerHTML += `
        <div>
            <img src="${team.logos[0].href}" width="40">
            <a href="${team.links[0].href}" target="_blank">${team.displayName}</a>
        </div>
        `;

    });

})
.catch(err => console.log(err));