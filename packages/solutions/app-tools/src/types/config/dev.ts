import type { BuilderConfig } from '@modern-js/builder-webpack-provider';

type BuilderEnvConfig = Required<BuilderConfig>['dev'];

export type DevProxyOptions = string | Record<string, string>;
export interface DevUserConfig
  extends Pick<BuilderEnvConfig, 'assetPrefix' | 'https'> {
  /**
   * The configuration of `dev.proxy` is provided by `proxy` plugin.
   * Please use `yarn new` or `pnpm new` to enable the corresponding capability.
   * @requires `proxy` plugin
   */
  proxy?: string | Record<string, string>;
}

export type DevNormalizedConfig = DevUserConfig;