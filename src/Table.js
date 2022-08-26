import React, { Component } from 'react'
import './Table.css';

class Table extends Component {
  render() {
    return (
      <div className='box'>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>salary</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>person 1</td>
                <td>job 1</td>
                <td>25000</td>
            </tr>
            <tr>
                <td>person 2</td>
                <td>job 2</td>
                <td>25000</td>
            </tr>
            <tr>
                <td>person 3</td>
                <td>job 3</td>
                <td>25000</td>
            </tr>
            <tr>
                <td>person 4</td>
                <td>job 4</td>
                <td>25000</td>
            </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default Table