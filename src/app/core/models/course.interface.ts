import { IAuthor} from "./author.interface";

/**
 * This interface is describing a Course model
 * id: course id, number
 * title: course title, string
 * creationDate: date of course creation, string
 * duration: course duration (min), number
 * description: course description, string
 * topRated: boolean
 */

export interface ICourse {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    topRated: boolean;
    authors?: Array<IAuthor>;
}


