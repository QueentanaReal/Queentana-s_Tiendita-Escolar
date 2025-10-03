<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Queentana´s Tiendita Escolar</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#F9F6F0] text-[#1F1F1F]">
  <!-- Logo superior -->
  <div class="p-4 text-center">
    <img src="LOGO MAMA.png" alt="Logo Queentana´s Tiendita Escolar" class="mx-auto h-24">
  </div>

  <!-- Encabezado -->
  <header class="bg-[#C69B4B] text-white p-6 text-center shadow-lg relative">
    <h1 class="text-3xl font-bold">👑 Queentana´s Tiendita Escolar</h1>
    <p class="text-lg">Menú completo para todos los gustos</p>
    <!-- Botón carrito -->
    <button id="openCart" class="absolute right-6 top-6 bg-white text-[#C69B4B] px-4 py-2 rounded-xl shadow">
      🛒 Carrito (<span id="cartCount">0</span>)
    </button>
  </header>

  <main class="p-6 space-y-12">

    <!-- SECCIÓN 1: Menú Diario -->
    <section>
      <h2 class="text-2xl font-bold mb-4">📋 Menú Diario</h2>
      
      <!-- Categoría: Comida -->
      <h3 class="text-xl font-semibold mb-2">🍽️ Comida</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Mini torta -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/mini-torta.jpg" alt="Mini torta" class="rounded-xl mb-2">
          <h4 class="font-bold">Mini torta de pan blanco</h4>
          <p class="text-sm">Mayonesa, Jamón, Salchicha, Tomate y Lechuga</p>
          <p class="font-semibold">$13</p>
          <button onclick="addToCart('Mini torta',13)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <!-- Mollete -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/mollete.jpg" alt="Mollete" class="rounded-xl mb-2">
          <h4 class="font-bold">Mollete</h4>
          <p class="text-sm">Frijoles y Queso</p>
          <p class="font-semibold">$13</p>
          <button onclick="addToCart('Mollete',13)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <!-- Burritos -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/burrito.jpg" alt="Burritos" class="rounded-xl mb-2">
          <h4 class="font-bold">Burritos</h4>
          <p class="text-sm">Elige tu guisado favorito</p>
          <select id="burritoSelect" class="border rounded p-2 w-full mt-2">
            <option>Papas con chorizo</option>
            <option>Salsa verde</option>
            <option>Deshebrada</option>
            <option>Wini con chipotle</option>
            <option>Bistec a la mexicana</option>
            <option>Discada</option>
          </select>
          <p class="font-semibold mt-2">$24</p>
          <button onclick="addBurrito()" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
      </div>

      <!-- Aquí continuarías igual con bebidas, snacks, fitness y demás categorías -->
    </section>

    <!-- SECCIÓN 2: Especial del Día -->
    <section>
      <h2 class="text-2xl font-bold mb-4">⭐ Especial del Día</h2>
      <div class="border rounded-xl p-6 bg-white shadow text-center">
        <img src="img/especial.jpg" alt="Especial del día" class="mx-auto rounded-xl mb-2">
        <h4 class="font-bold">Nombre del Platillo</h4>
        <p class="text-sm">Descripción breve</p>
        <p class="font-semibold">$$$</p>
        <button onclick="addToCart('Especial del día',0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
      </div>
    </section>

    <!-- SECCIÓN 3: Exclusivo para maestros -->
    <section>
      <h2 class="text-2xl font-bold mb-4">🎓 Exclusivo para maestros(as)</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/refresco.jpg" alt="Refresco" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Refresco</h4>
          <p class="font-semibold">$25</p>
          <button onclick="addToCart('Refresco',25)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/cafe.jpg" alt="Café" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Café</h4>
          <p class="font-semibold">$20</p>
          <button onclick="addToCart('Café',20)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
      </div>
    </section>
  </main>

  <!-- Modal Carrito -->
  <div id="cartModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white rounded-xl p-6 w-96 shadow-lg relative">
      <button onclick="closeCart()" class="absolute top-2 right-2 text-red-500">✖</button>
      <h2 class="text-xl font-bold mb-4">🛒 Tu carrito</h2>
      <ul id="cartItems" class="space-y-2"></ul>
      <p class="mt-4 font-bold">Total: $<span id="cartTotal">0</span></p>
      <button onclick="payCart()" class="bg-green-600 text-white px-4 py-2 rounded mt-4 w-full">Pagar por WhatsApp</button>
    </div>
  </div>

  <footer class="bg-[#C69B4B] text-white text-center p-4 mt-12">
    <p>&copy; 2025 Queentana´s Tiendita Escolar - Hecho con amor</p>
  </footer>

<script>
  let cart = [];

  function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
  }

  function addBurrito() {
    let guisado = document.getElementById("burritoSelect").value;
    cart.push({ product: "Burrito (" + guisado + ")", price: 24 });
    updateCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }

  function updateCart() {
    let cartItems = document.getElementById("cartItems");
    let cartCount = document.getElementById("cartCount");
    let cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;
      cartItems.innerHTML += `
        <li class="flex justify-between items-center border-b pb-1">
          <span>${item.product} - $${item.price}</span>
          <button onclick="removeFromCart(${index})" class="text-red-500">Eliminar</button>
        </li>
      `;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total;
  }

  function openCart() {
    document.getElementById("cartModal").classList.remove("hidden");
  }

  function closeCart() {
    document.getElementById("cartModal").classList.add("hidden");
  }

  function payCart() {
    let message = "Hola! Quiero hacer el siguiente pedido:%0A";
    cart.forEach(item => {
      message += "- " + item.product + " ($" + item.price + ")%0A";
    });
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    message += "%0ATotal: $" + total;
    window.open("https://wa.me/5216142425718?text=" + message, "_blank");
  }

  document.getElementById("openCart").addEventListener("click", openCart);
</script>
</body>
</html>
