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
    numberOfDrsZones: number,
    circuitLength: string,
    numberOfLaps: number,
    raceDistance: string,
    lapRecord: { time: string, driver: string, year: string },
    firstGrandPrix: string,
    angles: Angle[],
    sectors: Position[],
    turns: Position[]
    drsZones: Position[]

}

const tracks: Track[] = [
    {
        id: 1,
        name: "Bahrain International Circuit",
        numberOfDrsZones: 3,
        circuitLength: "5.412 km",
        numberOfLaps: 57,
        raceDistance: "308.238 km",
        lapRecord: { time: "1:31.447", driver: "De la Rosa", year: "2005" },
        firstGrandPrix:"2004",
        angles:
            [
                {
                    rotateX: "0deg",
                    rotateY: "0deg",
                    rotateZ: "0deg"
                },
                {
                    rotateX: "60deg",
                    rotateY: "0deg",
                    rotateZ: "45deg"
                },
                {
                    rotateX: "60deg",
                    rotateY: "0deg",
                    rotateZ: "0deg"
                },
            ],
        sectors: [
            {
                positionX: "-75px",
                positionY: "250px",
            },
            {
                positionX: "175px",
                positionY: "25px",
            },
            {
                positionX: "400px",
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
                positionX: "-35px",
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