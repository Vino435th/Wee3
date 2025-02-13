var Environment;
(function (Environment) {
    Environment["LOCAL"] = "local";
    Environment["DEVELOPMENT"] = "development";
    Environment["STAGING"] = "stage";
    Environment["PRODUCTION"] = "production";
})(Environment || (Environment = {}));
function runTests(env) {
    console.log("The tests are running ".concat(env, " Environment"));
}
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);
