<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Queentana´s Tiendita Escolar</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-[#F9F6F0] text-[#1F1F1F]">

<header class="bg-[#C69B4B] text-white p-4 shadow-lg flex items-center justify-between">
  <button id="menuBtn" class="text-2xl">☰</button>

  <a href="#" onclick="scrollToSection('inicio')" class="text-center">
    <h1 class="text-xl md:text-2xl font-bold">👑 Queentana´s Tiendita</h1>
  </a>

  <button id="cartBtn" class="bg-white text-[#C69B4B] px-3 py-1 rounded-lg shadow font-bold">
    🛒 (<span id="cartCount">0</span>)
  </button>
</header>

<!-- MENÚ -->
<div id="menu" class="fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform -translate-x-full transition-transform z-50 p-6 space-y-4">
  <button id="closeMenu" class="text-right w-full text-xl">✖</button>

  <a href="#" onclick="scrollToSection('menuSec')" class="block font-bold">📋 Menú diario</a>
  <a href="#" onclick="scrollToSection('bebidas')" class="block font-bold">🥤 Bebidas</a>
  <a href="#" onclick="scrollToSection('especial')" class="block font-bold">⭐ Especial</a>
  <a href="#" onclick="scrollToSection('maestros')" class="block font-bold">🎓 Maestros</a>
  <a href="#" onclick="scrollToSection('temporada')" class="block font-bold">🍂 Temporada</a>
</div>

<div id="overlay" class="fixed inset-0 bg-black bg-opacity-50 hidden z-40"></div>

<main id="inicio" class="p-6 space-y-12">

<!-- MENÚ -->
<section id="menuSec">
<h2 class="text-2xl font-bold mb-4">📋 Menú Diario</h2>

<div class="grid md:grid-cols-3 gap-6">
  <div class="border p-4 bg-white rounded shadow">
    <h4>Mini torta</h4>
    <p>$13</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Mini torta" data-price="13">Agregar</button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Mollete</h4>
    <p>$13</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-name="Mollete" data-price="13">Agregar</button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Burrito</h4>
    <select class="border rounded p-2 w-full mt-2 burritoOption">
      <option>Papas con chorizo</option>
      <option>Deshebrada</option>
    </select>
    <p>$24</p>
    <button class="addBurrito bg-[#C69B4B] text-white px-3 py-1 rounded mt-2" data-price="24">Agregar</button>
  </div>
</div>

<h3 id="bebidas" class="text-xl font-semibold mt-8">🥤 Bebidas</h3>
<div class="grid md:grid-cols-3 gap-6 mt-4">
  <div class="border p-4 bg-white rounded shadow">
    <h4>Agua</h4>
    <select class="border rounded p-2 w-full mt-2 aguaOption">
      <option value="Agua chica - 6">Chica $6</option>
      <option value="Agua grande - 12">Grande $12</option>
    </select>
    <button class="addAgua bg-[#C69B4B] text-white px-3 py-1 rounded mt-2">Agregar</button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Jugo</h4>
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
  <button class="addToCart bg-green-600 text-white px-3 py-1 rounded mt-2"
    data-name="Especial del día" data-price="30">
    Agregar
  </button>
</div>
</section>

<!-- MAESTROS -->
<section id="maestros">
<h2 class="text-2xl font-bold mb-4">🎓 Exclusivo Maestros</h2>

<div class="grid md:grid-cols-2 gap-6">
  <div class="border p-4 bg-white rounded shadow">
    <h4>Refresco</h4>
    <p>$25</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Refresco" data-price="25">
      Agregar
    </button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Café</h4>
    <p>$20</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Café" data-price="20">
      Agregar
    </button>
  </div>
</div>
</section>

<!-- TEMPORADA -->
<section id="temporada">
<h2 class="text-2xl font-bold mb-4">🍂 Temporada</h2>

<div class="grid md:grid-cols-3 gap-6">
  <div class="border p-4 bg-white rounded shadow">
    <h4>Bolis</h4>
    <p>$10</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Bolis" data-price="10">
      Agregar
    </button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Mangoneada</h4>
    <p>$12</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Mangoneada" data-price="12">
      Agregar
    </button>
  </div>

  <div class="border p-4 bg-white rounded shadow">
    <h4>Paleta</h4>
    <p>$25</p>
    <button class="addToCart bg-[#C69B4B] text-white px-3 py-1 rounded mt-2"
      data-name="Paleta" data-price="25">
      Agregar
    </button>
  </div>
</div>
</section>

</main>

<!-- (TODO tu script queda EXACTAMENTE igual, no hay que tocarlo) -->

</body>
</html>
