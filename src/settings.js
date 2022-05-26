//Setting transisi antar halaman
const transition = {
    duration: 0.4
}

const transitionVariants = {
    init: {
        opacity: 0,
        x: "50vw"
    },
    anim: {
        opacity: 1,
        x: "0"
    },
    ex: {
        opacity: 0,
        x: "50vw"
    }
}

// mirip dengan export default { transition, transitionVariants };
module.exports = {
    transition,
    transitionVariants
}
