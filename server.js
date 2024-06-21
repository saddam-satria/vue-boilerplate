const { join, extname } = require("path")
const { existsSync } = require("fs")


const PORT = 3300

Bun.serve({
    port: PORT,
    fetch(req) {
        const isBuildExist = existsSync(join("build"))

        if (!isBuildExist) {
            return new Response("failed to serve vue app")

        }
        const pathname = new URL(req.url).pathname


        const rootFile = Bun.file(join(__dirname, "build", "index.html"))
        if (pathname === "/") {
            return new Response(rootFile)
        }

        const filePath = join(__dirname, "build", pathname)

        if (!existsSync(filePath)) {
            if (!extname(filePath)) {
                return new Response(rootFile)
            }
            return new Response("not found")
        }


        const file = Bun.file(filePath)
        return new Response(file)
    }
})

console.log("running server on port " + PORT);