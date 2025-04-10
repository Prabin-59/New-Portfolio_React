import { MotionProps } from 'framer-motion';

export const fadeIn = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    delay,
    ease: [0.04, 0.62, 0.23, 0.98],
  },
});