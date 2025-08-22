// import { DataRepresentationType } from "@/types/types";

// function getRepresentationFunction(representationId: number) {
//     switch (representationId):
//     case 0:
//         "lane"
//     case 1:
//         "percent", "level", "time", "boolean"]
//     case 2:
//         "level", "time", "boolean"]
//     case 3:
//         "time", ]
//     case 4:
//         "boolean"
// }

// export default function numberRepresentationDecoder(value: number | undefined): DataRepresentationType | null {
// if (!value) return null



//     const hours = Math.floor(value / HOUR);
// const minutes = Math.floor((value % HOUR) / MINUTE);
// const seconds = value % MINUTE;

// if (hours !== 0) {
//     return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
// }

// return `${padTime(minutes)}:${padTime(seconds)}`;
// }