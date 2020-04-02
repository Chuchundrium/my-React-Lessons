import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    /** state values by default: 
     * useState(false)
     * 
     * useState returns array:
     * [0] - value by default
     * [1] - callback function, sets value
    */

    // let stateWithSetState = useState(false);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];

    let [editMode, setEditMode] = useState(false);
    /** recommends to use several local states if them are used / changed independently */
    let [status, setStatus] = useState(props.status);

    const editModeActivate = () => {
        setEditMode(true);
    };
    const editModeDeactivate = () => {
        setEditMode(false);
        props.updateStatus(status);
        
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
    const componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== props.status) {
            setStatus(props.status);
        }
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={editModeActivate}>
                        {props.status || 'where is your status, man???'}
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onBlur={editModeDeactivate}
                        autoFocus={true}
                        onChange={onStatusChange}
                        defaultValue={status}
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;