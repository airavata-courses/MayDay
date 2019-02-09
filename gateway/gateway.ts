import * as reqProm from 'request-promise';
import * as _ from 'lodash';
import * as fs from 'fs';

export class Search {

    requestOptions: any
    httpsRequestPromise: any;
    requestParams: any
    constructor(type: string, requestParams: any, uid: string = 'none') {
        this.requestParams = requestParams;
        this.requestOptions = {
            uri: this.getRestURL(type, uid) + '?' + this.createRequestUri() + '&user_key='+this.getApiKey(),
            method: 'GET',
            json: true
        }
    }

    getApiKey(): string {
        const content = fs.readFileSync('server.json', 'utf-8');
        const restConfig = JSON.parse(content);
        return restConfig['better-doctor-api-key'];
    }
    getRestURL(type: string, uid: string): string {
        const content = fs.readFileSync('server.json', 'utf-8');
        const restConfig = JSON.parse(content);
        let url = restConfig[type];
        if (url) {
            url = url.replace('$$uid', uid);
        }
        console.log(url);
        return url;
    }

    requestApi(): Promise<any> {
        return reqProm(this.requestOptions);
    }

    createRequestUri(): string {
        let queryString: string[] = [];
       _.forEach(this.requestParams, (value, key) => {
            queryString.push(key+'='+value);
       });
       return queryString.join('&')
    }

}