// import './HomePage.css'

import React from 'react'
import { connect } from 'react-redux'

import ThreeDisplay from '../components/ThreeDisplay'

const ThreeApp = ({ running }) => (
    <div>
        <ThreeDisplay running={running} />
    </div>
)

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


