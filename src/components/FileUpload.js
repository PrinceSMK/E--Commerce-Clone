// import React ,{Component} from 'react'
// import { upload } from '@testing-library/user-event/dist/upload'
// import React from 'react'

// function FileUpload(e) {
 

  
//     console.warn(e.target.files)
//     const files = e.target.files
//     formData.append('img' ,files[0])
//     const formData = new FormData()
//     fetch("http://localhost:8000/upload" , {

//       method : "POST",
//       body: formData
//     }
//     ).then((res)=>{
//         res.json().then((result)=>{
//           console.log(result)
//         })
//     })
//   }
 
 
//   render()
//   return (
//     <div>


//       <div>
//         <h1>Uploading File</h1>
//         <input type="file" name="img" id="" onChange={(e)=>this.FileUpload(e)} />
//       </div>
      
//     </div>
//   )


// export default FileUpload





import React, { Component } from "react";
import {ProgressBar} from 'react-bootstrap';
import axios from 'axios';

export class UserCard extends Component {

  state = {
    uploadPercentage: 0,
    avatar: ''
  }

  componentDidMount = () =>{
    const {avatar} = this.props;
    this.setState({ avatar })
  }

  uploadFile = ({ target: { files } }) =>{
    console.log( files[0] )
    let data = new FormData();
    data.append( 'file', files[0] )

    const options = {
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor( (loaded * 100) / total )
        console.log( `${loaded}kb of ${total}kb | ${percent}%` );

        if( percent < 100 ){
          this.setState({ uploadPercentage: percent })
        }
      }
    }

    axios.post("http://localhost:8000/upload", data, options).then(res => { 
        console.log(res)
        this.setState({ avatar: res.data.url, uploadPercentage: 100 }, ()=>{
          setTimeout(() => {
            this.setState({ uploadPercentage: 0 })
          }, 1000);
        })
    })
  }

  render() {
    const {uploadPercentage} = this.state;
    return (
      <div className="card card-user">
        <div className="image">
          <img src={this.props.bgImage} alt="..." />
        </div>
        <div className="content">
          <div className="author">
            <a href="#pablo">
              <img
                className="avatar border-gray"
                src={this.state.avatar}
                alt="..."
              />
              <input type="file" className="form-control profile-pic-uploader" onChange={this.uploadFile} />
              { uploadPercentage > 0 && <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} /> }

              <h4 className="title">
                {this.props.name}
                <br />
                <small>{this.props.userName}</small>
              </h4>
            </a>
          </div>
          <p className="description text-center">{this.props.description}</p>
        </div>
        <hr />
        <div className="text-center">{this.props.socials}</div>
      </div>
    );
  }
}

export default UserCard;