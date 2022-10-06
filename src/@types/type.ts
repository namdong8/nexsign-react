type JSONValue = string | number | boolean | JSONObject | JSONArray

export interface JSONObject {
	[x: string]: JSONValue
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JSONArray extends Array<JSONValue> {}
