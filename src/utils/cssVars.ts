import cssVars from 'css-vars-ponyfill'

export function setFonts(RESOURCE_CONTEXT_URL: string) {
	RESOURCE_CONTEXT_URL += `/nex-sign/fonts`
	// CSS
	cssVars({
		onlyLegacy: false,
		variables: {
			/* font Path  */
			'--NotoSansKR-Light-woff2': `url(${RESOURCE_CONTEXT_URL}/NotoSa nsKR-Light.woff2) format("woff2")`,
			'--NotoSansKR-Light-woff': `url(${RESOURCE_CONTEXT_URL}/NotoSansKR-Light.woff) format("woff")`,
			'--NotoSansKR-Light-otf': `url(${RESOURCE_CONTEXT_URL}/NotoSansKR-Light.otf) format("opentype")`,
			'--NotoSansKR-Bold-woff2': `url(${RESOURCE_CONTEXT_URL}/NotoSansKR-Bold.woff2) format("woff2")`,
			'--NotoSansKR-Bold-woff': `url(${RESOURCE_CONTEXT_URL}/NotoSansKR-Bold.woff) format("woff")`,
			'--NotoSansKR-Bold-otf': `url(${RESOURCE_CONTEXT_URL}/NotoSansKR-Bold.otf) format("opentype")`,
			'--NotoSansKR-Regular-woff2': `url(${RESOURCE_CONTEXT_URL}/NotoSansKR-Regular.woff2) format("woff2")`,
			'--NotoSansKR-Regular-woff': `url(${RESOURCE_CONTEXT_URL}/NotoSansKR-Regular.woff) format("woff")`,
			'--NotoSansKR-Regular-otf': `url(${RESOURCE_CONTEXT_URL}/NotoSansKR-Regular.otf) format("opentype")`,
			'--NotoSansKR-Medium-woff2': `url(${RESOURCE_CONTEXT_URL}/NotoSansKR-Medium.woff2) format("woff2")`,
			'--NotoSansKR-Medium-woff': `url(${RESOURCE_CONTEXT_URL}/NotoSansKR-Medium.woff) format("woff")`,
			'--NotoSansKR-Medium-otf': `url(${RESOURCE_CONTEXT_URL}/NotoSansKR-Medium.otf) format("opentype")`,
		},
	})
}
