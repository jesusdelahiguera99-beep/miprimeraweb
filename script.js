const champions = [
    { year: 1930, host: "Uruguay", winner: "Uruguay", runnerUp: "Argentina", score: "4 - 2" },
    { year: 1934, host: "Italy", winner: "Italy", runnerUp: "Czechoslovakia", score: "2 - 1 (a.e.t.)" },
    { year: 1938, host: "France", winner: "Italy", runnerUp: "Hungary", score: "4 - 2" },
    { year: 1950, host: "Brazil", winner: "Uruguay", runnerUp: "Brazil", score: "2 - 1" },
    { year: 1954, host: "Switzerland", winner: "West Germany", runnerUp: "Hungary", score: "3 - 2" },
    { year: 1958, host: "Sweden", winner: "Brazil", runnerUp: "Sweden", score: "5 - 2" },
    { year: 1962, host: "Chile", winner: "Brazil", runnerUp: "Czechoslovakia", score: "3 - 1" },
    { year: 1966, host: "England", winner: "England", runnerUp: "West Germany", score: "4 - 2 (a.e.t.)" },
    { year: 1970, host: "Mexico", winner: "Brazil", runnerUp: "Italy", score: "4 - 1" },
    { year: 1974, host: "West Germany", winner: "West Germany", runnerUp: "Netherlands", score: "2 - 1" },
    { year: 1978, host: "Argentina", winner: "Argentina", runnerUp: "Netherlands", score: "3 - 1 (a.e.t.)" },
    { year: 1982, host: "Spain", winner: "Italy", runnerUp: "West Germany", score: "3 - 1" },
    { year: 1986, host: "Mexico", winner: "Argentina", runnerUp: "West Germany", score: "3 - 2" },
    { year: 1990, host: "Italy", winner: "West Germany", runnerUp: "Argentina", score: "1 - 0" },
    { year: 1994, host: "USA", winner: "Brazil", runnerUp: "Italy", score: "0 - 0 (3-2 pens)" },
    { year: 1998, host: "France", winner: "France", runnerUp: "Brazil", score: "3 - 0" },
    { year: 2002, host: "South Korea / Japan", winner: "Brazil", runnerUp: "Germany", score: "2 - 0" },
    { year: 2006, host: "Germany", winner: "Italy", runnerUp: "France", score: "1 - 1 (5-3 pens)" },
    { year: 2010, host: "South Africa", winner: "Spain", runnerUp: "Netherlands", score: "1 - 0 (a.e.t.)" },
    { year: 2014, host: "Brazil", winner: "Germany", runnerUp: "Argentina", score: "1 - 0 (a.e.t.)" },
    { year: 2018, host: "Russia", winner: "France", runnerUp: "Croatia", score: "4 - 2" },
    { year: 2022, host: "Qatar", winner: "Argentina", runnerUp: "France", score: "3 - 3 (4-2 pens)" }
];

const grid = document.getElementById('champions-grid');

function renderChampions() {
    grid.innerHTML = '';
    champions.forEach((cup, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`;

        card.innerHTML = `
            <div class="year">${cup.year}</div>
            <div class="card-content">
                <span class="host">${cup.host}</span>
                <div class="winner">
                    🏆 <span>${cup.winner}</span>
                </div>
                <div class="details">
                    <div>
                        <span>Runner-up:</span>
                        <span>${cup.runnerUp}</span>
                    </div>
                    <div>
                        <span>Score:</span>
                        <span>${cup.score}</span>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderChampions);
