import React from 'react'
import { Link } from 'react-router-dom';

function card() {
    return (
      <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/land2.jpg'} alt="img" />
      <div className="card-body">
      
        <h5 className="card-title">VEGETARIAN CUISINE</h5>
          <p className="card-text" align= "left"> Material: Motton, Chiken, Fish, Egg</p>
          <p className="card-text" align= "left">Nutriational Quality: Fat, Protin </p>
          <p className="card-text" align= "left"> Colour/Flavour : Most are red in colour with suger </p>
           <p className="text-muted" align= "left">More of this catagory <Link to="/display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/nonvage.jpg'} alt="img" />
      <div className="card-body"> 
        <h5 className="card-title">NON-VEGETARIAN CUISINE</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/bengali.jpg'} alt="img" />
      <div className="card-body">
       
      <h5 className="card-title">BENGALI CUISINE</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/kashmiri.jpg'} alt="img" />
      <div className="card-body">
        <h5 className="card-title">KASHMIRI CUISINE</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
      </div>
    </div>
  </div>
</div>
   



   <div className="row row-cols-1 row-cols-md-3 g-4">
   <div className="col">
     <div className="card">
       <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/Biryani.jpg'} alt="img" />
       <div className="card-body">
         <h5 className="card-title">BIRYANI</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
       </div>
     </div>
   </div>
   <div className="col">
     <div className="card">
       <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/indian.jpg'} alt="img" />
       <div className="card-body">
         <h5 className="card-title">INDIAN CUISINE</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
       </div>
     </div>
   </div>
   <div className="col">
     <div className="card">
       <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/south.jpg'} alt="img" />
       <div className="card-body">
       <h5 className="card-title">SOUTH INDIAN CUISINE</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
       </div>
     </div>
   </div>
   <div className="col">
     <div className="card">
       <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/rajasthani.jpg'} alt="img" />
       <div className="card-body">
         <h5 className="card-title">RAJASTHANI CUISINE</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
       </div>
     </div>
   </div>
 </div>
   
    </div>

        
    );
}

export default card;