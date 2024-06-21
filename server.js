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

        const mimetypes = [".json", ".png", ".jpg", ".png", ".ico", ".svg", ".pdf", ".txt", ".jpeg", ".JPG", ".JPEG", ".PNG", ".SVG"]

        const pathname = new URL(req.url).pathname
        if (mimetypes.includes(extname(pathname))) {
            const file = Bun.file(`./public${pathname}`)
            return new Response(file)
        }

        if (pathname.includes("public")) {
            const file = Bun.file(`./build${pathname}`)
            return new Response(file)
        }


        const file = Bun.file(join(__dirname, "build", "index.html"))
        return new Response(file)
    }
})

console.log("running server on port " + PORT);