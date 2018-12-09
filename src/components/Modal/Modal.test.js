import React from 'react';
import { shallow } from 'enzyme';
import { Modal, ModalTrigger, ModalContent } from './index';

describe('Modal Component', () => {

  const wrapper = shallow(
    <Modal>
      <ModalTrigger>Open Modal</ModalTrigger>
      <ModalContent>Modal Content</ModalContent>
    </Modal>
  );
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
