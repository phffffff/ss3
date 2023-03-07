import React, { Component } from 'react'
import Swal from 'sweetalert2';

import './FormValidation.css'

export default class ValidateForm extends Component {
    state = {
        value: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            passwordComfirm: '',
        },
        error: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            passwordComfirm: '',
        },
    }

    handleOnChangeInput = (e) => {
        let { name, value, type } = e.target

        let newValue = { ...this.state.value, [name]: value };
        let newError = { ...this.state.error, [name]: '' };

        if (value === '') {
            newError = {
                ...this.state.error, [name]: `Không được bỏ trống ô ${name}`
            }
        } else {
            if (type === 'email') {
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

                if (!re.test(value)) {
                    newError = { ...this.state.error, [name]: `${name} is invalid` }
                }
            }

            if (name === 'password') {
                if (value.length < 6) {
                    newError = { ...this.state.error, [name]: `${name} tối thiếu phải đủ 6 ký tự` }
                }
            }

            if (name === 'passwordComfirm') {
                if (value !== newValue.password) {
                    newError = { ...this.state.error, [name]: `${name} không khớp` }
                }
            }
        }


        this.setState({
            value: newValue,
            error: newError,
        }, () => console.log(this.state))
    }

    handleOnSubmid = (e) => {
        e.preventDefault();

        let errMessage = '';
        let newError = { ...this.state.error }

        const { value, error } = this.state;

        let flag = true;

        for (const key in value) {
            if (value[key] === '') {
                flag = false;
                newError[key] = `${key} bị bỏ trống`;
            }
        }

        for (const key in error) {
            if (error[key].trim() !== '') {
                flag = false;
            }
            errMessage += `<div>${newError[key]}</div>`
        }

        if (flag) {
            Swal.fire({
                title: 'Success!',
                html: `
                    <div>First Name: ${this.state.value.firstName}</div>
                    <div>Last Name: ${this.state.value.lastName}</div>
                    <div>User Name: ${this.state.value.userName}</div>
                    <div>Mail: ${this.state.value.email}</div>
                    <div>Password: ${this.state.value.password}</div>
                `,
                icon: 'success',
                confirmButtonText: 'Continual'
            })
        }
        else {
            this.setState({
                ...this.state,
                error: { ...newError }
            }, () => {
                console.log("errMessage", errMessage)
                Swal.fire({
                    title: 'Error!',
                    html: errMessage,
                    icon: 'error',
                    confirmButtonText: 'Continual'
                })
            })
        }
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: "#ccc",
                    minHeight: "100vh"
                }}
            >
                <div className='container' >
                    <div className='row'>
                        <div className='col offset-3 col-6'>
                            <form
                                className='mt-5 p-5'
                                style={{
                                    backgroundColor: "#fff",
                                    borderRadius: '5px'
                                }}
                            >
                                <h1 className='text-center mb-4'>Form Sign In</h1>

                                <div className='row'>
                                    <div className='col col-6'>
                                        <div className="group">
                                            <input type="text" name='firstName'
                                                value={this.state.value.firstName} required
                                                onChange={(e) => this.handleOnChangeInput(e)}
                                            />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <small className='text-danger'>{this.state.error.firstName}</small>
                                            <label>First Name</label>

                                        </div>
                                    </div>
                                    <div className='col col-6'>
                                        <div className="group">
                                            <input type="text" name='lastName' required
                                                value={this.state.value.lastName}
                                                onChange={(e) => this.handleOnChangeInput(e)}
                                            />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <small className='text-danger'>{this.state.error.lastName}</small>
                                            <label>Last Name</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col col-12'>
                                        <div className="group">
                                            <input type="text" name='userName' required
                                                value={this.state.value.userName}
                                                onChange={(e) => this.handleOnChangeInput(e)}
                                            />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <small className='text-danger'>{this.state.error.userName}</small>
                                            <label>Username</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col col-12'>
                                        <div className="group">
                                            <input type="email" name='email' required
                                                value={this.state.value.email}
                                                onChange={(e) => this.handleOnChangeInput(e)}
                                            />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <small className='text-danger'>{this.state.error.email}</small>
                                            <label>Email</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col col-6'>
                                        <div className="group">
                                            <input type="password" name='password' required
                                                value={this.state.value.password}
                                                onChange={(e) => this.handleOnChangeInput(e)}
                                            />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <small className='text-danger'>{this.state.error.password}</small>
                                            <label>Password</label>
                                        </div>
                                    </div>
                                    <div className='col col-6'>
                                        <div className="group">
                                            <input type="password" name='passwordComfirm' required
                                                value={this.state.value.passwordComfirm}
                                                onChange={(e) => this.handleOnChangeInput(e)}
                                            />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <small className='text-danger'>{this.state.error.passwordComfirm}</small>
                                            <label>Password Comfirm</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col offset-3 col-6'>
                                        <button
                                            className='btn btn-dark w-100'
                                            onClick={(e) => this.handleOnSubmid(e)}
                                        >Submit</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
