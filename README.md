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
  <header class="bg-[#C69B4B] text-white p-6 text-center shadow-lg">
    <h1 class="text-3xl font-bold">👑 Queentana´s Tiendita Escolar</h1>
    <p class="text-lg">Menú completo para todos los gustos</p>
  </header>

  <!-- Botón Carrito -->
  <div class="fixed top-4 right-4 z-50">
    <button onclick="toggleCart()" class="bg-[#C69B4B] text-white px-4 py-2 rounded-lg shadow">
      🛒 Carrito (<span id="cart-count">0</span>)
    </button>
  </div>

  <!-- Carrito Modal -->
  <div id="cart-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50">
    <div class="bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-20 p-6 relative">
      <button onclick="toggleCart()" class="absolute top-2 right-2 text-red-500">✖</button>
      <h2 class="text-2xl font-bold mb-4">🛒 Tu carrito</h2>
      <ul id="cart-items" class="space-y-2"></ul>
      <p class="font-bold mt-4">Total: $<span id="cart-total">0</span></p>
      <button onclick="checkout()" class="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 w-full">Pagar por WhatsApp</button>
    </div>
  </div>

  <main class="p-6 space-y-12">
    <!-- SECCIÓN 1: Menú Diario -->
    <section>
      <h2 class="text-2xl font-bold mb-4">📋 Menú Diario</h2>
      
      <!-- Categoría: Comida -->
      <h3 class="text-xl font-semibold mb-2">🍽️ Comida</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Mini torta -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/mini-torta.jpg" class="rounded-xl mb-2">
          <h4 class="font-bold">Mini torta</h4>
          <p class="text-sm">Mayonesa, Jamón, Salchicha, Tomate y Lechuga</p>
          <p class="font-semibold">$13</p>
          <button onclick="addToCart('Mini torta', 13)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <!-- Mollete -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/mollete.jpg" class="rounded-xl mb-2">
          <h4 class="font-bold">Mollete</h4>
          <p class="text-sm">Frijoles y Queso</p>
          <p class="font-semibold">$13</p>
          <button onclick="addToCart('Mollete', 13)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <!-- Burritos -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/burrito.jpg" class="rounded-xl mb-2">
          <h4 class="font-bold">Burritos</h4>
          <p class="text-sm">Elige tu guisado favorito</p>
          <select id="burrito-opcion" class="border rounded p-2 w-full mt-2">
            <option>Papas con chorizo</option>
            <option>Salsa verde</option>
            <option>Deshebrada</option>
            <option>Wini con chipotle</option>
            <option>Bistec a la mexicana</option>
            <option>Discada</option>
          </select>
          <p class="font-semibold mt-2">$24</p>
          <button onclick="addToCart('Burrito - ' + document.getElementById('burrito-opcion').value, 24)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
      </div>

      <!-- Categoría: Bebidas -->
      <h3 class="text-xl font-semibold mt-8 mb-2">🥤 Bebidas</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/agua.jpg" class="rounded-xl mb-2">
          <h4 class="font-bold">Agua</h4>
          <select id="agua-opcion" class="border rounded p-2 w-full mt-2">
            <option value="6">Agua Chica - $6</option>
            <option value="12">Agua Grande - $12</option>
          </select>
          <button onclick="addToCart('Agua', parseInt(document.getElementById('agua-opcion').value))" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/jugo.jpg" class="rounded-xl mb-2">
          <h4 class="font-bold">Jugo Jumexito</h4>
          <p class="font-semibold">$12</p>
          <button onclick="addToCart('Jugo Jumexito', 12)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
      </div>

      <!-- Snacks -->
      <h3 class="text-xl font-semibold mt-8 mb-2">🍪 Snacks</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/galletas.jpg" class="rounded-xl mb-2">
          <h4 class="font-bold">Galletas en vara</h4>
          <p class="font-semibold">$5</p>
          <button onclick="addToCart('Galletas en vara', 5)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/cacahuates.jpg" class="rounded-xl mb-2">
          <h4 class="font-bold">Cacahuates</h4>
          <select id="cacahuate-opcion" class="border rounded p-2 w-full mt-2">
            <option value="10">Garampiñado - $10</option>
            <option value="10">Jalapeño - $10</option>
            <option value="10">Japonés - $10</option>
            <option value="5">Enchilado - $5</option>
            <option value="5">Natural - $5</option>
            <option value="10">Energético - $10</option>
          </select>
          <button onclick="addToCart('Cacahuates - ' + document.getElementById('cacahuate-opcion').options[document.getElementById('cacahuate-opcion').selectedIndex].text, parseInt(document.getElementById('cacahuate-opcion').value))" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/carlota.jpg" class="rounded-xl mb-2">
          <h4 class="font-bold">Carlota</h4>
          <p class="font-semibold">$30</p>
          <button onclick="addToCart('Carlota', 30)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
      </div>

      <!-- Fitness -->
      <h3 class="text-xl font-semibold mt-8 mb-2">💪 Fitness</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/gelatina.jpg" class="rounded-xl mb-2">
          <h4 class="font-bold">Gelatina</h4>
          <select id="gelatina-opcion" class="border rounded p-2 w-full mt-2">
            <option>Fresa</option>
            <option>Mango</option>
            <option>Durazno</option>
            <option>Limón</option>
            <option>Frambuesa</option>
            <option>Piña</option>
          </select>
          <p class="font-semibold">$12</p>
          <button onclick="addToCart('Gelatina - ' + document.getElementById('gelatina-opcion').value, 12)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/yogurt.jpg" class="rounded-xl mb-2">
          <h4 class="font-bold">Yogurt</h4>
          <select id="yogurt-opcion" class="border rounded p-2 w-full mt-2">
            <option>Solo</option>
            <option>Nuez</option>
            <option>Cacahuate</option>
            <option>Chispas Payaso</option>
            <option>Chispas de Chocolate</option>
            <option>Miel de abeja</option>
          </select>
          <p class="font-semibold">$18</p>
          <button onclick="addToCart('Yogurt - ' + document.getElementById('yogurt-opcion').value, 18)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/fruta.jpg" class="rounded-xl mb-2">
          <h4 class="font-bold">Fruta</h4>
          <select id="fruta-opcion" class="border rounded p-2 w-full mt-2">
            <option>Sola</option>
            <option>Tico</option>
            <option>Chile y limón</option>
          </select>
          <p class="font-semibold">$25</p>
          <button onclick="addToCart('Fruta - ' + document.getElementById('fruta-opcion').value, 25)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 2: Especial del Día -->
    <section>
      <h2 class="text-2xl font-bold mb-4">⭐ Especial del Día</h2>
      <div class="border rounded-xl p-6 bg-white shadow text-center">
        <img src="img/especial.jpg" class="mx-auto rounded-xl mb-2">
        <h4 class="font-bold">Nombre del Platillo</h4>
        <p class="text-sm">Descripción breve</p>
        <p class="font-semibold">$$$</p>
        <button onclick="addToCart('Especial del Día', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
      </div>
    </section>

    <!-- SECCIÓN 3: Exclusivo para maestros -->
    <section>
      <h2 class="text-2xl font-bold mb-4">🎓 Exclusivo para maestros(as)</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/refresco.jpg" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Refresco</h4>
          <p class="font-semibold">$25</p>
          <button onclick="addToCart('Refresco', 25)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/cafe.jpg" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Café</h4>
          <p class="font-semibold">$20</p>
          <button onclick="addToCart('Café', 20)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 4: Temporada -->
    <section>
      <h2 class="text-2xl font-bold mb-4">🎉 Temporada</h2>
      <div class="grid md:grid-cols-5 gap-6">
        <!-- 10 lugares -->
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp1.jpg" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 1</h4>
          <p class="font-semibold">$0</p>
          <button onclick="addToCart('Producto 1', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp2.jpg" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 2</h4>
          <p class="font-semibold">$0</p>
          <button onclick="addToCart('Producto 2', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <!-- repite hasta Producto 10 -->
      </div>
    </section>
  </main>

  <footer class="bg-[#C69B4B] text-white text-center p-4 mt-12">
    <p>&copy; 2025 Queentana´s Tiendita Escolar - Hecho con amor</p>
  </footer>

  <script>
    let cart = [];

    function toggleCart() {
      document.getElementById("cart-modal").classList.toggle("hidden");
    }

    function addToCart(name, price) {
      cart.push({ name, price });
      updateCart();
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCart();
    }

    function updateCart() {
      const cartItems = document.getElementById("cart-items");
      const cartCount = document.getElementById("cart-count");
      const cartTotal = document.getElementById("cart-total");
      cartItems.innerHTML = "";
      let total = 0;

      cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
          <li class="flex justify-between items-center">
            ${item.name} - $${item.price}
            <button onclick="removeFromCart(${index})" class="text-red-500 ml-2">✖</button>
          </li>
        `;
      });

      cartCount.textContent = cart.length;
      cartTotal.textContent = total;
    }

    function checkout() {
      if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }
      let message = "Hola! Quiero hacer mi pedido:\n";
      cart.forEach(item => {
        message += `- ${item.name}: $${item.price}\n`;
      });
      message += `\nTotal: $${cart.reduce((sum, item) => sum + item.price, 0)}`;

      window.open(`https://wa.me/526143515170?text=${encodeURIComponent(message)}`, "_blank");
    }
  </script>
</body>
</html>
