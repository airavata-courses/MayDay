import * as express from 'express';
import * as bodyParser from 'body-parser';
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
        this.app.use(bodyParser.json());
        this.router.routes(this.app);
    }
}

export default new App().app;