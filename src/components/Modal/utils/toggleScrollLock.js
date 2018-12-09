let toggled = false;

export const toggleScrollLock = () => {
  toggled = !toggled;
  const overflow = toggled ? 'hidden' : 'auto';
  document.querySelector('html').style.overflow = overflow;
};
