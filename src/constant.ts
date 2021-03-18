import isWindows from "is-windows";
import path from "path";
import Platform from "./model/PlatFormModel";
import { YtbVarModel } from "./model/YoutubeVarModel";

const platformChoice = isWindows() ? Platform.Win : Platform.Unix;
const dir = path.join(__dirname, "..", "./bin");
const filename = `youtube-dl${platformChoice === Platform.Win ? ".exe" : ""}`;

const constant: YtbVarModel = {
  youtubeHost:
    "https://api.github.com/repos/ytdl-org/youtube-dl/releases?per_page=1",
  youtubeDir: dir,
  youtbePlatform: platformChoice,
  youtubeFilename: filename,
  youtubePath: path.join(dir, filename),
};

export default constant;
