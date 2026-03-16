let main = document.querySelector(".main");

fetch("https://api.football-data.org/v4/competitions/PL/standings", {
    headers: {
        "X-Auth-Token": "bda249e26f5a4690a7b471e15be08f1f"
    }
})
.then(response => response.json())
.then(data => {

    let table = data.standings[0].table;

    table.forEach(team => {
        main.innerHTML += `
            <p>
            ${team.position}. ${team.team.name} - ${team.points} pts
            </p>
        `;
    });

})
.catch(error => {
    console.log(error);
});