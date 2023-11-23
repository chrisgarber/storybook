import { CoreBuilder } from '../../project_types';
import { baseGenerator } from '../baseGenerator';
import type { Generator } from '../types';

const generator: Generator = async (packageManager, npmOptions, options) => {
  await baseGenerator(
    packageManager,
    npmOptions,
    { ...options, builder: CoreBuilder.Webpack5 },
    'react',
    {
      extraAddons: ['@storybook/addon-onboarding'],
      useSWC({ builder }) {
        return true;
      },
    },
    'nextjs'
  );
};

export default generator;
