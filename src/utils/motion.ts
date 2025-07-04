export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4,
      delay: 0.1,
     },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      //delayChildren: 0.2, 
      staggerChildren: 0.1,
    },
  },
};