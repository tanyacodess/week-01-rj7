*const users = [
    {
        fname: 'john',
        age: 60
    },
    {
        fname:'joe',
        age: 70
    },
    {
        fname: 'lisa',
        age: 50

    }

];
 const failed = users.filter((users) => users.age <60);
 console.log(failed);*/


 //map
 
/*const users = [
    {
        fname: 'john',
        lname: 'doe'
    },
    {
        fname:'joe',
        lname: 'doe'
    },
    {
        fname: 'lisa',
        lname: 'doe'

    }

];
 const finalusers = users.map((user) =>{
    return {
        //fullname: user.fname +' '+user.lname
        fullname: `${user.fname} ${user.lname}` // string function 
    };
 });
 console.log(finalusers);*/

 // reduce
 /*const movies =[
    {
       name: 'social',
       budget: 150 
    },
    {
        name: 'singh',
        budget: 100
    },
    {
        name: 'kabir',
        budget: 300
    }
    
];*/
/*let total = 0;
 movies.forEach((movie) =>{
    total= total+ movie.budget;

 });
console.log(total);*/
 /*const total= movies.reduce((acc,movie) =>{
    acc= acc + movie.budget; 
    return acc;

},0);
console.log(total);*/


 // Indexof if you give id its provide its  index value 
// element is not there then -1
 /*const admins =[2,1,5];

 const user = {
    name: 'xyz',
    id: 5
 }
 //const isAdmin = admins.indexOf(user.id) > -1;
//console.log(isAdmin);

// includes  easy version on index of 
console.log(admins.includes(user.id));
*/


// find 
 /*const users =[
    {
        name : 'x',
        id: 1
    },
    
    {
            name : 'y',
            id: 2
    },
       
    {
            name : 'z',
            id: 3
       
    }

    
];
 const myuser=users.find((user)=>{
    if(user.id===3){
        return true;

    }
    return false;
});
console.log(myuser);*/

// sort

/*const names = [];
names.sort();
 console.log(names);*/



   //splice 
 /*const names = ['aman','tanya','heya','geya','mudit'];
  names.splice(1,1);
  console.log(names);*/




        // functions 
         

/*function login(username,password) {

    console.log(`${username},logged in sucessfully`);
}
 login('john');
 login('jam');*/


/* function upperCase(str) {
      return   str.toUpperCase();
 }
   const result=upperCase('amamamamam');
   console.log(result);*/

 // default parameter
 
     // variable scope - only avilable inside the  function block 
      /*function download (){
        const filename ='xyz.pdf';
        console.log(filename)
      }

      download();
      console.log(filename)*/

       /// declaration 

      function login() {
        

      }