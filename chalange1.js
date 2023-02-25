const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
    {
    name: {
    common: "John",
    fullName: ["John", "Doe"]
    },
    age: 32,
    isMale: false,
    address: {
    street: "13/A St Joseph",
    house: 10,
    },
    },
    {
    name: {
    common: "Humayoun",
    fullName: ["Humayoun", "Kabir"]
    },
    age: 33,
    isMale: false,
    address: {
    street: "13/A St Lucia",
    house: 11,
    },
    },
    ]
    }
     

    // const myobject = JSON.stringify(person)
     const personContainer = document.getElementById('person-container');
     personContainer.innerHTML= `
     
     <div class="card">
     <div class="card-body">
       <h2 class="card-title border bg-gray p-3">Full Name: ${person.result[0].name.common}</h2>
         <h4 class=" m-3">Age:${person.result[0].age}</h4>
       <p class="card-text m-3"> Street:${person.result[0].address.street}</p>
        
     </div>
   </div>
     <div class="card">
     <div class="card-body">
     <h2 class="card-title border bg-gray p-3">Full Name: ${person.result[1].name.common}</h2>
     <h4 class=" m-3">Age: ${person.result[1].age}</h4>
   <p class="card-text m-3"> Street:${person.result[1].address.street}</p>
        
     </div>
   </div>
     
     
     
     `

