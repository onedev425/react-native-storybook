module.exports = {
  stories: [
    '../app/src/**/*.stories?(.native).?(ts|tsx|js|jsx)',
  ],
   addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
  ],
};
