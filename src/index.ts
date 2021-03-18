import execa from "execa";
import Constant from "./constant";
import { args, isJSON } from "./service/toolService";
import { YtbDParams } from "./model/YoutubeVarModel";

const ytbD = async (params: YtbDParams) => {
  const { stdout } = await execa(
    Constant.youtubePath,
    args(params.url, params.flags),
    params.opts
  );
  return isJSON(stdout) ? JSON.parse(stdout) : stdout;
};

export default ytbD;
