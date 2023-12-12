// console.log("START");

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//         // reject(0);
//     }, 3000);
// })
// let mySecondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2);
//         // reject(0);
//     }, 6000);
// })



// myPromise
//     .then(result=>{
//         console.log('result is:', result);
//         return mySecondPromise;
//     })
//     .then(result=>{
//         console.log('result of second promise is:', result+1);
//     })
//     .catch((err)=>{
//         console.error('error is :',err);
//     })
//     .finally(()=>console.log('All Promises seteled'));

//     Promise.all([myPromise,mySecondPromise])
//         .then(data=>console.log('data is : ', data))
//         .catch(err=>console.error('error is: ', err))
//         .finally(()=>console.log('Promise.all has resolved'));


//     const post = fetch('https://jsonplaceholder.typicode.com/posts');
//     const user = fetch('https://jsonplaceholder.typicode.com/users');
        
//     Promise.all([post, user])
//       .then(([postResponse, userResponse]) => {
//         return Promise.all([postResponse.json(), userResponse.json()]);
//       })
//       .then((data) => {
//         console.log(data);
//       })
//     //   .then(([postData, userData]) => {
//     //     console.log('Post Data:', postData);
//     //     console.log('User Data:', userData);
//     //   })
//       .catch((err) => console.log("somthing went wrong"))
//       .finally(() => console.log("user and its post setled"));
        


// console.log("END");