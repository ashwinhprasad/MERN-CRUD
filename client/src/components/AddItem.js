import React, { useState } from "react";

const AddItem = (props) => {

    const [fields,setFields] = useState("")

    const onChange = (e) => {
        e.preventDefault();
        setFields(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(fields);
        setFields('');

    }

    return (
        <form onSubmit={onSubmit} >
            <input type="text" value={fields} onChange={onChange} />
            <input type="submit" value="Add" />
        </form>
    )
}

export default AddItem;