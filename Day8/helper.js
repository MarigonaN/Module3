
const url = 'https://striveschool.herokuapp.com/api/product/'
const getData= async () => {
    let response = await fetch(url,  {
        "method": "GET",
        "headers": {
            "Authorization": "Basic " + btoa('user19:Hxx8R4wZfCANamrj')}
        })
    try {
        if(response.ok) {
          
            let tableBody = document.querySelector('.outcome tbody')
            tableBody.innerHTML=''
             let data = await response.json()
             console.log(data)
             data.forEach(product => {
                 tableBody.innerHTML+=createRow(product)
             });
            
        }
    }catch(error) {
    }
}
const getProduct = async (id) => {
    let response = await fetch(url + id, {
        "method": "GET",
        "headers": {
            "Authorization": "Basic " + btoa('user19:Hxx8R4wZfCANamrj')}
      });
      try {
        if(response.ok) {
        let product = await response.json()
        return product
         } 
      } catch(error) {
          
      }
    
     
  }
  const deleteProduct =async (id) => {
     
    try {
       let response = await fetch(url + id, {
           method: "DELETE",
           "headers": {
               "Authorization": "Basic " + btoa('user19:Hxx8R4wZfCANamrj')},
         
       });
       if(response.ok) {
           alert('You have successfully deleted the product')
           location.assign("index.html");
       }
    }catch (error) {
        alert ('you can not delete the product')
    }
  
}

const updateProduct =async (id) => {
     
    try {
       let response = await fetch(url + id, {
           method: "PUT",
           "headers": {
            "Authorization": "Basic " + btoa('user19:Hxx8R4wZfCANamrj')},
         
       });
       if(response.ok) {
           
           location.assign("upload_data.html");
       }
    }catch (error) {
        
    }
  
}




const saveEvent = async (agendaEvent) => {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(agendaEvent),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa('user19:Hxx8R4wZfCANamrj')
      }),
    });
    return response;
  };


  const createRow =(productInfo)=> {
    let row=`
    <div class="mr-0">
    <tr>
    
      <th scope="row"><a href = "Edit_Delete_Page.html?id=${productInfo._id}">${productInfo._id}</a></th>
      
      <td>${productInfo.name}</td>
      <td>${productInfo.description}</td>
      <td>${productInfo.brand}</td>
      <td ><img src="${productInfo.imageUrl}" alt="" class="image-fluid" style="max-height: 10rem;">
      </td>
      <td>$${productInfo.price}</td>
      <td>${productInfo.userId}</td>
      <td>${productInfo.createdAt}</td>
      <td>${productInfo.updatedAt}</td>
     
    </tr>
    
    </div>
    `
    return row;
  }


  const handleSubmit = async() => {
    event.preventDefault();
    submitEvent();
  }

 const submitEvent = async() => {
    let nameInput= document.querySelector("#name")
    let descInput= document.querySelector('#description')
    let brandInput =document.querySelector('#brand')
    let imageInput = document.querySelector('#imageUrl')
    let priceInput = document.querySelector('#price')

        let object = {
            name: document.querySelector("#name").value,
            description: document.querySelector('#description').value,
            brand: document.querySelector('#brand').value,
            imageUrl: document.querySelector('#imageUrl').value,
            price: document.querySelector('#price').value,
        }

        let response = await saveEvent(object)
       
        
        if(response.ok) {
            alert('You have succesfully added the product')
            location.assign("index.html");
        }else {
            
            let error = await response.json()
            alert('Please fill out the form')
           
           if (Object.keys(error.error.errors).includes('name')) {
               nameInput.classList.add('is-invalid')
           } 
           if (Object.keys(error.error.errors).includes('description')) {
            descInput.classList.add('is-invalid')
            }
            if (Object.keys(error.error.errors).includes('brand')) {
                brandInput.classList.add('is-invalid')
            }
            if (Object.keys(error.error.errors).includes('imageUrl')) {
                imageInput.classList.add('is-invalid')
            }
            if (Object.keys(error.error.errors).includes('price')) {
                priceInput.classList.add('is-invalid')
            }
        }
 }