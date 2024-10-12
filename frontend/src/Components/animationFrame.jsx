import { motion } from 'framer-motion';
import useIsDesktop from '../Hooks/useIsDesktop.jsx';

const AnimationFrame = ({ children }) => {

    var desktop = useIsDesktop().type;

    if (desktop != "desktop") return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}>
            {children}
        </motion.div>
    )
    else return (
        <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}>
            {children}
        </motion.div>
    );
 
}

export default AnimationFrame;