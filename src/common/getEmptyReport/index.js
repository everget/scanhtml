export function getEmptyReport() {
	return {
		size: {
			source: 0,
			gzipSource: 0,
			gzipSourcePercent: null,
			minified: 0,
			minifiedPercent: null,
			gzipMinified: 0,
			gzipMinifiedPercent: null,
		},
		nodes: {
			total: 0,
			usage: {
				comments: 0,
				texts: 0,
				elements: 0,
			},
		},
		elements: {
			total: 0,
			unique: 0,
			usage: {},
			void: {
				total: 0,
				unique: 0,
				usage: {},
			},
			svg: {
				total: 0,
				unique: 0,
				usage: {},
			},
			mathml: {
				total: 0,
				unique: 0,
				usage: {},
			},
			obsolete: {
				total: 0,
				unique: 0,
				usage: {},
			},
			custom: {
				total: 0,
				unique: 0,
				usage: {},
			},
		},
		attributes: {
			total: 0,
			unique: 0,
			usage: {},
			global: {
				total: 0,
				unique: 0,
				usage: {},
			},
			id: {
				total: 0,
				unique: 0,
				usage: {},
				duplicated: [],
			},
			style: {
				total: 0,
				unique: 0,
				valuesUsage: {},
			},
			data: {
				total: 0,
				unique: 0,
				usage: {},
				valuesUsage: {},
				invalid: {},
			},
			aria: {
				total: 0,
				unique: 0,
				usage: {},
				valuesUsage: {},
				invalid: {
					total: 0,
					unique: 0,
					usage: {},
				},
			},
			svg: {
				total: 0,
				unique: 0,
				usage: {},
				valuesUsage: {},
				invalid: {
					total: 0,
					unique: 0,
					usage: {},
				},
			},
			obsolete: {
				total: 0,
				unique: 0,
				usage: {},
				valuesUsage: {},
			},
		},
	};
}
