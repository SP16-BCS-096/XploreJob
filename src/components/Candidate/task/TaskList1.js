import React from "react"
const TaskList1 = (props) => {
  return (
    props.taskList1.map((val, idx) => {
      let JobPost = `JobPost-${idx}`, Company = `Company-${idx}`, Address = `Address-${idx}`, PostStatus = `PostStatus-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input  type="text"
                required
                className="form-control"
                value={this.state.JobPost}
                onChange={this.onChangeJobPost}
                />
          </td>
          <td>
            <input  type="text"
                required
                className="form-control"
                value={this.state.Company}
                onChange={this.onChangeCompany}
                />
          </td>
          <td>
            <input  type="text"
                required
                className="form-control"
                value={this.state.Address}
                onChange={this.onChangeAddress}
                />
          </td>
          <td>
            <select name="Status" id={PostStatus} data-id={idx} className="form" value ={this.state.PostStatus} onChange = {this.onChangePostStatus} >
              <option value="pending">Pending</option>
              <option value="In Progress">In progress</option>
              <option value="Completed">Completed</option>
          
            </select>
          </td>
          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default TaskList1;