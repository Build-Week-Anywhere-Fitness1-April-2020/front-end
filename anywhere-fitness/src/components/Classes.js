import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { classesFetch } from "../store/actions";
import { Link } from 'react-router-dom';

const Classes = props => {
 
    useEffect(()=>{
        // console.log('useeffect hook')
        props.classesFetch(props.token)
        // console.log(props.classes)
    }, [props.token])
    // console.log(props.classes)
    return (
        <div>
            
            <h2>Classes</h2>
            
            { props.classes.length ? props.classes.map(classObj => (
                <div 
                    className="class-card" 
                    key={classObj.id} 
                >
                    <h2>{classObj.name}</h2>
                    <div>
                        <p>Time: {classObj.time}</p>
                    </div>
                    <div>
                        <p>Class Description: {classObj.description}</p>
                    </div>
                    <div>
                        <p>Location: {classObj.address}</p>
                    </div>
                    <div>
                        <p>Class starting: {classObj.startDate}</p>
                    </div>
                    <Link to={`class-details/${classObj.id}`}>
                        Class Details
                    </Link>
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