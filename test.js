const assert = require('assert')
const {it, describe, start} = require('./lib')

describe('1st suite', () => {
    it('checks 1 == 1', (done) => {
        assert(1 == 1)
        done()
    })
    it('checks 2 == 2', (done) => {
        assert(2 == 2)
        done()
    })
    it('checks 3 == 3', (done) => {
        assert(3 == 3)
        done()
    })
})

describe('2nd suite checking failure', () => {
  it('checks 1 == 2', (done) => {
      assert(1 == 2)
      done()
  })
  it('checks 2 == 3', (done) => {
      assert(2 == 3)
      done()
  })
  it('checks 3 == 4', (done) => {
      assert(3 == 4)
      done()
  })
  it('checks 1 == 1', (done) => {
      assert(1 == 1)
  })
  it('checks 2 == 2', (done) => {
      assert(2 == 2)
  })
  it('checks 3 == 3', (done) => {
      assert(3 == 3)
  })
  it('checks 1 == 1', (done) => {
      assert(1 == 1)
      done()
  })
})

start()
