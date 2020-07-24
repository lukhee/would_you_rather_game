import React, {useState} from 'react';
import styled, { keyframes } from 'styled-components';
import {createUser} from "../../../actions/auth";
import {connect} from 'react-redux';
import Proptypes from 'prop-types';

const Register = ({createUser, history, auth: {isAuthenticated}}) => {
    const [formData, setFormDate] = useState({ name: '', password: ''})

    const onSubmit = (e) => {
        e.preventDefault()
        if(formData.username !== '' && formData.password !== ''){
            return createUser(formData, history)
        }
        return alert("username or password field cant be empty")
    }

    const onChangeHandler = (e) => {
        const { id, value } = e.target;
        setFormDate({
            ...formData,
            [id]: value
        })
    }

    return (
     <div className="col-md-8 mx-auto py-4 text-center">
        <h2> Register </h2>
        <p> Create A new user to add to existing users </p>
        <div>
            <form onSubmit={(e) => onSubmit(e)} className='mt-2 shadow-lg py-4 rounded'>
                <div className='form-group d-md-flex justify-content-around'>
                    <div className='col-md-9'>
                        <input
                            type='text'
                            onChange={(e) => onChangeHandler(e)}
                            value={formData.name}
                            placeholder='Enter Your Full-Name'
                            className='form-control mb-3'
                            id='name'
                        />

                        <input
                            type='text'
                            onChange={(e) => onChangeHandler(e)}
                            value={formData.userName}
                            placeholder='Enter Your Password'
                            className='form-control mb-3'
                            id='password'
                        />

                        <input type="submit" value="Submit" className=" mt-3 form-control btn btn-outline-danger"/>
                    </div>
                </div>
            </form>
        </div>
     </div>
 )
}

Register.propTypes = {
    createUser: Proptypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {createUser}) (Register)


// const breatheAnimation = keyframes`
//  0% { height: 100px; width: 100px; }
//  30% { height: 400px; width: 400px; opacity: 1 }
//  40% { height: 405px; width: 405px; opacity: 0.3; }
//  100% { height: 600px; width: 100px; opacity: 0.6; }
// `
// const Circle = styled.div`
//  height: 100px;
//  width: 100px;
//  border-style: solid;
//  border-width: 5px;
//  border-radius: 50%;
//  border-color: black;
//  animation-name: ${breatheAnimation};
//  animation-duration: 10s;
//  animation-iteration-count: infinite;
//  animation-fill-mode: both;
// `
// const Container = styled.div`
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  flex-direction: column;
//  height: 450px;
//  `