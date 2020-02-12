import * as express from "express";
import {Error} from "../../audience-core/entities/error";
import {Presentation} from "../../audience-core/entities/presentation";
import {IPresentationService} from "../../audience-core/interfaces/presentation.service";

export class PresentationController {

    public router = express.Router();
    private path: string = "/presentations";
    private presentationService: IPresentationService;

    constructor(presentationService: IPresentationService) {
        this.presentationService = presentationService;
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.findAll);
        this.router.post(this.path, this.create);
    }

    private findAll = (request: express.Request, response: express.Response) => {
        const start = +new Date();
    }

    private create = (request: express.Request, response: express.Response) => {
        const start = +new Date();
        this.presentationService.create(request.body as Presentation)
        .then((presentation) => {
            response
                .status(201)
                .json({ result : presentation, time: +new Date() - start });
        })
        .catch((error) => {
            response
                .status(this.resolveErrorCode(error))
                .json({ error, time: +new Date() - start });
        });
    }

    private resolveErrorCode(error: Error): number {
        let result;
        if (error as Error === Error.MISSING_PARAMETER) {
            result = 400;
        } else if (error as Error === Error.ALREADY_EXIST) {
            result = 409;
        } else if (error as Error === Error.INVALID_PARAMETER) {
            result = 422;
        } else if (error as Error === Error.NOT_FOUND) {
            result = 404;
        } else {
            result = 500;
        }
        return result;
    }
}
