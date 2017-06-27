import React from 'react';
import { connect } from 'react-redux';
import { add } from '../../actions/skillsActions';

export class Skills extends React.Component {

  render() {
    return (
      <div>
        <div id="counter">{this.props.number}</div>
        <button id="add" onClick={this.props.add} />
      </div>
    );
  }

}
const mapStateToProps = state => ({
  number: state.skills
});

const mapDispatchToProps = {
  add
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);
