import { Project } from "./project.model";

export interface Experience {

    company : string;
    position : string;
    tasks? : string[];
    startDate :  string;
    endDate : string;
    location : string;
    link? : string
    projects? : Project[];

}
