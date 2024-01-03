
import {motion,useAnimation,useInView} from "framer-motion"
import { useEffect, useRef } from "react"


interface Props{
    children: React.ReactNode
    className?: string,
    name?: string
}


export default function Reveal(props:Props) {

    const ref = useRef(null)
    console.log(ref)
    const inView = useInView(ref, { once: true })	
    const mainControls = useAnimation()

    useEffect(() => {
        console.log("elemento",props.name)
        console.log("esta visivel",inView)
        if (inView) {
            console.log("visivel ativado",inView) 
            mainControls.start("visible")
        }
    },[inView])

    
    return (
        <motion.div
        className={props.className}	
            ref={ref}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
            }}
            initial="hidden"
            animate="visible"
            transition={
                {
                    duration: 1,
                    delay: 0.5
                    
                }
            }
        >

            {props.children}
        </motion.div>
     
    )
}