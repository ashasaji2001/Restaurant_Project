import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
            <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbSUd92VThTgZZVmPkdEv3MApqi9yLCQioDjwbyhQXFv0Xhlg8PRYRRQmdP_4ea9x5pM&usqp=CAU'
              height='45'
              alt=''
            //   loading='lazy'
            />
          YUMMY_FUDDY😋 RESTORIES

            
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header