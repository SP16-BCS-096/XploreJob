import React, { Component } from "react";
import TaskList1 from "./TaskList1";
import axios from 'axios';

class Form extends Component {
    state = {
        taskList1: [{ index: Math.random(), JobPost: "", CompanyName: "", Address: "", PostStatus: "" }],
        date: "",
        description: "",
    }

    handleChange = (e) => {
        if (["JobPost", "CompanyName", "Address", "PostStatus"].includes(e.target.name)) {
            let taskList1 = [...this.state.taskList]
            taskList1[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            taskList1: [...prevState.taskList1, { index: Math.random(), JobPost: "", CompanyName: "", Address: "", PostStatus: "" }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            taskList1: this.state.taskList1.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList1];
        // taskList1.splice(index, 1);
        // this.setState({ taskList1: taskList1 });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.date==='' || this.state.description==='')
        {
           
            return false;
        }
        for(var i=0;i<this.state.taskList1.length;i++)
        {
                if(this.state.taskList1[i].projectName==='' || this.state.taskList1[i].task==='')
                {
                    
                    return false;
                }
        }
        let data = { formData: this.state, userData: localStorage.getItem('user') }
        axios.defaults.headers.common["Authorization"] = localStorage.getItem('token');
        axios.post("http://localhost:5000/Cadidates/Cv", data).then(res => {
           
        }).catch(error => {
            if(error.response.status && error.response.status===400)
            {
                this.setState({ errors: error })
            }
            else 
            this.setState({ errors: error })
        });
    }
    clickOnDelete(record) {
        this.setState({
            taskList1: this.state.taskList1.filter(r => r !== record)
        });
    }
    render() {
        let { taskList1 } = this.state//let { notes, date, description, taskList1 } = this.state
        return (
            <div className="content">
                
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 20 ,marginLeft: 10  }}>
            
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Job Post</th>
                                                <th >Company Name</th>
                                                <th>Address</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList1 add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList1={taskList1} />
                                        </tbody>
                                        <tfoot>
                                            
                                        </tfoot>
                                    </table>
                              
                               
                         
                       
                        
                    </div>
                </form>
            </div>
        )
    }
}
export default Form;