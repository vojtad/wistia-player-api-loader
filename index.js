(function (window) {
  var WistiaPlayerApiLoader = {
    src: 'https://fast.wistia.com/assets/external/E-v1.js',
    loading: false,
    loaded: false,
    loadedCheckInterval: null,
    listeners: [],

    load: function (callback) {
      var _this = this;
      this.listeners.push(callback);

      if (this.loaded) {
        setTimeout(function () {
          _this.done();
        }, 0);
        return;
      }

      if (this.loading) {
        return;
      }

      this.loading = true;

      this.loadedCheckInterval = setInterval(function () {
        if (typeof window.Wistia !== 'undefined') {
          clearInterval(this.loadedCheckInterval);
          _this.loadedCheckInterval = null;
          _this.loaded = true;
          _this.done();
        }
      }, 100);

      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'ISO-8859-1';
      script.async = true;
      script.src = this.src;
      document.head.appendChild(script);
    },

    done: function () {
      while (this.listeners.length > 0) {
        this.listeners.pop()(window.Wistia);
      }
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = WistiaPlayerApiLoader;
  } else {
    window.WistiaPlayerApiLoader = WistiaPlayerApiLoader;
  }
}(window));
