import { promises } from "fs";
import mkdirP from "mkdirp";
import Constant from "./constant";
import { bufferData, getStreamUrl } from "./service/converterService";

const getBuffer = async () => {
  try {
    const [{ assets }] = await getStreamUrl(Constant.youtubeHost);
    return await bufferData(assets, Constant.youtubeFilename);
  } catch (err) {
    throw new Error(err || err.message)
  }
};

Promise.all([getBuffer(), mkdirP(Constant.youtubeDir)]).then(([buffer]) =>
  promises
    .writeFile(Constant.youtubePath, buffer, { mode: 493 })
    .catch((err) => {
        throw err.message || err
    })
);
