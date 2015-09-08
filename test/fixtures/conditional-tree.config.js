System.config({
  packages: {
    'pkg': {
      map: {
        './env-condition': {
          'browser': './env-condition-browser'
        }
      }
    }
  }
});
