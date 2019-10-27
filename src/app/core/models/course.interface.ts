/**
 * This interface is describing a Course model
 * id: course id, number
 * title: course title, string
 * creationDate: date of course creation, Date
 * duration: course duration (min), number
 * description: course description, string
 */

export interface ICourse {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
}
