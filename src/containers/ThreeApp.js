import React from 'react'
import { connect } from 'react-redux'

import { fadeColor, switchColor, update } from '../actions'
import ThreeDisplay from '../components/ThreeDisplay'
import { getThreeRenderer } from '../threeApp/threeApp'


class ThreeApp extends React.Component {
    updateThreeApp = () => {
        if (this.props.lastAction === 'UPDATE') {
            console.log('Updating Three App')
            this.threeRenderer.render(this.props.scene, this.props.camera)
            console.log(this.props.scene)
            requestAnimationFrame((timestamp) => this.props.update(timestamp))
        }
    }
    componentDidMount() {
        this.threeRenderer = getThreeRenderer()
        console.log(this.threeRenderer)
        this.props.update()
    }

    componentWillUpdate() {
        this.updateThreeApp()
    }

    render() {
        return (
            <div>
                <ThreeDisplay
                    running={this.props.running}
                    fadeColor={this.props.fadeColor}
                    switchColor={this.props.switchColor}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        running: state.running,
        lastAction: state.lastAction,
        scene: state.scene,
        camera: state.camera,
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        fadeColor: e => dispatch(fadeColor(e)),
        switchColor: () => dispatch(switchColor()),
        update: timestamp => dispatch(update(timestamp)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchTopProps
)(ThreeApp)