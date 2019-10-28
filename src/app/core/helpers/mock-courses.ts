import { ICourse } from "../models/index";

export const COURSES: Array<ICourse> = [
    {
        id: 0,
        title: "Angular 8",
        creationDate: new Date(),
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit voluptate beatae iste placeat ad,
            perspiciatis architecto saepe quasi enim.
        `,
        duration: 120,
    },
    {
        id: 1,
        title: "Typescript",
        creationDate: new Date(),
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit voluptate beatae iste placeat ad,
            perspiciatis architecto saepe quasi enim.
        `,
        duration: 60,
    },
    {
        id: 3,
        title: "NgRx",
        creationDate: new Date(),
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit voluptate beatae iste placeat ad,
            perspiciatis architecto saepe quasi enim.
        `,
        duration: 75,
    },
];
