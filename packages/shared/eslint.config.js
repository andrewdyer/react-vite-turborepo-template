import storybook from 'eslint-plugin-storybook';

import config from '@repo/eslint-config/react';

export default [...config, ...storybook.configs['flat/recommended']];
