const allProductContainer= document.getElementById("all-product-container");
const sort = document.getElementById('short')
const prange= document.getElementById('prange')
const totalProductCount= document.getElementById('totalp')
const showingProductCount= document.getElementById('showp')



fetch('product.json')
.then(res => res.json())
.then(data=> loadData(data[0]))
let allProduct;
const loadData=(data)=>{
    // const featuresProducts= data.featuresProducts
    // const bestSeller=data.bestSeller
    // const newItem= data.newItem
   allProduct= [...data.featuresProducts,...data.bestSeller,...data.newItem]
    showDataOnUi(allProduct)
    totalProductCount.innerText= allProduct.length
}


 
sort.onchange=function(){

    allProductContainer.innerHTML=''
  const catagoryValue= sort.value
  catagoryFinder(catagoryValue)
  
  
}
prange.onchange=function(){

    allProductContainer.innerHTML=''
  const prangeValue= prange.value
  priceRangeFinder(prangeValue)
  
  
}

const priceRangeFinder = (priceValue)=>{
            if(priceValue==='all'){
                showDataOnUi(allProduct)
            }
            else if(priceValue==='low'){
            const filterByLowPrice= allProduct.filter(function(product){
                return parseInt(product.price) <= 2000;
            });
            showDataOnUi(filterByLowPrice)
                }


            else if(priceValue==='medium'){
            const filterByLowPrice= allProduct.filter(function(product){
                return parseInt(product.price) <= 2500 && parseInt(product.price) >= 2000;
            });
            showDataOnUi(filterByLowPrice)
                }


            else if(priceValue==='high'){
            const filterByLowPrice= allProduct.filter(function(product){
                return  parseInt(product.price) > 2500;
            });
showDataOnUi(filterByLowPrice)
    }
}
const catagoryFinder=(catagory)=>{
    if(catagory==='all'){
        showDataOnUi(allProduct)
    }
    else{
        const filteredProduct = allProduct.filter(function(product) {
            return product.catagory === catagory;
    
        });
    
    
        showDataOnUi(filteredProduct)
    }
   
}

// const showSingleProduct=(id)=>{
   
//         const findProducts= allProduct.find(fproduct=>fproduct.id === id)
       
//         const displayProduct = (product) => {
//           const {id, price, name, image, size, flavour, color, description, available}= product
//       const showPrice= document.getElementById("price-show")
//       const showName= document.getElementById("product-name")
//       const showProductImg1= document.getElementById("product-img1")
//       const showProductDescription= document.getElementById("product-description")
//       showPrice.innerText=  price
//       showName.innerText= name
//       showProductImg1.innerHTML= `<img src="${image}" alt="">`
//       showProductDescription.innerText= description
      
      
        
//         }
      
//         displayProduct(findProducts)
//       }


const showDataOnUi=(data)=>{
    showingProductCount.innerText=data.length
   data.map(product => {
    
   const div = document.createElement("div");
      div.classList.add("col-lg-3");
      div.classList.add("col-md-4");
      div.classList.add("col-sm-6");
  
     const containerDiv = `
  
        <article class="single_product">
            <figure>
                <div class="product_thumb">
                    <a onclick="showSingleProduct(${product.id})" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#modal_box"><img src="${product.image}" alt=""></a>
                   
                </div>
                <figcaption class="product_content text-center">
                    <h4><a onclick="showSingleProduct(${product.id})" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#modal_box">${product.name}</a></h4>
                    <div class="price_box">
                        <span class="current_price">&#2547; ${product.price}</span>
                    </div>
                </figcaption>
            </figure>
        </article>
   
      
    
        
        
        `;
            div.innerHTML= containerDiv;
            allProductContainer.appendChild(div);


            
   });
  





//Show Product in Modal

   
    // for (const product of allProducts) {
    //   const image = product.image;
      
    //   const div = document.createElement("div");
    //   div.classList.add("col-lg-3");
    //   div.classList.add("col-md-4");
    //   div.classList.add("col-sm-6");
  
    //  const containerDiv = `
      
      
     
      
      
      
  
  
    //     <article class="single_product">
    //         <figure>
    //             <div class="product_thumb">
    //                 <a onclick="showSingleProduct(${product.id})" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#modal_box"><img src="${image}" alt=""></a>
                   
    //             </div>
    //             <figcaption class="product_content text-center">
    //                 <h4><a onclick="showSingleProduct(${product.id})" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#modal_box">${product.name}</a></h4>
    //                 <div class="price_box">
    //                     <span class="current_price">&#2547; ${product.price}</span>
    //                 </div>
    //             </figcaption>
    //         </figure>
    //     </article>
   
      
    
        
        
    //     `;
       
    //     if(first){
         
    //      featuresProductContainer.appendChild(div);
    //      div.innerHTML= containerDiv;
    //      bestSellerContainer.innerHTML=``
    //      newItemContainer.innerHTML=``
         
    //     }
  
    // if(second){
      
        
    //     div.innerHTML= containerDiv;
    //     bestSellerContainer.appendChild(div);
    //   }
     
          
  
    //  if(third){
    //     newItemContainer.appendChild(div);
        
    //       div.innerHTML=containerDiv
    //     }
   
     
    // }
}

let flavour= 'original'
const productSize= document.getElementById("product-size")
const customSize=document.getElementById("custom-size")
let productSizeData
const showSingleProduct=(id)=>{
console.log(id)
  const findProducts= allProduct.find(fproduct=>fproduct.id === id)
 
  const displayProduct = (product) => {
    console.log(product)
    const {id, price, name, image,image1,image2, size, color, description, available}= product
const showPrice= document.getElementById("price-show")
const showName= document.getElementById("product-name")
const showProductImg1= document.getElementById("product-img1")
const showProductImg2= document.getElementById("product-img2")
const showProductImg3= document.getElementById("product-img3")
const tabImg1= document.getElementById("imgtab1")
const tabImg2= document.getElementById("imgtab2")
const tabImg3= document.getElementById("imgtab3")
const fondentCharge=document.getElementById("fondent-charge")
const printCharge=document.getElementById("print-charge")
productSize.onchange=function(){
  if(productSize.value==="2kg+"){
    customSize.classList.remove("d-none")
    
  }
  else{
    customSize.classList.add("d-none")
  }
}
showPrice.innerText= price+' /kg'
showName.innerText= name
showProductImg1.innerHTML= `<img src="${image}" alt="">`
showProductImg2.innerHTML=`<img src="${image1}" alt="">`
showProductImg3.innerHTML=`<img src="${image2}" alt="">`
tabImg1.innerHTML=`<img src="${image}" alt="">`
tabImg2.innerHTML=`<img src="${image1}" alt="">`
tabImg3.innerHTML=`<img src="${image2}" alt="">`
const flavourSelector= document.getElementById("flavour-check")
if(product.catagory==="custom" || product.catagory==="corporate"){
  fondentCharge.innerText= 800;
  printCharge.innerText=1000;
}
else{
  fondentCharge.innerText= "";
  printCharge.innerText="";
}
if(product.flavour){
  
  
  flavourSelector.classList.remove("d-none")
  const flavourOptionSelector= document.getElementById("product-flavour")
  flavour= flavourOptionSelector.value
  
}
else{
  flavourSelector.classList.add("d-none")
}
getProductPhoto(image)
tabImg1.onclick=function(){
  getProductPhoto(image)

}
tabImg2.onclick=function(){
  getProductPhoto(image1)
}
tabImg3.onclick=function(){
  getProductPhoto(image2)
}

  
  }

  displayProduct(findProducts)
}

let productPhoto
const getProductPhoto=(imgLink)=>{
  productPhoto=imgLink
  
  
}

const getUserDatas=()=>{
  let size
  if(productSize.value==="2kg+"){
size = customSize.value
  }
  else{
    size= productSize.value
  }
  const quantity= document.getElementById("product-quantity").value
  const note = document.getElementById("product-note").value
  const usName= document.getElementById("user-name").value
  const usAddress= document.getElementById("user-address").value
  const usEmail= document.getElementById("user-email").value
  const usPhone= document.getElementById("user-phone").value
  const price= document.getElementById("price-show").innerText
  const name= document.getElementById("product-name").innerText
  if(flavour !== "original"){
      flavour= document.getElementById("product-flavour").value
      
  }

  Email.send({
    SecureToken : "c1e51b75-b340-44e4-850d-cfa33866d424",
    To : usEmail,
    From : "rakibarhan13@gmail.com",
    Subject : name + " Ordered by  "+ usName,
    Body : ` 
    <h3>Thank You ${usName} for your order with Vintage Cafe. We will get in touch with you to confirm your oder. 
    Please see below the order details</h3> <br/><br/>
    <img height="200px" width="180px" src="http://vintage.metaconnect.com.bd/${productPhoto}" alt="" content-Type: image/jpeg> <br/>
    <h4> Ordered Details<h4/> <br/>
    Ordered Detail <br/>
    Product Name: ${name} <br/>
    product Price: ${price} <br/>
    Size: ${size} <br/>
    Flavour: ${flavour} <br/>
    Quantity: ${quantity} <br/>
    Wishing Note: ${note} <br/>
    Customer Name: ${usName} <br/>
    Customer Address: ${usAddress} <br/>
    Customer Email: ${usEmail} <br/>
    Customer Phone : ${usPhone} <br/>

    
   Thank you for order.`

    
}).then(
  message => alert("Order Placed. Contact You Soon")
);
  Email.send({
    SecureToken : "c1e51b75-b340-44e4-850d-cfa33866d424",
    To : 'faysalsikder.hero@gmail.com',
    From : "rakibarhan13@gmail.com",
    Subject : name + " Ordered by  "+ usName,
    Body : `
    <p>Customer Order Via Website. Please contact for payment and confirmation of the order. </p> <br/>
    <h3>Product Details<h3/>  <br/>
    <img height="200px" width="180px" src="http://vintage.metaconnect.com.bd/${productPhoto}" alt="" content-Type: image/jpeg> <br/>
    Product Name: ${name} <br/>
    product Price: ${price} <br/>
    Size: ${size} <br/>
    Flavour: ${flavour} <br/>
    Quantity: ${quantity} <br/>
    Wishing Note: ${note} <br/>

    <h3>Customer Details <h3/>
    Customer Name: ${usName} <br/>
    Customer Address: ${usAddress} <br/>
    Customer Email: ${usEmail} <br/>
    Customer Phone : ${usPhone} <br/>

    
   `

    
})
}


