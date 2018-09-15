class TestRunner {
    constructor() {
        this.suites = []
    }

    addSuite(suite) {
        this.suites.push(suite)
    }

    run() {
        var passed = 0, failed = 0
        this.suites.forEach((suite) => {
            console.log(`Executing suite ${suite.description}`)
            suite.execute()
            passed += suite.getPassed()
            failed += suite.getFailed()
        })
        console.log(`${passed} test cases passed, ${failed} test cases failed`)
    }

    getCurrentSuite() {
        if (this.suites.length > 0) {
            return this.suites[this.suites.length - 1]
        }
        return null
    }
}

module.exports = TestRunner
