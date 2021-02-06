import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increment, decrement } from '../actions/actionCount';

const mapStateToProps = (state) => {
   return {
      counter: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement())
    
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);