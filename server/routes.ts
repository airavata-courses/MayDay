import * as cors from 'cors';
import { Application, Request, Response } from 'express';
import * as _ from 'lodash';

import { Search } from '../gateway/gateway';

export class Routes {

    alllowedPaths: string[];
    constructor() {
        
        this.alllowedPaths = ['alldoctors', 'specificdoctor', 'allpractices', 'specificpractice', 'doctorsinpractice', ]
    }
    routes(app: Application): void {
        app.use(cors());
        app.options('*', cors());
        app.route('/test').get((req: Request, res: Response) => {
            res.status(200).send('OK');
        });
        
        app.route('/*').post(async (req: Request, res: Response) => {
            const paramsFromRequest: any = req.body;
            const path = req.path.replace(/\//g,'');
            console.log(path);
            if (this.alllowedPaths.indexOf(path) == -1) {
                res.status(500).send({'error': '/'+path+' not allowed'});
                return;
            }
            const searchInstance = new Search(path, _.omit(paramsFromRequest, ['uid']), paramsFromRequest['uid']);
            res.set('Content-Type', 'application/json')
            let jsonData: any = null;
            let status = 200;
            await searchInstance.requestApi().then((data) => {
                jsonData = data;
            }).catch((err) => {
                status = 500;
                jsonData = {'error': err+''};
            });  
            res.status(status).send(jsonData);
        });
    }
}