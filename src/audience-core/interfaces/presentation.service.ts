import {Error} from "../entities/error";
import {Presentation} from "../entities/presentation";

export interface IPresentationService {

    /**
     * Creates a new presentation
     * @param presentation presentation to be created
     * @param callback
     */
    create(presentation: Presentation): Promise<Presentation>;
}
