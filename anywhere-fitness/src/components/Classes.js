import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { classesFetch } from "../store/actions";

const Classes = props => {
 
    useEffect(()=>{
        // console.log('useeffect hook')
        props.classesFetch(props.token)
        console.log(props.classes)
    }, [props.token])
    // console.log(props.classes)
    return (
        <div>
            
            <h2>Classes</h2>
            
            { props.classes.length ? props.classes.map(classitem => (
                <div className="class-card" key={classitem.id}>
                    <h2>{classitem.name}</h2>
                    <div>
                        <p>Time: {classitem.time}</p>
                    </div>
                    <div>
                        <p>Class Description: {classitem.description}</p>
                    </div>
                    <div>
                        <p>Location: {classitem.address}</p>
                    </div>
                    <div>
                        <p>Class starting: {classitem.startDate}</p>
                    </div>
                </div>
            )) : <p>Login to view classes</p>}

        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.login.token,
        classes: state.classes.classes
    }
}
export default connect(mapStateToProps, { classesFetch } )(Classes);