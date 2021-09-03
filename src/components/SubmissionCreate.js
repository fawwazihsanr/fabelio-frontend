import React from "react";
import {create} from "../services/fabelio-backend";
import ScaleLoader from "react-spinners/ScaleLoader";

class SubmissionCreate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            loading: false
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

    setLoading = (loading) => {
        this.setState({
            loading: loading
        })
    }

    submitUrl = () => {
        this.setLoading(true)
        let data = {
            url: this.state.fields.url
        }
        create(data)
            .then(res => {
                this.props.history.push(`/detail/${res.data.id}`)
                this.setLoading(false)
            }).catch(ex => {
                alert(ex.response.data.message)
                this.setLoading(false)
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
                        disabled={this.state.loading}
                    />
                    <button
                        onClick={this.submitUrl}
                        disabled={this.state.loading}
                    >submit
                    </button>
                </div>
                <ScaleLoader
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default SubmissionCreate