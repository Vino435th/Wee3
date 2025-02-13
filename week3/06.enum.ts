enum Environment{
    LOCAL ="local",
    DEVELOPMENT = "development",
    STAGING ="stage",
    PRODUCTION = "production"
}
function runTests(env:Environment): void {

    console.log(`The tests are running ${env} Environment`);   
}
runTests(Environment.LOCAL)
runTests(Environment.DEVELOPMENT)
runTests(Environment.STAGING)
runTests(Environment.PRODUCTION)