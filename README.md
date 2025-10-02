<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Tiendita escolar queentana</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root{
      --brand-bg: #F9F6F0;
      --accent-gold: #C69B4B;
      --text-dark: #1F1F1F;
    }
    body{background:var(--brand-bg); color:var(--text-dark)}
    .accent{color:var(--accent-gold)}
    .accent-bg{background:linear-gradient(90deg, rgba(198,155,75,0.12), rgba(198,155,75,0.06));}
  </style>
</head>
<body class="min-h-screen font-sans p-6">
  <header class="max-w-4xl mx-auto mb-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">Tiendita escolar <span class="accent">Queentana</span></h1>
      <nav>
        <a href="#menu" class="mr-4">Menú diario</a>
        <a href="#pedidos">Pedidos y pago</a>
      </nav>
    </div>
    <p class="text-sm text-gray-600 mt-1">Bienvenido — elige, agrega al carrito y confirma por WhatsApp. 😄</p>
  </header>

  <main class="max-w-4xl mx-auto grid gap-8">
    <!-- Sección 1: Menú diario -->
    <section id="menu" class="bg-white rounded-2xl p-6 shadow-sm accent-bg">
      <h2 class="text-xl font-semibold mb-4">Menú diario</h2>

      <div class="grid md:grid-cols-2 gap-4">
        <!-- Product: Mini torta -->
        <article class="p-4 border rounded-lg bg-white">
          <h3 class="font-semibold">Mini torta de pan blanco</h3>
          <p class="text-sm text-gray-600">$13</p>
          <div class="mt-3 flex items-center gap-2">
            <label class="text-sm">Cantidad</label>
            <select class="w-20 qty" data-price="13">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button class="add-btn ml-auto px-3 py-1 rounded bg-yellow-500 text-white" data-name="Mini torta de pan blanco" data-price="13">Agregar</button>
          </div>
        </article>

        <!-- Moyete -->
        <article class="p-4 border rounded-lg bg-white">
          <h3 class="font-semibold">Moyete</h3>
          <p class="text-sm text-gray-600">$13</p>
          <div class="mt-3 flex items-center gap-2">
            <label class="text-sm">Cantidad</label>
            <select class="w-20 qty" data-price="13">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button class="add-btn ml-auto px-3 py-1 rounded bg-yellow-500 text-white" data-name="Moyete" data-price="13">Agregar</button>
          </div>
        </article>

        <!-- Burritos -->
        <article class="p-4 border rounded-lg bg-white">
          <h3 class="font-semibold">Burritos (guisado variado)</h3>
          <p class="text-sm text-gray-600">$24</p>
          <div class="mt-3">
            <label class="text-sm">Cantidad</label>
            <select class="w-20 qty" data-price="24">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <button class="add-btn ml-auto mt-3 px-3 py-1 rounded bg-yellow-500 text-white" data-name="Burrito" data-price="24">Agregar</button>
          </div>
        </article>

        <!-- Fruta -->
        <article class="p-4 border rounded-lg bg-white">
          <h3 class="font-semibold">Fruta</h3>
          <p class="text-sm text-gray-600">$25</p>
          <div class="mt-3 flex items-center gap-2">
            <label class="text-sm">Cantidad</label>
            <select class="w-20 qty" data-price="25">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <button class="add-btn ml-auto px-3 py-1 rounded bg-yellow-500 text-white" data-name="Fruta" data-price="25">Agregar</button>
          </div>
        </article>

        <!-- Jugo -->
        <article class="p-4 border rounded-lg bg-white">
          <h3 class="font-semibold">Jugo</h3>
          <p class="text-sm text-gray-600">$12</p>
          <div class="mt-3 flex items-center gap-2">
            <label class="text-sm">Cantidad</label>
            <select class="w-20 qty" data-price="12">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <button class="add-btn ml-auto px-3 py-1 rounded bg-yellow-500 text-white" data-name="Jugo" data-price="12">Agregar</button>
          </div>
        </article>

        <!-- Papas caseras -->
        <article class="p-4 border rounded-lg bg-white">
          <h3 class="font-semibold">Papas caseras</h3>
          <p class="text-sm text-gray-600">$32</p>
          <div class="mt-3 flex items-center gap-2">
            <label class="text-sm">Cantidad</label>
            <select class="w-20 qty" data-price="32">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <button class="add-btn ml-auto px-3 py-1 rounded bg-yellow-500 text-white" data-name="Papas caseras" data-price="32">Agregar</button>
          </div>
        </article>

        <!-- Agua (special) -->
        <article class="p-4 border rounded-lg bg-white">
          <h3 class="font-semibold">Agua</h3>
          <p class="text-sm text-gray-600">Chica $6 — Grande $12 — Agua de sabor $25</p>
          <div class="mt-3 grid gap-2">
            <label class="text-sm">Tipo</label>
            <select class="w-full tipo-agua" data-price-chica="6" data-price-grande="12" data-price-sabor="25">
              <option value="chica">Agua chica ($6)</option>
              <option value="grande">Agua grande ($12)</option>
              <option value="sabor">Agua de sabor ($25)</option>
            </select>
            <div class="sabor-container hidden">
              <label class="text-sm">Sabor</label>
              <select class="w-full sabor-agua">
                <option>Jamaica</option>
                <option>Horchata</option>
                <option>Piña colada</option>
                <option>Limón</option>
                <option>Sandía</option>
                <option>Melón</option>
              </select>
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm">Cantidad</label>
              <select class="w-20 qty" data-price="0">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <button class="add-agua ml-auto px-3 py-1 rounded bg-yellow-500 text-white">Agregar</button>
            </div>
          </div>
        </article>

        <!-- Yoghurt -->
        <article class="p-4 border rounded-lg bg-white">
          <h3 class="font-semibold">Yoghurt</h3>
          <p class="text-sm text-gray-600">$18</p>
          <div class="mt-3">
            <label class="text-sm">Toppings (elige 0 o más)</label>
            <div class="grid grid-cols-2 gap-2 mt-2">
              <label><input type="checkbox" value="cacahuate" class="topping"> Cacahuate</label>
              <label><input type="checkbox" value="chispas payaso" class="topping"> Chispas payaso</label>
              <label><input type="checkbox" value="chispas de chocolate" class="topping"> Chispas de chocolate</label>
              <label><input type="checkbox" value="nuez" class="topping"> Nuez</label>
              <label><input type="checkbox" value="miel" class="topping"> Miel</label>
            </div>
            <div class="mt-3 flex items-center gap-2">
              <label class="text-sm">Cantidad</label>
              <select class="w-20 qty" data-price="18">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <button class="add-yoghurt ml-auto px-3 py-1 rounded bg-yellow-500 text-white">Agregar</button>
            </div>
          </div>
        </article>

        <!-- Gelatina -->
        <article class="p-4 border rounded-lg bg-white">
          <h3 class="font-semibold">Gelatina</h3>
          <p class="text-sm text-gray-600">$12</p>
          <div class="mt-3">
            <label class="text-sm">Sabor</label>
            <select class="w-full sabor-gelatina">
              <option>Limón</option>
              <option>Piña</option>
              <option>Fresa</option>
              <option>Durazno</option>
              <option>Mango</option>
            </select>
            <div class="mt-3 flex items-center gap-2">
              <label class="text-sm">Cantidad</label>
              <select class="w-20 qty" data-price="12">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <button class="add-gelatina ml-auto px-3 py-1 rounded bg-yellow-500 text-white">Agregar</button>
            </div>
          </div>
        </article>

      </div>
    </section>

    <!-- Sección 2: Pedidos y pago -->
    <section id="pedidos" class="bg-white rounded-2xl p-6 shadow-sm">
      <h2 class="text-xl font-semibold mb-4">Pedidos y pago</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Left: Carrito -->
        <div>
          <h3 class="font-medium">Carrito</h3>
          <div id="cart" class="mt-3 space-y-2">
            <p class="text-sm text-gray-500">Tu carrito está vacío.</p>
          </div>
          <div class="mt-4 border-t pt-4">
            <p class="font-semibold">Total: $<span id="total">0</span></p>
            <div class="mt-3 flex gap-2">
              <button id="whatsapp" class="flex-1 px-3 py-2 rounded bg-green-500 text-white">Pagar por WhatsApp</button>
              <button id="bbva-btn" class="px-3 py-2 rounded border">Pagar (BBVA)</button>
            </div>
          </div>
        </div>

        <!-- Right: Info de pago -->
        <div>
          <h3 class="font-medium">Opciones de pago</h3>
          <div class="mt-3 text-sm text-gray-700">
            <p>1) WhatsApp: revisaremos tu pedido y confirmaremos la hora de entrega/recogida.</p>
            <p class="mt-3">2) Transferencia (BBVA):<br>
              <strong>Cuenta:</strong> <span id="bbva-account">0123456789</span><br>
              <strong>CLABE:</strong> <span id="bbva-clabe">012345678901234567</span>
            </p>
            <button id="copy-bbva" class="mt-3 px-3 py-1 rounded bg-blue-500 text-white">Copiar datos BBVA</button>
            <p class="mt-3 text-xs text-gray-500">Reemplaza los datos con los reales antes de publicar la página.</p>
          </div>
        </div>
      </div>

    </section>
  </main>

  <footer class="max-w-4xl mx-auto mt-8 text-center text-sm text-gray-600">
    <p>Queentana — Tiendita escolar • Hecho con cariño (y un toque real).</p>
  </footer>

  <script>
    // Estado del carrito
    const cart = [];

    function formatCurrency(n){return Number(n).toFixed(2)}

    // Helpers para renderizar carrito
    function renderCart(){
      const cartEl = document.getElementById('cart');
      cartEl.innerHTML = '';
      if(cart.length === 0){ cartEl.innerHTML = '<p class="text-sm text-gray-500">Tu carrito está vacío.</p>'; document.getElementById('total').innerText = '0'; return; }
      cart.forEach((item, idx)=>{
        const div = document.createElement('div');
        div.className = 'p-3 border rounded flex items-start justify-between bg-gray-50';
        div.innerHTML = `
          <div>
            <div class="font-semibold">${item.name}</div>
            <div class="text-xs text-gray-600">${item.options || ''}</div>
            <div class="text-sm text-gray-700">$${formatCurrency(item.price)} x ${item.qty} = $${formatCurrency(item.price * item.qty)}</div>
          </div>
          <div class="flex flex-col items-end gap-2">
            <button class="remove-btn text-xs text-red-600" data-index="${idx}">Eliminar</button>
            <div>
              <button class="dec text-sm px-2 py-1 border" data-index="${idx}">-</button>
              <span class="px-2">${item.qty}</span>
              <button class="inc text-sm px-2 py-1 border" data-index="${idx}">+</button>
            </div>
          </div>
        `;
        cartEl.appendChild(div);
      });
      const total = cart.reduce((s,i)=>s + i.price * i.qty, 0);
      document.getElementById('total').innerText = formatCurrency(total);

      // attach events
      document.querySelectorAll('.remove-btn').forEach(btn=>btn.addEventListener('click', e=>{ const i=e.target.dataset.index; cart.splice(i,1); renderCart(); }));
      document.querySelectorAll('.inc').forEach(btn=>btn.addEventListener('click', e=>{ const i=+e.target.dataset.index; cart[i].qty++; renderCart(); }));
      document.querySelectorAll('.dec').forEach(btn=>btn.addEventListener('click', e=>{ const i=+e.target.dataset.index; if(cart[i].qty>1) cart[i].qty--; else cart.splice(i,1); renderCart(); }));
    }

    // Agregar productos simples
    document.querySelectorAll('.add-btn').forEach(btn=>{
      btn.addEventListener('click', e=>{
        const name = btn.dataset.name;
        const price = Number(btn.dataset.price);
        const parent = btn.closest('article');
        const qtyEl = parent.querySelector('.qty');
        const qty = Number(qtyEl ? qtyEl.value : 1);
        const item = { name, price, qty, options: '' };
        cart.push(item); renderCart();
      });
    });

    // Agua special
    const tipoAgua = document.querySelector('.tipo-agua');
    const saborContainer = document.querySelector('.sabor-container');
    const saborSelect = document.querySelector('.sabor-agua');
    tipoAgua.addEventListener('change', ()=>{
      if(tipoAgua.value === 'sabor') saborContainer.classList.remove('hidden'); else saborContainer.classList.add('hidden');
    });
    document.querySelector('.add-agua').addEventListener('click', ()=>{
      const tipo = tipoAgua.value;
      let price = 0; let name = 'Agua'; let options = '';
      if(tipo === 'chica'){ price = Number(tipoAgua.dataset.priceChica || 6); name = 'Agua (chica)'; }
      else if(tipo === 'grande'){ price = Number(tipoAgua.dataset.priceGrande || 12); name = 'Agua (grande)'; }
      else { price = Number(tipoAgua.dataset.priceSabor || 25); name = 'Agua de sabor'; options = 'Sabor: ' + saborSelect.value; }
      const qty = Number(document.querySelectorAll('.tipo-agua')[0].closest('article').querySelector('.qty').value);
      cart.push({name, price, qty, options}); renderCart();
    });

    // Yoghurt
    document.querySelector('.add-yoghurt').addEventListener('click', ()=>{
      const parent = document.querySelector('.add-yoghurt').closest('article');
      const price = 18; const name = 'Yoghurt';
      const qty = Number(parent.querySelector('.qty').value);
      const toppings = Array.from(parent.querySelectorAll('.topping:checked')).map(i=>i.value);
      const options = toppings.length ? 'Toppings: ' + toppings.join(', ') : '';
      cart.push({name, price, qty, options}); renderCart();
    });

    // Gelatina
    document.querySelector('.add-gelatina').addEventListener('click', ()=>{
      const parent = document.querySelector('.add-gelatina').closest('article');
      const price = 12; const name = 'Gelatina';
      const qty = Number(parent.querySelector('.qty').value);
      const sabor = parent.querySelector('.sabor-gelatina').value;
      const options = 'Sabor: ' + sabor;
      cart.push({name, price, qty, options}); renderCart();
    });

    // Botón WhatsApp
    document.getElementById('whatsapp').addEventListener('click', ()=>{
      if(cart.length === 0){ alert('El carrito está vacío'); return; }
      const lines = cart.map(i=> `${i.qty} x ${i.name}${i.options ? ' ('+i.options+')' : ''} - $${formatCurrency(i.price * i.qty)}`);
      const total = formatCurrency(cart.reduce((s,i)=>s + i.price * i.qty,0));
      const msg = `Hola Queentana, quiero hacer este pedido:%0A${lines.join('%0A')}%0ATotal: $${total}`;
      const phone = '521XXXXXXXXXX'; // <<< Reemplaza con tu número (con código país) ejemplo 52155...
      const url = `https://wa.me/${phone}?text=${msg}`;
      window.open(url, '_blank');
    });

    // Copiar BBVA
    document.getElementById('copy-bbva').addEventListener('click', ()=>{
      const data = `Cuenta: ${document.getElementById('bbva-account').innerText} \nCLABE: ${document.getElementById('bbva-clabe').innerText}`;
      navigator.clipboard.writeText(data).then(()=>{ alert('Datos BBVA copiados al portapapeles'); });
    });

    document.getElementById('bbva-btn').addEventListener('click', ()=>{ alert('Instrucciones: realiza la transferencia a los datos mostrados y envía el comprobante por WhatsApp para confirmar.'); });

    // Inicial render
    renderCart();
  </script>
</body>
</html>
