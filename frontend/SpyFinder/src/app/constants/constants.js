const APIRoot = "http://localhost:8080";//config.API_URL;
const isProduction = false;//config.IS_PRODUCTION;
var Constants = {
  APIEndpoints: {
    APIRoot: APIRoot,
    SPIES: APIRoot + '/spies'
  }
}
console.log(Constants)
export default Constants