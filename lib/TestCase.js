class TestCase {
    constructor(description, cb) {
        this.description = description
        this.cb = cb
    }

    execute(time) {
        while (!this.success) {
            try {
                const curr = new Date().getTime()
                if (curr - time > 10000 && !this.success) {
                    throw new Error("timeout exceeds 10 seconds")
                }
                this.cb(() => {
                    this.success = true
                })

            } catch(ex) {
                console.log(ex.message)
                break
            }
        }
        if (this.success) {
            console.log(`${this.description} is successful`)
        } else {
            console.log(`${this.description} has failed`)
        }
    }

    getCurrentTestCase() {
        return this
    }

    setSuccessful() {
        this.success = true
    }
}

module.exports = TestCase
