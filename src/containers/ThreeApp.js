import React from 'react'
import { connect } from 'react-redux'

import ThreeDisplay from '../components/ThreeDisplay'

class ThreeApp extends React.Component {
    render() {
        return (
            <div>
                <ThreeDisplay running={this.props.running} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        running: state.running,
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchTopProps
)(ThreeApp)


