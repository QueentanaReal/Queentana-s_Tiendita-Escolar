<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Queentana´s Tiendita Escolar</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-[#F9F6F0] text-[#1F1F1F]">

<header class="bg-[#C69B4B] text-white p-4 shadow-lg flex items-center justify-between">
  <button id="menuBtn" class="text-2xl">☰</button>

  <h1 class="text-xl md:text-2xl font-bold">👑 Queentana´s Tiendita</h1>

  <button id="cartBtn" class="bg-white text-[#C69B4B] px-3 py-1 rounded-lg shadow font-bold">
    🛒 (<span id="cartCount">0</span>)
  </button>
</header>

<!-- NOTIFICACIÓN -->
<div id="toast" class="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-lg opacity-0 transition duration-300 z-50"></div>

<!-- SONIDO -->
<audio id="sound" src="https://www.soundjay.com/buttons/sounds/button-3.mp3"></audio>

<main class="p-6 space-y-12">

<section>
<h2 class="text-2xl font-bold mb-4">📋 Menú Diario</h2>

<div class="grid md:grid-cols-3 gap-6">
  <div class="border p-4 bg-white rounded shadow">
    <h4>Mini torta</h4>
    <p>$13</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Mini torta" data-price="13">Agregar</button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Mollete</h4>
    <p>$13</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Mollete" data-price="13">Agregar</button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Burrito</h4>
    <select class="border rounded p-2 w-full mt-2 burritoOption">
      <option>Papas con chorizo</option>
      <option>Deshebrada</option>
    </select>
    <p>$24</p>
    <button class="addBurrito bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-price="24">Agregar</button>
  </div>
</div>

<h3 class="text-xl font-semibold mt-8">🥤 Bebidas</h3>
<div class="grid md:grid-cols-3 gap-6 mt-4">
  <div class="border p-4 bg-white rounded shadow">
    <h4>Agua</h4>
    <select class="border rounded p-2 w-full mt-2 aguaOption">
      <option value="Agua chica - 6">Chica $6</option>
      <option value="Agua grande - 12">Grande $12</option>
    </select>
    <button class="addAgua bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Jugo</h4>
    <p>$12</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Jugo" data-price="12">Agregar</button>
  </div>
</div>
</section>

<!-- ESPECIAL -->
<section>
<h2 class="text-2xl font-bold mb-4">⭐ Especial del día</h2>
<div class="border p-4 bg-white rounded shadow">
  <h4>Platillo del día</h4>
  <p>$30</p>
  <button class="addToCart bg-green-600 text-white px-3 py-1 rounded mt-2"
    data-name="Especial del día" data-price="30">Agregar</button>
</div>
</section>

<!-- MAESTROS -->
<section>
<h2 class="text-2xl font-bold mb-4">🎓 Exclusivo Maestros</h2>
<div class="grid md:grid-cols-2 gap-6">
  <div class="border p-4 bg-white rounded shadow">
    <h4>Refresco</h4>
    <p>$25</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Refresco" data-price="25">Agregar</button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Café</h4>
    <p>$20</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Café" data-price="20">Agregar</button>
  </div>
</div>
</section>

<!-- TEMPORADA -->
<section>
<h2 class="text-2xl font-bold mb-4">🍂 Temporada</h2>
<div class="grid md:grid-cols-3 gap-6">
  <div class="border p-4 bg-white rounded shadow">
    <h4>Bolis</h4>
    <p>$10</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Bolis" data-price="10">Agregar</button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Mangoneada</h4>
    <p>$12</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Mangoneada" data-price="12">Agregar</button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Paleta</h4>
    <p>$25</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Paleta" data-price="25">Agregar</button>
  </div>
</div>
</section>

</main>

<!-- CARRITO -->
<div id="cartModal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center">
  <div class="bg-white w-96 p-6 rounded-xl">
    <h2 class="text-xl font-bold mb-4">🛒 Carrito</h2>

    <ul id="cartItems" class="space-y-2"></ul>

    <p class="font-bold mt-4">Total: $<span id="cartTotal">0</span></p>

    <!-- BOTÓN WHATSAPP -->
    <button id="sendWhatsApp" class="bg-green-500 text-white w-full mt-4 py-2 rounded font-bold">
      Enviar pedido por WhatsApp
    </button>

    <button id="closeCart" class="bg-gray-400 text-white w-full mt-2 py-2 rounded">
      Cerrar
    </button>
  </div>
</div>

<script>
let cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const toast = document.getElementById("toast");
const sound = document.getElementById("sound");

cartBtn.onclick = () => cartModal.classList.remove("hidden");
closeCart.onclick = () => cartModal.classList.add("hidden");

function showToast(text){
  toast.textContent = text;
  toast.classList.remove("opacity-0");
  sound.play();
  setTimeout(()=> toast.classList.add("opacity-0"),1500);
}

function addToCart(name, price){
  cart.push({name, price: parseFloat(price)});
  renderCart();
  showToast(name + " agregado 🛒");
}

function renderCart(){
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i)=>{
    total += item.price;

    cartItems.innerHTML += `
      <li class="flex justify-between">
        ${item.name} - $${item.price}
        <button onclick="removeItem(${i})" class="text-red-500">✕</button>
      </li>
    `;
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

function removeItem(i){
  cart.splice(i,1);
  renderCart();
}

/* WHATSAPP */
document.getElementById("sendWhatsApp").onclick = () => {
  if(cart.length === 0) return alert("Tu carrito está vacío");

  let message = "🧾 Pedido%0A%0A";

  cart.forEach(item=>{
    message += "- " + item.name + " $" + item.price + "%0A";
  });

  message += "%0ATotal: $" + cartTotal.textContent;

  window.open(`https://wa.me/5216143515170?text=${message}`, "_blank");
};

document.querySelectorAll(".addToCart").forEach(btn=>{
  btn.onclick = ()=> addToCart(btn.dataset.name, btn.dataset.price);
});

document.querySelector(".addBurrito").onclick = (e)=>{
  const opt = document.querySelector(".burritoOption").value;
  addToCart("Burrito " + opt, e.target.dataset.price);
};

document.querySelector(".addAgua").onclick = ()=>{
  const opt = document.querySelector(".aguaOption").value.split(" - ");
  addToCart(opt[0], opt[1]);
};
</script>

</body>
</html>
