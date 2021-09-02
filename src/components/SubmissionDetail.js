import React from "react";
import {getById} from "../services/fabelio-backend";
import './SubmissionDetail.css'

class SubmissionDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        getById(this.props.match.params.id)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }

    render() {
        const data = this.state.data
        return(
            <div className={'detail-container'}>
                <table>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>price</th>
                    </tr>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.description}</td>
                        <td>{data.price}</td>
                    </tr>
                </table>
                <span>Image</span>
                <img src={data.image}/>
            </div>
        )
    }
}

export default SubmissionDetail