const TestCase = require('./TestCase')
const Suite = require('./Suite')
const TestRunner = require('./TestRunner')

const testRunner = new TestRunner()

const it = (desc, cb) => {
    const currSuite = testRunner.getCurrentSuite()
    if (currSuite != null) {
        currSuite.addTestCase(new TestCase(desc, cb))
    }
}

const beforeEach = (cb) => {
    const currSuite = testRunner.getCurrentSuite()
    if (currSuite != null) {
        currSuite.addBeforeEach(cb)
    }
}

const afterAll = (cb) => {
    const currSuite = testRunner.getCurrentSuite()
    if (currSuite != null) {
        currSuite.addAfterAll(cb)
    }
}

const afterEach = (cb) => {
    const currSuite = testRunner.getCurrentSuite()
    if (currSuite != null) {
        currSuite.addAfterEach(cb)
    }
}

const beforeAll = (cb) => {
    const currSuite = testRunner.getCurrentSuite()
    if (currSuite != null) {
        currSuite.addBeforeAll(cb)
    }
}

const describe = (desc, cb) => {
    const suite = new Suite(desc, cb)
    testRunner.addSuite(suite)
    suite.cb()
}

const start = () => {
    testRunner.run()
}

module.exports = {it, describe, start, beforeAll, beforeEach, afterEach, afterAll}
