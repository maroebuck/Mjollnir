const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "https://localhost:7125",
    secure: false
  },
  {
    context: [
      "/api/customers/*",
    ],
    target: "https://localhost:7125",
    secure: false
  },
  {
    context: [
      "/api/subscriptions/*",
    ],
    target: "https://localhost:7125",
    secure: false
  },
  {
    context: [
      "/api/webhook/*",
    ],
    target: "https://localhost:7125",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
