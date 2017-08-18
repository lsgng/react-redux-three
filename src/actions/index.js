export const fadeColor = e => {
    return {
        type: 'FADE_COLOR',
        e,
    }
}

export const switchColor = () => {
    return {
        type: 'SWITCH_COLOR',
    }
}

export const run = () => {
    return {
        type: 'RUN',
    }
}

export const update = timestamp => {
    console.log('Updating')
    return {
        type: 'UPDATE',
        timestamp,
    }
}