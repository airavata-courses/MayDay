import { Request, Response, Application } from 'express';

export class Routes {

    routes(app: Application): void {
        app.route('/test1').get((req: Request, res: Response) => {
            res.sendStatus(200);
        });
    }
}