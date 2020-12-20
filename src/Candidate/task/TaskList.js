import React from "react"
const TaskList = (props) => {
  return (
    props.taskList.map((val, idx) => {
      let DegreeTitle = `DegreeTitle-${idx}`, CGPA = `CGPA-${idx}`, Year = `Year-${idx}`, EducationStatus = `EducationStatus-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input  type="text"
                required
                className="form-control"
                value={DegreeTitle}
                onChange={this.onChangeDegreeTitle}
                />
          </td>
          <td>
            <input  type="text"
                required
                className="form-control"
                value={this.state.CGPA}
                onChange={this.onChangeCGPA}
                />
          </td>
          <td>
            <input  type="text"
                required
                className="form-control"
                value={this.state.Year}
                onChange={this.onChangeYear}
                />
          </td>
          <td>
            <select name="Status" id={EducationStatus} data-id={idx} className="form"  value ={this.state.EducationStatus} onChange = {this.onChangeEducationStatus} >
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
export default TaskList;