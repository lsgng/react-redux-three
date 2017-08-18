export const fadeColor = (e) => {
    return {
        type: 'FADE_COLOR',
        e,
    }
}

export const switchColor = () => {
    return {
        type: 'SWITCH_COLOR'
    }
}

export const run = () => {
    return {
        type: 'RUN'
    }
}

export const update = () => {
    return {
        type: 'UPDATE'
    }
}