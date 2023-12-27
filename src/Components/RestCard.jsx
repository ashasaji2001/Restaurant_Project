import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom"

function RestCard({restaurants}) {
console.log(restaurants);
  return (
    <div className='m-3 p-2' style={{width:"350px"}}> 
       <Link to={`view/${restaurants.id}`} style={{textDecoration:"none"}}> 
        <MDBCard className='my-4 'style={{height:"420px"}}>
      <MDBCardImage src={restaurants.photograph} alt='...' height={"250px"} position='top' />
      <MDBCardBody>
        <MDBCardText>
<h3>{restaurants.name}</h3>     
<h6>{restaurants.address}</h6>  
 </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Link>
    </div>
  )
}

export default RestCard