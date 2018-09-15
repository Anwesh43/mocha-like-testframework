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

const describe = (desc, cb) => {
    const suite = new Suite(desc, cb)
    testRunner.addSuite(suite)
    suite.cb()
}

const start = () => {
    testRunner.run()
}

module.exports = {it, describe, start}
