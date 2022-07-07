import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component{
    constructor(){
        super()
        this.state = {
            id:'',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            dateOfBirth:'',
            mobile:'',
            accountType:''
        }
    }

    changeid(event){
        this.setState({
            id:event.target.value
        })
    }

    changefirstName(event){
        this.setState({
            firstName:event.target.value
        })
    }

    changelastName(event){
        this.setState({
            lastName:event.target.value
        })
    }

    changeemail(event){
        this.setState({
            email:event.target.value
        })
    }

    changepassword(event){
        this.setState({
            password:event.target.value
        })
    }

    changedateOfBirth(event){
        this.setState({
            dateOfBirth:event.target.value
        })
    }

    changemobile(event){
        this.setState({
            mobile:event.target.value
        })
    }

    changeaccountType(event){
        this.setState({
            accountType:event.target.value
        })
    }
    render(){
        return(
            <div>
                <div className='container '>
                    <div className='form-div'>
                        <form>
                            <input type = 'number'
                            placeholder='ID'
                            onChange={this.changeid}
                            value={this.state.id}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='First Name'
                            onChange={this.changefirstName}
                            value={this.state.firstName}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='Last Name'
                            onChange={this.changelastName}
                            value={this.state.lastName}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='Email'
                            onChange={this.changeemail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type = 'password'
                            placeholder='Password'
                            onChange={this.changepassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type = 'date'
                            placeholder='Date of Birth'
                            onChange={this.changedateOfBirth}
                            value={this.state.dateOfBirth}
                            className='form-control form-group'
                            />

                            <input type = 'number'
                            placeholder='Mobile'
                            onChange={this.changemobile}
                            value={this.state.mobile}
                            className='form-control form-group'
                            />

                           
                            <input type = 'text'
                            placeholder='Account Type'
                            onChange={this.changeaccountType}
                            value={this.state.accountType}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;