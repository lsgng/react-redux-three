import { connect } from 'react-redux'

import { run } from '../actions'

import  HomePage from '../components/HomePage'

const mapStateToProps = (state) => {
    return {
        running: state.running,
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        run: () => dispatch(run())
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchTopProps
)(HomePage)

export default App