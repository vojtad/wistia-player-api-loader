# wistia-player-api-loader
Wrapper for loading [Wistia Player API](https://wistia.com/support/developers/player-api) JS. Inspired by [youtube-iframe](https://github.com/Prinzhorn/youtube-iframe).

# Install
```
npm install wistia-player-api-loader
```
```
yarn add wistia-player-api-loader
```

# Usage
```
import WistiaPlayerApiLoader from 'wistia-player-api-loader';

WistiaPlayerApiLoader.load((Wistia) => {
    const videoId = '...';
    const containerId = '...';

    Wistia.embed(videoId, {
        container: containerId,
    });
});
```

