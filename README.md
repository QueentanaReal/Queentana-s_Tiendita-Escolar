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
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Mini torta" data-price="13">Agregar</button>
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
          <h4 class="font-bold">Burritos</h4>
          <p class="text-sm">Elige tu guisado favorito</p>
          <select class="border rounded p-2 w-full mt-2 burritoOption">
            <option>Papas con chorizo</option>
            <option>Salsa verde</option>
            <option>Deshebrada</option>
            <option>Wini con chipotle</option>
            <option>Bistec a la mexicana</option>
            <option>Discada</option>
          </select>
          <p class="font-semibold mt-2">$24</p>
          <button class="addBurrito bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-price="24">Agregar</button>
        </div>
      </div>

      <!-- Categoría: Bebidas -->
      <h3 class="text-xl font-semibold mt-8 mb-2">🥤 Bebidas</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Agua -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/agua.jpg" alt="Agua" class="rounded-xl mb-2">
          <h4 class="font-bold">Agua</h4>
          <select class="border rounded p-2 w-full mt-2 aguaOption">
            <option value="Agua Chica - 6">Agua Chica - $6</option>
            <option value="Agua Grande - 12">Agua Grande - $12</option>
          </select>
          <button class="addAgua bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
        </div>

        <!-- Jugo -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/jugo.jpg" alt="Jugo Jumexito" class="rounded-xl mb-2">
          <h4 class="font-bold">Jugo Jumexito</h4>
          <p class="font-semibold">$12</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Jugo Jumexito" data-price="12">Agregar</button>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 2: Especial del Día -->
    <section>
      <h2 class="text-2xl font-bold mb-4">⭐ Especial del Día</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Producto del día (TÚ lo cambias manualmente en el código) -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/especial.jpg" alt="Especial del día" class="rounded-xl mb-2">
          <h4 class="font-bold">Platillo del Día</h4>
          <p class="font-semibold">$30</p>
          <button class="addToCart bg-green-600 text-white px-3 py-1 rounded mt-2" data-name="Especial del Día" data-price="30">Agregar</button>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 3: Exclusivo Maestros -->
    <section>
      <h2 class="text-2xl font-bold mb-4">🎓 Exclusivo para Maestros</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Refresco -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/refresco.jpg" alt="Refresco" class="rounded-xl mb-2">
          <h4 class="font-bold">Refresco</h4>
          <p class="font-semibold">$25</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Refresco" data-price="25">Agregar</button>
        </div>

        <!-- Café -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/cafe.jpg" alt="Café" class="rounded-xl mb-2">
          <h4 class="font-bold">Café</h4>
          <p class="font-semibold">$20</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Café" data-price="20">Agregar</button>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 4: Temporada -->
    <section>
      <h2 class="text-2xl font-bold mb-4">🍂 Temporada</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Aquí dejas hasta 10 productos listos para que TÚ los cambies -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/temp1.jpg" alt="Producto temporada" class="rounded-xl mb-2">
          <h4 class="font-bold">Producto Temporada 1</h4>
          <p class="font-semibold">$20</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Producto Temporada 1" data-price="20">Agregar</button>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/temp2.jpg" alt="Producto temporada" class="rounded-xl mb-2">
          <h4 class="font-bold">Producto Temporada 2</h4>
          <p class="font-semibold">$25</p>
          <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Producto Temporada 2" data-price="25">Agregar</button>
        </div>

        <!-- Repites igual hasta tener 10 -->
      </div>
    </section>

  </main>

  <!-- Modal Carrito -->
  <div id="cartModal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center">
    <div class="bg-white w-96 p-6 rounded-xl shadow-lg">
      <h2 class="text-xl font-bold mb-4">🛒 Carrito de Compras</h2>
      <ul id="cartItems" class="mb-4 space-y-2"></ul>
      <p class="font-bold">Total: $<span id="cartTotal">0</span></p>
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
    const cartBtn = document.getElementById("cartBtn");
    const cartModal = document.getElementById("cartModal");
    const closeCart = document.getElementById("closeCart");
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const checkout = document.getElementById("checkout");

    let cart = [];

    // Abrir y cerrar carrito
    cartBtn.addEventListener("click", () => cartModal.classList.remove("hidden"));
    closeCart.addEventListener("click", () => cartModal.classList.add("hidden"));

    // Función agregar al carrito
    function addToCart(name, price) {
      cart.push({ name, price: parseFloat(price) });
      renderCart();
    }

    // Renderizar carrito
    function renderCart() {
      cartItems.innerHTML = "";
      let total = 0;
      cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.classList = "flex justify-between items-center border-b pb-1";
        li.innerHTML = `${item.name} - $${item.price} 
          <button onclick="removeFromCart(${index})" class="text-red-600 font-bold">X</button>`;
        cartItems.appendChild(li);
      });
      cartTotal.textContent = total.toFixed(2);
      cartCount.textContent = cart.length;
    }

    // Eliminar producto
    function removeFromCart(index) {
      cart.splice(index, 1);
      renderCart();
    }
    window.removeFromCart = removeFromCart;

    // Eventos para botones "Agregar"
    document.querySelectorAll(".addToCart").forEach(btn => {
      btn.addEventListener("click", () => addToCart(btn.dataset.name, btn.dataset.price));
    });

    // Burrito con selección
    document.querySelector(".addBurrito").addEventListener("click", (e) => {
      const option = document.querySelector(".burritoOption").value;
      addToCart("Burrito (" + option + ")", e.target.dataset.price);
    });

    // Agua con selección
    document.querySelector(".addAgua").addEventListener("click", () => {
      const option = document.querySelector(".aguaOption").value;
      const [name, price] = option.split(" - ");
      addToCart(name, price);
    });

    // Checkout por WhatsApp con folio
    checkout.addEventListener("click", () => {
      if(cart.length === 0) return alert("Tu carrito está vacío");

      const folio = Math.floor(Math.random() * 1000000); // Folio aleatorio

      let message = "¡Hola! Quiero hacer un pedido.%0A";
      message += "🧾 Folio de pedido: " + folio + "%0A%0A";
      cart.forEach(item => {
        message += "- " + item.name + " - $" + item.price + "%0A";
      });
      message += "%0ATotal: $" + cartTotal.textContent;
      message += "%0A%0A📌 Realiza tu pago por transferencia a:%0ABBVA 4152314309562018%0ATitular: Tania Quintana";
      message += "%0A✅ Adjunta el comprobante de pago en esta conversación para confirmar tu pedido.";

      const phone = "5216143515170";
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    });
  </script>
</body>
</html>
