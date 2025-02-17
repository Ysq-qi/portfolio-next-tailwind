const fs = require("fs");
const path = require("path");

const directory = "./"; // 目前資料夾

fs.readdirSync(directory).forEach((file) => {
  if (file.endsWith(".jfif")) {
    const newFile = file.replace(".jfif", ".jpg");
    fs.renameSync(path.join(directory, file), path.join(directory, newFile));
    console.log(`✅ Renamed: ${file} → ${newFile}`);
  }
});
