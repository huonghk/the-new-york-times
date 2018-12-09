import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo({ header: false, inline: true }));

function loadStories() {
  require('../src/stories');
}
configure(loadStories, module);
