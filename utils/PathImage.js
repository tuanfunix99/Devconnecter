

//Dependencies
const path = require('path');

//root dir
const rootDir = path.dirname(process.mainModule.filename);

//get path images
exports.getPathImages = (image) => {
    return path.join(rootDir, image);
}
