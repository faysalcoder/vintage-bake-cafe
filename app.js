

fetch('product.json')
.then(res => res.json())
.then(data=> loadProduct(data[0]))

let allProduct
const loadProduct=(data)=>{

 allProduct= [...data.featuresProducts,...data.bestSeller,...data.newItem]
//  showDataOnUiSlider(allProduct.slice(0,4))
 if(allProduct.length){
  const filteredProduct = allProduct.filter(function(product) {
    return product.level === "features";

});

showDataOnUi(filteredProduct)
}
 if(allProduct.length){
  const filteredProduct = allProduct.filter(function(product) {
    return product.flavour

});

showDataOnUiSlider(filteredProduct)
}

}



const featuresProductContainer= document.getElementById("features-product-container");
const bestSellerContainer=  document.getElementById("best-seller-container");
const newItemContainer=  document.getElementById("new-item-container");
const levelProductShowContainer= document.getElementById("level-container")
const sliderProductContainer=document.getElementById("slider-product")
const keyProduct= document.getElementById("key-product")

const features= document.getElementById("features-cake")
const best=document.getElementById("best-seller")
const newi= document.getElementById("new-item")


features.onclick=function(){
  levelProductShowContainer.innerHTML=''
  levelFinder("features")
}
best.onclick=function(){
  levelProductShowContainer.innerHTML=''
  levelFinder("best")
}
newi.onclick=function(){
  levelProductShowContainer.innerHTML=''
  levelFinder("new")
}


const levelFinder=(level)=>{
  console.log(level)
  console.log(allProduct)

  if(allProduct.length){
    const filteredProduct = allProduct.filter(function(product) {
      return product.level === level;

  });

  showDataOnUi(filteredProduct)
  }
      
  
  
      
  
 
}
const showDataOnUiSlider=(data)=>{
  
  
   data.map(product => {
   
  const div = document.createElement("div");
     div.classList.add("col-lg-3");
   
 
    const containerDiv = `
       <article class="single_product">
       <figure>
           <div class="product_thumb">
               <a onclick="showSingleProduct(${product.id})" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#modal_box"><img src="${product.image}" alt=""></a>
               <div class="action_links">
                   <ul class="d-flex justify-content-center">
                       <li class="quick_button">
                           <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#modal_box">
                               Buy Now</a>
                       </li>
                   </ul>
               </div>
           </div>
           <figcaption class="product_content text-center">
               <h4><a onclick="showSingleProduct(${product.id})" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#modal_box">${product.name}</a></h4>
               <div class="price_box">
                   <span class="current_price">&#2547; ${product.price}/kg</span>
               </div>
           </figcaption>
       </figure>
   </article>
     
   
       
       
       `;
           div.innerHTML= containerDiv;
           keyProduct.appendChild(div);
 
 
           
  });
 }
const showDataOnUi=(data)=>{
  
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
                      <span class="current_price">&#2547; ${product.price}/kg</span>
                  </div>
              </figcaption>
          </figure>
      </article>
 
    
  
      
      
      `;
          div.innerHTML= containerDiv;
          levelProductShowContainer.appendChild(div);


          
 });
}



// const showDataOnHome=()=>{
//   if(window.location.pathname.substring( window.location.pathname.lastIndexOf('/')+1)==='index.html'){

  
  
//     const bestSellerElement= document.getElementById('best-seller')
//     bestSellerElement.addEventListener("click",()=>{
//       if(bestSellerContainer.innerHTML==``){
//       showProducts(bestSeller, false, true,false);
//       newItemContainer.innerHTML=``
//     }
//     })
  
  
//   const newItemElement= document.getElementById('new-item')
//   newItemElement.addEventListener("click",()=>{
//     if(newItemContainer.innerHTML==``){
//       showProducts(newItem, false, false, true);
//       bestSellerContainer.innerHTML=``
//     }
   
//   })
// }
// }




// // show all product in UI 
// const showProducts = (products, first, second, third) => {
//   const allProducts = products.map((pd) => pd);
//   for (const product of allProducts) {
//     const image = product.image;
    
//     const div = document.createElement("div");
//     div.classList.add("col-lg-3");
//     div.classList.add("col-md-4");
//     div.classList.add("col-sm-6");

//    const containerDiv = `
    
    
   
    
    
    


//       <article class="single_product">
//           <figure>
//               <div class="product_thumb">
//                   <a onclick="showSingleProduct(${product.id})" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#modal_box"><img src="${image}" alt=""></a>
                 
//               </div>
//               <figcaption class="product_content text-center">
//                   <h4><a onclick="showSingleProduct(${product.id})" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#modal_box">${product.name}</a></h4>
//                   <div class="price_box">
//                       <span class="current_price">&#2547; ${product.price}</span>
//                   </div>
//               </figcaption>
//           </figure>
//       </article>
 
    
  
      
      
//       `;
     
//       if(first){
       
//        featuresProductContainer.appendChild(div);
//        div.innerHTML= containerDiv;
//        bestSellerContainer.innerHTML=``
//        newItemContainer.innerHTML=``
       
//       }

//   if(second){
    
      
//       div.innerHTML= containerDiv;
//       bestSellerContainer.appendChild(div);
//     }
   
        

//    if(third){
//       newItemContainer.appendChild(div);
      
//         div.innerHTML=containerDiv
//       }
 
   
//   }
// };

// const loadFProduct=()=>{
 
//     showProducts(featuresProducts, true, false, false);
  
// }


let flavour= 'original'
const productSize= document.getElementById("product-size")
const customSize=document.getElementById("custom-size")
let productSizeData
const showSingleProduct=(id)=>{
console.log(id)
  const findProducts= allProduct.find(fproduct=>fproduct.id === id)
 
  const displayProduct = (product) => {
    console.log(product)
    const {id, price, name, image,image1,image2, size, color, description}= product
const showPrice= document.getElementById("price-show")
const showName= document.getElementById("product-name")
const showDesc= document.getElementById("product-description")
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
showDesc.innerText= description
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
  
  console.log(productPhoto)
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
    <img height="200px" width="180px" src="http://vintage.metaconnect.com.bd/${productPhoto}" alt="" content-Type: image/jpeg> <br/>
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
  message => alert("Order Placed")
);
  Email.send({
    SecureToken : "c1e51b75-b340-44e4-850d-cfa33866d424",
    To : 'faysalsikder.hero@gmail.com',
    From : "rakibarhan13@gmail.com",
    Subject : name + " Ordered by  "+ usName,
    Body : `<h3>Product Details<h3/>  <br/>
    <img height="200px" width="180px" src="http://vintage.metaconnect.com.bd/${productPhoto}" alt="" content-Type: image/jpeg> <br/>
    Product Name: ${name} <br/>
    product Price: ${price} <br/>
    Size: ${size} <br/>
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

//shop



// // Product count 
// let count = 0;
// const addToCart = (id, price) => {
//   count = count + 1;
//   updatePrice("price", price);

//   updateTaxAndCharge();
//   updateTotal();
//   document.getElementById("total-Products").innerText = count;
// };

// // add prices 
// const getInputValue = (id) => {
//   const element = document.getElementById(id).innerText;
//   const converted = parseFloat(element);
//   return converted;
// };

// // main price update function
// const updatePrice = (id, value) => {
//   const convertedOldPrice = getInputValue(id);
//   const convertPrice = parseFloat(value);
//   const total = convertedOldPrice + convertPrice;
//   document.getElementById(id).innerText = total.toFixed(2);
// };

// // set innerText function
// const setInnerText = (id, value) => {
//   document.getElementById(id).innerText = parseFloat(value).toFixed(2);
// };

// // update delivery charge and total Tax
// const updateTaxAndCharge = () => {
//   const priceConverted = getInputValue("price");
//   if (priceConverted > 200) {
//     setInnerText("delivery-charge", 30);
//     setInnerText("total-tax", priceConverted * 0.2);
//   }
//   if (priceConverted > 400) {
//     setInnerText("delivery-charge", 50);
//     setInnerText("total-tax", priceConverted * 0.3);
//   }
//   if (priceConverted > 500) {
//     setInnerText("delivery-charge", 60);
//     setInnerText("total-tax", priceConverted * 0.4);
//   }
// };

// //grandTotal update function
// const updateTotal = () => {
//   const grandTotal =
//     getInputValue("price") + getInputValue("delivery-charge") +
//     getInputValue("total-tax");
//   document.getElementById("total").innerText = parseFloat(grandTotal).toFixed(2);
// };

// //  show 1 product detail on modal 
// const showDetail = (id) => {
//   const url = `https://fakestoreapi.com/products/${id}`
//   fetch(url)
//     .then(res => res.json())
//     .then(data => displayProduct(data))
// }





{/* <div class="card h-100 " >
      <img src="${image}" class="card-img-top product-image" style="height:400px"  alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">Category: ${product.category}</p>
        <h2>Price: $ ${product.price}</h2>
        
        <div class="d-flex justify-content-around py-2 ">
        <div class="text-warning"><i class="fas fa-star"></i> ${rate}</div>
        <div class="text-success"><i class="fas fa-user"></i> ${count}</div>
        </div>
        
        <button onclick="addToCart(${product.id},${product.price})" id="addToCart-btn" class="buy-now btn btn-success">add to cart</button>
      <button onclick="showDetail(${product.id})" id="details-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-danger">Details</button>
      
      </div>
      </div> */}
    
  