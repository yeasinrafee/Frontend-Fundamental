import { motion } from 'framer-motion';

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 0.6,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  hover: {
    opacity: 1,
  },
};

const Lesson2 = () => {
  return (
    <div className='h-screen w-96 mx-auto py-40'>
      <motion.div
        className='size-64 bg-indigo-500 rounded-md'
        variants={parent}
        initial='hidden'
        animate='visible'
        whileHover='hover'
        drag
        dragSnapToOrigin
        dragElastic={0.7}
        dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
        whileDrag={{
          scale: 1.1,
          boxShadow: '0 0 8px #000',
        }}
      ></motion.div>
    </div>
  );
};

export default Lesson2;
