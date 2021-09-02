import React from "react";
import {create} from "../services/fabelio-backend";

class SubmissionCreate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fields: {}
        }
    }

    handleChange = (e) => {
        let fields = this.state.fields
        let {id, value} = e.target
        fields[id] = value
        this.setState({
            fields
        })
    }

    submitUrl = () => {
        let data = {
            url: this.state.fields.url
        }
        create(data)
            .then(res => {
                this.props.history.push(`/detail/${res.data.id}`)
            }).catch(ex => {
                alert('error')
        })
    }

    render() {
        return(
            <div className={'create-container'}>
                <h2>Input fabelio product url:</h2>
                <div className={'wrapper-input'} style={{display:'flex'}}>
                    <input
                        id={'url'}
                        type={'text'}
                        onChange={this.handleChange}
                        value={this.state.fields.url}
                    />
                    <button
                        onClick={this.submitUrl}
                    >submit
                    </button>
                </div>
            </div>
        )
    }
}

export default SubmissionCreate