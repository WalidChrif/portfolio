import { Project } from "./project.model";

export interface Education {

    diploma : string;
    major : string;
    school : string;
    tasks? : string[];
    graduationDate : string ;
    link? : string;
    projects? : Project[];    
}
