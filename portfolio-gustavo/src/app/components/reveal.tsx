
import {motion,useAnimation,useInView} from "framer-motion"
import { useEffect, useRef } from "react"


interface Props{
    children: React.ReactNode
    className?: string,
    name?: string
}


export default function Reveal(props:Props) {

    const ref = useRef(null)

    const inView = useInView(ref, { once: true })	
    const animationControl = useAnimation();

    useEffect(() => {
        if (inView) {
            animationControl.start({
            opacity:1,
              y: 0,
              transition: {
                duration:1
              }
            });
          }
    },[inView])

    
    return (
        <motion.div
        className={props.className}	
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 100 },
            }}
            initial="hidden"
            animate={animationControl}
            transition={
                {
                    duration: 1,
                    
                }
            }
        >
            {props.children}
        </motion.div>
     
    )
}