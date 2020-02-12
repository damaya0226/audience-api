import awsServerlessExpressMiddleware from "aws-serverless-express/middleware";
import * as bodyParser from "body-parser";
import cors from "cors";
import express from "express";

class App {
    public expressApp: express.Application;

    constructor(controllers: any) {
        this.expressApp = express();

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen(port: number) {
        this.expressApp.listen(port, () => {
            // tslint:disable-next-line:no-console
            console.log(`App listening on the port ${port}`);
        });
    }

    private initializeMiddlewares() {
        this.expressApp.use(cors());
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
        this.expressApp.use(awsServerlessExpressMiddleware.eventContext());
    }

    private initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
            this.expressApp.use("/", controller.router);
        });
    }

}

export default App;
