#!/usr/bin/env node

import colors from "colors";
import { fetchXml } from "iconfont-parser";
import { generateComponent } from "../libs/generateComponent";
import { getConfig } from "../libs/getConfig";

const config = getConfig();

if (config.symbol_url) {
	fetchXml(config.symbol_url)
		.then((result) => {
			generateComponent(result, config);
		})
		.catch((e) => {
			console.error(colors.red(e.message || "Unknown Error"));
			process.exit(1);
		});
}
