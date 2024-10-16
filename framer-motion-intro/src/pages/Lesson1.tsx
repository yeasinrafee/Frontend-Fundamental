import { motion } from 'framer-motion';

const initial = { rotate: 0 };
const animate = { rotate: 360 };

const Lesson1 = () => {
  return (
    <div className='h-screen w-96 mx-auto py-40'>
      <motion.div
        className='size-64 bg-indigo-500 rounded-md'
        initial={initial}
        animate={animate}
        transition={{ type: 'tween', duration: 3 }}
      ></motion.div>
    </div>
  );
};

export default Lesson1;
