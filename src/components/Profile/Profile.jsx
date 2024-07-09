// import React, { useEffect, useState } from "react";
// import Navbar from '../Navbar/Navbar'
// import "../Profile/Profile.css";
// import axios from "axios";


// export default function Profile() {
//   const [users,setusers]=useState([]);
//   useEffect(()=>{
// axios.get("http://localhost:4000/user/getusers")
// .then((res)=>{
//   console.log(res.data);
//   setusers(res.data);
// }).catch((e)=>{ 
//    console.log(e);
// });
//   },[]);
//   const display=(data)=>{
//     return data.map((user)=>{
//       return(
//         <div className="profile-box">
//         <div className="profile-text">
//           <div className="profile-text-1">Name</div>{" "}
//           <div className="profile-details"> {user.Name}</div>
//           <hr></hr>
//         </div>
//         <div className="profile-text" style={{ marginLeft: "0.5rem" }}>
//           <div className="profile-text-1">UserName</div>
//           <div className="profile-details"> {user.Username}</div>
//           <hr></hr>
//         </div>
//         <div className="profile-text">
//           <div className="profile-text-1">Email</div>
//           <div className="profile-details"> {user.Email}</div>
//           <hr></hr>
//         </div>
//         <div className="profile-text">
//           <div className="profile-text-1">PhoneNumber</div>
//           <div className="profile-details"></div>
//           <hr></hr>
//         </div>
//       </div>
//       )
//     })
//   }
  
//   return (
//     <div>
//       <Navbar/>
//       <div className="profile">
//         <div className="profile-main">
//           <div className="profile-left">
//             <div className="profile-head">Your Profile</div>
//               {display(users)}
//             <button class="profile-btn-1">UPDATE</button>
//             <button class="profile-btn-2">SAVE</button>
//           </div>
//           <div className="profile-right"></div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import Layout from "../Navbar/Layout";
import "../Profile/Profile.css";
import axios from "axios";


export default function Profile() {
  const [users,setusers]=useState([]);



  useEffect(()=>{
axios.get("http://localhost:4000/user/getusers")
.then((res)=>{
  console.log(res.data);
  setusers(res.data); 
}).catch((e)=>{ 
   console.log(e);
});
  },[]);
  const display=(data)=>{
    return data.map((user)=>{
      return(
        <div className="profile-box">
        <div className="profile-text">
          <div className="profile-text-1">FirstName</div>{" "}
          <div className="profile-details"> {user.Name}</div>
          <hr></hr>
        </div>
        <div className="profile-text" style={{ marginLeft: "0.5rem" }}>
          <div className="profile-text-1">Username</div>
          <div className="profile-details"> {user.Username}</div>
          <hr></hr>
        </div>
        <div className="profile-text">
          <div className="profile-text-1">Email</div>
          <div className="profile-details"> {user.Email}</div>
          <hr></hr>
        </div>
        <div className="profile-text">
          <div className="profile-text-1">Password</div>
          <div className="profile-details"> {user.Password}</div>
          <hr></hr>
        </div>
      </div>
      )
    })
  }
  
  return (
    <Layout>
      <div className="profile">
        <div className="profile-main">
          <div className="profile-left">
            <div className="profile-head">Your Profile</div>
              {display(users)} <br />
          </div>
          <div className="profile-right"></div>
        </div>
      </div>
    </Layout>
  );
}