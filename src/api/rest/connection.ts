import { type ServeOptions } from "bun";
import { URLS } from "../../common/Constants"

Bun.serve({
    async fetch(request:Request) {
        const url = new URL(URLS.API)
        return new Response(url.href)
    },

    error(error) {
        console.log(error)
        return new Response("my bad")
    }
} as ServeOptions)