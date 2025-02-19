import fs from "fs";
import path from "path";

const directory: string = "./"; // 目前資料夾

fs.readdirSync(directory).forEach((file: string) => {
  if (file.endsWith(".jfif")) {
    const newFile: string = file.replace(".jfif", ".jpg");
    fs.renameSync(path.join(directory, file), path.join(directory, newFile));
    console.log(`✅ Renamed: ${file} → ${newFile}`);
  }
});
