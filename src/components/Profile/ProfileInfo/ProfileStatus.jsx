import React from 'react';
// import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    editModeActivate() {
        this.setState({
            editMode: true
        })
    }
    editModeDisactivate() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.editModeActivate.bind(this)}>
                            {this.props.status}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={this.editModeDisactivate.bind(this)}
                            defaultValue={this.props.status} />
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;