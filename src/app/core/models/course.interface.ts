import { IAuthor} from "./author.interface";

/**
 * This interface is describing a Course model
 */
export interface ICourse {
    /**
     * Course ID
     */
    id: number;

    /**
     * course title
     */
    name: string;

    /**
     * course date in string format
     */
    date: string;

    /**
     * course duration in minutes
     */
    length: number;

    /**
     * course description
     */
    description: string;

    /**
     * course top rated flag
     */
    topRated: boolean;

    /**
     * course author - optional array of IAuthor
     */
    authors?: Array<IAuthor>;
}


