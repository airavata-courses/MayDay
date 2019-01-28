import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Routes } from './routes';

class App {

    app: express.Application;
    router: Routes;

    constructor() {
        this.app = express();
        this.router = new Routes();
        this.config();
    }

    config(): void {
         const corOptions = {
             'origin': '*',
             'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
             'preflightContinue': true,
             allowedHeaders:  'Content-Type,Authorization,X-Requested-With'
        };
        this.app.use(cors(corOptions));
        this.app.use(bodyParser.json());
        this.router.routes(this.app);
    }

}

export default new App().app;