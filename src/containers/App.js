import { connect } from 'react-redux'

import { run } from '../actions'

import  MainApp from '../components/MainApp'

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
)(MainApp)

export default App