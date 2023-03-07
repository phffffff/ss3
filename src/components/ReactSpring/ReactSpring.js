import { useSpring, animated, to } from 'react-spring'
import { useRef } from 'react'

function ReactSpring() {
    const styles = useSpring({
        to: async (next, cancel) => {
            await next({ opacity: 1, color: '#ffaaee' })
            await next({ opacity: 0, color: 'rgb(14,26,19)' })
        },
        from: { opacity: 0, color: 'red' },
        loop: true,
    })
    // ...
    return <animated.div style={styles}>I will fade in and out</animated.div>
}

export default ReactSpring;