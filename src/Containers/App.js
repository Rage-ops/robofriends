import React, { Component } from 'react';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
            // filteredRobots: robots
        }
    }

    async componentDidMount(){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
            const users = await response.json();
            this.setState({robots: users});
        }
        catch(err){
            throw err;
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // const filteredRobots = this.state.robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        // })
        // this.setState( { filteredRobots: filteredRobots} )
    } 

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!this.state.robots.length){
            return (<h1>Loading</h1>)
        }
        return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <Cardlist robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
        );
    }
}
export default App;