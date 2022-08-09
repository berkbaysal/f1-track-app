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
    country:string,
    trackInfo: { title: string, data: string }[]
    trackQuote: string
    angles: { layout: Angle, sector: Angle, drs: Angle },
    sectors: Position[],
    turns: Position[]
    drsZones: Position[]

}

const tracks: Track[] = [
    {
        id: 0,
        name: "Bahrain International Circuit",
        country:"bh",
        trackInfo: [
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
        trackQuote:"You can usually expect great racing and decent amounts of overtaking in Bahrain, while the drivers have to contend with wind, racing under floodlights and the difficulty of finding a decent set-up with the wide temperature fluctuations between sessions. The track’s most challenging point is the tight, downhill, off-camber Turn 10 left-hander, while the fast run through Turn 12 is another highlight, allowing the racers to really feel their cars coming alive.",
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
        sectors: [
            {
                positionX: "-85px",
                positionY: "250px",
            },
            {
                positionX: "175px",
                positionY: "25px",
            },
            {
                positionX: "380px",
                positionY: "50px",
            },
        ],

        turns: [
            {
                positionX: "-20px",
                positionY: "330px",
            },
            {
                positionX: "65px",
                positionY: "280px",
            },
            {
                positionX: "5px",
                positionY: "230px",
            },
            {
                positionX: "55px",
                positionY: "-25px",
            },
            {
                positionX: "120px",
                positionY: "85px",
            },
            {
                positionX: "200px",
                positionY: "85px",
            },
            {
                positionX: "140px",
                positionY: "150px",
            },
            {
                positionX: "270px",
                positionY: "210px",
            },
            {
                positionX: "100px",
                positionY: "180px",
            },
            {
                positionX: "70px",
                positionY: "230px",
            },
            {
                positionX: "400px",
                positionY: "220px",
            },
            {
                positionX: "260px",
                positionY: "150px",
            },
            {
                positionX: "320px",
                positionY: "-5px",
            },
            {
                positionX: "490px",
                positionY: "280px",
            },
            {
                positionX: "420px",
                positionY: "290px",
            },
        ],

        drsZones: [
            {
                positionX: "-65px",
                positionY: "100px",
            },
            {
                positionX: "270px",
                positionY: "280px",
            },
            {
                positionX: "85px",
                positionY: "350px",
            }
        ]

    },
    {
        id: 1,
        name: "Turkey International Circuit",
        country:"tr",
        trackInfo: [
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
        trackQuote:"You can usually expect great racing and decent amounts of overtaking in Bahrain, while the drivers have to contend with wind, racing under floodlights and the difficulty of finding a decent set-up with the wide temperature fluctuations between sessions. The track’s most challenging point is the tight, downhill, off-camber Turn 10 left-hander, while the fast run through Turn 12 is another highlight, allowing the racers to really feel their cars coming alive.",
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
        sectors: [
            {
                positionX: "-85px",
                positionY: "250px",
            },
            {
                positionX: "175px",
                positionY: "25px",
            },
            {
                positionX: "380px",
                positionY: "50px",
            },
        ],

        turns: [
            {
                positionX: "-20px",
                positionY: "330px",
            },
            {
                positionX: "65px",
                positionY: "280px",
            },
            {
                positionX: "5px",
                positionY: "230px",
            },
            {
                positionX: "55px",
                positionY: "-25px",
            },
            {
                positionX: "120px",
                positionY: "85px",
            },
            {
                positionX: "200px",
                positionY: "85px",
            },
            {
                positionX: "140px",
                positionY: "150px",
            },
            {
                positionX: "270px",
                positionY: "210px",
            },
            {
                positionX: "100px",
                positionY: "180px",
            },
            {
                positionX: "70px",
                positionY: "230px",
            },
            {
                positionX: "400px",
                positionY: "220px",
            },
            {
                positionX: "260px",
                positionY: "150px",
            },
            {
                positionX: "320px",
                positionY: "-5px",
            },
            {
                positionX: "490px",
                positionY: "280px",
            },
            {
                positionX: "420px",
                positionY: "290px",
            },
        ],

        drsZones: [
            {
                positionX: "-65px",
                positionY: "100px",
            },
            {
                positionX: "270px",
                positionY: "280px",
            },
            {
                positionX: "85px",
                positionY: "350px",
            }
        ]

    },

]

export default tracks;