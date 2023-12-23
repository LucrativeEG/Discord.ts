import { Constants } from "../../common/Constants"

const websocketserver = Bun.serve({
    fetch(req, server) {
    const success = server.upgrade(req);
    if (success) {
        return;
    }
    return new Response("Upgrade Failed", { status: 500})
  },
  websocket: {
    open(ws) {
        console.log(`Client is Connected to ${ws}`)
    },
    message(ws, message) {
        console.log(message);
        ws.sendText("Yo!")
    },
  }
})


export module websocketserver{}