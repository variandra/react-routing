import React from 'react';
function Welcome(props) {
    if(props.match.params.name){
        return (
            <div>
            <h1>Welcome {props.match.params.name}!</h1>
        </div>
        );
    }
    return (
        <div>
            <h1>Welcome {props.name}!</h1>
        </div>
    );
}
export default Welcome;
