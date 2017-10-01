import React, { Component } from 'react'
import { Redirect } from 'react-router'

import { HashRouter, Route, Switch } from 'react-router-dom'
import { NavbarInstance } from './NavbarInstance';
import { Home } from './Home'
import { Gallery } from './Gallery'
import { MyPranks } from './MyPranks'
import { Whoops404 } from './Whoops404'

export class TestApp extends Component {

    constructor(props){
        super(props)
        this.state  = {
            index : 0
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(index){

        console.log("OnChange in Test App")
        console.log(index)

        this.setState({index : index})
    }

    render() {

    	return (
    		<div>
        <NavbarInstance index={this.state.index} onChange={this.onChange}/>
        <HashRouter>
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/mypranks" component={MyPranks}/>
                    <Route component={Whoops404}/>
                </Switch>
            </div>
        </HashRouter>
    </div>
    		)
    }
}
