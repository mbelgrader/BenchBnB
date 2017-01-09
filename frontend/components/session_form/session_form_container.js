import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }, ownProps) => ({
  // debugger - look at ownProps and state
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  formType: ownProps.location.pathname === 'login' ? login : signup
});

// const mapDispatchToProps = (dispatch, ownProps) => {
//   const processForm = (formType === 'login' ? login : signup);
//
//   return {
//     processForm: user => dispatch(processForm(user)),
//   }
// }


const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps);
  const formType = ownProps.formType;
  return {
    processForm: user => dispatch(formType(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
