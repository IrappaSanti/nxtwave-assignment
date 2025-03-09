import { Component } from "react";

import {v4 as uuidv4} from 'uuid'
import Item from '../Item'

import './index.css'


class Home extends Component {
  state = {
    inputVal:'',
    taskList:[]
  };

  onChangeInput=event=>{
    this.setState({
      inputVal:event.target.value
    })
  }

  addTask=event=>{
    event.preventDefault()
    const {inputVal}=this.state
    if (inputVal!==''){
      this.setState(prevState=>({
        taskList:[...prevState.taskList,{id:uuidv4(),task:inputVal}]
      }))
    }
    
  }

  deleteItem=id=>{
    const {taskList}=this.state
    const filter=taskList.filter(each=>each.id!==id)
    this.setState({
      taskList:filter
    })
  }

  render() {
    const {taskList}=this.state
    return (
      <div className="main">
        <form className="formDiv"  onSubmit={this.addTask}>
          <h1 className="head">Task Tracker</h1>
          <input placeholder="Add a task..." className="inField" onChange={this.onChangeInput} />
          <button className="btn" type="submit">Add Task</button>
        </form>
        <ul className="listItem">
          {taskList.map(each=>{
            return <Item each={each} deleteItem={this.deleteItem} key={each.id}/>
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
