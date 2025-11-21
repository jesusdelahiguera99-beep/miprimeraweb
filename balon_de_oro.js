const winners = [
    { year: 2023, player: "Lionel Messi", country: "Argentina", club: "Inter Miami / PSG" },
    { year: 2022, player: "Karim Benzema", country: "France", club: "Real Madrid" },
    { year: 2021, player: "Lionel Messi", country: "Argentina", club: "PSG / Barcelona" },
    { year: 2020, player: "Not Awarded", country: "-", club: "-" },
    { year: 2019, player: "Lionel Messi", country: "Argentina", club: "Barcelona" },
    { year: 2018, player: "Luka Modrić", country: "Croatia", club: "Real Madrid" },
    { year: 2017, player: "Cristiano Ronaldo", country: "Portugal", club: "Real Madrid" },
    { year: 2016, player: "Cristiano Ronaldo", country: "Portugal", club: "Real Madrid" },
    { year: 2015, player: "Lionel Messi", country: "Argentina", club: "Barcelona" },
    { year: 2014, player: "Cristiano Ronaldo", country: "Portugal", club: "Real Madrid" },
    { year: 2013, player: "Cristiano Ronaldo", country: "Portugal", club: "Real Madrid" },
    { year: 2012, player: "Lionel Messi", country: "Argentina", club: "Barcelona" },
    { year: 2011, player: "Lionel Messi", country: "Argentina", club: "Barcelona" },
    { year: 2010, player: "Lionel Messi", country: "Argentina", club: "Barcelona" },
    { year: 2009, player: "Lionel Messi", country: "Argentina", club: "Barcelona" },
    { year: 2008, player: "Cristiano Ronaldo", country: "Portugal", club: "Manchester United" },
    { year: 2007, player: "Kaká", country: "Brazil", club: "Milan" },
    { year: 2006, player: "Fabio Cannavaro", country: "Italy", club: "Real Madrid / Juventus" },
    { year: 2005, player: "Ronaldinho", country: "Brazil", club: "Barcelona" },
    { year: 2004, player: "Andriy Shevchenko", country: "Ukraine", club: "Milan" },
    { year: 2003, player: "Pavel Nedvěd", country: "Czech Republic", club: "Juventus" },
    { year: 2002, player: "Ronaldo", country: "Brazil", club: "Real Madrid / Inter" },
    { year: 2001, player: "Michael Owen", country: "England", club: "Liverpool" },
    { year: 2000, player: "Luís Figo", country: "Portugal", club: "Real Madrid / Barcelona" },
    { year: 1999, player: "Rivaldo", country: "Brazil", club: "Barcelona" },
    { year: 1998, player: "Zinedine Zidane", country: "France", club: "Juventus" },
    { year: 1997, player: "Ronaldo", country: "Brazil", club: "Inter / Barcelona" },
    { year: 1996, player: "Matthias Sammer", country: "Germany", club: "Borussia Dortmund" },
    { year: 1995, player: "George Weah", country: "Liberia", club: "Milan / PSG" },
    // ... List continues back to 1956. Truncated for brevity but can be expanded.
    { year: 1956, player: "Stanley Matthews", country: "England", club: "Blackpool" }
];

const grid = document.getElementById('winners-grid');

function renderWinners() {
    grid.innerHTML = '';
    winners.forEach((winner, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        // Staggered animation
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.5s ease-out forwards ${index * 0.05}s`;

        card.innerHTML = `
            <div class="year-circle">${winner.year}</div>
            <div class="player-name">${winner.player}</div>
            <div class="player-info">${winner.country}</div>
            <div class="player-info club">${winner.club}</div>
        `;
        grid.appendChild(card);
    });
}

// Add keyframes for fade in
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);

document.addEventListener('DOMContentLoaded', renderWinners);
