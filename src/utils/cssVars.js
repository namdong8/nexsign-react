import cssVars from 'css-vars-ponyfill'
import { api } from './api'

const fontPath = api.loadConfig("./config/config.json")
// CSS
cssVars({
    onlyLegacy: false,
    variables: {
      /* font Path  */
      '--NotoSansKR-Light-woff2': `url(${fontPath}/NotoSa nsKR-Light.woff2) format("woff2")`,
      '--NotoSansKR-Light-woff': `url(${fontPath}/NotoSansKR-Light.woff) format("woff")`,
      '--NotoSansKR-Light-otf': `url(${fontPath}/NotoSansKR-Light.otf) format("opentype")`,
      '--NotoSansKR-Bold-woff2': `url(${fontPath}/NotoSansKR-Bold.woff2) format("woff2")`,
      '--NotoSansKR-Bold-woff': `url(${fontPath}/NotoSansKR-Bold.woff) format("woff")`,
      '--NotoSansKR-Bold-otf': `url(${fontPath}/NotoSansKR-Bold.otf) format("opentype")`,
      '--NotoSansKR-Regular-woff2': `url(${fontPath}/NotoSansKR-Regular.woff2) format("woff2")`,
      '--NotoSansKR-Regular-woff': `url(${fontPath}/NotoSansKR-Regular.woff) format("woff")`,
      '--NotoSansKR-Regular-otf': `url(${fontPath}/NotoSansKR-Regular.otf) format("opentype")`,
      '--NotoSansKR-Medium-woff2': `url(${fontPath}/NotoSansKR-Medium.woff2) format("woff2")`,
      '--NotoSansKR-Medium-woff': `url(${fontPath}/NotoSansKR-Medium.woff) format("woff")`,
      '--NotoSansKR-Medium-otf': `url(${fontPath}/NotoSansKR-Medium.otf) format("opentype")`,
    }
  })

export default cssVars