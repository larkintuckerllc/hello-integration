import { connect } from 'react-redux';
import { getOn, toggleOn } from '../../../ducks/on';
import RoomView from './RoomView';

const mapStateToProps = (state) => ({
  on: getOn(state),
});

const mapDispatchToProps = {
  toggleOn
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomView);
