// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default {
  path: 'about',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/About'))
    })
  }
}
