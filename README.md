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
    <img src="img/logo.png" alt="Logo Queentana´s Tiendita Escolar" class="mx-auto h-24">
  </div>

  <!-- Encabezado -->
  <header class="bg-[#C69B4B] text-white p-6 text-center shadow-lg">
    <h1 class="text-3xl font-bold">👑 Queentana´s Tiendita Escolar</h1>
    <p class="text-lg">Menú completo para todos los gustos</p>
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
        </div>

        <!-- Mollete -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/mollete.jpg" alt="Mollete" class="rounded-xl mb-2">
          <h4 class="font-bold">Mollete</h4>
          <p class="text-sm">Frijoles y Queso</p>
          <p class="font-semibold">$13</p>
        </div>

        <!-- Burritos -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/burrito.jpg" alt="Burritos" class="rounded-xl mb-2">
          <h4 class="font-bold">Burritos</h4>
          <p class="text-sm">Elige tu guisado favorito</p>
          <select class="border rounded p-2 w-full mt-2">
            <option>Papas con chorizo</option>
            <option>Salsa verde</option>
            <option>Deshebrada</option>
            <option>Wini con chipotle</option>
            <option>Bistec a la mexicana</option>
            <option>Discada</option>
          </select>
          <p class="font-semibold mt-2">$24</p>
        </div>
      </div>

      <!-- Categoría: Bebidas -->
      <h3 class="text-xl font-semibold mt-8 mb-2">🥤 Bebidas</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Agua -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/agua.jpg" alt="Agua" class="rounded-xl mb-2">
          <h4 class="font-bold">Agua</h4>
          <select class="border rounded p-2 w-full mt-2">
            <option>Agua Chica - $6</option>
            <option>Agua Grande - $12</option>
          </select>
        </div>

        <!-- Jugo -->
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/jugo.jpg" alt="Jugo Jumexito" class="rounded-xl mb-2">
          <h4 class="font-bold">Jugo Jumexito</h4>
          <p class="font-semibold">$12</p>
        </div>
      </div>

      <!-- Categoría: Snacks -->
      <h3 class="text-xl font-semibold mt-8 mb-2">🍪 Snacks</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/galletas.jpg" alt="Galletas" class="rounded-xl mb-2">
          <h4 class="font-bold">Galletas en vara</h4>
          <p class="font-semibold">$5</p>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/cacahuates.jpg" alt="Cacahuates" class="rounded-xl mb-2">
          <h4 class="font-bold">Cacahuates</h4>
          <select class="border rounded p-2 w-full mt-2">
            <option>Garampiñado - $10</option>
            <option>Jalapeño - $10</option>
            <option>Japonés - $10</option>
            <option>Enchilado - $5</option>
            <option>Natural - $5</option>
            <option>Energético - $10</option>
          </select>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/carlota.jpg" alt="Carlota" class="rounded-xl mb-2">
          <h4 class="font-bold">Carlota</h4>
          <p class="font-semibold">$30</p>
        </div>
      </div>

      <!-- Categoría: Fitness -->
      <h3 class="text-xl font-semibold mt-8 mb-2">💪 Fitness</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/gelatina.jpg" alt="Gelatina" class="rounded-xl mb-2">
          <h4 class="font-bold">Gelatina</h4>
          <select class="border rounded p-2 w-full mt-2">
            <option>Fresa</option>
            <option>Mango</option>
            <option>Durazno</option>
            <option>Limón</option>
            <option>Frambuesa</option>
            <option>Piña</option>
          </select>
          <p class="font-semibold">$12</p>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/yogurt.jpg" alt="Yogurt" class="rounded-xl mb-2">
          <h4 class="font-bold">Yogurt</h4>
          <select class="border rounded p-2 w-full mt-2">
            <option>Solo</option>
            <option>Nuez</option>
            <option>Cacahuate</option>
            <option>Chispas Payaso</option>
            <option>Chispas de Chocolate</option>
            <option>Miel de abeja</option>
          </select>
          <p class="font-semibold">$18</p>
        </div>

        <div class="border rounded-xl p-4 bg-white shadow">
          <img src="img/fruta.jpg" alt="Fruta" class="rounded-xl mb-2">
          <h4 class="font-bold">Fruta</h4>
          <select class="border rounded p-2 w-full mt-2">
            <option>Sola</option>
            <option>Tico</option>
            <option>Chile y limón</option>
          </select>
          <p class="font-semibold">$25</p>
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
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/cafe.jpg" alt="Café" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Café</h4>
          <p class="font-semibold">$20</p>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 4: Temporada -->
    <section>
      <h2 class="text-2xl font-bold mb-4">🎉 Temporada</h2>
      <div class="grid md:grid-cols-5 gap-6">
        <!-- 10 lugares para productos -->
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp1.jpg" alt="Producto 1" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 1</h4>
          <p class="font-semibold">0</p>
        </div>
        <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp2.jpg" alt="Producto 2" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 2</h4>
          <p class="font-semibold">0</p>
        </div>
         <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp2.jpg" alt="Producto 3" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 3</h4>
          <p class="font-semibold">0</p>
        </div>
         <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp2.jpg" alt="Producto 4" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 4</h4>
          <p class="font-semibold">0</p>
        </div>
         <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp2.jpg" alt="Producto 5" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 5</h4>
          <p class="font-semibold">0</p>
        </div>
         <div class="border rounded-xl p-4 bg-white shadow text-center">
          <img src="img/temp2.jpg" alt="Producto 6" class="mx-auto rounded-xl mb-2">
          <h4 class="font-bold">Producto 6</h4>
          <p class="font-semibold">0</p>
        </div>
        <!-- repite hasta producto 10 -->
      </div>
    </section>
  </main>

  <footer class="bg-[#C69B4B] text-white text-center p-4 mt-12">
    <p>&copy; 2025 Queentana´s Tiendita Escolar - Todos los derechos reservados</p>
  </footer>
</body>
</html>
