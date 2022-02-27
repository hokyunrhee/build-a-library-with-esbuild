import { hashPassword, validatePassword } from "./password"

const PASSWORD = "10024"
const VALUES = {
  hash: "cdf35497b71a1add33d238b271d41f30229895ac4ec071d1aeb7f453dc7982d607d010eac5c1cc159fadb0e41a5c954ebc633f811c87b39774329ba79b9bfd39",
  salt: "6ee365f0298ca296ca2964196916fd6d",
  password: PASSWORD,
  wrongPassword: `a${PASSWORD}`,
}

describe("hashPassword", () => {
  test("hashPassword returns an object with hash", () => {
    const result = hashPassword(PASSWORD)
    expect(result).toHaveProperty("hash")
  })

  test("hashPassword returns an object with salt", () => {
    const result = hashPassword(PASSWORD)
    expect(result).toHaveProperty("salt")
  })
})

describe("validatePassword", () => {
  test("with correct password", () => {
    expect(validatePassword(VALUES.password, VALUES.salt, VALUES.hash)).toBe(true)
  })

  test("with wrong password", () => {
    expect(validatePassword(VALUES.wrongPassword, VALUES.salt, VALUES.hash)).toBe(false)
  })
})
