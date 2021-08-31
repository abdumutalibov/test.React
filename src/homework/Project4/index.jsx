import { faCreativeCommonsNc } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./web.css";
class TabReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: `Abdulloh`, status: `MSDY`, year: 17 },
        { id: 2, name: `Javohir`, status: `ITishnik`, year: 16 },
        { id: 3, name: `Abdulhay`, status: `Doctor`, year: 15 },
        { id: 4, name: `Khalid`, status: `Teacher`, year: 14 },
      ],
      selected: null,
      name: "",
      status: "",
      year: "",
      editname: "",
      editstatus: "",
      edityear: "",
      // selected: null,
    };
  }

  render() {
    const onClickButton = (id) => {
      const newData = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: newData });
    };
    const onAdd = () => {
      // console.log(this.state.name,this.state.status,this.state.year);
      const save = {
        name: this.state.name,
        status: this.state.status,
        year: this.state.year,
        id: this.state.data.length + 1,
      };
      // console.log(save);
      const newData = [...this.state.data, save];
      this.setState({ data: newData });
    };
    const onName = (e) => {
      this.setState({ name: e.target.value });
    };
    const onStatus = (e) => {
      this.setState({ status: e.target.value });
    };
    const onYear = (e) => {
      this.setState({ year: e.target.value });
    };
    // ==========================================================
    const onEdit = (id, name, status) => {
      this.setState({ selected: id, editname: name, editstatus: status });
    };
    const onChangeName = (e) => {
      this.setState({ editname: e.target.value });
    };
    const onChangeStatus = (e) => {
      this.setState({ editstatus: e.target.value });
    };
    const onChangeYear = (e) => {
      this.setState({ edityear: e.target.value });
    };
    const onSave = (id) => {
      console.log(id);
      const newData = this.state.data.map((value) => {
        return value.id !== id
          ? value
          : {
              ...value,
              name: this.state.editname,
              status: this.state.editstatus,
              year: this.state.edityear,
            };
      });
      this.setState({ selected: null ,data:newData});
    };

    return (
      <div className="obshiy">
        <div className="box1">
          <div className="boxer">
            <input onChange={onName} type="text" placeholder="Name" />
            <input onChange={onStatus} type="text" placeholder="Status" />
            <input onChange={onYear} type="number" placeholder="Year" />
          </div>
          <button onClick={onAdd}>Add</button>
        </div>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Year</th>
              <th colSpan="2">Panel</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(({ id, name, status, year }, index) => {
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>
                    {this.state.selected === id ? (
                      <input
                        onChange={onChangeName}
                        disabled={this.state.selected !== id}
                        type="text"
                        value={this.state.editname}
                      />
                    ) : (
                      <div>{name}</div>
                    )}
                  </td>
                  <td>
                    {this.state.selected === id ? (
                      <input
                        onChange={onChangeStatus}
                        disabled={this.state.selected !== id}
                        type="text"
                        value={this.state.editstatus}
                      />
                    ) : (
                      <div>{status}</div>
                    )}
                  </td>
                  <td>
                    {this.state.selected === id ? (
                      <input
                        onChange={onChangeYear}
                        disabled={this.state.selected !== id}
                        type="number"
                        value={this.state.edityear}
                      />
                    ) : (
                      <div>{year}</div>
                    )}
                  </td>
                  <td>
                    <button onClick={() => onClickButton(id)}>
                      delete {id}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        this.state.selected === id
                          ? onSave(id)
                          : onEdit(id, name, status)
                      }
                      disabled={
                        this.state.selected === id &&
                        (this.state.editname.length <= 0,
                        this.state.editstatus.length <= 0,
                        this.state.edityear.length <= 0)
                      }
                    >
                      {this.state.selected === id ? `save` : `edit`}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TabReact;
