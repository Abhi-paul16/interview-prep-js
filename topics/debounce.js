const searchInput = document.getElementById('searchInput');

// Function to perform the search operation
function performSearch() {
    const searchText = searchInput.value;
    console.log('Searching for:', searchText);
    // Put your code here to perform the search operation
}


 function debounce(call , delay){
     let timer;
    return function(){
       if(timer) clearTimeout(timer); 
      timer =   setTimeout(call,delay)
    }

 }


 searchInput.addEventListener('keyup', debounce(performSearch, 500)); 
 


//  Debouncing:-kitni bhi baar call Karo current  call ko manega(purani calls ignored)Orr ek fixed time ke baad he current call execute karega.
// Throttling:-call karega per fixed intervals per jb tk Purani call Puri nahi hoti new call nahi karega.