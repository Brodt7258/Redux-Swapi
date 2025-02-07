import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from '../actions/';

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.getCharacters()
  }

  render() {
    console.log(this.props.characters);
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div>
          Loading
        </div>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  });
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);
