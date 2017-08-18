export const changeMaterial = () => {
    return {
        type: 'CHANGE_MATERIAL'
    }
}

export const changeSize = (e) => {
    return {
        type: 'CHANGE_SIZE',
        e,
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