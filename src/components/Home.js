import React from "react";

class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'home'} style={{display:'flex', marginBottom:'20px', gap:'10px'}}>
                <a href={'/'}> <span>Create</span></a>
                <a href={'/list'}><span>List</span></a>
            </div>
        )
    }
}

export default Home