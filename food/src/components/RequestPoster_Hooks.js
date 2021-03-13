import React from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import Footer from './footer';
import { useHistory } from 'react-router-dom';

function RequestPoster() {

  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser);
  const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`food 1`);

        if (authuser === "USER") {
        const posterOrdinfo = {

            foodid: "00001",
            foodname: "food 1",
            customername: sessionStorage.getItem('username'),
            customeremail: sessionStorage.getItem('useremail')

        }

        axios.post('/special/food_request', posterOrdinfo)
            .then(res => {
                console.log(res.data)
               alert('FOOD REQUEST SEND SUCCESSFULLY')
            });
          }
          else{
            history.push('/login')
          }
    
    }

    const handleSubmit_1 = (evt) => {
      evt.preventDefault();
      console.log(`food 2`);
      if (authuser === "USER") {
      const posterOrdinfo = {

        foodid: "00002",
        foodname: "food 2",
          customername: sessionStorage.getItem('username'),
          customeremail: sessionStorage.getItem('useremail')
      }

      axios.post('/special/food_request', posterOrdinfo)
          .then(res => {
              console.log(res.data)
              alert('FOOD REQUEST SEND SUCCESSFULLY')
          });
        }
        else{
          history.push('/login')
        }
  }
  const handleSubmit_2 = (evt) => {
    evt.preventDefault();
    console.log(`food 3`);
    if (authuser === "USER") {
    const posterOrdinfo = {

      foodid: "00003",
      foodname: "food 3",
        customername: sessionStorage.getItem('username'),
        customeremail: sessionStorage.getItem('useremail')
    }

    axios.post('/special/food_request', posterOrdinfo)
        .then(res => {
            console.log(res.data)
            alert('FOOD REQUEST SEND SUCCESSFULLY')
        });
      }
      else{
        history.push('/login')
      }
}
const handleSubmit_3 = (evt) => {
  evt.preventDefault();
  console.log(`food 4`);
  if (authuser === "USER") {
  const posterOrdinfo = {

    foodid: "00004",
    foodname: "food 4",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('/special/food_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
          alert('FOOD REQUEST SEND SUCCESSFULLY')
      });
    }
    else{
      history.push('/login')
    }
}
const handleSubmit_4 = (evt) => {
  evt.preventDefault();
  console.log(`food 5`);
  if (authuser === "USER") {
  const posterOrdinfo = {

    foodid: "00005",
    foodname: "food 5",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('/special/food_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
          alert('FOOD REQUEST SEND SUCCESSFULLY')
      });
    }
    else{
      history.push('/login')
    }
}
const handleSubmit_5 = (evt) => {
  evt.preventDefault();
  console.log(`food 6`);
  if (authuser === "USER") {
  const posterOrdinfo = {

    foodid: "00006",
    foodname: "food 6",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('/special/food_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
          alert('FOOD REQUEST SEND SUCCESSFULLY')
      });
    }
    else{
      history.push('/login')
    }
}
const handleSubmit_6 = (evt) => {
  evt.preventDefault();
  console.log(`food 7`);
  if (authuser === "USER") {
  const posterOrdinfo = {

    foodid: "00007",
      foodname: "food 7",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('/special/food_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
          alert('FOOD REQUEST SEND SUCCESSFULLY')
      });
    }
    else{
      history.push('/login')
    }
}
const handleSubmit_7 = (evt) => {
  evt.preventDefault();
  console.log(`food 8`);
  if (authuser === "USER") {
  const posterOrdinfo = {

    foodid: "00008",
    foodname: "food 8",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('/special/food_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
          alert('FOOD REQUEST SEND SUCCESSFULLY')
      });
    }
    else{
      history.push('/login')
    }
}
  
    return (
      <div>
      <NavigationBar />
      <div className="row">
        <div className="col">
          <div className="card">
          <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/pic1.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit}>
                          <button type="submit" className="btn btn-danger">REQUEST</button>
                          </form>
                          </div>
          </div>
        </div>
      
      <div className="col">
          <div className="card">
          <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/pic.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_1}>
                          <button type="submit" className="btn btn-danger">REQUEST</button>
                          </form>
                          </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/pic2.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_2}>
                          <button type="submit" className="btn btn-danger">REQUEST</button>
                          </form>
                          </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/pic3.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_3}>
                          <button type="submit" className="btn btn-danger">REQUEST</button>
                          </form>
                          </div>
          </div>
        </div>
        </div>
        <div className="row">
        <div className="col">
          <div className="card">
          <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/pic4.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_4}>
                          <button type="submit" className="btn btn-danger">REQUEST</button>
                          </form>
                          </div>
          </div>
        </div>
      
      <div className="col">
          <div className="card">
          <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/pic5.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_5}>
                          <button type="submit" className="btn btn-danger">REQUEST</button>
                          </form>
                          </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/indian.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_6}>
                          <button type="submit" className="btn btn-danger">REQUEST</button>
                          </form>
                          </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/land3.jpg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_7}>
                          <button type="submit" className="btn btn-danger">REQUEST</button>
                          </form>
                          </div>
          </div>
        </div>
        </div>
      <Footer/>
    </div>


  );

}
export default RequestPoster