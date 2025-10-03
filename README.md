<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Queentana´s Tiendita Escolar</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#F9F6F0] text-[#1F1F1F]">

  <!-- LOGO -->
  <div class="p-4 text-center">
    <img src="LOGO MAMA.png" alt="Logo Queentana´s Tiendita Escolar" class="mx-auto h-24">
  </div>

  <!-- HEADER -->
  <header class="bg-[#C69B4B] text-white p-6 text-center shadow-lg relative">
    <h1 class="text-3xl font-bold">👑 Queentana´s Tiendita Escolar</h1>
    <p class="text-lg">Menú completo para todos los gustos</p>

    <!-- Botón carrito pequeño en header -->
    <button id="openCartBtn" class="absolute right-6 top-6 bg-white text-[#C69B4B] px-4 py-2 rounded-xl shadow" onclick="toggleCartModal()">
      🛒 Carrito (<span id="cart-count">0</span>)
    </button>
  </header>

  <!-- MAIN -->
  <main class="p-6 space-y-12">

    <!-- SECCIÓN 1: MENÚ DIARIO -->
    <section>
      <h2 class="text-2xl font-bold mb-4">📋 Menú Diario</h2>

      <!-- Comida -->
      <h3 class="text-xl font-semibold mb-2">🍽️ Comida</h3>
      <div class="grid md:grid-cols-3 gap-6">

        <!-- Mini torta -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/mini-torta.jpg" alt="Mini torta" class="rounded-xl mb-2">
          <h4 class="font-bold">Mini torta de pan blanco</h4>
          <p class="text-sm">Mayonesa, Jamón, Salchicha, Tomate y Lechuga</p>
          <p class="font-semibold">$13</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Mini torta de pan blanco',13)">Agregar</button>
        </div>

        <!-- Mollete -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/mollete.jpg" alt="Mollete" class="rounded-xl mb-2">
          <h4 class="font-bold">Mollete</h4>
          <p class="text-sm">Frijoles y Queso</p>
          <p class="font-semibold">$13</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Mollete',13)">Agregar</button>
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
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addBurrito()">Agregar</button>
        </div>
      </div>

      <!-- Bebidas -->
      <h3 class="text-xl font-semibold mt-8 mb-2">🥤 Bebidas</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Agua -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/agua.jpg" alt="Agua" class="rounded-xl mb-2">
          <h4 class="font-bold">Agua</h4>
          <select id="aguaSelect" class="border rounded p-2 w-full mt-2">
            <option value="6">Agua Chica - $6</option>
            <option value="12">Agua Grande - $12</option>
          </select>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addAgua()">Agregar</button>
        </div>

        <!-- Jugo -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/jugo.jpg" alt="Jugo Jumexito" class="rounded-xl mb-2">
          <h4 class="font-bold">Jugo Jumexito</h4>
          <p class="font-semibold">$12</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Jugo Jumexito',12)">Agregar</button>
        </div>
      </div>

      <!-- Snacks -->
      <h3 class="text-xl font-semibold mt-8 mb-2">🍪 Snacks</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Galletas -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/galletas.jpg" alt="Galletas en vara" class="rounded-xl mb-2">
          <h4 class="font-bold">Galletas en vara</h4>
          <p class="font-semibold">$5</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Galletas en vara',5)">Agregar</button>
        </div>

        <!-- Cacahuates -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/cacahuates.jpg" alt="Cacahuates" class="rounded-xl mb-2">
          <h4 class="font-bold">Cacahuates</h4>
          <select id="cacahuateSelect" class="border rounded p-2 w-full mt-2">
            <option value="10">Garampiñado - $10</option>
            <option value="10">Jalapeño - $10</option>
            <option value="10">Japonés - $10</option>
            <option value="5">Enchilado - $5</option>
            <option value="5">Natural - $5</option>
            <option value="10">Energético - $10</option>
          </select>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addCacahuates()">Agregar</button>
        </div>

        <!-- Carlota -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/carlota.jpg" alt="Carlota" class="rounded-xl mb-2">
          <h4 class="font-bold">Carlota</h4>
          <p class="font-semibold">$30</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Carlota',30)">Agregar</button>
        </div>
      </div>

      <!-- Fitness -->
      <h3 class="text-xl font-semibold mt-8 mb-2">💪 Fitness</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Gelatina -->
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
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addGelatina()">Agregar</button>
        </div>

        <!-- Yogurt -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/yogurt.jpg" alt="Yogurt" class="rounded-xl mb-2">
          <h4 class="font-bold">Yogurt</h4>
          <select id="yogurtSelect" class="border rounded p-2 w-full mt-2">
            <option>Solo</option>
            <option>Nuez</option>
            <option>Cacahuate</option>
            <option>Chispas Payaso</option>
            <option>Chispas de Chocolate</option>
            <option>Miel de abeja</option>
          </select>
          <p class="font-semibold mt-2">$18</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addYogurt()">Agregar</button>
        </div>

        <!-- Fruta -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/fruta.jpg" alt="Fruta" class="rounded-xl mb-2">
          <h4 class="font-bold">Fruta</h4>
          <select id="frutaSelect" class="border rounded p-2 w-full mt-2">
            <option>Sola</option>
            <option>Tico</option>
            <option>Chile y limón</option>
          </select>
          <p class="font-semibold mt-2">$25</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addFruta()">Agregar</button>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 2: ESPECIAL DEL DÍA -->
    <section>
      <h2 class="text-2xl font-bold mb-4">⭐ Especial del Día</h2>
      <div class="border rounded-xl p-6 bg-white shadow text-center">
        <img src="img/especial.jpg" alt="Especial del día" class="mx-auto rounded-xl mb-2">
        <h4 class="font-bold">Nombre del Platillo</h4>
        <p class="text-sm">Descripción breve</p>
        <p class="font-semibold">$$$</p>
        <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Especial del Día',0)">Agregar</button>
      </div>
    </section>

    <!-- SECCIÓN 3: EXCLUSIVO PARA MAESTROS(AS) -->
    <section>
      <h2 class="text-2xl font-bold mb-4">🎓 Exclusivo para maestros(as)</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/refresco.jpg" alt="Refresco" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Refresco</h4>
          <p class="font-semibold">$25</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Refresco',25)">Agregar</button>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/cafe.jpg" alt="Café" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Café</h4>
          <p class="font-semibold">$20</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Café',20)">Agregar</button>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 4: TEMPORADA -->
    <section>
      <h2 class="text-2xl font-bold mb-4">🎉 Temporada</h2>
      <div class="grid md:grid-cols-5 gap-6">
        <!-- 10 productos listos para ajustar nombre / imagen / precio -->
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp1.jpg" alt="Producto 1" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 1</h4>
          <p class="font-semibold">$0</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Producto 1',0)">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp2.jpg" alt="Producto 2" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 2</h4>
          <p class="font-semibold">$0</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Producto 2',0)">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp3.jpg" alt="Producto 3" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 3</h4>
          <p class="font-semibold">$0</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Producto 3',0)">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp4.jpg" alt="Producto 4" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 4</h4>
          <p class="font-semibold">$0</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Producto 4',0)">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp5.jpg" alt="Producto 5" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 5</h4>
          <p class="font-semibold">$0</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Producto 5',0)">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp6.jpg" alt="Producto 6" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 6</h4>
          <p class="font-semibold">$0</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Producto 6',0)">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp7.jpg" alt="Producto 7" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 7</h4>
          <p class="font-semibold">$0</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Producto 7',0)">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp8.jpg" alt="Producto 8" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 8</h4>
          <p class="font-semibold">$0</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Producto 8',0)">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp9.jpg" alt="Producto 9" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 9</h4>
          <p class="font-semibold">$0</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Producto 9',0)">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp10.jpg" alt="Producto 10" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 10</h4>
          <p class="font-semibold">$0</p>
          <button class="mt-2 bg-[#C69B4B] text-white px-3 py-1 rounded" onclick="addToCart('Producto 10',0)">Agregar</button>
        </div>
      </div>
    </section>

  </main>

  <!-- CARRITO MODAL -->
  <div id="cartModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-lg mt-12 p-6 relative">
      <button onclick="toggleCartModal()" class="absolute top-3 right-3 text-red-500">✖</button>
      <h2 class="text-2xl font-bold mb-4">🛒 Tu carrito</h2>

      <ul id="cartItemsList" class="space-y-2 max-h-64 overflow-auto"></ul>

      <p class="mt-4 font-bold">Total: $<span id="cartTotal">0</span></p>

      <!-- Datos bancarios -->
      <div class="mt-4 p-3 border rounded bg-gray-50">
        <p class="font-semibold mb-1">Transferencia bancaria (opcional):</p>
        <p class="text-sm">Banco: <strong>BBVA</strong></p>
        <p class="text-sm">Número de cuenta: <strong>4152314309562018</strong></p>
        <p class="text-sm">A nombre de: <strong>Tania Quintana</strong></p>
        <p class="text-xs text-gray-600 mt-2">Después de transferir, adjunta el comprobante en la conversación de WhatsApp.</p>
      </div>

      <button class="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full" onclick="checkout()">Finalizar pedido por WhatsApp</button>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="bg-[#C69B4B] text-white text-center p-4 mt-12">
    <p>&copy; 2025 Queentana´s Tiendita Escolar - Todos los derechos reservados</p>
  </footer>

  <!-- SCRIPT -->
  <script>
    // Número WhatsApp destino (formato internacional sin símbolos)
    const WHATSAPP_NUMBER = "5216143515170"; // +52 6143515170

    // Datos bancarios (se muestran en el modal y se incluyen en el mensaje)
    const BANK_NAME = "BBVA";
    const BANK_ACCOUNT = "4152314309562018";
    const BANK_HOLDER = "Tania Quintana";

    // Carrito
    let cart = [];

    // Abrir/Cerrar modal carrito
    function toggleCartModal() {
      const modal = document.getElementById('cartModal');
      modal.classList.toggle('hidden');
      renderCart();
    }

    // Añadir genérico
    function addToCart(name, price) {
      cart.push({ name, price });
      updateCartCount();
      // opción: mostrar feedback visual breve
      flashMessage(`${name} agregado al carrito`);
    }

    // Añadir burrito con opción
    function addBurrito() {
      const opt = document.getElementById('burritoSelect').value;
      addToCart(`Burrito - ${opt}`, 24);
    }

    // Añadir agua según selección
    function addAgua() {
      const sel = document.getElementById('aguaSelect');
      const price = parseInt(sel.value || 6);
      const label = sel.options[sel.selectedIndex].text;
      addToCart(label, price);
    }

    // Añadir cacahuates según selección
    function addCacahuates() {
      const sel = document.getElementById('cacahuateSelect');
      const price = parseInt(sel.value || 10);
      const label = sel.options[sel.selectedIndex].text;
      addToCart(label, price);
    }

    // Añadir gelatina con sabor
    function addGelatina() {
      const flavor = document.getElementById('gelatinaSelect').value;
      addToCart(`Gelatina - ${flavor}`, 12);
    }

    // Añadir yogurt con topping
    function addYogurt() {
      const opt = document.getElementById('yogurtSelect').value;
      addToCart(`Yogurt - ${opt}`, 18);
    }

    // Añadir fruta con selección
    function addFruta() {
      const opt = document.getElementById('frutaSelect').value;
      addToCart(`Fruta - ${opt}`, 25);
    }

    // Render en modal carrito
    function renderCart() {
      const list = document.getElementById('cartItemsList');
      const totalEl = document.getElementById('cartTotal');
      list.innerHTML = '';
      let total = 0;
      cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.className = "flex justify-between items-center border-b pb-1";
        li.innerHTML = `<span>${item.name} - $${item.price}</span>
                        <button class="text-red-500 ml-2" onclick="removeFromCart(${index})">✖</button>`;
        list.appendChild(li);
      });
      totalEl.textContent = total;
      updateCartCount();
    }

    // Actualizar contador visible
    function updateCartCount() {
      document.getElementById('cart-count').textContent = cart.length;
    }

    // Quitar item
    function removeFromCart(index) {
      cart.splice(index, 1);
      renderCart();
      flashMessage('Producto eliminado');
    }

    // Mensaje rápido (pequeño toast)
    function flashMessage(text) {
      const msg = document.createElement('div');
      msg.textContent = text;
      msg.className = "fixed bottom-6 left-6 bg-black text-white px-4 py-2 rounded shadow-lg opacity-95 z-60";
      document.body.appendChild(msg);
      setTimeout(()=> msg.remove(), 1400);
    }

    // Abrir modal desde header
    document.getElementById('openCartBtn').addEventListener('click', toggleCartModal);

    // Checkout -> abre WhatsApp con mensaje y datos de cuenta, e instrucción de adjuntar comprobante
    function checkout() {
      if (cart.length === 0) {
        alert('Tu carrito está vacío.');
        return;
      }

      let message = "Hola! Quiero hacer mi pedido:%0A";
      let total = 0;
      cart.forEach(item => {
        message += `- ${item.name}: $${item.price}%0A`;
        total += item.price;
      });
      message += `%0ATotal: $${total}%0A%0A`;

      // Datos bancarios
      message += `Realizaré la transferencia a:%0ABanco: ${BANK_NAME}%0ANúmero de cuenta: ${BANK_ACCOUNT}%0AA nombre de: ${BANK_HOLDER}%0A%0A`;

      // Instrucción obligatoria (texto fuerte para que lo vean)
      message += "⚠️ *IMPORTANTE*: Por favor, ADJUNTA el comprobante de pago (captura) antes de ENVIAR este mensaje. Usa el clip 📎 en WhatsApp para adjuntar el comprobante.%0A%0A";
      message += "Gracias, quedo al pendiente.";

      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    }

    // Inicializar contador (por si)
    updateCartCount();
  </script>
</body>
</html>
