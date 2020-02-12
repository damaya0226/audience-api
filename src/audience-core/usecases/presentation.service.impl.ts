import validator from "validator";
import {Error} from "../entities/error";
import {Presentation} from "../entities/presentation";
import {Slide} from "../entities/slide";
import {IConsultantRepository} from "../interfaces/presentation.repository";
import {IPresentationService} from "../interfaces/presentation.service";

export class PresentationServiceImpl implements IPresentationService {

    private consultantRepository: IConsultantRepository;

    constructor(consultantRepository: IConsultantRepository) {
        this.consultantRepository = consultantRepository;
    }

    public create(presentation: Presentation): Promise<Presentation> {
        return new Promise<Presentation>( (resolve, reject) => {
            const validationError = this.validatePresentation(presentation);
            if (!validationError) {
                resolve(presentation);
            } else {
                reject(validationError);
            }
        });
    }

    private validatePresentation(presentation: Presentation): Error {
        let error: Error;
        if (presentation && presentation.pdfUrl) {
            if (validator.isURL(presentation.pdfUrl)) {
                error = this.validateSlides(presentation.slides);
                if (!error) {
                    //
                }
            } else {
                error = Error.INVALID_PARAMETER;
            }
        } else {
            error = Error.MISSING_PARAMETER;
        }
        return error;
    }

    private validateSlides(slides: Slide[]): Error {
        let error: Error;
        if (slides && slides.length > 0) {
            //
        } else {
            error = Error.MISSING_PARAMETER;
        }
        return error;
    }

}
