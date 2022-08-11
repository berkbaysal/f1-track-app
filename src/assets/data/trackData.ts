export interface Angle {
    rotateX: string,
    rotateY: string,
    rotateZ: string
}
export interface Position {
    positionX: string,
    positionY: string,
    positionZ?: string
}
export interface Track {
    id: number,
    name: string,
    country: { code: string, full: string }
    trackInfo: { title: string, data: string }[]
    trackQuote: string
    angles: { layout: Angle, sector: Angle, drs: Angle },
    sectors: Position[],
    turns: Position[]
    drsZones: Position[]
    keywords?: string[]
}

const tracks: Track[] = [
    {
        id: 0,
        name: "Bahrain International Circuit",
        country: { code: "bh", full: "Bahrain" },
        trackInfo: [
            { title: "Country", data: "Bahrain" },
            { title: "Circuit Direction", data: "Clockwise" },
            { title: "Number of Corners", data: "15" },
            { title: "Number of DRS Zones", data: "3" },
            { title: "Circuit Length", data: "5.412 km" },
            { title: "Race Distance", data: "308.238 km" },
            { title: "Lap Record", data: "1:31.447, De la Rosa, 2005" },
            { title: "First Grandprix", data: "2004" },
            { title: "Most Wins (Driver)", data: "Lewis Hamilton (5)" },
            { title: "Most Wins (Constructor)", data: "Ferrari (7)" },
            { title: "Last Winner", data: "Charles Leclerc (Ferrari)" },
            { title: "First Winner", data: "Michael Schumacher (Ferrari)" },
        ],
        trackQuote: "You can usually expect great racing and decent amounts of overtaking in Bahrain, while the drivers have to contend with wind, racing under floodlights and the difficulty of finding a decent set-up with the wide temperature fluctuations between sessions. The track’s most challenging point is the tight, downhill, off-camber Turn 10 left-hander, while the fast run through Turn 12 is another highlight, allowing the racers to really feel their cars coming alive.",
        angles:
        {
            layout: {
                rotateX: "0deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
            sector: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "45deg"
            },
            drs: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
        },
        turns: [
            //FOR TRACK TURN MARKERS IN FUTURE
        ],
        sectors: [
            {
                positionX: "-15%",
                positionY: "25%",
            },
            {
                positionX: "32%",
                positionY: "5%",
            },
            {
                positionX: "73%",
                positionY: "5%",
            },
        ],
        drsZones: [
            {
                positionX: "-5%",
                positionY: "15%",
            },
            {
                positionX: "55%",
                positionY: "83%",
            },
            {
                positionX: "10%",
                positionY: "105%",
            }
        ]

    },
    {
        id: 1,
        name: "Jeddah Corniche Circuit",
        country: { code: "sa", full: "Saudi Arabia" },
        trackInfo: [
            { title: "Country", data: "Saudi Arabia" },
            { title: "Circuit Direction", data: "Counter-Clockwise" },
            { title: "Number of Corners", data: "27" },
            { title: "Number of DRS Zones", data: "3" },
            { title: "Circuit Length", data: "6.174 km" },
            { title: "Race Distance", data: "308.458 km" },
            { title: "Lap Record", data: "1:30.734, Lewis Hamilton, 2021" },
            { title: "First Grandprix", data: "2021" },
            { title: "Most Wins (Driver)", data: "Lewis Hamilton, Max Verstappen (1)" },
            { title: "Most Wins (Constructor)", data: "Mercedes, Red Bull Racing (1)" },
            { title: "Last Winner", data: "Max Verstappen (Red Bull Racing)" },
            { title: "First Winner", data: "Lewis Hamilton (Mercedes)" },
        ],
        trackQuote: "Average speeds around the Jeddah Corniche Circuit are around 250km/h – quicker than those at Silverstone, and second on the 2021 calendar only to Monza – aka ‘The Temple of Speed’. It is, quite simply, the fastest street circuit ever seen in Formula 1 – while the track also features the most corners on the calendar with 27, many of them quick, sinuous bends as the drivers wend their way along the Jeddah waterfront.",
        angles:
        {
            layout: {
                rotateX: "0deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
            sector: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "45deg"
            },
            drs: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
        },
        turns: [
            //FOR TRACK TURN MARKERS IN FUTURE
        ],
        sectors: [
            {
                positionX: "40%",
                positionY: "10%",
            },
            {
                positionX: "25%",
                positionY: "90%",
            },
            {
                positionX: "65%",
                positionY: "60%",
            },
        ],
        drsZones: [
            {
                positionX: "45%",
                positionY: "75%",
            },
            {
                positionX: "75%",
                positionY: "55%",
            },
            {
                positionX: "60%",
                positionY: "0%",
            }
        ]

    },
    {
        id: 2,
        name: "Albert Park Circuit",
        country: { code: "au", full: "Australia" },
        trackInfo: [
            { title: "Country", data: "Australia" },
            { title: "Circuit Direction", data: "Clockwise" },
            { title: "Number of Corners", data: "14" },
            { title: "Number of DRS Zones", data: "3" },
            { title: "Circuit Length", data: "5.278 km" },
            { title: "Race Distance", data: "306.124 km" },
            { title: "Lap Record", data: "1:20.260, Charles Leclerc, 2022" },
            { title: "First Grandprix", data: "1996" },
            { title: "Most Wins (Driver)", data: "Michael Schumacher (4)" },
            { title: "Most Wins (Constructor)", data: "Ferrari (8)" },
            { title: "Last Winner", data: "Charles Leclerc (Ferrari)" },
            { title: "First Winner", data: "Damon Hill (Williams-Renault)" },
        ],
        trackQuote: "As a temporary facility, Albert Park can be quite bumpy - though resurfacing for 2022 will no doubt improve matters - while the circuit at the start of the weekend is often slippery, rubbering in as the sessions progress. It’s also a circuit that requires a well-sorted chassis, with several spots on the track where the drivers require a reactive front end to allow them to chuck it into a corner. Melbourne is also one of the faster tracks on the calendar, with Lewis Hamilton’s 2019 pole lap set at an average of over 235km/h.",
        angles:
        {
            layout: {
                rotateX: "0deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
            sector: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "45deg"
            },
            drs: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
        },
        turns: [
            //FOR TRACK TURN MARKERS IN FUTURE
        ],
        sectors: [
            {
                positionX: "25%",
                positionY: "85%",
            },
            {
                positionX: "30%",
                positionY: "-5%",
            },
            {
                positionX: "65%",
                positionY: "5%",
            },
        ],
        drsZones: [
            {
                positionX: "10%",
                positionY: "75%",
            },
            {
                positionX: "65%",
                positionY: "20%",
            },
            {
                positionX: "55%",
                positionY: "80%",
            }
        ]

    },
    {
        id: 3,
        name: "Autodromo Enzo e Dino Ferrari",
        country: { code: "it", full: "Italy" },
        trackInfo: [
            { title: "Country", data: "Italy" },
            { title: "Circuit Direction", data: "Counter-Clockwise" },
            { title: "Number of Corners", data: "19" },
            { title: "Number of DRS Zones", data: "1" },
            { title: "Circuit Length", data: "4.909 km" },
            { title: "Race Distance", data: "309.049 km" },
            { title: "Lap Record", data: "1:15.484, Lewis Hamilton, 2020" },
            { title: "First Grandprix", data: "2020" },
            { title: "Most Wins (Driver)", data: "Max Verstappen (2)" },
            { title: "Most Wins (Constructor)", data: "Red Bull Racing (2)" },
            { title: "Last Winner", data: "Max Verstappen (Red Bull Racing)" },
            { title: "First Winner", data: "Lewis Hamilton (Mercedes)" },
        ],
        trackQuote: "A thrill ride. After testing his AlphaTauri AT01 at the track in the build-up to the 2020 season, Pierre Gasly called the experience one of the best he’d ever had in a Formula 1 car, while his then-team mate Daniil Kvyat remarked that “an F1 car through corners like Acque Minerali – the entrance is so fast, it’s so cool. It really gives you a lot of adrenaline.” The anti-clockwise circuit is certainly fast, with an old-school feel as the drivers put it on the line in iconic corners like the aforementioned Acque Minerali and Piratella.",
        angles:
        {
            layout: {
                rotateX: "0deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
            sector: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "45deg"
            },
            drs: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
        },
        turns: [
            //FOR TRACK TURN MARKERS IN FUTURE
        ],
        sectors: [
            {
                positionX: "50%",
                positionY: "-15%",
            },
            {
                positionX: "15%",
                positionY: "90%",
            },
            {
                positionX: "75%",
                positionY: "45%",
            },
        ],
        drsZones: [
            {
                positionX: "40%",
                positionY: "0%",
            }
        ]

    },
    {
        id: 4,
        name: "Miami International Autodrome",
        country: { code: "us", full: "United States of America" },
        trackInfo: [
            { title: "Country", data: "United States of America" },
            { title: "Circuit Direction", data: "Counter-Clockwise" },
            { title: "Number of Corners", data: "19" },
            { title: "Number of DRS Zones", data: "3" },
            { title: "Circuit Length", data: "5.412 km" },
            { title: "Race Distance", data: "308.326 km" },
            { title: "Lap Record", data: "1:31.361, Max Verstappen, 2022" },
            { title: "First Grandprix", data: "2022" },
            { title: "Most Wins (Driver)", data: "Max Verstappen (1)" },
            { title: "Most Wins (Constructor)", data: "Red Bull Racing (1)" },
            { title: "Last Winner", data: "Max Verstappen (Red Bull Racing)" },
            { title: "First Winner", data: "Max Verstappen (Red Bull Racing)" },
        ],
        trackQuote: "A street-track spectacular. With the Hard Rock Stadium at its epicentre, the 5.41km layout will feature 19 corners, three straights, potential for three DRS zones, and an estimated top speed of 320km/h. There are elevation changes too, the main one found between Turns 13 and 16, with the track heading over an exit ramp and under various flyovers across uneven ground. The Turn 14-15 chicane, meanwhile, has an uphill approach, with a crest in the middle, and then drops down on exit.",
        angles:
        {
            layout: {
                rotateX: "0deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
            sector: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "45deg"
            },
            drs: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
        },
        turns: [
            //FOR TRACK TURN MARKERS IN FUTURE
        ],
        sectors: [
            {
                positionX: "-10%",
                positionY: "20%",
            },
            {
                positionX: "25%",
                positionY: "70%",
            },
            {
                positionX: "50%",
                positionY: "-15%",
            },
        ],
        drsZones: [
            {
                positionX: "75%",
                positionY: "60%",
            },
            {
                positionX: "30%",
                positionY: "0%",
            },
            {
                positionX: "61%",
                positionY: "30%",
            },
        ]

    },
    {
        id: 5,
        name: "Circuit de Barcelona-Catalunya",
        country: { code: "es", full: "Spain" },
        trackInfo: [
            { title: "Country", data: "Spain" },
            { title: "Circuit Direction", data: "Counter-Clockwise" },
            { title: "Number of Corners", data: "16" },
            { title: "Number of DRS Zones", data: "2" },
            { title: "Circuit Length", data: "4.675 km" },
            { title: "Race Distance", data: "308.424 km" },
            { title: "Lap Record", data: "1:18.149, Max Verstappen, 2021" },
            { title: "First Grandprix", data: "1991" },
            { title: "Most Wins (Driver)", data: "Michael Schumacher, Lewis Hamilton (6)" },
            { title: "Most Wins (Constructor)", data: "Ferrari (8)" },
            { title: "Last Winner", data: "Max Verstappen (Red Bull Racing)" },
            { title: "First Winner", data: "Nigel Mansell (Williams-Renault)" },
        ],
        trackQuote: "The drivers love the Circuit de Barcelona-Catalunya, which is just as well, because they spend huge amounts of time pounding around it during winter testing. The track is a good mix of high- and low-speed corners, with the challenging Turn 3 right-hander a great chance to evaluate the balance of the car your team’s designers have given you to fight with for the season.",
        angles:
        {
            layout: {
                rotateX: "0deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
            sector: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "45deg"
            },
            drs: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
        },
        turns: [
            //FOR TRACK TURN MARKERS IN FUTURE
        ],
        sectors: [
            {
                positionX: "5%",
                positionY: "75%",

            },
            {
                positionX: "40%",
                positionY: "0%",
            },
            {
                positionX: "65%",
                positionY: "80%",

            },
        ],
        drsZones: [
            {
                positionX: "55%",
                positionY: "15%",
            },
            {
                positionX: "45%",
                positionY: "75%",

            },
        ]

    },
    {
        id: 6,
        name: "Circuit de Monaco",
        country: { code: "mc", full: "Monaco" },
        trackInfo: [
            { title: "Country", data: "Monaco" },
            { title: "Circuit Direction", data: "Clockwise" },
            { title: "Number of Corners", data: "19" },
            { title: "Number of DRS Zones", data: "1" },
            { title: "Circuit Length", data: "3.337 km" },
            { title: "Race Distance", data: "260.286 km" },
            { title: "Lap Record", data: "1:12.909, Lewis Hamilton, 2021" },
            { title: "First Grandprix", data: "1950" },
            { title: "Most Wins (Driver)", data: "Ayrton Senna (6)" },
            { title: "Most Wins (Constructor)", data: "McLaren (15)" },
            { title: "Last Winner", data: "Sergio Pérez (Red Bull Racing)" },
            { title: "First Winner", data: "Juan Manuel Fangio (Alfa Romeo)" },
        ],
        trackQuote: "Incredibly narrow and totally iconic. Nelson Piquet memorably described driving around Monaco as “like riding a bicycle around your living room”… which is fair. Despite that, it’s a challenge that nearly all drivers love, forcing them to put their skills on the line and rewarding millimetric accuracy. Overtaking on the tight streets is harder, however, with the 2003 Grand Prix witnessing a grand total of zero passing moves!",
        angles:
        {
            layout: {
                rotateX: "0deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
            sector: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "45deg"
            },
            drs: {
                rotateX: "60deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
        },
        turns: [
            //FOR TRACK TURN MARKERS IN FUTURE
        ],
        sectors: [
            {
                positionX: "50%",
                positionY: "20%",
            },
            {
                positionX: "55%",
                positionY: "70%",
            },
            {
                positionX: "20%",
                positionY: "55%",
                
                
            },
        ],
        drsZones: [
            {
                positionX: "0%",
                positionY: "25%",
            },
        ]

    },

]

export default tracks;