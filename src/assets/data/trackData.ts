export interface Angle {
    rotateX: string,
    rotateY: string,
    rotateZ: string
}
export interface Position {
    positionX: string,
    positionY: string,
    positionZ: string
}
interface Track {
    name: string,
    numberOfDrsZones: number,
    angles: Angle[]
    sectors: { angle: Angle, position: Position[] }
}

const tracks: Track[] = [
    {
        name: "Bahrain International Circuit",
        numberOfDrsZones: 3,
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
                    rotateZ: "0deg"
                },
                {
                    rotateX: "60deg",
                    rotateY: "0deg",
                    rotateZ: "45deg"
                },
            ],
        sectors: {
            angle: {
                rotateX: "-60deg",
                rotateY: "0deg",
                rotateZ: "0deg"
            },
            position: [
                {
                    positionX: "-75px",
                    positionY: "100px",
                    positionZ: "0px"
                },
                {
                    positionX: "200px",
                    positionY: "275px",
                    positionZ: "0px"
                },
                {
                    positionX: "400px",
                    positionY: "50px",
                    positionZ: "0px"
                },
            ]
        }

    },
]

export default tracks;