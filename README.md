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

<!-- MENÚ -->
<section>
<h2 class="text-2xl font-bold mb-4">📋 Menú Diario</h2>

<div class="grid md:grid-cols-3 gap-6">
  <div class="border p-4 bg-white rounded shadow">
    <h4>Mini torta</h4>
    <p>$13</p>
    <button class="addToCart" data-name="Mini torta" data-price="13">Agregar</button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Mollete</h4>
    <p>$13</p>
    <button class="addToCart" data-name="Mollete" data-price="13">Agregar</button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Burrito</h4>
    <select class="burritoOption">
      <option>Papas con chorizo</option>
      <option>Deshebrada</option>
    </select>
    <p>$24</p>
    <button class="addBurrito" data-price="24">Agregar</button>
  </div>
</div>

<h3 class="text-xl font-semibold mt-8">🥤 Bebidas</h3>
<div class="grid md:grid-cols-3 gap-6 mt-4">
  <div class="border p-4 bg-white rounded shadow">
    <h4>Agua</h4>
    <select class="aguaOption">
      <option value="Agua chica - 6">Chica $6</option>
      <option value="Agua grande - 12">Grande $12</option>
    </select>
    <button class="addAgua">Agregar</button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Jugo</h4>
    <p>$12</p>
    <button class="addToCart" data-name="Jugo" data-price="12">Agregar</button>
  </div>
</div>
</section>

<!-- ESPECIAL -->
<section id="especial">
<h2 class="text-2xl font-bold mb-4">⭐ Especial del día</h2>

<div class="border p-4 bg-white rounded shadow">
  <h4>Platillo del día</h4>
  <p>$30</p>
  <button class="addToCart bg-green-600 text-white px-3 py-1 rounded mt-2"
    data-name="Especial del día" data-price="30">
    Agregar
  </button>
</div>
</section>

<!-- MAESTROS -->
<section id="maestros">
<h2 class="text-2xl font-bold mb-4">🎓 Exclusivo Maestros</h2>

<div class="grid md:grid-cols-2 gap-6">
  <div class="border p-4 bg-white rounded shadow">
    <h4>Refresco</h4>
    <p>$25</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Refresco" data-price="25">
      Agregar
    </button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Café</h4>
    <p>$20</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Café" data-price="20">
      Agregar
    </button>
  </div>
</div>
</section>

<!-- TEMPORADA -->
<section id="temporada">
<h2 class="text-2xl font-bold mb-4">🍂 Temporada</h2>

<div class="grid md:grid-cols-3 gap-6">
  <div class="border p-4 bg-white rounded shadow">
    <h4>Bolis</h4>
    <p>$10</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Bolis" data-price="10">
      Agregar
    </button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Mangoneada</h4>
    <p>$12</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Mangoneada" data-price="12">
      Agregar
    </button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Paleta</h4>
    <p>$25</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Paleta" data-price="25">
      Agregar
    </button>
  </div>
</div>
</section>

</main>


<!-- CARRITO -->
<div id="cartModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  <div class="bg-white p-6 rounded w-80">
    <ul id="cartItems"></ul>
    <p class="mt-2">Total: $<span id="cartTotal">0</span></p>

    <select id="paymentMethod" class="border p-2 mt-2 w-full">
      <option value="">Selecciona método de pago</option>
      <option value="Transferencia">Transferencia</option>
      <option value="Efectivo">Efectivo</option>
    </select>
    <div id="transferInfo" class="hidden mt-3 p-3 border rounded bg-gray-100 text-sm">
  <p class="font-bold">💳 Datos para transferencia:</p>
  <p>Tarjeta: 4152 3143 0956 2018</p>
  <p class="mt-2 text-green-700 font-semibold">
    📸 Manda tu comprobante de pago
  </p>
</div>

    <button id="sendWhatsApp"
    class="bg-green-600 text-white w-full py-2 mt-3 rounded font-bold shadow">
    📲 Enviar pedido por WhatsApp
    </button>

    <button id="closeCart"
    class="bg-gray-400 text-white w-full py-2 mt-2 rounded shadow">
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
  showToast(name + " agregado");
}

function removeItem(i){
  cart.splice(i,1);
  renderCart();
}

function renderCart(){
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i)=>{
    total += item.price;
    cartItems.innerHTML += `
      <li class="flex justify-between items-center">
        ${item.name} - $${item.price}
        <button onclick="removeItem(${i})" class="text-red-500">✕</button>
      </li>
    `;
  });

  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
}

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

document.getElementById("sendWhatsApp").onclick = ()=>{

  const paymentMethod = document.getElementById("paymentMethod");
const transferInfo = document.getElementById("transferInfo");

paymentMethod.addEventListener("change", () => {
  if(paymentMethod.value === "Transferencia"){
    transferInfo.classList.remove("hidden");
  } else {
    transferInfo.classList.add("hidden");
  }
});
  if(cart.length === 0) return alert("Carrito vacío");

  const payment = document.getElementById("paymentMethod").value;
  if(!payment) return alert("Selecciona método de pago");

  const folio = Math.floor(100000 + Math.random() * 900000);

  let msg = "🧾 Pedido:%0A";
  msg += "Folio: " + folio + "%0A%0A";

  cart.forEach(i=> msg += "- " + i.name + "%0A");

  msg += "%0ATotal $" + cartTotal.textContent + "%0A";
  msg += "Pago: " + payment;

  window.open("https://wa.me/526143515170?text=" + msg);
};
</script>

</body>
</html>
