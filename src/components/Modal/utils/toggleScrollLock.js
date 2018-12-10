import './styles.css';

export const toggleScrollLock = () => {
  document.querySelector('html').classList.toggle('lock-scroll');
};
