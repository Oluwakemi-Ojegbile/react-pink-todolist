import React from 'react';

const AddForm = (props) => {
    if(!props.show) {
        return null
    }
    return(
        <div>
            { props.children }
        </div>
    )
}

export default AddForm;