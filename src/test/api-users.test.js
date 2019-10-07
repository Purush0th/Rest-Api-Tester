
var baseApiUrl = 'https://reqres.in/api';

describe('Users API tests', function () {


    // This function will run before every test 
    beforeEach(function (done) {
        done();
    });

    describe('GET /users', function () {
        // Testing positive case
        it('get user id:2', function (done) {
            request.get({ uri: baseApiUrl + '/users/2' },
                function (error, response, body) {

                    let responseData = JSON.parse(body);

                    expect(response.statusCode).to.equal(200);
                    expect(responseData.data.id).to.equal(2);
                    expect(responseData.data.email).to.equal('janet.weaver@reqres.in');
                    done();
                });

        });

        // Testing the status 404 (negative case)
        it('returns status 404 when id is not found', function (done) {

            request.get(baseApiUrl + '/users/23', function (error, response) {
                expect(response.statusCode).to.equal(404);
                done();
            });

        });
    });




});