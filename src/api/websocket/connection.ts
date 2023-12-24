import { URLS, OPCODE } from "../../common/Constants"

const Gateway = URLS.GATEWAY

const DiscordWebSocket = Bun.serve({
    fetch(req, server) {
    const success = server.upgrade(req);
    if (success) {
        return;
    }
    return new Response("Upgrade Failed", { status: 500})
  },
  websocket: {
    open(Gateway) {
        console.log(`Client is Connected to ${Gateway}`)
    },
    message(Gateway, message) {
        console.log(message);
        Gateway.send("op: 1")
    },
  }
})


export module DiscordWebSocket{}