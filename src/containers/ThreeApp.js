import React from 'react'
import { connect } from 'react-redux'

import { update } from '../actions'
import runThreeApp from '../threeApp/runThreeApp'

import ThreeDisplay from '../components/ThreeDisplay'

class ThreeApp extends React.Component {
    componentDidMount() {
        runThreeApp()
    }

    render() {
        return (
            <div>
                <h1>MS: {this.props.timestamp} Frame: {this.props.frame}</h1>
                <ThreeDisplay running={this.props.running} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        running: state.running,
        timestamp: state.timestamp,
        frame: state.frame,
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        update: () => dispatch(update(Date.now()))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchTopProps
)(ThreeApp)


