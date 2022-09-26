import cssVars from 'css-vars-ponyfill'

export function setFonts(FONT_PATH: string) {
	// CSS
	cssVars({
		onlyLegacy: false,
		variables: {
			/* font Path  */
			'--NotoSansKR-Light-woff2': `url(${FONT_PATH}/NotoSa nsKR-Light.woff2) format("woff2")`,
			'--NotoSansKR-Light-woff': `url(${FONT_PATH}/NotoSansKR-Light.woff) format("woff")`,
			'--NotoSansKR-Light-otf': `url(${FONT_PATH}/NotoSansKR-Light.otf) format("opentype")`,
			'--NotoSansKR-Bold-woff2': `url(${FONT_PATH}/NotoSansKR-Bold.woff2) format("woff2")`,
			'--NotoSansKR-Bold-woff': `url(${FONT_PATH}/NotoSansKR-Bold.woff) format("woff")`,
			'--NotoSansKR-Bold-otf': `url(${FONT_PATH}/NotoSansKR-Bold.otf) format("opentype")`,
			'--NotoSansKR-Regular-woff2': `url(${FONT_PATH}/NotoSansKR-Regular.woff2) format("woff2")`,
			'--NotoSansKR-Regular-woff': `url(${FONT_PATH}/NotoSansKR-Regular.woff) format("woff")`,
			'--NotoSansKR-Regular-otf': `url(${FONT_PATH}/NotoSansKR-Regular.otf) format("opentype")`,
			'--NotoSansKR-Medium-woff2': `url(${FONT_PATH}/NotoSansKR-Medium.woff2) format("woff2")`,
			'--NotoSansKR-Medium-woff': `url(${FONT_PATH}/NotoSansKR-Medium.woff) format("woff")`,
			'--NotoSansKR-Medium-otf': `url(${FONT_PATH}/NotoSansKR-Medium.otf) format("opentype")`,
		},
	})
}
