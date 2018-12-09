import React from 'react';

import { storiesOf } from '@storybook/react';

import { Modal, ModalTrigger, ModalContent } from 'components/Modal';

storiesOf('README', module)
  .add(
    'README',
    () => null,
    {
      info: {
        source: false,
        text: `
          # README
          This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
          
          - **Local deployment instructions:**
            ~~~
            cd the-new-york-times
            yarn install
            yarn start
            ~~~
          - **Live demo url:** https://the-new-york-times.herokuapp.com/
        `,
      }
    }
  );

storiesOf('Components', module)
  .add(
    'Modal',
    () => (
      <Modal>
        <ModalTrigger>Open Modal</ModalTrigger>
        <ModalContent>Modal Content</ModalContent>
      </Modal>
    ),
    {
      info: `
        # Modal
        ## Accessibility
        
          - When the Modal is not open, it is not rendered into the DOM.
          - When rendered, the Modal is appended to the end of document.body.
          - The Modal has relevant WAI-ARIA attributes in accordance with accessibility guidelines.
          - Pressing the escape key will close the Modal.
          - Clicking outside the Modal will close it.
          - When open, scrolling is frozen on the main document beneath the Modal.
          - When open, focus is drawn immediately to the Modal's close button.
          - When the Modal closes, focus returns to the Modal's trigger button.
        
        ## Usage
        
        ~~~js
        import { Modal, ModalTrigger, ModalContent } from 'components/Modal';
        ~~~
        
        ~~~html
        <Modal>
            <ModalTrigger>
                Open Modal
            </ModalTrigger>
            <ModalContent>
                Modal Content
            </ModalContent>
        </Modal>
        ~~~
      `
    }
  );
