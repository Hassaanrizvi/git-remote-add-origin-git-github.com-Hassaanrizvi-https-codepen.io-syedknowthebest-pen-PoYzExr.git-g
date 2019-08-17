/*document.addEventListener('DOMContentLoaded',()=>{
const ObjectArrayHelp = [
{name:'home',lastName:"rizvi"},
{name:'about',lastName:"moin"},
{name:'contact',lastName:"perween"}








]

    const helptext = document.querySelector('.help-text');

for (let i=0;i<ObjectArrayHelp.length;i++){
    let btn = document.querySelector(`#${ObjectArrayHelp[i].name}`)
    console.log(btn);

const helpTextMaker = (j)=>{

return () =>{

   

   
}

}


    btn.addEventListener('mouseenter',  ()=>{
        helptext.textContent = ObjectArrayHelp[j].lastName;
    })
    btn.addEventListener('mouseleave',()=>{
        helptext.textContent = ObjectArrayHelp[j].lastName;
    })



}

});*/

//create a promise
//check if user exist 
//check if user is correct
//yes
//check if account is valid
// yes 
//show success in console
// no
//no
//the user is not correct 
//faild login

/*const checkUser = new Promise((resolve,reject)=>{
    //async activity 

    setTimeout(()=>{
        if(true){
            resolve("login succesful");
        }else{
            reject("login failed");
        }
    },3000)
    })
const checkPassword = new Promise((resolve,reject)=>{
    //async activity 

    setTimeout(()=>{
        if(true){
            resolve({email:"eastwest.edu"});
        }else{
            reject({
                message:"login faild due to wronge information"
            });
        }
    },3000)
    })
        
 checkUser
.then((res)=>{
checkPassword
.then((res)=>{
    console.log(res);

})
})
.catch((err)=>{
    console.log(err)
})*/



//issues with public data fetch or might be error while writting the code
/*document.addEventListener("DOMContentLoaded",()=>{
    const selectElem = document.querySelector('select#countries')

    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population',{
        headers:{
            accept:'application/json;charset=utf=8'
        }
        })
        .then((res)=>{
        return res.json()
        })
        .then((json)=>{
  printCountries(json.countries)
        })

function printCountries(list){
console.log(list)
list.forEach((item)=>{
    const elem = document.createElement('option')
    elem.textContent = item;
    selectElem.appendChild (item);
})
}

})
*/
 document.addEventListener('DOMContentLoaded', ()=>{
    const selectElem = document.querySelector('select#countries')
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population', {
      headers: {
        accept: 'application/json; charset=utf=8'
      }
    })
      .then((res)=>{
        return res.json()
      })
      .then((json)=>{
        printCountries(json.countries)
      })
  
    function printCountries(list){
      console.log(list)
      list.forEach((item)=>{
        const elem = document.createElement('option')
        elem.textContent = item;
        selectElem.appendChild(elem)
      })
    }
  
  })

