const esbuild = require("esbuild")

const options = {
  entryPoints: ["./src/index.js"],
  bundle: true,
  sourcemap: true,
  minify: true,
  platform: "node",
  target: ["node16"],
}

esbuild.build({ ...options, outfile: "lib/index.js", format: "cjs" }).catch(() => process.exit(1))
esbuild.build({ ...options, outfile: "lib/index.esm.js", format: "esm" }).catch(() => process.exit(1))
