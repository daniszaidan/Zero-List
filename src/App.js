import React, { Component } from "react";
import logo from './logo.png';
import './zero.css';
import './App.css';
// import MaterialIcon, { colorPalette } from 'material-icons-react';

class App extends Component {
  render() {
    return (
      <main>
        <div className="col col-5 col-m-12 half-left">
          <div className="todo-frame">
            <div className="logo-frame d-flex flex-center">
              <img src={logo} alt="" className='logo-brand' />
            </div>
            <form>
              <div className="form-input">
                <input type="text" required=" " />
                <label>Enter New Todo </label>
              </div>
              <div className="tag-frame">
                <div className="tag">School</div>
                <div className="tag">Work</div>
                <div className="tag">Home</div>
                <div className="tag">Sport</div>
              </div>
              <button type="button" class="btn btn-default">Add New Todo</button>
            </form>
          </div>
        </div>
        <div className="col col-7 col-m-12 half-right">

          <div className="card">
            <div className='col-1 col-s-12 d-flex flex-center'>
              <input type="checkbox" />
            </div>
            <div className='col-10 col-s-12 list-frame'>
              <div className="title-frame">
                <p>mengerjakan mengerjakan</p>
              </div>
              <div className="tag-frame">
                <div className="tag">school</div>
                <div className="tag">school</div>
                <div className="tag">school</div>
              </div>
            </div>
            <div className='col-1 col-s-12 d-flex flex-center'>
              {/* <MaterialIcon icon="dashboard" /> */}
              {/* <i className="fas fa-user-edit"></i> */}
              <i className="material-icons">delete</i>
            </div>
          </div>

          <div className="card">
            <div className='col-1 col-s-12 d-flex flex-center'>
              <input type="checkbox" />
            </div>
            <div className='col-10 col-s-12 list-frame'>
              <div className="title-frame">
                <p>mengerjakan mengerjakan</p>
              </div>
              <div className="tag-frame">
                <div className="tag">school</div>
                <div className="tag">school</div>
                <div className="tag">school</div>
              </div>
            </div>
            <div className='col-1 col-s-12 d-flex flex-center'>
              {/* <MaterialIcon icon="dashboard" /> */}
              {/* <i className="fas fa-user-edit"></i> */}
              <i className="material-icons">delete</i>
            </div>
          </div>

          <div className="card">
            <div className='col-1 col-s-12 d-flex flex-center'>
              <input type="checkbox" />
            </div>
            <div className='col-10 col-s-12 list-frame'>
              <div className="title-frame">
                <p>mengerjakan mengerjakan</p>
              </div>
              <div className="tag-frame">
                <div className="tag">school</div>
                <div className="tag">school</div>
                <div className="tag">school</div>
              </div>
            </div>
            <div className='col-1 col-s-12 d-flex flex-center'>
              {/* <MaterialIcon icon="dashboard" /> */}
              {/* <i className="fas fa-user-edit"></i> */}
              <i className="material-icons">delete</i>
            </div>
          </div>

          <div className="card">
            <div className='col-1 col-s-12 d-flex flex-center'>
              <input type="checkbox" />
            </div>
            <div className='col-10 col-s-12 list-frame'>
              <div className="title-frame">
                <p>mengerjakan mengerjakan</p>
              </div>
              <div className="tag-frame">
                <div className="tag">school</div>
                <div className="tag">school</div>
                <div className="tag">school</div>
              </div>
            </div>
            <div className='col-1 col-s-12 d-flex flex-center'>
              {/* <MaterialIcon icon="dashboard" /> */}
              {/* <i className="fas fa-user-edit"></i> */}
              <i className="material-icons">delete</i>
            </div>
          </div>

          <div className="card">
            <div className='col-1 col-s-12 d-flex flex-center'>
              <input type="checkbox" />
            </div>
            <div className='col-10 col-s-12 list-frame'>
              <div className="title-frame">
                <p>mengerjakan mengerjakan</p>
              </div>
              <div className="tag-frame">
                <div className="tag">school</div>
                <div className="tag">school</div>
                <div className="tag">school</div>
              </div>
            </div>
            <div className='col-1 col-s-12 d-flex flex-center'>
              {/* <MaterialIcon icon="dashboard" /> */}
              {/* <i className="fas fa-user-edit"></i> */}
              <i className="material-icons">delete</i>
            </div>
          </div>

          <div className="card">
            <div className='col-1 col-s-12 d-flex flex-center'>
              <input type="checkbox" />
            </div>
            <div className='col-10 col-s-12 list-frame'>
              <div className="title-frame">
                <p>mengerjakan mengerjakan</p>
              </div>
              <div className="tag-frame">
                <div className="tag">school</div>
                <div className="tag">school</div>
                <div className="tag">school</div>
              </div>
            </div>
            <div className='col-1 col-s-12 d-flex flex-center'>
              {/* <MaterialIcon icon="dashboard" /> */}
              {/* <i className="fas fa-user-edit"></i> */}
              <i className="material-icons">delete</i>
            </div>
          </div>

          <div className="card">
            <div className='col-1 col-s-12 d-flex flex-center'>
              <input type="checkbox" />
            </div>
            <div className='col-10 col-s-12 list-frame'>
              <div className="title-frame">
                <p>mengerjakan mengerjakan</p>
              </div>
              <div className="tag-frame">
                <div className="tag">school</div>
                <div className="tag">school</div>
                <div className="tag">school</div>
              </div>
            </div>
            <div className='col-1 col-s-12 d-flex flex-center'>
              {/* <MaterialIcon icon="dashboard" /> */}
              {/* <i className="fas fa-user-edit"></i> */}
              <i className="material-icons">delete</i>
            </div>
          </div>

        </div>
      </main>
    )
  }

}

export default App;
