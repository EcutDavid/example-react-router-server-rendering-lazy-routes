// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default {
  path: 'new',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/New'))
    })
  }
}
