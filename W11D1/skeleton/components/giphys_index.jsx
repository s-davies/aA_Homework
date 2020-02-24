import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ({giphys}) => {
    
    return (
        <div>
            {giphys.map((giphy) => (<GiphysIndexItem key={giphy.id} giphy={giphy} />))}
        </div>
    )
}

export default GiphysIndex;