import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeModal({ show, onSelect }) {
  return (
    <AnimatePresence>
      {show && (
        <>
          {/* 어두운 배경 */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          {/* 모달 */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-[320px] flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                모드 선택
              </h2>
              <div className="flex gap-4">
                <button
                  className="w-28 py-3 bg-gray-100 hover:bg-blue-200 font-semibold rounded-xl shadow transition text-gray-900"
                  onClick={() => onSelect('light')}
                >
                  Light
                </button>
                <button
                  className="w-28 py-3 bg-gray-800 hover:bg-gray-700 font-semibold rounded-xl shadow transition text-white"
                  onClick={() => onSelect('dark')}
                >
                  Dark
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
