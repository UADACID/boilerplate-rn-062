import { connect } from 'react-redux'
import { ActionType } from '../../../utils/constan'
import Screen from '../screens/beranda_screen'

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  setAuth: () => dispatch({ type: ActionType.SET_AUTH, payload: false })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen)
