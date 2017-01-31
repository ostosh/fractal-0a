export default (store, injectReducer) => ({
  path : 'home',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = require('./components/HomeView').default

      /*  Return getComponent   */
      cb(null, Counter)

    /* Webpack named bundle   */
  }, 'home')
  }
})
