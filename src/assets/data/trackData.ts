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
    country: string,
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
        country: "bh",
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
                positionX: "75%",
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
    
]

export default tracks;