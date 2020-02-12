import awsServerlessExpress from "aws-serverless-express";
import {PresentationServiceImpl} from "../audience-core/usecases/presentation.service.impl";
import App from "./app";
import {PresentationController} from "./controllers/presentation.controller";

const app = new App([new PresentationController(new PresentationServiceImpl(null))]);
const index = awsServerlessExpress.createServer(app.expressApp);
exports.handler = (event: any, context: any) => { awsServerlessExpress.proxy(index, event, context); };

app.listen(8090);
