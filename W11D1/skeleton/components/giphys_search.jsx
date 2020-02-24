import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ""};
    }

    handleChange(event) {
        // debugger
        this.setState({searchTerm: event.target.value});
    }

    handleSubmit(event) {
        // debugger
        event.preventDefault();
        this.props.fetchSearchGiphys(this.state.searchTerm);
    }

    render() {
        return(
            <div>
                <form>
                    <input onChange={this.handleChange.bind(this)} type="text" value={this.state.searchTerm}/>
                    <button onClick={this.handleSubmit.bind(this)}>Fetch Giphys</button>
                </form>
                <GiphysIndex giphys={this.props.giphys} />
            </div>
        )
    }
}

export default GiphysSearch;