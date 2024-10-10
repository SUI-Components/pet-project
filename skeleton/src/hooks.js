import TYPES from '@s-ui/ssr/hooks-types'

export default {
  [TYPES.LOGGING]: (req, res, next) => {
    console.log(req.url)
    next()
  }
}
