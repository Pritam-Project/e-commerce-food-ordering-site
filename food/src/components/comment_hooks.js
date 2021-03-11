import React,{useState} from 'react';
import axios from 'axios';
import Footer from './footer';
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';



function PostComment(){
    
    const [category,setCategory] = useState("");
    const [subject,setSubject] = useState("");
    const [comment,setComment] = useState("");
    const [msg,setMessage] = useState("");

    
   const onChangeCategory = (e) => setCategory(e.target.value);
   const onChangeSubject =(e) => setSubject(e.target.value);
    const onChangeComment = (e) => setComment(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Post submitted:`);
        console.log(`NAME: ${sessionStorage.getItem('username')}`);
       console.log(`CATEGORY:${category}`);
       console.log(`SUBJECT:${subject}`);
        console.log(`COMMENT:${comment}`);
        console.log(`COUNTRY:${sessionStorage.getItem('country')}`);

        const userinfo = {
    
           name: sessionStorage.getItem('username'),
           category:category,
           subject:subject,
           comment: comment,
           country: sessionStorage.getItem('country'),
           
        }

        axios.post('/comment/posts', userinfo)
            .then(res => {
                console.log(res.data)
                setMessage('COMMENT POSTED SUCCESSFULLY')
            });

       setCategory('')
       setSubject('')
        setComment('')
 }

return(
    <div>
       <NavigationBar />
       <div className="card">
         <div className="card-body">
        
          <div className="form-header blue accent-1">
            <h3><i className="fas fa-key fa-spin fa-lg"></i>POST COMMENTS </h3>
          </div>
        <h4 style={{ color: "brown" }}> {msg}</h4>
        <form onSubmit={handleSubmit}>
       
        <select required value={category} onChange={onChangeCategory}>
                    <option value="choosecategory">choose category</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Baryani">Baryani</option>
                    <option value="South Indian">South Indian</option>
                    <option value="Kashimiri">Kashimiri</option>

                </select>
                <br /><br />
        <label>Subject:  </label>
        <input type="text" value={subject}
                onChange={onChangeSubject} placeholder="Enter Subject"
                required />
            <br /><br /> 
          
        <textarea rows="5" cols="30" value={comment}
                onChange={onChangeComment} placeholder="Enter your Comment"
                required/>
            <br/><br/>
           
            
            <div>
            <button type="submit"  className="btn btn-secondary" value="Post">POST</button>

            </div>
            <br /> <br />
            <Link to = "/displayall" className="btn btn-info btn-lg">viewall Comments</Link>
        </form>
        </div>
        </div>
        <br/><br/><br/>

    <Footer />

    </div>
)

}

export default PostComment;