<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Queentana´s Tiendita Escolar</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-[#F9F6F0] text-[#1F1F1F]">

  <!-- HEADER -->
  <header class="bg-[#C69B4B] text-white p-4 shadow-lg flex items-center justify-between">

    <!-- Menú hamburguesa -->
    <button id="menuBtn" class="text-2xl">☰</button>

    <!-- Logo -->
    <a href="#" onclick="scrollToSection('inicio')" class="text-center">
      <h1 class="text-xl md:text-2xl font-bold">👑 Queentana´s Tiendita</h1>
    </a>

    <!-- Carrito -->
    <button id="cartBtn" class="bg-white text-[#C69B4B] px-3 py-1 rounded-lg shadow font-bold">
      🛒 (<span id="cartCount">0</span>)
    </button>

  </header>

  <!-- MENÚ LATERAL -->
  <div id="menu" class="fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform -translate-x-full transition-transform z-50 p-6 space-y-4">

    <button id="closeMenu" class="text-right w-full text-xl">✖</button>

    <a href="#" onclick="scrollToSection('menuSec')" class="block font-bold">📋 Menú diario</a>
    <a href="#" onclick="scrollToSection('bebidas')" class="block font-bold">🥤 Bebidas</a>
    <a href="#" onclick="scrollToSection('especial')" class="block font-bold">⭐ Especial del día</a>
    <a href="#" onclick="scrollToSection('maestros')" class="block font-bold">🎓 Exclusivo maestros</a>
    <a href="#" onclick="scrollToSection('temporada')" class="block font-bold">🍂 Temporada</a>

  </div>

  <!-- Overlay -->
  <div id="overlay" class="fixed inset-0 bg-black bg-opacity-50 hidden z-40"></div>

  <!-- CONTENIDO -->
  <main id="inicio" class="p-6 space-y-12">

    <!-- MENÚ DIARIO -->
    <section id="menuSec">
      <h2 class="text-2xl font-bold mb-4">📋 Menú Diario</h2>

      <h3 class="text-xl font-semibold mb-2">🍽️ Comida</h3>
      <div class="grid md:grid-cols-3 gap-6">

        <div class="border rounded-xl p-4 bg-white shadow">
          <h4 class="font-bold">Mini torta</h4>
          <p>$13</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Mini torta" data-price="13">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <h4 class="font-bold">Mollete</h4>
          <p>$13</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Mollete" data-price="13">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <h4 class="font-bold">Burrito</h4>
          <select class="border rounded p-2 w-full mt-2 burritoOption">
            <option>Papas con chorizo</option>
            <option>Deshebrada</option>
          </select>
          <p class="mt-2">$24</p>
          <button class="addBurrito bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-price="24">Agregar</button>
        </div>

      </div>

      <h3 id="bebidas" class="text-xl font-semibold mt-8 mb-2">🥤 Bebidas</h3>
      <div class="grid md:grid-cols-3 gap-6">

        <div class="border rounded-xl p-4 bg-white shadow">
          <h4 class="font-bold">Agua</h4>
          <select class="border rounded p-2 w-full mt-2 aguaOption">
            <option value="Agua chica - 6">Chica $6</option>
            <option value="Agua grande - 12">Grande $12</option>
          </select>
          <button class="addAgua bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <h4 class="font-bold">Jugo</h4>
          <p>$12</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Jugo" data-price="12">Agregar</button>
        </div>

      </div>
    </section>

    <!-- ESPECIAL -->
    <section id="especial">
      <h2 class="text-2xl font-bold mb-4">⭐ Especial del día</h2>
      <div class="border p-4 bg-white rounded shadow">
        <h4>Platillo del día</h4>
        <p>$30</p>
        <button class="addToCart bg-green-600 text-white px-3 py-1 rounded mt-2" data-name="Especial" data-price="30">Agregar</button>
      </div>
    </section>

    <!-- MAESTROS -->
    <section id="maestros">
      <h2 class="text-2xl font-bold mb-4">🎓 Maestros</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="border p-4 bg-white rounded shadow">
          <h4>Refresco</h4>
          <p>$25</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Refresco" data-price="25">Agregar</button>
        </div>
      </div>
    </section>

    <!-- TEMPORADA -->
    <section id="temporada">
      <h2 class="text-2xl font-bold mb-4">🍂 Temporada</h2>
      <div class="border p-4 bg-white rounded shadow">
        <h4>Producto temporada</h4>
        <p>$10</p>
        <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Temporada" data-price="10">Agregar</button>
      </div>
    </section>

  </main>

  <!-- CARRITO -->
  <div id="cartModal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center">
    <div class="bg-white w-96 p-6 rounded-xl">
      <h2 class="text-xl font-bold mb-4">🛒 Carrito</h2>
      <ul id="cartItems"></ul>
      <p class="font-bold mt-4">Total: $<span id="cartTotal">0</span></p>

      <div class="flex justify-between mt-4">
        <button id="closeCart" class="bg-gray-400 text-white px-4 py-2 rounded">Cerrar</button>
        <button id="checkout" class="bg-green-600 text-white px-4 py-2 rounded">Pagar</button>
      </div>
    </div>
  </div>

  <!-- SCRIPT -->
  <script>
    let cart = [];

    const cartBtn = document.getElementById("cartBtn");
    const cartModal = document.getElementById("cartModal");
    const closeCart = document.getElementById("closeCart");
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    cartBtn.onclick = () => cartModal.classList.remove("hidden");
    closeCart.onclick = () => cartModal.classList.add("hidden");

    function addToCart(name, price) {
      cart.push({name, price: parseFloat(price)});
      renderCart();
    }

    function renderCart() {
      cartItems.innerHTML = "";
      let total = 0;

      cart.forEach((item, i) => {
        total += item.price;
        cartItems.innerHTML += `<li>${item.name} - $${item.price} <button onclick="remove(${i})">X</button></li>`;
      });

      cartTotal.textContent = total;
      cartCount.textContent = cart.length;
    }

    function remove(i) {
      cart.splice(i,1);
      renderCart();
    }

    document.querySelectorAll(".addToCart").forEach(btn=>{
      btn.onclick = ()=> addToCart(btn.dataset.name, btn.dataset.price);
    });

    document.querySelector(".addBurrito").onclick = (e)=>{
      const opt = document.querySelector(".burritoOption").value;
      addToCart("Burrito "+opt, e.target.dataset.price);
    };

    document.querySelector(".addAgua").onclick = ()=>{
      const opt = document.querySelector(".aguaOption").value.split(" - ");
      addToCart(opt[0], opt[1]);
    };

    // MENÚ
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");
    const closeMenu = document.getElementById("closeMenu");
    const overlay = document.getElementById("overlay");

    menuBtn.onclick = ()=>{
      menu.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
    };

    function closeMenuFunc(){
      menu.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    }

    closeMenu.onclick = closeMenuFunc;
    overlay.onclick = closeMenuFunc;

    function scrollToSection(id){
      document.getElementById(id).scrollIntoView({behavior:"smooth"});
      closeMenuFunc();
    }
  </script>

</body>
</html>
