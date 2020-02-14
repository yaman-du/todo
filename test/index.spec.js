const mocha = require("mocha")
const expect = require("chai").expect
const app = require("../index")

describe("test av nånting", ()=> {
    
    it("test som kör ...", ()=> {
        expect(app).to.exist
    })

})