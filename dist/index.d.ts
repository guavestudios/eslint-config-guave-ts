import { Rules } from "@stylistic/eslint-plugin";
import { Linter } from "eslint";

//#region src/types.d.ts
type TypedFlatConfigItem = Omit<Linter.Config<Linter.RulesRecord & Rules>, 'plugins'> & {
  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, any>;
};
//#endregion
//#region src/index.d.ts
interface GuaveLinterOptions {
  typescript?: boolean;
  stylistic?: boolean;
  vue?: boolean;
  ignores?: string[];
  overrides?: TypedFlatConfigItem['rules'];
  nuxt?: {
    nuxtFnc: () => Promise<any>;
  };
}
declare function guave(options: GuaveLinterOptions): Promise<any[]>;
//#endregion
export { guave };