# ytb-d

### Wrapper for youtube

Package wich allows to get music and video url of youtube

### Process : 

```
import ytbD from 'ytb-d';

ytbD({
    url: 'https://your-youtube-link.com',
    flags: {
        dumpJson: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        preferFreeFormats: true,
        youtubeSkipDashManifest: true,
        referer: 'https://your-youtube-link.com'
    }
})

```

Give:

```
youtube-dl https://your-youtube-link.com --dump-json --no-warnings --no-call-home --no-check-certificate --prefer-free-formats --youtube-skip-dash-manifest --referer=https://your-youtube-link.com

```

For opts parameters

Takes a look at [execa#options](https://github.com/sindresorhus/execa#options)