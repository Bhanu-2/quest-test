const BUILD_MODE = "DEV";
//const BUILD_MODE = 'STAGE';
//const ENV = 'PROD';
const CONFIG = {
  DEV: {
    "api-endpoint": "http://localhost:3000",
  },
  PROD: {
    "api-endpoint": "http://localhost:3000",
  },
};
export default {
  BUILD_MODE,
  CONFIG,
};
