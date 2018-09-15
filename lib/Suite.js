class Suite {
    constructor (description, cb) {
        this.description = description
        this.testCases = []
        this.cb = cb
    }

    getPassed() {
        return this.testCases.filter((testCase)=>testCase.success).length
    }

    getFailed() {
        return this.testCases.length - this.getPassed()
    }

    addTestCase(testCase) {
        this.testCases.push(testCase)
    }

    addBeforeAll(cb) {
        this.beforeAll = cb
    }

    addBeforeEach(cb) {
        this.beforeEach = beforeEach
    }

    addAfterAll(cb) {
        this.afterAll = cb
    }

    addAfterEach(cb) {
        this.afterEach = afterEach
    }

    getCurrentTestCase() {
        if (this.testCases.length > 0) {
            return this.testCases[this.testCases.length] - 1
        }
        return null
    }

    execute() {
        if (this.beforeAll) {
            this.beforeAll()
        }
        var size = this.testCases.length
        for (var i = 0; i < size; i++) {
            if (this.beforeEach) {
                this.beforeEach()
            }
            const testCase = this.testCases[i]
            testCase.execute(new Date().getTime())
        }
        if (this.afterAll) {
            this.afterAll()
        }
    }

}

module.exports = Suite
