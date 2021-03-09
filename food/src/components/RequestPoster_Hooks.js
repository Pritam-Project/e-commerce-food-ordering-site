//This poster is done by tapai
import React from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import {Redirect} from 'react-router-dom';

function RequestPoster() {



    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`poster 1`);


        const posterOrdinfo = {

            foodid: "00001",
            foodname: "poster 1",
            customername: sessionStorage.getItem('username'),
            customeremail: sessionStorage.getItem('useremail')

        }

        axios.post('http://localhost:4500/special/food_request', posterOrdinfo)
            .then(res => {
                console.log(res.data)
               alert('POSTER ORDER SUCCESSFUL')
            });

    
    }

    const handleSubmit_1 = (evt) => {
      evt.preventDefault();
      console.log(`poster 2`);
      const posterOrdinfo = {

        foodid: "00002",
        foodname: "poster 2",
          customername: sessionStorage.getItem('username'),
          customeremail: sessionStorage.getItem('useremail')
      }

      axios.post('http://localhost:4500/special/food_request', posterOrdinfo)
          .then(res => {
              console.log(res.data)
             alert('POSTER ORDER SUCCESSFUL')
          });
  }
  const handleSubmit_2 = (evt) => {
    evt.preventDefault();
    console.log(`poster 3`);

    const posterOrdinfo = {

      foodid: "00003",
      foodname: "poster 3",
        customername: sessionStorage.getItem('username'),
        customeremail: sessionStorage.getItem('useremail')
    }

    axios.post('http://localhost:4500/special/food_request', posterOrdinfo)
        .then(res => {
            console.log(res.data)
           alert('POSTER ORDER SUCCESSFUL')
        });
}
const handleSubmit_3 = (evt) => {
  evt.preventDefault();
  console.log(`poster 4`);

  const posterOrdinfo = {

    foodid: "00004",
    foodname: "poster 4",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('http://localhost:4500/special/food_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
         alert('POSTER ORDER SUCCESSFUL')
      });
}
const handleSubmit_4 = (evt) => {
  evt.preventDefault();
  console.log(`poster 5`);

  const posterOrdinfo = {

    foodid: "00005",
    foodname: "poster 5",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('http://localhost:4500/special/food_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
         alert('POSTER ORDER SUCCESSFUL')
      });
}
const handleSubmit_5 = (evt) => {
  evt.preventDefault();
  console.log(`poster 6`);

  const posterOrdinfo = {

    foodid: "00006",
    foodname: "poster 6",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('http://localhost:4500/special/food_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
         alert('POSTER ORDER SUCCESSFUL')
      });
}
const handleSubmit_6 = (evt) => {
  evt.preventDefault();
  console.log(`poster 7`);

  const posterOrdinfo = {

    foodid: "00007",
      foodname: "poster 7",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('http://localhost:4500/special/food_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
         alert('POSTER ORDER SUCCESSFUL')
      });
}
const handleSubmit_7 = (evt) => {
  evt.preventDefault();
  console.log(`poster 8`);

  const posterOrdinfo = {

    foodid: "00008",
    foodname: "poster 8",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('http://localhost:4500/special/food_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
         alert('POSTER ORDER SUCCESSFUL')
      });
}
  
let authuser = sessionStorage.getItem('Key_Veriable')
console.log(authuser)
if (authuser === "USER") {
    return (
      <div>
        <NavigationBar />
      {/*Frist row Starts*/}
      <div class="row">

        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">


              <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
    
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/pic1.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                          {/* <a href="#" class="btn btn-danger">Buy Now</a> */}  
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">        
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/pic.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_1}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                          
                           </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>



        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <div class="row">

                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/pic2.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_2}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                        
                           </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/pic3.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_3}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                           
                           </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">


              <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/pic4.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_4}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                          
                           </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/pic5.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_5}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                             
                             </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>



        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <div class="row">

                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/indian.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_6}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                          
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                    
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/land3.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_7}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                        
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
}
else {
    return (<Redirect to="/login" />)

}

}
export default RequestPoster