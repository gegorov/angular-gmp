import { ICourse } from "../models/index";

export class Course implements ICourse {
    public id: number;
    public title: string;
    public creationDate: Date;
    public duration: number;
    public description: string;
}
