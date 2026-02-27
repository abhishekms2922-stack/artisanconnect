import { db, collection, getDocs } from "./firebase.js";

const container = document.getElementById("products");
const searchBox = document.getElementById("searchBox");

let allProducts=[];

async function loadProducts(){

const snapshot = await getDocs(collection(db,"products"));

snapshot.forEach(doc=>{
  allProducts.push(doc.data());
});

displayProducts(allProducts);
}

function displayProducts(products){

container.innerHTML="";

products.forEach(p=>{

container.innerHTML += `
<a href="product.html?name=${encodeURIComponent(p.name)}
&price=${encodeURIComponent(p.price)}
&image=${encodeURIComponent(p.image)}"
style="text-decoration:none;color:black;">

<div class="card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p class="price">₹${p.price}</p>
<p>📞 ${p.phone}</p>
<a href="https://wa.me/91${p.phone}" target="_blank">
<button>WhatsApp</button>
</a>
<p class="verified">✔ Verified Artisan</p>
</div>

</a>
`;
});
}

searchBox.addEventListener("input",()=>{

const text = searchBox.value.toLowerCase();

const filtered = allProducts.filter(p =>
p.name.toLowerCase().includes(text)
);

displayProducts(filtered);

});

loadProducts();