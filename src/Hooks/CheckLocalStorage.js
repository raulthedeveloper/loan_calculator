

export default  function checkLocalStorage(){
    if(!localStorage.key('loans') || localStorage.getItem('loans') === null){
      localStorage.setItem('loans',JSON.stringify({}))
      console.log(localStorage.getItem('loans'))
    }
  }