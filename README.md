<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
    <button id="cartBtn" class="absolute top-6 right-6 bg-white text-[#C69B4B] px-4 py-2 rounded-lg shadow font-bold">
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
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Mini torta de pan blanco" data-price="13">Agregar</button>
        </div>

        <!-- Mollete -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/mollete.jpg" alt="Mollete" class="rounded-xl mb-2">
          <h4 class="font-bold">Mollete</h4>
          <p class="text-sm">Frijoles y Queso</p>
          <p class="font-semibold">$13</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Mollete" data-price="13">Agregar</button>
        </div>

        <!-- Burritos -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/burrito.jpg" alt="Burritos" class="rounded-xl mb-2">
          <h4 class="font-bold">Burritos (Guisado Variado)</h4>
          <p class="text-sm">Elige tu guisado favorito</p>
          <select id="burritoSelect" class="border rounded p-2 w-full mt-2">
            <option value="Papas con chorizo">Papas con chorizo</option>
            <option value="Salsa verde">Salsa verde</option>
            <option value="Deshebrada">Deshebrada</option>
            <option value="Wini con chipotle">Wini con chipotle</option>
            <option value="Bistec a la mexicana">Bistec a la mexicana</option>
            <option value="Discada">Discada</option>
          </select>
          <p class="font-semibold mt-2">$24</p>
          <button id="addBurritoBtn" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-price="24">Agregar</button>
        </div>
      </div>

      <!-- Categoría: Bebidas -->
      <h3 class="text-xl font-semibold mt-8 mb-2">🥤 Bebidas</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Agua -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/agua.jpg" alt="Agua" class="rounded-xl mb-2">
          <h4 class="font-bold">Agua</h4>
          <select id="aguaSelect" class="border rounded p-2 w-full mt-2">
            <option value="Agua Chica - 6">Agua Chica - 6</option>
            <option value="Agua Grande - 12">Agua Grande - 12</option>
          </select>
          <button id="addAguaBtn" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <!-- Jugo -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/jugo.jpg" alt="Jugo Jumexito" class="rounded-xl mb-2">
          <h4 class="font-bold">Jugo Jumexito</h4>
          <p class="font-semibold">$12</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Jugo Jumexito" data-price="12">Agregar</button>
        </div>
      </div>

      <!-- Categoría: Snacks -->
      <h3 class="text-xl font-semibold mt-8 mb-2">🍪 Snacks</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/galletas.jpg" alt="Galletas" class="rounded-xl mb-2">
          <h4 class="font-bold">Galletas en vara</h4>
          <p class="font-semibold">$5</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Galletas en vara" data-price="5">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/cacahuates.jpg" alt="Cacahuates" class="rounded-xl mb-2">
          <h4 class="font-bold">Cacahuates</h4>
          <select id="cacahuatesSelect" class="border rounded p-2 w-full mt-2">
            <option value="Garampiñado - 10">Garampiñado - 10</option>
            <option value="Jalapeño - 10">Jalapeño - 10</option>
            <option value="Japonés - 10">Japonés - 10</option>
            <option value="Enchilado - 5">Enchilado - 5</option>
            <option value="Natural - 5">Natural - 5</option>
            <option value="Energético - 10">Energético - 10</option>
          </select>
          <button id="addCacahuatesBtn" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/carlota.jpg" alt="Carlota" class="rounded-xl mb-2">
          <h4 class="font-bold">Carlota</h4>
          <p class="font-semibold">$30</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Carlota" data-price="30">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/tamarindo.jpg" alt="Cuchara de tamarindo" class="rounded-xl mb-2">
          <h4 class="font-bold">Cuchara de tamarindo</h4>
          <p class="font-semibold">$12</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Cuchara de tamarindo" data-price="12">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/papas.jpg" alt="Papas Caseras Naturales" class="rounded-xl mb-2">
          <h4 class="font-bold">Papas Caseras Naturales</h4>
          <p class="font-semibold">$32</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Papas Caseras Naturales" data-price="32">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/palomitas.jpg" alt="Palomitas Naturales" class="rounded-xl mb-2">
          <h4 class="font-bold">Palomitas Naturales</h4>
          <p class="font-semibold">$10</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Palomitas Naturales" data-price="10">Agregar</button>
        </div>
      </div>

      <!-- Categoría: Fitness -->
      <h3 class="text-xl font-semibold mt-8 mb-2">💪 Fitness</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/gelatina.jpg" alt="Gelatina" class="rounded-xl mb-2">
          <h4 class="font-bold">Gelatina</h4>
          <select id="gelatinaSelect" class="border rounded p-2 w-full mt-2">
            <option value="Fresa">Fresa</option>
            <option value="Mango">Mango</option>
            <option value="Durazno">Durazno</option>
            <option value="Limón">Limón</option>
            <option value="Frambuesa">Frambuesa</option>
            <option value="Piña">Piña</option>
          </select>
          <p class="font-semibold">$12</p>
          <button id="addGelatinaBtn" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/yogurt.jpg" alt="Yogurt" class="rounded-xl mb-2">
          <h4 class="font-bold">Yogurt</h4>
          <select id="yogurtSelect" class="border rounded p-2 w-full mt-2">
            <option value="Solo">Solo</option>
            <option value="Nuez">Nuez</option>
            <option value="Cacahuate">Cacahuate</option>
            <option value="Chispas Payaso">Chispas Payaso</option>
            <option value="Chispas de Chocolate">Chispas de Chocolate</option>
            <option value="Miel de abeja">Miel de abeja</option>
          </select>
          <p class="font-semibold">$18</p>
          <button id="addYogurtBtn" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/fruta.jpg" alt="Fruta" class="rounded-xl mb-2">
          <h4 class="font-bold">Fruta</h4>
          <select id="frutaSelect" class="border rounded p-2 w-full mt-2">
            <option value="Sola">Sola</option>
            <option value="Tico">Tico</option>
            <option value="Chile y limón">Chile y limón</option>
          </select>
          <p class="font-semibold">$25</p>
          <button id="addFrutaBtn" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 2: Especial del Día (editable) -->
    <section>
      <h2 class="text-2xl font-bold mb-4">⭐ Especial del Día</h2>
      <div class="border rounded-xl p-6 bg-white shadow text-center space-y-3">
        <img src="img/especial.jpg" alt="Especial del día" class="mx-auto rounded-xl mb-2 h-36 object-cover">
        <div class="flex gap-2 justify-center">
          <input id="especialName" class="border rounded p-2 w-2/3" placeholder="Nombre del platillo (ej. Torta especial)"/>
          <input id="especialPrice" type="number" class="border rounded p-2 w-1/3" placeholder="Precio"/>
        </div>
        <p class="text-sm">Descripción breve</p>
        <button id="addEspecialBtn" class="bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar Especial al carrito</button>
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
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Refresco (Maestros)" data-price="25">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/cafe.jpg" alt="Café" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Café</h4>
          <p class="font-semibold">$20</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Café (Maestros)" data-price="20">Agregar</button>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 4: Temporada (10 lugares editables) -->
    <section>
      <h2 class="text-2xl font-bold mb-4">🎉 Temporada</h2>
      <div class="grid md:grid-cols-5 gap-4">
        <!-- Generamos 10 tarjetas editables -->
        <!-- Cada tarjeta: input nombre, input precio, boton agregar -->
        <script>
          // placeholder - se renderizará al final del body para mantener html limpio
        </script>
        <!-- We'll inject season cards with JS below -->
        <div id="seasonContainer" class="contents"></div>
      </div>
    </section>

  </main>

  <!-- Modal Carrito -->
  <div id="cartModal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50">
    <div class="bg-white w-96 p-6 rounded-xl shadow-lg">
      <h2 class="text-xl font-bold mb-4">🛒 Carrito de Compras</h2>
      <ul id="cartItems" class="mb-4 space-y-2 max-h-64 overflow-auto"></ul>
      <p class="font-bold">Total: $<span id="cartTotal">0.00</span></p>
      <div class="flex justify-between mt-4">
        <button id="closeCart" class="bg-gray-400 text-white px-4 py-2 rounded">Cerrar</button>
        <button id="checkout" class="bg-green-600 text-white px-4 py-2 rounded">Pagar por WhatsApp</button>
      </div>
    </div>
  </div>

  <footer class="bg-[#C69B4B] text-white text-center p-4 mt-12">
    <p>&copy; 2025 Queentana´s Tiendita Escolar - Todos los derechos reservados</p>
  </footer>

  <script>
    /********** Inicialización dinámica de tarjetas de Temporada (10) **********/
    const seasonContainer = document.getElementById('seasonContainer');
    for (let i = 1; i <= 10; i++) {
      const card = document.createElement('div');
      card.className = "border rounded-xl p-4 bg-white shadow text-center";
      card.innerHTML = `
        <img src="img/temp${i}.jpg" alt="Temporada ${i}" class="mx-auto rounded-xl mb-2 h-24 object-cover">
        <input id="tempName${i}" class="border rounded p-2 w-full mb-2" placeholder="Nombre (ej. Hotcake)"/>
        <input id="tempPrice${i}" type="number" class="border rounded p-2 w-full mb-2" placeholder="Precio (ej. 20)"/>
        <button data-index="${i}" class="addTemporada bg-[#C69B4B] text-white px-3 py-1 rounded w-full">Agregar</button>
      `;
      seasonContainer.appendChild(card);
    }

    /********** Variables DOM **********/
    const cartBtn = document.getElementById("cartBtn");
    const cartModal = document.getElementById("cartModal");
    const closeCart = document.getElementById("closeCart");
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const checkout = document.getElementById("checkout");

    let cart = [];

    /********** Control abrir/cerrar carrito **********/
    cartBtn.addEventListener("click", () => cartModal.classList.remove("hidden"));
    closeCart.addEventListener("click", () => cartModal.classList.add("hidden"));

    /********** Funciones del carrito **********/
    function addToCart(name, price) {
      const parsedPrice = Number(price) || 0;
      cart.push({ name, price: parsedPrice });
      renderCart();
    }

    function renderCart() {
      cartItems.innerHTML = "";
      let total = 0;
      cart.forEach((item, index) => {
        total += Number(item.price);
        const li = document.createElement("li");
        li.className = "flex justify-between items-center border-b pb-1";
        li.innerHTML = `<span class="text-sm">${item.name} - $${Number(item.price).toFixed(2)}</span>
                        <button onclick="removeFromCart(${index})" class="text-red-600 font-bold">Eliminar</button>`;
        cartItems.appendChild(li);
      });
      cartTotal.textContent = total.toFixed(2);
      cartCount.textContent = cart.length;
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      renderCart();
    }
    window.removeFromCart = removeFromCart; // para que el onclick inline funcione

    /********** Botones "Agregar" simples (data-name, data-price) **********/
    document.querySelectorAll(".addToCart").forEach(btn => {
      btn.addEventListener("click", () => addToCart(btn.dataset.name, btn.dataset.price));
    });

    /********** Añadir Burrito (selección) **********/
    document.getElementById('addBurritoBtn').addEventListener('click', function() {
      const option = document.getElementById('burritoSelect').value;
      const price = this.dataset.price || 24;
      addToCart(`Burrito (${option})`, price);
    });

    /********** Añadir Agua (selección con precio) **********/
    document.getElementById('addAguaBtn').addEventListener('click', () => {
      const val = document.getElementById('aguaSelect').value; // formato "Nombre - Precio"
      const parts = val.split(' - ');
      const name = parts[0].trim();
      const price = Number(parts[1]) || 0;
      addToCart(name, price);
    });

    /********** Añadir Cacahuates (select con precios mixtos) **********/
    document.getElementById('addCacahuatesBtn').addEventListener('click', () => {
      const val = document.getElementById('cacahuatesSelect').value; // "Nombre - Precio"
      const parts = val.split(' - ');
      const name = parts[0].trim();
      const price = Number(parts[1]) || 0;
      addToCart(`Cacahuates (${name})`, price);
    });

    /********** Gelatina / Yogurt / Fruta (se toman opciones pero precio fijo) **********/
    document.getElementById('addGelatinaBtn').addEventListener('click', () => {
      const sabor = document.getElementById('gelatinaSelect').value;
      addToCart(`Gelatina (${sabor})`, 12);
    });

    document.getElementById('addYogurtBtn').addEventListener('click', () => {
      const topping = document.getElementById('yogurtSelect').value;
      addToCart(`Yogurt (${topping})`, 18);
    });

    document.getElementById('addFrutaBtn').addEventListener('click', () => {
      const opcion = document.getElementById('frutaSelect').value;
      addToCart(`Fruta (${opcion})`, 25);
    });

    /********** Especial del Día (inputs editables) **********/
    document.getElementById('addEspecialBtn').addEventListener('click', () => {
      const name = document.getElementById('especialName').value.trim() || "Especial del día";
      const price = Number(document.getElementById('especialPrice').value) || 0;
      addToCart(name, price);
      // opcional: limpiar campos
      // document.getElementById('especialName').value = '';
      // document.getElementById('especialPrice').value = '';
    });

    /********** Temporada (10 tarjetas editables) **********/
    document.querySelectorAll('.addTemporada').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.target.dataset.index;
        const name = document.getElementById(`tempName${idx}`).value.trim() || `Producto Temporada ${idx}`;
        const price = Number(document.getElementById(`tempPrice${idx}`).value) || 0;
        addToCart(name, price);
      });
    });

    /********** Checkout por WhatsApp (incluye cuenta y solicitud de comprobante) **********/
    checkout.addEventListener('click', () => {
      if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }

      let message = "¡Hola! Quiero hacer un pedido:\n";
      cart.forEach(item => {
        message += `- ${item.name} - $${Number(item.price).toFixed(2)}\n`;
      });
      message += `\nTotal: $${cartTotal.textContent}\n\n`;
      message += "📌 Realiza tu pago por transferencia a:\nBBVA 4152314309562018\nTitular: Tania Quintana\n\n";
      message += "⚠️ Importante: Por favor adjunta en este chat la captura de tu comprobante de pago.";

      const phone = "5216143515170"; // formato wa.me (MX)
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
    });

    /********** Abrir carrito también al agregar (opcional, comentado) **********/
    // Si quieres que el carrito se abra automáticamente cada vez que se agrega, descomenta:
    // function openCart() { cartModal.classList.remove('hidden'); }
    // En addToCart() puedes llamar openCart();

  </script>
</body>
</html>
