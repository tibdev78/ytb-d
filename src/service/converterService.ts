import getStream from "get-stream";
import getData from "./httpService";
import ContentTypes from "../model/ContentTypeModel";

const getStreamUrl = async (url: string) => {
  const request = await getData(url, { responseType: "stream" });
  const contentType = request.headers["content-type"].split(";");
  if (ContentTypes.includes(contentType)) {
    return getStream(request.data, { encoding: "utf8" });
  }
  return JSON.parse(await getStream(request.data));
};

const bufferData = async (data: any, filename: string) => {
  const { browser_download_url: downloadUrl } = data.find(
    ({ name }) => name === filename
  );
  const buffer = await getData(downloadUrl, { responseType: "arraybuffer" });
  return buffer.data;
};

export { getStreamUrl, bufferData };
