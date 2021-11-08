import { performPurchase } from "../src/index";

describe("Testing the function perormPurchase", () => {


    test("test where the user has the balance greater than the purchase value", () => {

        const result = performPurchase({ name: "Marcio", balance: 600 }, 500)

        expect(result).toEqual({
            name: "Marcio", balance: 100
        })

    })

    test("test where the user has the balance equal the purchase value", () => {

        const result = performPurchase({ name: "José", balance: 300 }, 300)

        expect(result).toEqual({
            name: "José", balance: 0
        })
    })

    test("test where the user has the balance minor than the purchase value", () => {
        const result = performPurchase({ name: "André", balance: 200 }, 400)

        expect(result).toEqual(undefined)
    })

})