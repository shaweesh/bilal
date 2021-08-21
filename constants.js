const BANNER = `
_______ ___ ___     _______ ___     
|  _    |   |   |   |   _   |   |    
| |_|   |   |   |   |  |_|  |   |    
|       |   |   |   |       |   |    
|  _   ||   |   |___|       |   |___ 
| |_|   |   |       |   _   |       |
|_______|___|_______|__| |__|_______| v.${
    require("./package.json").version
  }
  -------------------------------------------  by ${
    require("./package.json").author.name
  }
  `;

module.exports = {
  BANNER,
  LOCAL_STORAGE_PATH: "./storage"
};
