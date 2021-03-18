import execa from "execa";

type YtbVarModel = {
  youtubeHost: string;
  youtubeDir: string;
  youtbePlatform: string;
  youtubeFilename: string;
  youtubePath: string;
};

type YtbDParams = {
  url: string;
  flags?: YtbFlags;
  opts?: execa.Options<string>;
};

type YtbFlags = {
  dumpJson?: boolean;
  listFormats?: boolean;
  noWarnings?: boolean;
  noCallHome?: boolean;
  noCheckCertificate?: boolean;
  preferFreeFormats?: boolean;
  youtubeSkipDashManifest?: boolean;
  referer?: string;
};

export { YtbVarModel, YtbDParams, YtbFlags };
