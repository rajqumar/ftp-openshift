import React, { Component } from 'react'
import {config} from '../library/config'
import { Button, Alert, Input } from 'reactstrap'
import axios from 'axios'

export class Landing extends Component {
    constructor(props) {
        super(props)
        console.log('conf ==> ', config.api)

        this.state = {
            data: {},
            title: 'NO DATA',
            color: 'danger',
            djname: ''
        }
    }


    onChange =(e) =>{
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    firstAPI = () => {
        axios.get(config.django_api)
        .then(data => {
            // console.log('Result ==> ', typeof data)
            console.log('Result ==> ', data.data.results)
            this.setState({ data: data.data.results, title: 'Fetched latest data !!', color: 'success' })
        }).catch(error => {
            console.log('Error ==> ', error)
        })
    }

    secondAPI = () => {
        if(this.state.djname && this.state.djname !== '') {
            axios.post(config.django_api, {"name": this.state.djname})
            .then(res => {
                console.log('Result ==> ', res)
                this.setState({ data: [], title: 'Data Posted !!', color: 'danger' })
            }).catch(err => {
                console.log('Error ==> ', err)
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    
                    </div>
                    <div className="col-md-4" style={{fontSize: '12px'}}>
                        <Alert color={this.state.color}>{this.state.title}</Alert>
                        <ul style={{listStyle: 'none'}}>
                            {
                                this.state.data && this.state.data.length > 0 ? this.state.data.map(d=>(
                                    <li>
                                        {d.name}
                                    </li>
                                )) : null
                            }
                        </ul>
                    </div>
                    <div className="col-md-4">
                    
                    </div>

                </div>
                
                <div className="row">
                    <div className="col-md-4">
                    
                    </div>
                    <div className="col-md-2">
                    <Button className="btn-danger" onClick={this.firstAPI}><strong>9Q3Q724#</strong></Button>
                    </div>
                    <div className="col-md-2">
                    <Input name="djname" onChange={this.onChange} bsSize="sm" />
                    <Button className="btn-success" onClick={this.secondAPI}><strong>75@1%$##</strong></Button>
                    </div>
                    <div className="col-md-4">
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing
