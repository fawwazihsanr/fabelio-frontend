import React from "react";
import {get} from "../services/fabelio-backend";
import './SubmissionList.css'

class SubmissionList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        get()
            .then(res => {
                this.setState({
                    product: res.data
                })
            }).catch(err => {
                alert('something error')
        })
    }

    render() {
        return (
            <div className={'list-container'}>
                <table>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>price</th>
                        <th>link</th>
                    </tr>
                    {
                        this.state.product.length > 0 ?
                            this.state.product.map((x, idx) => {
                                return(
                                    <tr>
                                        <td>{x.name}</td>
                                        <td>{x.description}</td>
                                        <td>{x.price}</td>
                                        <a href={`/detail/${x.id}`}><td>{`${window.location.hostname}/detail/${x.id}`}</td></a>
                                    </tr>
                                )
                            })
                            : <></>
                    }
                </table>
            </div>
        )
    }
}

export default SubmissionList