const fs = require("fs");
const path = require("path");

exports.removeImage = (name) => {
  if (name.trim().length <= 0) {
    return;
  }
  const pathImage = path.join(__dirname, "../images", name);
  const check = fs.existsSync(pathImage);
  if (check) {
    fs.unlinkSync(pathImage);
  }
};
