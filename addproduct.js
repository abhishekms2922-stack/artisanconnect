import { db, collection, addDoc } from "./firebase.js";

window.addProduct = async function(){

const name=document.getElementById("name").value;
const price=document.getElementById("price").value;
const image=document.getElementById("image").value;

await addDoc(collection(db,"products"),{
name,
price,
image
});

alert("Product Added!");
};