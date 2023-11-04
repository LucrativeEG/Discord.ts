export enum Constants {
    GATEWAY = "wss://gateway.discord.gg/",
    API = "https://discord.com/api/v10",
  }
  
  export enum OPCODE {
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    ELEVEN = 11,
    TWELVE = 12,
  }
  
  export enum ENDPOINT {
    USERS = 'users',
    USER_GUILDS = 'users/@me/guilds',
    GUILDS = 'guilds',
    CHANNELS = 'channels',
    MESSAGES = 'messages',
    MEMBERS = 'members',
    REACTIONS = 'reactions',
    PINS = 'pins',
  }
  
  export enum StatusCode {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    NOT_MODIFIED = 304,
    BAD = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    TOO_MANY_REQUESTS = 429,
    GATEWAY_UNAVAILABLE = 502,
  }
  
  export enum REGEX {
    EMOJI_WITH_COLON = ':\\w+:\\d+',
    GROUP_EMOJI_ID = '^:\\w+:(\\d+)$',
    EMOJI_ID_ONLY = '^\\d+$',
    GROUP_EMOJI_NAME = '^:(\\w+):\d+$',
    GROUP_EMOJI = '^:(\\w+):(\\d+)$'
  }

  export enum ERRORS {
    UNKNOWN_ERROR = 4000,
    UNKNOWN_OPCODE = 4001,
    DECODE_ERROR = 4002,
    FAILED_TO_DECODE_PAYLOAD = 4002,
    NOT_AUTHORIZED = 4003,
    AUTHENTICATION_FAILED = 4004,
    ALREADY_AUTHENTICATED = 4005,
    SESSION_NO_LONGER_VALID = 4006,
    INVALID_SEQUANCE = 4007,
    RATE_LIMITED = 4008,
    SESSION_TIMED_OUT = 4009,
    INVALID_SHARD = 4010,
    SHARDING_REQUIRED = 4011,
    SERVER_NOT_FOUND = 4011,
    INVALID_API_VERSION = 4012,
    UNKNOWN_PROTOCOL = 4012,
    INVALID_INTENT = 4013,
    DISALLOWED_INTENT = 4014,
    DICONNECTED = 4014,
    VOICE_SERVER_CRASHED = 4015,
    UNKNOWN_ENCRYPTION_MODE = 4016
  }