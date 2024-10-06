import React from 'react';

function User({ userdata, removePeople }) { // props = {image:"asdfasdf",phone:"09600600600", cell:"09700700700"}

   let handleRemove = () => {
      removePeople(userdata.uuid);
   }

   return (
      <div className="card mb-2">
         <div className="row">
            <div className="col-2">
               <img src={userdata.image} width="50px" height="50px" />
            </div>
            <div className="col-5">
               <strong>Ph: {userdata.phone}</strong><br />
               <strong>Cell : {userdata.cell}</strong>
            </div>
            <div className="col-3">
               <h5 className="mt-2">{userdata.name}</h5>
            </div>
            <div className="col-1">
               <button className="btn btn-danger btn-sm mt-2" onClick={handleRemove}>
                  <i className="fa fa-trash"></i>
               </button>
            </div>
         </div>
      </div>
   );
}

export default User;