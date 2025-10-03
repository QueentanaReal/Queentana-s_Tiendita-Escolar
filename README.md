<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Queentana's Tiendita Escolar</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#F9F6F0] text-[#1F1F1F]">

  <header class="bg-[#C69B4B] text-white p-6 text-center text-2xl font-bold">
    🍴 Queentana's Tiendita Escolar
  </header>

  <main class="p-6 space-y-12">

    <!-- SECCION 1: Menú Diario -->
    <section>
      <h2 class="text-xl font-bold mb-4">Menú diario</h2>
      <div class="grid md:grid-cols-2 gap-6">

        <!-- Mini torta -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="mini-torta.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Mini torta de pan blanco - $13</h3>
          <p class="text-sm">Mayonesa, Jamón, Salchicha, Tomate y Lechuga</p>
          <button onclick="addToCart('Mini torta', 13)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>

        <!-- Mollete -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="mollete.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Mollete - $13</h3>
          <p class="text-sm">Frijoles y Queso</p>
          <button onclick="addToCart('Mollete', 13)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>

        <!-- Burritos -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="burrito.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Burrito - $24</h3>
          <p class="text-sm">Elige tu guisado</p>
          <select id="burritoOption" class="border rounded p-2 w-full mt-2">
            <option value="Papas con chorizo">Papas con chorizo</option>
            <option value="Salsa verde">Salsa verde</option>
            <option value="Deshebrada en rojo">Deshebrada en rojo</option>
            <option value="Wini con chipotle">Wini con chipotle</option>
            <option value="Bistec a la mexicana">Bistec a la mexicana</option>
            <option value="Discada">Discada</option>
          </select>
          <button onclick="addToCart('Burrito - ' + document.getElementById('burritoOption').value, 24)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>

        <!-- Agua -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="agua.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Agua</h3>
          <select id="aguaOption" class="border rounded p-2 w-full mt-2">
            <option value="Chica">Chica - $6</option>
            <option value="Grande">Grande - $12</option>
          </select>
          <button onclick="addAgua()" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>

        <!-- Jugo -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="jugo.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Jugo Jumexito - $12</h3>
          <button onclick="addToCart('Jugo Jumexito', 12)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>

        <!-- Cacahuates -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="cacahuates.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Cacahuates</h3>
          <select id="cacaOption" class="border rounded p-2 w-full mt-2">
            <option value="Garampiñado $10">Garampiñado - $10</option>
            <option value="Jalapeño $10">Jalapeño - $10</option>
            <option value="Japonés $10">Japonés - $10</option>
            <option value="Enchilado $5">Enchilado - $5</option>
            <option value="Natural $5">Natural - $5</option>
            <option value="Energético $10">Energético - $10</option>
          </select>
          <button onclick="addCacahuate()" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>

        <!-- Papas -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="papas.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Papas caseras naturales - $32</h3>
          <button onclick="addToCart('Papas caseras naturales', 32)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>

        <!-- Palomitas -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="palomitas.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Palomitas naturales - $10</h3>
          <button onclick="addToCart('Palomitas naturales', 10)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>

        <!-- Carlota -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="carlota.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Carlota - $30</h3>
          <button onclick="addToCart('Carlota', 30)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>

        <!-- Gelatina -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="gelatina.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Gelatina - $12</h3>
          <select id="gelatinaOption" class="border rounded p-2 w-full mt-2">
            <option value="Fresa">Fresa</option>
            <option value="Mango">Mango</option>
            <option value="Durazno">Durazno</option>
            <option value="Limón">Limón</option>
            <option value="Frambuesa">Frambuesa</option>
            <option value="Piña">Piña</option>
          </select>
          <button onclick="addToCart('Gelatina - ' + document.getElementById('gelatinaOption').value, 12)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>

        <!-- Yogurt -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="yogurt.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Yogurt - $18</h3>
          <select id="yogurtOption" class="border rounded p-2 w-full mt-2">
            <option value="Solo">Solo</option>
            <option value="Nuez">Nuez</option>
            <option value="Cacahuate">Cacahuate</option>
            <option value="Chispas payaso">Chispas payaso</option>
            <option value="Chispas de chocolate">Chispas de chocolate</option>
            <option value="Miel de abeja">Miel de abeja</option>
          </select>
          <button onclick="addToCart('Yogurt - ' + document.getElementById('yogurtOption').value, 18)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>

        <!-- Fruta -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="fruta.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Fruta - $25</h3>
          <select id="frutaOption" class="border rounded p-2 w-full mt-2">
            <option value="Sola">Sola</option>
            <option value="Con tico">Con tico</option>
            <option value="Con chile y limón">Con chile y limón</option>
          </select>
          <button onclick="addToCart('Fruta - ' + document.getElementById('frutaOption').value, 25)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>

      </div>
    </section>

    <!-- SECCION 2: Especial del día -->
    <section>
      <h2 class="text-xl font-bold mb-4">Especial del día</h2>
      <div class="border p-4 rounded-lg shadow bg-white">
        <img src="especial.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
        <h3 class="font-semibold">Aquí se muestra el platillo especial</h3>
        <p class="text-sm">Descripción y precio cambian diariamente</p>
      </div>
    </section>

    <!-- SECCION 3: Exclusivo maestros -->
    <section>
      <h2 class="text-xl font-bold mb-4">Exclusivo para maestros(as)</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="refresco.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Refresco - $25</h3>
          <button onclick="addToCart('Refresco', 25)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="cafe.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Café - $20</h3>
          <button onclick="addToCart('Café', 20)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>
      </div>
    </section>

    <!-- SECCION 4: Temporada -->
    <section>
      <h2 class="text-xl font-bold mb-4">Temporada</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <!-- 10 productos -->
        <div class="border p-4 rounded-lg shadow bg-white">
          <img src="temp1.jpg" class="w-full h-40 object-cover rounded-lg mb-2">
          <h3 class="font-semibold">Producto 1 - $20</h3>
          <select id="temp1Option" class="border rounded p-2 w-full mt-2">
            <option value="Nothing">Nothing</option>
            <option value="Horchata">Horchata</option>
            <option value="Naranja">Naranja</option>
            <option value="Limón">Limón</option>
            <option value="Jamaica">Jamaica</option>
          </select>
          <button onclick="addToCart('Producto 1 - ' + document.getElementById('temp1Option').value, 20)" class="mt-2 bg-[#C69B4B] text-white px-4 py-2 rounded">Agregar</button>
        </div>
        <!-- Repite misma estructura hasta Producto 10 -->
      </div>
    </section>

    <!-- Carrito -->
    <section>
      <h2 class="text-xl font-bold mb-4">🛒 Carrito</h2>
      <ul id="cartItems" class="list-disc ml-6"></ul>
      <p id="cartTotal" class="mt-2 font-semibold">Total: $0</p>
      <div class="mt-4">
        <label class="block mb-2">Sube tu comprobante de pago (obligatorio):</label>
        <input type="file" id="comprobante" accept="image/*,.pdf" class="mb-4 border p-2 rounded">
        <button onclick="checkout()" class="bg-green-600 text-white px-4 py-2 rounded">Enviar pedido por WhatsApp</button>
      </div>
    </section>

  </main>

  <script>
    let cart = [];
    let total = 0;

    function addToCart(product, price) {
      cart.push({product, price});
      total += price;
      renderCart();
    }

    function addAgua() {
      const option = document.getElementById("aguaOption").value;
      let precio = option === "Chica" ? 6 : 12;
      addToCart("Agua " + option, precio);
    }

    function addCacahuate() {
      const option = document.getElementById("cacaOption").value;
      let partes = option.split("$");
      addToCart("Cacahuate " + partes[0], parseInt(partes[1]));
    }

    function renderCart() {
      const cartItems = document.getElementById("cartItems");
      cartItems.innerHTML = "";
      cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
      });
      document.getElementById("cartTotal").textContent = "Total: $" + total;
    }

    function checkout() {
      const fileInput = document.getElementById("comprobante");
      if (!fileInput.files.length) {
        alert("Por favor, adjunta tu comprobante de pago antes de continuar.");
        return;
      }
      let mensaje = "Hola! Quiero hacer un pedido:%0A";
      cart.forEach(item => {
        mensaje += `- ${item.product} - $${item.price}%0A`;
      });
      mensaje += `Total: $${total}%0A`;
      mensaje += `Por favor, realiza tu pago a la cuenta BBVA 4152314309562018 a nombre de Tania Quintana y adjunta tu comprobante.`;
      window.open("https://wa.me/526143515170?text=" + mensaje, "_blank");
    }
  </script>
</body>
</html>
