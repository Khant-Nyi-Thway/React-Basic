import React, { useState, useEffect } from 'react';
import User from "./components/users/User";
import AddUser from './components/users/AddUser';

function App() {
   let [users, updateUser] = useState([]);
   let [showinputForm, formShow] = useState(true);

   useEffect(() => {
      fetch("https://randomuser.me/api/?results=10")
         .then(res => res.json())
         .then(people => {
            let rawUsers = people.results;
            let users_info = rawUsers.map(usr => {
               return {
                  uuid: usr.login.uuid,
                  name: `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
                  phone: usr.phone,
                  cell: usr.cell,
                  image: usr.picture.thumbnail
               }
            });
            console.log(users_info);
            updateUser(users_info);
         })
         .catch(err => console.log(err));
   }, []);

   let deleteUserHandler = (uuid) => {
      // alert(uuid);
      let filterRemainingUser = users.filter(ppl => uuid != ppl.uuid );
      updateUser(filterRemainingUser);
   } 

   let showformHandler = () => {
      formShow(!showinputForm);
   } 

   let adduserHandler = (NewUserForm) => {
      let newUser = [NewUserForm, ...users]
      updateUser(newUser);
      formShow(!showinputForm);
   }

   return (
      <div className="container my-5">
         <div>
            <h1 className="text-center my-5 text-info">Our Employee</h1>
            <button className="btn btn-primary btn-sm my-2" onClick={showformHandler} >Add User</button>
            {showinputForm && <AddUser addPpl={adduserHandler} />}
            {
               users.map(usr => <User key={usr.uuid} userdata={usr} removePeople={deleteUserHandler} />)
            }
         </div>
      </div>
   );
}


export default App;


/* <User image={users[0].image} phone={users[0].phone} cell={users[0].cell} name={users[0].name} />
        <User image={users[1].image} phone={users[1].phone} cell={users[1].cell} name={users[1].name} />
        <User image={users[2].image} phone={users[2].phone} cell={users[2].cell} name={users[2].name} />  */
/* <User data={users[0]}/>
 1           <User data={users[1]}/>
            <User data={users[2]}/> */