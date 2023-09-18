import { motion } from 'framer-motion'


export default function Banner() {

  return (
    <>
      <div className="flex justify-center w-screen h-screen">
        <div className="border-box flex overflow-x-scroll scrollbar-hide gap-1 bg-white w-1/2 h-1/2">
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <div className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"></div>
          <motion.div 
            className="flex-shrink-0 bg-red-500 w-1/3 h-1/6"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag={true}
            dragConstraints={{ left: -100, right: 100, top: 0, bottom: 100 }}
          >
          </motion.div>
        </div>
      </div>
    </>
  )
}