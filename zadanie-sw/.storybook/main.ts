const config = {
  stories: [
    '../components/**/*.stories.@(ts|tsx)',   
    '../src/app/**/*.stories.@(ts|tsx)',       
  ],
  addons: [
    '@storybook/addon-links', 
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-onboarding',
    '@storybook/addon-themes',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;