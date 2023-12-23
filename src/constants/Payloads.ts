import { OPCODE } from "./Constants.ts";

export const GatewayDispatch = {
  "op": OPCODE.ZERO
}

export const GatewayHeartbeat = {
  "op": OPCODE.ONE,
  "d": null
};

export const GatewayIdentify = {
  "op": OPCODE.TWO,
  "d": {
    token: "",
    properties: {
      "os": "linux",
      "browser": "discord.ts",
      "device": "discord.ts"
    }
  }
}

export const GatewayPresenceUpdate = {
  "op": OPCODE.THREE,
  "d": {
    "since": 0,
    "activities": [{
      "name": "",
      "type": 0
    }],
    "status": "",
    "afk": true || false,
  }
}

export const GatewayVoiceStateUpdate = {
  "op": OPCODE.FOUR,
  "d": {
    "guild_id": "",
    "channel_id": "",
    "self_mute": false,
    "self_deaf": false
  }
}

export const GatewayResume={
  "op": OPCODE.SIX,
  "d": {
    "token": "",
    "session_id": "session_id_i_stored",
    "seq": 1337
  }
}

export const GatewayReconnect = {
  "op": OPCODE.SEVEN
}

export const GatewayRequestGuildMembers = {
  "op": OPCODE.EIGHT,
  "d": ""
}

export const GatewayInvalidSession = {
  "op": OPCODE.NINE
}

export const GatewayHello = {
  "op": OPCODE.TEN,
  "d": {
    "heartbeat_interval": 45000
  }
}

export const GatewayHeartbeatACK = {
  "op": OPCODE.ELEVEN
}