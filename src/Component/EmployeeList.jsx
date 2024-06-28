import React from 'react'

const EmployeeListComponent = () => {
  return (
    <> 
    <h1 className='d-flex justify-content-center mb-5 mt-5' > Employees</h1> 
    
  <table class="table">
  <thead>
  
    <tr>
      <th scope="col">Number</th>
      <th scope="col"> Name</th>
      <th scope="col">Address</th>
      <th scope="col">Salary</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button>Edit</button><button>Delete</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button>Edit</button><button>Delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button>Edit</button><button>Delete</button></td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default EmployeeListComponent