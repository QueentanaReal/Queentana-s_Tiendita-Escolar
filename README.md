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

      <ul id="cart-items" class="space-y-2 max-h-48 overflow-auto"></ul>

      <p class="font-bold mt-4">Total: $<span id="cart-total">0</span></p>

      <!-- Datos bancarios visibles -->
      <div class="mt-4 p-3 border rounded bg-gray-50">
        <p class="font-semibold mb-1">Transferencia bancaria (opcional):</p>
        <p class="text-sm">Banco: <span id="bank-name">BBVA</span></p>
        <p class="text-sm">Número de cuenta: <span id="bank-account">4152314309562018</span></p>
        <p class="text-sm">A nombre de: <span id="bank-nameholder">Tania Quintana</span></p>
        <p class="text-xs text-gray-600 mt-2">Después de transferir, envía el comprobante en la conversación de WhatsApp.</p>
      </div>

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
          <img src="img/mini-torta.jpg" alt="Mini torta" class="rounded-xl mb-2">
          <h4 class="font-bold">Mini torta de pan blanco</h4>
          <p class="text-sm">Mayonesa, Jamón, Salchicha, Tomate y Lechuga</p>
          <p class="font-semibold">$13</p>
          <button onclick="addToCart('Mini torta de pan blanco', 13)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <!-- Mollete -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/mollete.jpg" alt="Mollete" class="rounded-xl mb-2">
          <h4 class="font-bold">Mollete</h4>
          <p class="text-sm">Frijoles y Queso</p>
          <p class="font-semibold">$13</p>
          <button onclick="addToCart('Mollete', 13)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <!-- Burritos -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/burrito.jpg" alt="Burritos" class="rounded-xl mb-2">
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

      <!-- Bebidas -->
      <h3 class="text-xl font-semibold mt-8 mb-2">🥤 Bebidas</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/agua.jpg" alt="Agua" class="rounded-xl mb-2">
          <h4 class="font-bold">Agua</h4>
          <select id="agua-opcion" class="border rounded p-2 w-full mt-2">
            <option value="6">Agua Chica - $6</option>
            <option value="12">Agua Grande - $12</option>
          </select>
          <button onclick="addToCart('Agua - ' + document.getElementById('agua-opcion').options[document.getElementById('agua-opcion').selectedIndex].text, parseInt(document.getElementById('agua-opcion').value))" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/jugo.jpg" alt="Jugo Jumexito" class="rounded-xl mb-2">
          <h4 class="font-bold">Jugo Jumexito</h4>
          <p class="font-semibold">$12</p>
          <button onclick="addToCart('Jugo Jumexito', 12)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
      </div>

      <!-- Snacks -->
      <h3 class="text-xl font-semibold mt-8 mb-2">🍪 Snacks</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/galletas.jpg" alt="Galletas" class="rounded-xl mb-2">
          <h4 class="font-bold">Galletas en vara</h4>
          <p class="font-semibold">$5</p>
          <button onclick="addToCart('Galletas en vara', 5)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/cacahuates.jpg" alt="Cacahuates" class="rounded-xl mb-2">
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
          <img src="img/carlota.jpg" alt="Carlota" class="rounded-xl mb-2">
          <h4 class="font-bold">Carlota</h4>
          <p class="font-semibold">$30</p>
          <button onclick="addToCart('Carlota', 30)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
      </div>

      <!-- Fitness -->
      <h3 class="text-xl font-semibold mt-8 mb-2">💪 Fitness</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/gelatina.jpg" alt="Gelatina" class="rounded-xl mb-2">
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
          <img src="img/yogurt.jpg" alt="Yogurt" class="rounded-xl mb-2">
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
          <img src="img/fruta.jpg" alt="Fruta" class="rounded-xl mb-2">
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
        <img src="img/especial.jpg" alt="Especial del día" class="mx-auto rounded-xl mb-2">
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
          <img src="img/refresco.jpg" alt="Refresco" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Refresco</h4>
          <p class="font-semibold">$25</p>
          <button onclick="addToCart('Refresco', 25)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/cafe.jpg" alt="Café" class="mx-auto rounded-xl mb-2">
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
        <!-- Aquí tienes 10 lugares listos: copia y ajusta nombre/precio/imagen -->
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp1.jpg" alt="Producto 1" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 1</h4>
          <p class="font-semibold">$0</p>
          <button onclick="addToCart('Producto 1', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp2.jpg" alt="Producto 2" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 2</h4>
          <p class="font-semibold">$0</p>
          <button onclick="addToCart('Producto 2', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp3.jpg" alt="Producto 3" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 3</h4>
          <p class="font-semibold">$0</p>
          <button onclick="addToCart('Producto 3', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp4.jpg" alt="Producto 4" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 4</h4>
          <p class="font-semibold">$0</p>
          <button onclick="addToCart('Producto 4', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp5.jpg" alt="Producto 5" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 5</h4>
          <p class="font-semibold">$0</p>
          <button onclick="addToCart('Producto 5', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <!-- Otros 5 lugares -->
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp6.jpg" alt="Producto 6" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 6</h4>
          <p class="font-semibold">$0</p>
          <button onclick="addToCart('Producto 6', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp7.jpg" alt="Producto 7" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 7</h4>
          <p class="font-semibold">$0</p>
          <button onclick="addToCart('Producto 7', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp8.jpg" alt="Producto 8" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 8</h4>
          <p class="font-semibold">$0</p>
          <button onclick="addToCart('Producto 8', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp9.jpg" alt="Producto 9" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 9</h4>
          <p class="font-semibold">$0</p>
          <button onclick="addToCart('Producto 9', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp10.jpg" alt="Producto 10" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 10</h4>
          <p class="font-semibold">$0</p>
          <button onclick="addToCart('Producto 10', 0)" class="bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-[#C69B4B] text-white text-center p-4 mt-12">
    <p>&copy; 2025 Queentana´s Tiendita Escolar - Todos los derechos reservados</p>
  </footer>

  <script>
    // Datos de WhatsApp y banco
    const WHATSAPP_TO = "5216142425718"; // número destino (usa formato internacional sin signos)
    const BANK_NAME = "BBVA";
    const BANK_ACCOUNT = "4152314309562018";
    const BANK_HOLDER = "Tania Quintana";

    let cart = [];

    function toggleCart() {
      document.getElementById("cart-modal").classList.toggle("hidden");
      updateCartDisplay();
    }

    function addToCart(name, price) {
      cart.push({ name, price });
      updateCartDisplay();
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCartDisplay();
    }

    function updateCartDisplay() {
      const cartItemsEl = document.getElementById("cart-items");
      const cartCountEl = document.getElementById("cart-count");
      const cartTotalEl = document.getElementById("cart-total");

      // Actualiza el contador en el botón principal también
      document.getElementById("cart-count").textContent = cart.length;

      cartItemsEl.innerHTML = "";
      let total = 0;

      cart.forEach((item, index) => {
        total += item.price;
        cartItemsEl.innerHTML += `
          <li class="flex justify-between items-center border-b pb-1">
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromCart(${index})" class="text-red-500 ml-2">✖</button>
          </li>
        `;
      });

      cartTotalEl.textContent = total;
      // También actualiza contador visible arriba (si el modal está cerrado)
      document.getElementById("cart-count").textContent = cart.length;
    }

    function checkout() {
      if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }

      // Construir mensaje con pedido, total y datos bancarios
      let mensaje = "Hola! Quiero hacer mi pedido:%0A";
      cart.forEach(item => {
        mensaje += `- ${item.name}: $${item.price}%0A`;
      });

      const total = cart.reduce((s, i) => s + i.price, 0);
      mensaje += `%0ATotal: $${total}%0A%0A`;

      // Agregar instrucción de transferencia y datos bancarios
      mensaje += `Realizaré transferencia a la cuenta:%0ABanco: ${BANK_NAME}%0ANúmero: ${BANK_ACCOUNT}%0AA nombre de: ${BANK_HOLDER}%0A%0APor favor confirmar recepción y enviar instrucciones si aplica.%0A%0AEnvío comprobante en este chat.`;

      // Abre WhatsApp con el mensaje (encode)
      const url = `https://wa.me/${WHATSAPP_TO}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
    }

    // Inicializar display (por si)
    updateCartDisplay();
    // Mostrar datos de cuenta en el modal (por si se cambian dinámicamente)
    document.getElementById("bank-name").textContent = BANK_NAME;
    document.getElementById("bank-account").textContent = BANK_ACCOUNT;
    document.getElementById("bank-nameholder").textContent = BANK_HOLDER;
  </script>
</body>
</html>
