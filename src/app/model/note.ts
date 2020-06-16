import { Timestamp } from "rxjs";

export interface Note {
    id: number;
    description: string;
    iconUrl: string;
    category: string;
    planningDate: Date;
    registeredDate: Date;
    isRegular: boolean;
}
