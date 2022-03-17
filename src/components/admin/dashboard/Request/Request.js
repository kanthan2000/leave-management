import Box from '../box/box'

 const Request = ()=>{
     return(
         <>
         
         <Box>
         <div>
         <table className="table">
         <thead className="thead-dark">
      <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>293393</td>
      <td>
      <button type="button" class="btn btn-success">Accept</button>
      <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
    </tbody>
    </table>

        </div>
        </Box>
        </>
     )
 }
 export default Request;