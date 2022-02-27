import { randomBytes, pbkdf2Sync } from "crypto"

export const validatePassword = (inputPassword: string, salt: string, storedHash: string) => {
  const inputHash = pbkdf2Sync(inputPassword, salt, 1000, 64, "sha512").toString("hex")
  return storedHash === inputHash
}

export const hashPassword = (password: string) => {
  const salt = randomBytes(16).toString("hex")
  const hash = pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex")
  return { hash, salt }
}
