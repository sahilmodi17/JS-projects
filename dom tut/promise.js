
// const bucket = ["salt" , "vegetables" , "rice"];

// const friedRice = new Promise( (resolve , reject ) => {
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")  )
//         resolve("Fried Rice");
//     else 
//      reject("Couldn't do it");
// })

// friedRice.then( (rice) =>{
//     console.log("lets eat ",rice);
// } , (error) =>{
    //     console.log(error);
    // })
 
    // two function in then is little confusing
// So use .catch 



// function returning promise 

// function friedRice(){

//     const bucket = ["salt" , "vegetables" , "rice"];
    
//     return new Promise( (resolve , reject ) => {
//         if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")  )
//             resolve("Fried Rice");
//         else 
//          reject("Couldn't do it");
//     })

// }

// friedRice().then(

//     (rice) =>{
//     console.log("lets eat ",rice);
//     } 
//     )
//     .catch(
//         (error) =>{
//         console.log(error);
//     }
// )

function myPromise(){
    return new Promise( (resolve,reject )=>{
        const value= true ;
        setTimeout(()=>{
            if(value){
                resolve();
            }
            else{
                reject();
            }
        },2000)
    } 
}