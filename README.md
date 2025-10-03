<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Queentana´s Tiendita Escolar</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#F9F6F0] text-[#1F1F1F]">

  <!-- Encabezado -->
  <header class="bg-[#C69B4B] text-white p-6 text-center shadow-lg">
    <img src="img/logo.png" alt="Logo Tiendita Escolar" class="mx-auto mb-4 w-28 h-auto">
    <h1 class="text-3xl font-bold">👑 Queentana´s Tiendita Escolar</h1>
    <p class="text-lg">Menú completo para todos los gustos</p>
  </header>

  <main class="p-6 space-y-12">

    <!-- SECCION 1: MENÚ DIARIO -->
    <section>
      <h2 class="text-2xl font-bold mb-4">Menú Diario</h2>

      <!-- Comida -->
      <h3 class="text-xl font-semibold mt-4">🍴 Comida</h3>
      <div class="grid md:grid-cols-3 gap-6 mt-4">
        
        <!-- Mini torta -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/torta.jpg" alt="Mini torta" class="rounded-xl mb-2">
          <h4 class="font-bold">Mini torta de pan blanco</h4>
          <p class="text-sm">Mayonesa, Jamón, Salchicha, Tomate y Lechuga</p>
          <p class="font-semibold mt-2">$13</p>
          <button onclick="addToCart('Mini torta de pan blanco', 13)" class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded">Agregar</button>
        </div>

        <!-- Mollete -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/mollete.jpg" alt="Mollete" class="rounded-xl mb-2">
          <h4 class="font-bold">Mollete</h4>
          <p class="text-sm">Frijoles y Queso</p>
          <p class="font-semibold mt-2">$13</p>
          <button onclick="addToCart('Mollete', 13)" class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded">Agregar</button>
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
          <button onclick="addBurrito()" class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded">Agregar</button>
        </div>
      </div>

      <!-- Bebidas -->
      <h3 class="text-xl font-semibold mt-6">🥤 Bebidas</h3>
      <div class="grid md:grid-cols-3 gap-6 mt-4">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/agua.jpg" alt="Agua" class="rounded-xl mb-2">
          <h4 class="font-bold">Agua</h4>
          <select id="aguaSelect" class="border rounded p-2 w-full mt-2">
            <option>Chica - $6</option>
            <option>Grande - $12</option>
          </select>
          <button onclick="addAgua()" class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/jugo.jpg" alt="Jugo" class="rounded-xl mb-2">
          <h4 class="font-bold">Jugo Jumexito</h4>
          <p class="font-semibold mt-2">$12</p>
          <button onclick="addToCart('Jugo Jumexito', 12)" class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded">Agregar</button>
        </div>
      </div>

      <!-- Snacks -->
      <h3 class="text-xl font-semibold mt-6">🍪 Snacks</h3>
      <div class="grid md:grid-cols-3 gap-6 mt-4">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/galleta.jpg" alt="Galletas" class="rounded-xl mb-2">
          <h4 class="font-bold">Galletas en vara</h4>
          <p class="font-semibold mt-2">$5</p>
          <button onclick="addToCart('Galletas en vara', 5)" class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/cacahuates.jpg" alt="Cacahuates" class="rounded-xl mb-2">
          <h4 class="font-bold">Cacahuates</h4>
          <select id="cacaSelect" class="border rounded p-2 w-full mt-2">
            <option>Garampiñado - $10</option>
            <option>Jalapeño - $10</option>
            <option>Japonés - $10</option>
            <option>Enchilado - $5</option>
            <option>Natural - $5</option>
            <option>Energético - $10</option>
          </select>
          <button onclick="addCacahuates()" class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded">Agregar</button>
        </div>
      </div>

      <!-- Fitness -->
      <h3 class="text-xl font-semibold mt-6">💪 Fitness</h3>
      <div class="grid md:grid-cols-3 gap-6 mt-4">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/gelatina.jpg" alt="Gelatina" class="rounded-xl mb-2">
          <h4 class="font-bold">Gelatina</h4>
          <select id="gelatinaSelect" class="border rounded p-2 w-full mt-2">
            <option>Fresa</option>
            <option>Mango</option>
            <option>Durazno</option>
            <option>Limón</option>
            <option>Frambuesa</option>
            <option>Piña</option>
          </select>
          <p class="font-semibold mt-2">$12</p>
          <button onclick="addToCart('Gelatina', 12)" class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded">Agregar</button>
        </div>
      </div>
    </section>

    <!-- SECCION 2: ESPECIAL DEL DÍA -->
    <section>
      <h2 class="text-2xl font-bold mb-4">Especial del Día</h2>
      <div class="border rounded-xl p-4 bg-white shadow">
        <img src="img/especial.jpg" alt="Especial" class="rounded-xl mb-2">
        <h4 class="font-bold">Platillo especial</h4>
        <p class="text-sm">Varía todos los días</p>
        <p class="font-semibold mt-2">$$$</p>
      </div>
    </section>

    <!-- SECCION 3: MAESTROS -->
    <section>
      <h2 class="text-2xl font-bold mb-4">Exclusivo para maestros(as)</h2>
      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/refresco.jpg" alt="Refresco" class="rounded-xl mb-2">
          <h4 class="font-bold">Refresco</h4>
          <p class="font-semibold mt-2">$25</p>
          <button onclick="addToCart('Refresco', 25)" class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/cafe.jpg" alt="Café" class="rounded-xl mb-2">
          <h4 class="font-bold">Café</h4>
          <p class="font-semibold mt-2">$20</p>
          <button onclick="addToCart('Café', 20)" class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded">Agregar</button>
        </div>
      </div>
    </section>

    <!-- SECCION 4: TEMPORADA -->
    <section>
      <h2 class="text-2xl font-bold mb-4">Temporada</h2>
      <div class="grid md:grid-cols-5 gap-6 mt-4">
        <!-- 10 espacios de productos -->
         <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp2.jpg" alt="Producto 1" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 1</h4>
          <p class="font-semibold">0</p>
      </div>
    </section>

  </main>

  <!-- CARRITO -->
  <aside class="fixed bottom-4 right-4 bg-white border rounded-xl shadow-lg p-4 w-80">
    <h3 class="font-bold text-lg mb-2">🛒 Carrito</h3>
    <ul id="cartItems" class="space-y-2"></ul>
    <p class="mt-2 font-bold">Total: $<span id="cartTotal">0</span></p>
    <button onclick="sendWhatsApp()" class="mt-3 bg-green-600 text-white px-3 py-2 rounded w-full">Finalizar pedido por WhatsApp</button>
  </aside>

  <!-- FOOTER -->
  <footer class="bg-[#C69B4B] text-white text-center p-4 mt-12">
    <p>&copy; 2025 Queentana´s Tiendita Escolar - Hecho con amor</p>
  </footer>

  <!-- SCRIPT -->
  <script>
    let cart = [];

    function addToCart(product, price) {
      cart.push({ product, price });
      renderCart();
    }

    function addBurrito() {
      const guisado = document.getElementById('burritoSelect').value;
      addToCart('Burrito de ' + guisado, 24);
    }

    function addAgua() {
      const agua = document.getElementById('aguaSelect').value;
      if (agua.includes('Chica')) addToCart('Agua Chica', 6);
      else addToCart('Agua Grande', 12);
    }

    function addCacahuates() {
      const cac = document.getElementById('cacaSelect').value;
      if (cac.includes('$5')) addToCart('Cacahuates ' + cac.split(' - ')[0], 5);
      else addToCart('Cacahuates ' + cac.split(' - ')[0], 10);
    }

    function renderCart() {
      const cartItems = document.getElementById('cartItems');
      cartItems.innerHTML = '';
      let total = 0;
      cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `<li>${item.product} - $${item.price} <button onclick="removeItem(${index})" class="text-red-600">✖</button></li>`;
      });
      document.getElementById('cartTotal').innerText = total;
    }

    function removeItem(index) {
      cart.splice(index, 1);
      renderCart();
    }

    function sendWhatsApp() {
      let message = "¡Hola! Quiero hacer un pedido:%0A";
      let total = 0;
      cart.forEach(item => {
        message += "- " + item.product + " $" + item.price + "%0A";
        total += item.price;
      });
      message += "%0ATotal: $" + total;
      message += "%0A%0APor favor, realiza tu transferencia a:%0ABBVA - 4152314309562018%0AA nombre de: Tania Quintana";
      message += "%0A%0A⚠️ IMPORTANTE: Adjunta tu comprobante de pago antes de enviar este mensaje.";

      window.open("https://wa.me/526143515170?text=" + message, "_blank");
    }
  </script>

</body>
</html>
