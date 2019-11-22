import { ICourse } from "../models/index";

export const COURSES: Array<ICourse> = [
    {
        id: 0,
        title: "Angular 8",
        creationDate: new Date("December 21, 2019 00:00:00"),
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit voluptate beatae iste placeat ad,
            perspiciatis architecto saepe quasi enim.
        `,
        duration: 120,
        topRated: true,
    },
    {
        id: 1,
        title: "Typescript",
        creationDate: new Date("November 15, 2019 00:00:00"),
        description: `
            Learn about where you can find course descriptions, what information they include, how they work, and
            details about various components of a course description. Course descriptions report information about a
            university or college's classes. They're published both in course catalogs that outline degree requirements
            and in course schedules that contain descriptions for all courses offered during a particular semester.
        `,
        duration: 60,
        topRated: false,
    },
    {
        id: 3,
        title: "NgRx",
        creationDate: new Date("August 1, 2019 00:00:00"),
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit voluptate beatae iste placeat ad,
            perspiciatis architecto saepe quasi enim.
        `,
        duration: 75,
        topRated: false,
    },
];
