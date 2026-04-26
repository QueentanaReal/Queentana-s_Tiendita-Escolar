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

<!-- MENÚ ORIGINAL -->
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
<section>
<h2 class="text-2xl font-bold">⭐ Especial del día</h2>
<button class="addToCart bg-green-600 text-white px-3 py-1 rounded mt-2"
data-name="Especial del día" data-price="30">
Agregar
</button>
</section>

<!-- MAESTROS -->
<section>
<h2 class="text-2xl font-bold">🎓 Maestros</h2>
<button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
data-name="Refresco Maestro" data-price="25">
Agregar Refresco ($25)
</button>

<button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
data-name="Café Maestro" data-price="20">
Agregar Café ($20)
</button>
</section>

<!-- TEMPORADA -->
<section>
<h2 class="text-2xl font-bold">🍂 Temporada</h2>
<button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
data-name="Bolis" data-price="10">
Agregar Bolis ($10)
</button>

<button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
data-name="Mangoneada" data-price="12">
Agregar Mangoneada ($12)
</button>

<button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
data-name="Paleta" data-price="25">
Agregar Paleta ($25)
</button>
</section>

</main>

<!-- CARRITO -->
<div id="cartModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  <div class="bg-white p-6 rounded">
    <ul id="cartItems"></ul>
    <p>Total: $<span id="cartTotal">0</span></p>
    <!-- MÉTODO DE PAGO (AGREGADO) -->
<select id="paymentMethod" class="border p-2 mt-2 w-full">
  <option value="">Selecciona método de pago</option>
  <option value="Transferencia">Transferencia</option>
  <option value="Efectivo">Efectivo</option>
</select>

    <button id="sendWhatsApp">Enviar por WhatsApp</button>
    <button id="closeCart">Cerrar</button>
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

function renderCart(){
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i)=>{
    total += item.price;
    cartItems.innerHTML += `<li>${item.name} - $${item.price}</li>`;
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
  if(cart.length === 0) return alert("Carrito vacío");

  let msg = "Pedido:%0A";
  cart.forEach(i=> msg += "- " + i.name + "%0A");
  msg += "Total $" + cartTotal.textContent;

   document.getElementById("sendWhatsApp").onclick = ()=>{
  if(cart.length === 0) return alert("Carrito vacío");

  const payment = document.getElementById("paymentMethod").value;
  if(!payment) return alert("Selecciona método de pago");

  const folio = Math.floor(100000 + Math.random() * 900000);

  let msg = "🧾 Pedido:%0A";
  msg += "Folio: " + folio + "%0A%0A";

  cart.forEach(i=> msg += "- " + i.name + "%0A");

  msg += "%0ATotal $" + cartTotal.textContent + "%0A";
  msg += "Pago: " + payment;

  window.open("https://wa.me/5216143515170?text=" + msg);
};
};
</script>

</body>
</html>
