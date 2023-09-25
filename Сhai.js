//Snippets
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201, 200, 202]);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

//Test examples (Postman doc)
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.include("200");
});

pm.test("Test через to.eql строка + число", function () {
    pm.expect(pm.response.code).to.eql("200");
});

pm.test("Test через to.eql", function () {
    pm.expect(pm.response.code).to.eql(200);
});

pm.test("Status code через to.be.below", function () {
    pm.expect(pm.response.code).to.be.below(300);
});

pm.test("Status code через to.be.above", function () {
    pm.expect(pm.response.code).to.be.above(100);
});

//Postman Sandbox API reference doc
pm.test("Status code - info", function () {
    pm.response.to.be.info;
});

pm.test("Status code - success", function () {
    pm.response.to.be.success;
});

pm.test("Status code - ok", function () {
    pm.response.to.be.ok;
});

//Chai official doc
pm.test("Status code is not 400", function(){
    pm.response.to.not.have.status(400);
});

pm.test("Test через to.equal", function () {
    pm.expect(pm.response.code).to.equal(200);
});

pm.test("Test через to.equal неточное равенство", function () {
    pm.expect(pm.response.code).to.deep.equal(200);
});

pm.test("Test через to.deep.equal неточное равенство", function () {
    pm.expect(pm.response.code).to.deep.equal(200);
});

pm.test("Test через to.deep.include", function () {
    pm.expect(pm.response.code).to.deep.include(200);
});

pm.test("Test через to.be.a string", function () {
    pm.expect(pm.response.code).to.be.a("string");
});

pm.test("Test через to.be.a number", function () {
    pm.expect(pm.response.code).to.be.a("number");
});
