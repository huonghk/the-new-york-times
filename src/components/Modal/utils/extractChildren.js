import ModalTrigger from '../ModalTrigger';
import ModalContent from '../ModalContent';

const map = {
  ModalTrigger,
  ModalContent,
};

export const extractChildren = (children, name) => {
  return children.find(item => item.type === map[name]);
};
