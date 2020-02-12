import {Presentation} from "../entities/presentation";

export interface IConsultantRepository {

    /**
     * Creates a new presentation within a group
     * @param presentation presentation to be created
     * @param group company name
     * @param callback
     */
    create(presentation: Presentation): Promise<Presentation>;
}
