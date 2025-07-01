import globals from "globals";

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
//#region node_modules/@eslint/js/package.json
var require_package = __commonJS({ "node_modules/@eslint/js/package.json"(exports, module) {
	module.exports = {
		"name": "@eslint/js",
		"version": "9.29.0",
		"description": "ESLint JavaScript language implementation",
		"funding": "https://eslint.org/donate",
		"main": "./src/index.js",
		"types": "./types/index.d.ts",
		"scripts": { "test:types": "tsc -p tests/types/tsconfig.json" },
		"files": [
			"LICENSE",
			"README.md",
			"src",
			"types"
		],
		"publishConfig": { "access": "public" },
		"repository": {
			"type": "git",
			"url": "https://github.com/eslint/eslint.git",
			"directory": "packages/js"
		},
		"homepage": "https://eslint.org",
		"bugs": "https://github.com/eslint/eslint/issues/",
		"keywords": [
			"javascript",
			"eslint-plugin",
			"eslint"
		],
		"license": "MIT",
		"engines": { "node": "^18.18.0 || ^20.9.0 || >=21.1.0" }
	};
} });

//#endregion
//#region node_modules/@eslint/js/src/configs/eslint-all.js
var require_eslint_all = __commonJS({ "node_modules/@eslint/js/src/configs/eslint-all.js"(exports, module) {
	module.exports = Object.freeze({ "rules": {
		"accessor-pairs": "error",
		"array-callback-return": "error",
		"arrow-body-style": "error",
		"block-scoped-var": "error",
		"camelcase": "error",
		"capitalized-comments": "error",
		"class-methods-use-this": "error",
		"complexity": "error",
		"consistent-return": "error",
		"consistent-this": "error",
		"constructor-super": "error",
		"curly": "error",
		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-notation": "error",
		"eqeqeq": "error",
		"for-direction": "error",
		"func-name-matching": "error",
		"func-names": "error",
		"func-style": "error",
		"getter-return": "error",
		"grouped-accessor-pairs": "error",
		"guard-for-in": "error",
		"id-denylist": "error",
		"id-length": "error",
		"id-match": "error",
		"init-declarations": "error",
		"logical-assignment-operators": "error",
		"max-classes-per-file": "error",
		"max-depth": "error",
		"max-lines": "error",
		"max-lines-per-function": "error",
		"max-nested-callbacks": "error",
		"max-params": "error",
		"max-statements": "error",
		"new-cap": "error",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-console": "error",
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": "error",
		"no-constructor-return": "error",
		"no-continue": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-div-regex": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-empty-function": "error",
		"no-empty-pattern": "error",
		"no-empty-static-block": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-ex-assign": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-label": "error",
		"no-fallthrough": "error",
		"no-func-assign": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-import-assign": "error",
		"no-inline-comments": "error",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-invalid-this": "error",
		"no-irregular-whitespace": "error",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-loss-of-precision": "error",
		"no-magic-numbers": "error",
		"no-misleading-character-class": "error",
		"no-multi-assign": "error",
		"no-multi-str": "error",
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-native-nonconstructor": "error",
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-obj-calls": "error",
		"no-object-constructor": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-plusplus": "error",
		"no-promise-executor-return": "error",
		"no-proto": "error",
		"no-prototype-builtins": "error",
		"no-redeclare": "error",
		"no-regex-spaces": "error",
		"no-restricted-exports": "error",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-properties": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-setter-return": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-ternary": "error",
		"no-this-before-super": "error",
		"no-throw-literal": "error",
		"no-unassigned-vars": "error",
		"no-undef": "error",
		"no-undef-init": "error",
		"no-undefined": "error",
		"no-underscore-dangle": "error",
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unreachable": "error",
		"no-unreachable-loop": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-unused-private-class-members": "error",
		"no-unused-vars": "error",
		"no-use-before-define": "error",
		"no-useless-assignment": "error",
		"no-useless-backreference": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"no-warning-comments": "error",
		"no-with": "error",
		"object-shorthand": "error",
		"one-var": "error",
		"operator-assignment": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		"prefer-exponentiation-operator": "error",
		"prefer-named-capture-group": "error",
		"prefer-numeric-literals": "error",
		"prefer-object-has-own": "error",
		"prefer-object-spread": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"radix": "error",
		"require-atomic-updates": "error",
		"require-await": "error",
		"require-unicode-regexp": "error",
		"require-yield": "error",
		"sort-imports": "error",
		"sort-keys": "error",
		"sort-vars": "error",
		"strict": "error",
		"symbol-description": "error",
		"unicode-bom": "error",
		"use-isnan": "error",
		"valid-typeof": "error",
		"vars-on-top": "error",
		"yoda": "error"
	} });
} });

//#endregion
//#region node_modules/@eslint/js/src/configs/eslint-recommended.js
var require_eslint_recommended = __commonJS({ "node_modules/@eslint/js/src/configs/eslint-recommended.js"(exports, module) {
	module.exports = Object.freeze({ rules: Object.freeze({
		"constructor-super": "error",
		"for-direction": "error",
		"getter-return": "error",
		"no-async-promise-executor": "error",
		"no-case-declarations": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-empty-pattern": "error",
		"no-empty-static-block": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": "error",
		"no-fallthrough": "error",
		"no-func-assign": "error",
		"no-global-assign": "error",
		"no-import-assign": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-loss-of-precision": "error",
		"no-misleading-character-class": "error",
		"no-new-native-nonconstructor": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-obj-calls": "error",
		"no-octal": "error",
		"no-prototype-builtins": "error",
		"no-redeclare": "error",
		"no-regex-spaces": "error",
		"no-self-assign": "error",
		"no-setter-return": "error",
		"no-shadow-restricted-names": "error",
		"no-sparse-arrays": "error",
		"no-this-before-super": "error",
		"no-undef": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": "error",
		"no-unused-labels": "error",
		"no-unused-private-class-members": "error",
		"no-unused-vars": "error",
		"no-useless-backreference": "error",
		"no-useless-catch": "error",
		"no-useless-escape": "error",
		"no-with": "error",
		"require-yield": "error",
		"use-isnan": "error",
		"valid-typeof": "error"
	}) });
} });

//#endregion
//#region node_modules/@eslint/js/src/index.js
var require_src = __commonJS({ "node_modules/@eslint/js/src/index.js"(exports, module) {
	const { name, version } = require_package();
	module.exports = {
		meta: {
			name,
			version
		},
		configs: {
			all: require_eslint_all(),
			recommended: require_eslint_recommended()
		}
	};
} });

//#endregion
//#region src/utils.ts
async function interopDefault(m) {
	const resolved = await m;
	return resolved.default || resolved;
}

//#endregion
//#region src/vue.ts
async function vue() {
	const [pluginVue, parserVue, parserTs] = await Promise.all([
		interopDefault(import("eslint-plugin-vue")),
		interopDefault(import("vue-eslint-parser")),
		interopDefault(import("@typescript-eslint/parser"))
	]);
	return [{
		name: "guave/vue/base",
		plugins: { vue: pluginVue },
		languageOptions: {
			parserOptions: {
				ecmaVersion: "latest",
				extraFileExtensions: [".vue"],
				parser: parserVue,
				sourceType: "module",
				ecmaFeatures: { jsx: true }
			},
			globals: {
				computed: "readonly",
				defineEmits: "readonly",
				defineExpose: "readonly",
				defineProps: "readonly",
				onMounted: "readonly",
				onUnmounted: "readonly",
				reactive: "readonly",
				ref: "readonly",
				shallowReactive: "readonly",
				shallowRef: "readonly",
				toRef: "readonly",
				toRefs: "readonly",
				watch: "readonly",
				watchEffect: "readonly"
			}
		}
	}, {
		name: "guave/vue/rules",
		files: ["**/*.vue"],
		languageOptions: {
			parser: parserVue,
			parserOptions: {
				ecmaFeatures: { jsx: true },
				extraFileExtensions: [".vue"],
				parser: parserTs,
				sourceType: "module"
			}
		},
		processor: pluginVue.processors[".vue"],
		rules: {
			...pluginVue.configs["flat/recommended"].map((c) => c.rules).reduce((acc, c) => ({
				...acc,
				...c
			}), {}),
			"vue/multi-word-component-names": "off",
			"vue/block-lang": "off",
			"vue/html-indent": ["error"],
			"vue/max-attributes-per-line": ["error"],
			"vue/first-attribute-linebreak": ["error"],
			"vue/html-closing-bracket-newline": ["error"],
			"vue/html-closing-bracket-spacing": ["error"],
			"vue/no-v-html": ["off"],
			"vue/attribute-hyphenation": ["off"],
			"vue/require-default-prop": ["off"]
		}
	}];
}

//#endregion
//#region src/stylistic.ts
async function stylistic() {
	const [pluginStylistic] = await Promise.all([interopDefault(import("@stylistic/eslint-plugin"))]);
	const config = pluginStylistic.configs.customize({
		indent: 2,
		jsx: false,
		pluginName: "style",
		quotes: "single",
		semi: false,
		commaDangle: "only-multiline"
	});
	return [config, {
		name: "guave/stylistic",
		rules: {
			"style/space-before-function-paren": ["error", "always"],
			"style/brace-style": ["error", "1tbs"],
			"style/member-delimiter-style": ["error", {
				multiline: {
					delimiter: "none",
					requireLast: false
				},
				singleline: {
					delimiter: "comma",
					requireLast: false
				},
				multilineDetection: "brackets"
			}],
			"style/spaced-comment": ["error", "always"],
			"style/arrow-parens": ["error", "as-needed"],
			"style/quote-props": ["error", "as-needed"]
		}
	}];
}

//#endregion
//#region src/typescript.ts
async function typescript() {
	const [pluginTs, parserTs] = await Promise.all([interopDefault(import("@typescript-eslint/eslint-plugin")), interopDefault(import("@typescript-eslint/parser"))]);
	return [{
		name: "typescript/setup",
		plugins: { "@typescript-eslint": pluginTs }
	}, {
		name: "guave/typescript",
		files: [
			"**/*.ts",
			"**/*.tsx",
			"**/*.mts",
			"**/*.cts",
			"**/*.vue"
		],
		languageOptions: {
			parser: parserTs,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				extraFileExtensions: [".vue"]
			}
		},
		rules: {
			...pluginTs.configs["recommended"].rules,
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-empty-object-type": ["off"],
			"@typescript-eslint/no-unused-expressions": ["error", {
				allowShortCircuit: true,
				allowTernary: true
			}],
			"@typescript-eslint/explicit-function-return-type": ["off"]
		}
	}];
}

//#endregion
//#region src/nuxt.ts
async function nuxt({ nuxtFnc }) {
	const cfg = nuxtFnc();
	const globals$1 = (await cfg.toConfigs()).find((v) => v.name === "nuxt/import-globals");
	return [globals$1];
}

//#endregion
//#region src/index.ts
var import_src = __toESM(require_src(), 1);
async function guave(options) {
	return [
		{
			name: "guave/ignores",
			ignores: options.ignores ?? []
		},
		...options.nuxt ? await nuxt(options.nuxt) : [],
		{
			name: "guave/base",
			languageOptions: {
				ecmaVersion: 2022,
				globals: {
					...globals.browser,
					...globals.es2021,
					...globals.node,
					document: "readonly",
					navigator: "readonly",
					window: "readonly"
				},
				parserOptions: {
					ecmaFeatures: { jsx: true },
					ecmaVersion: 2022,
					sourceType: "module"
				},
				sourceType: "module"
			},
			rules: { "n/no-callback-literal": "off" }
		},
		import_src.default.configs.recommended,
		...options.typescript ? await typescript() : [],
		...options.stylistic ? await stylistic() : [],
		...options.vue ? await vue() : [],
		{
			name: "project/custom",
			rules: { ...options.overrides ?? {} }
		}
	];
}

//#endregion
export { guave };