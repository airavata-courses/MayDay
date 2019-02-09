import * as chai from 'chai';
import app from '../server/app';
import 'mocha';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('Blobs', function() {

    it('should return status ok on /test', (done) => {
        chai.request(app)
        .get('/test')
        .end((err: any, res) => {
            res.should.have.status(200);
            done();
        });
        
    });
    
    it('should list a SINGLE blob on /blob/<id> GET');
    it('should add a SINGLE blob on /blobs POST');
    it('should update a SINGLE blob on /blob/<id> PUT');
    it('should delete a SINGLE blob on /blob/<id> DELETE');
  });