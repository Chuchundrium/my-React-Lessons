import React from 'react';
// import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };
    editModeActivate = () => {
        this.setState({
            editMode: true
        })
    };
    editModeDeactivate = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.editModeActivate}>
                            {this.props.status || 'where is your status???'}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.editModeDeactivate}
                            defaultValue={this.state.status}
                            // value={this.state.status} 
                            />
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;