<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Tiendita Escolar Queentana</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root{
      --brand-bg: #F9F6F0;
      --accent-gold: #C69B4B;
      --text-dark: #1F1F1F;
    }
    body{background:var(--brand-bg); color:var(--text-dark);}    
    .card{background:white;border-radius:14px;box-shadow:0 6px 18px rgba(0,0,0,0.06);} 
    .accent{color:var(--accent-gold)}
  </style>
</head>
<body class="min-h-screen font-sans p-6">
  <header class="max-w-6xl mx-auto mb-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold">Tiendita Escolar <span class="accent">Queentana</span></h1>
        <p class="text-sm text-gray-600">Dulces, snacks y bebidas listas para alegrar tu día</p>
      </div>
      <nav>
        <button id="cartToggle" class="bg-white card px-4 py-2 rounded-lg shadow">Ver carrito (<span id="cartCount">0</span>)</button>
      </nav>
    </div>
  </header>

  <main class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Hero / Bienvenida -->
    <section class="lg:col-span-2 card p-6">
      <h2 class="text-2xl font-semibold mb-2">¡Bienvenido a la Tiendita Escolar, cortesía de <span class="accent">Queentana</span>!</h2>
      <p class="text-gray-700 mb-4">Hoy es un buen día para consentirte: elige lo que más te apetezca, agrega al carrito y confirma tu pedido por WhatsApp. Si prefieres pagar por banco, también tenemos la opción BBVA para facilitarte la vida (y los antojos).</p>
      <p class="text-sm text-gray-500 italic">Pro tip: selecciona sabores y toppings para personalizar — la tiendita es tuya por un día, reina/reinado del recreo 🎉</p>

      <!-- Sección 1: Menu diario -->
      <div class="mt-6">
        <h3 class="text-xl font-bold mb-3">Menu diario</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Product: Mini torta de pastel blanco -->
          <div class="p-4 card">
            <h4 class="font-semibold">Mini torta de pastel blanco</h4>
            <p class="text-sm text-gray-600">Deliciosa porción individual.</p>
            <p class="mt-2 font-bold">$13</p>
            <div class="mt-3 flex items-center gap-2">
              <label class="text-sm">Cantidad</label>
              <select id="qty-mini-torta" class="px-2 py-1 border rounded">
                <option>1</option><option>2</option><option>3</option><option>4</option>
              </select>
              <button class="ml-auto btn-add bg-[var(--accent-gold)] text-white px-3 py-1 rounded" data-product='{"id":"mini-torta","name":"Mini torta de pastel blanco","price":13}'>Agregar</button>
            </div>
          </div>

          <!-- Moyete -->
          <div class="p-4 card">
            <h4 class="font-semibold">Moyete</h4>
            <p class="text-sm text-gray-600">Clásico y reconfortante.</p>
            <p class="mt-2 font-bold">$13</p>
            <div class="mt-3 flex items-center gap-2">
              <label class="text-sm">Cantidad</label>
              <select id="qty-moyete" class="px-2 py-1 border rounded">
                <option>1</option><option>2</option><option>3</option>
              </select>
              <button class="ml-auto btn-add bg-[var(--accent-gold)] text-white px-3 py-1 rounded" data-product='{"id":"moyete","name":"Moyete","price":13}'>Agregar</button>
            </div>
          </div>

          <!-- Burritos -->
          <div class="p-4 card">
            <h4 class="font-semibold">Burritos</h4>
            <p class="text-sm text-gray-600">Guisado variado (elige en caja al confirmar).</p>
            <p class="mt-2 font-bold">$24</p>
            <div class="mt-3 flex items-center gap-2">
              <label class="text-sm">Cantidad</label>
              <select id="qty-burritos" class="px-2 py-1 border rounded">
                <option>1</option><option>2</option><option>3</option>
              </select>
              <button class="ml-auto btn-add bg-[var(--accent-gold)] text-white px-3 py-1 rounded" data-product='{"id":"burritos","name":"Burritos","price":24}'>Agregar</button>
            </div>
          </div>

          <!-- Fruta -->
          <div class="p-4 card">
            <h4 class="font-semibold">Fruta</h4>
            <p class="text-sm text-gray-600">Porción fresca.</p>
            <p class="mt-2 font-bold">$25</p>
            <div class="mt-3 flex items-center gap-2">
              <label class="text-sm">Cantidad</label>
              <select id="qty-fruta" class="px-2 py-1 border rounded">
                <option>1</option><option>2</option>
              </select>
              <button class="ml-auto btn-add bg-[var(--accent-gold)] text-white px-3 py-1 rounded" data-product='{"id":"fruta","name":"Fruta","price":25}'>Agregar</button>
            </div>
          </div>

          <!-- Jugo -->
          <div class="p-4 card">
            <h4 class="font-semibold">Jugo</h4>
            <p class="text-sm text-gray-600">Natural o preparado.</p>
            <p class="mt-2 font-bold">$12</p>
            <div class="mt-3 flex items-center gap-2">
              <label class="text-sm">Cantidad</label>
              <select id="qty-jugo" class="px-2 py-1 border rounded">
                <option>1</option><option>2</option>
              </select>
              <button class="ml-auto btn-add bg-[var(--accent-gold)] text-white px-3 py-1 rounded" data-product='{"id":"jugo","name":"Jugo","price":12}'>Agregar</button>
            </div>
          </div>

          <!-- Papás caseras -->
          <div class="p-4 card">
            <h4 class="font-semibold">Papás caseras</h4>
            <p class="text-sm text-gray-600">Crujientes y doradas.</p>
            <p class="mt-2 font-bold">$32</p>
            <div class="mt-3 flex items-center gap-2">
              <label class="text-sm">Cantidad</label>
              <select id="qty-papas" class="px-2 py-1 border rounded">
                <option>1</option><option>2</option>
              </select>
              <button class="ml-auto btn-add bg-[var(--accent-gold)] text-white px-3 py-1 rounded" data-product='{"id":"papas","name":"Papás caseras","price":32}'>Agregar</button>
            </div>
          </div>

          <!-- Agua (con variantes) -->
          <div class="p-4 card">
            <h4 class="font-semibold">Agua</h4>
            <p class="text-sm text-gray-600">Elige tipo y sabor.</p>
            <div class="mt-3 space-y-2">
              <label class="text-sm">Tipo</label>
              <select id="agua-tipo" class="px-2 py-1 border rounded w-full">
                <option value="chica">Agua chica — $6</option>
                <option value="grande">Agua grande — $12</option>
                <option value="sabor">Agua de sabor — $25</option>
              </select>

              <div id="agua-sabores-group" class="hidden">
                <label class="text-sm">Sabor</label>
                <select id="agua-sabor" class="px-2 py-1 border rounded w-full">
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
                <select id="qty-agua" class="px-2 py-1 border rounded">
                  <option>1</option><option>2</option><option>3</option>
                </select>
                <button id="add-agua" class="ml-auto bg-[var(--accent-gold)] text-white px-3 py-1 rounded">Agregar</button>
              </div>
            </div>
          </div>

          <!-- Yoghurt (toppings) -->
          <div class="p-4 card">
            <h4 class="font-semibold">Yoghurt</h4>
            <p class="text-sm text-gray-600">Con toppings a elección.</p>
            <p class="mt-2 font-bold">$18</p>
            <div class="mt-3">
              <label class="text-sm">Toppings (marca los que quieras)</label>
              <div class="grid grid-cols-2 gap-2 mt-2">
                <label class="inline-flex items-center"><input type="checkbox" value="Cacahuate" class="topping"> <span class="ml-2">Cacahuate</span></label>
                <label class="inline-flex items-center"><input type="checkbox" value="Chispas payaso" class="topping"> <span class="ml-2">Chispas payaso</span></label>
                <label class="inline-flex items-center"><input type="checkbox" value="Chispas de chocolate" class="topping"> <span class="ml-2">Chispas de chocolate</span></label>
                <label class="inline-flex items-center"><input type="checkbox" value="Nuez" class="topping"> <span class="ml-2">Nuez</span></label>
                <label class="inline-flex items-center"><input type="checkbox" value="Miel" class="topping"> <span class="ml-2">Miel</span></label>
              </div>

              <div class="mt-3 flex items-center gap-2">
                <label class="text-sm">Cantidad</label>
                <select id="qty-yoghurt" class="px-2 py-1 border rounded">
                  <option>1</option><option>2</option>
                </select>
                <button id="add-yoghurt" class="ml-auto bg-[var(--accent-gold)] text-white px-3 py-1 rounded">Agregar</button>
              </div>
            </div>
          </div>

          <!-- Gelatina -->
          <div class="p-4 card">
            <h4 class="font-semibold">Gelatina</h4>
            <p class="text-sm text-gray-600">Sabores variados.</p>
            <p class="mt-2 font-bold">$12</p>
            <div class="mt-3">
              <label class="text-sm">Sabor</label>
              <select id="gelatina-sabor" class="px-2 py-1 border rounded w-full">
                <option>Limón</option>
                <option>Piña</option>
                <option>Fresa</option>
                <option>Durazno</option>
                <option>Mango</option>
              </select>

              <div class="mt-3 flex items-center gap-2">
                <label class="text-sm">Cantidad</label>
                <select id="qty-gelatina" class="px-2 py-1 border rounded">
                  <option>1</option><option>2</option>
                </select>
                <button id="add-gelatina" class="ml-auto bg-[var(--accent-gold)] text-white px-3 py-1 rounded">Agregar</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Sección 2: Especial del día -->
      <div class="mt-8 p-4 card">
        <h3 class="text-xl font-bold mb-2">Especial del día</h3>
        <div class="flex flex-col md:flex-row items-center gap-4">
          <div class="flex-1">
            <h4 class="font-semibold">Combo Queentana — Torta + Agua de sabor</h4>
            <p class="text-sm text-gray-600">Nuestra recomendación de hoy: sabores frescos y porción perfecta para recuperar energías.</p>
            <p class="mt-2 font-bold">$30 (oferta especial)</p>
          </div>
          <div class="">
            <button id="add-especial" class="bg-[var(--accent-gold)] text-white px-4 py-2 rounded">Agregar especial</button>
          </div>
        </div>
      </div>

    </section>

    <!-- Sidebar: Carrito & Pago -->
    <aside class="card p-4">
      <h3 class="text-xl font-bold">Carrito</h3>
      <div id="cartItems" class="mt-3 space-y-2 max-h-72 overflow-auto"></div>

      <div class="mt-4 border-t pt-3">
        <p class="font-semibold">Total: $<span id="cartTotal">0</span></p>

        <div class="mt-3 flex gap-2">
          <button id="payWhatsapp" class="flex-1 bg-green-600 text-white px-3 py-2 rounded">Pagar por WhatsApp</button>
        </div>

        <div class="mt-3">
          <p class="text-sm font-semibold">Pagar por transferencia (BBVA)</p>
          <p class="text-sm text-gray-700">Titular: <strong>Queentana Real</strong></p>
          <p class="text-sm">Cuenta: <strong id="bbva-account">[REEMPLAZA-ESTE-NUMERO]</strong></p>
          <button id="copyAccount" class="mt-2 px-3 py-1 bg-gray-200 rounded">Copiar número</button>
        </div>
      </div>
    </aside>

  </main>

  <footer class="max-w-6xl mx-auto mt-6 text-center text-sm text-gray-600">
    <p>Gracias por apoyar mi tiendita — Queentana Real. Cambia el número de WhatsApp y la cuenta BBVA en el código para recibir pedidos reales.</p>
  </footer>

  <script>
    // --- Datos y helpers ---
    const cart = [];
    const cartCountEl = document.getElementById('cartCount');
    const cartItemsEl = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');

    function updateCartUI(){
      cartItemsEl.innerHTML = '';
      let total = 0;
      cart.forEach((it, idx) => {
        const row = document.createElement('div');
        row.className = 'flex items-center gap-2 p-2 bg-gray-50 rounded';
        row.innerHTML = `
          <div class="flex-1 text-sm">
            <div class="font-semibold">${it.name}</div>
            <div class="text-xs text-gray-600">${it.meta || ''}</div>
            <div class="text-sm">$${it.price} x ${it.qty} = $${(it.price*it.qty).toFixed(2)}</div>
          </div>
          <div class="flex items-center gap-1">
            <button data-idx="${idx}" class="btn-dec px-2 py-1 bg-gray-200 rounded">-</button>
            <button data-idx="${idx}" class="btn-inc px-2 py-1 bg-gray-200 rounded">+</button>
            <button data-idx="${idx}" class="btn-rem px-2 py-1 bg-red-200 rounded">x</button>
          </div>
        `;
        cartItemsEl.appendChild(row);
        total += it.price * it.qty;
      });
      cartCountEl.textContent = cart.reduce((s,i)=>s+i.qty,0);
      cartTotalEl.textContent = total.toFixed(2);

      // bind buttons
      document.querySelectorAll('.btn-rem').forEach(b=>b.onclick = (e)=>{ const i = +e.target.dataset.idx; cart.splice(i,1); updateCartUI(); });
      document.querySelectorAll('.btn-inc').forEach(b=>b.onclick = (e)=>{ const i = +e.target.dataset.idx; cart[i].qty++; updateCartUI(); });
      document.querySelectorAll('.btn-dec').forEach(b=>b.onclick = (e)=>{ const i = +e.target.dataset.idx; if(cart[i].qty>1) cart[i].qty--; else cart.splice(i,1); updateCartUI(); });
    }

    // Add product generic
    document.querySelectorAll('.btn-add').forEach(btn => {
      btn.addEventListener('click', ()=>{
        const prod = JSON.parse(btn.dataset.product);
        // find quantity select nearby by id convention
        const qtySelect = document.getElementById('qty-' + prod.id.split('-')[0]);
        let qty = 1;
        if(qtySelect) qty = parseInt(qtySelect.value);
        addToCart({id:prod.id,name:prod.name,price:prod.price,qty:qty});
      });
    });

    function addToCart(item){
      // if same product + same meta, merge
      const existing = cart.find(c=>c.id===item.id && c.meta===item.meta);
      if(existing) existing.qty += item.qty;
      else cart.push(item);
      updateCartUI();
    }

    // Agua logic
    const aguaTipo = document.getElementById('agua-tipo');
    const aguaSaboresGroup = document.getElementById('agua-sabores-group');
    const addAgua = document.getElementById('add-agua');

    function aguaPrice(tipo){
      if(tipo==='chica') return 6;
      if(tipo==='grande') return 12;
      return 25; // sabor
    }

    aguaTipo.addEventListener('change', ()=>{
      if(aguaTipo.value === 'sabor') aguaSaboresGroup.classList.remove('hidden');
      else aguaSaboresGroup.classList.add('hidden');
    });

    addAgua.addEventListener('click', ()=>{
      const tipo = aguaTipo.value;
      const sabor = document.getElementById('agua-sabor').value;
      const qty = parseInt(document.getElementById('qty-agua').value);
      const price = aguaPrice(tipo);
      const name = tipo === 'sabor' ? `Agua de sabor (${sabor})` : `Agua ${tipo}`;
      addToCart({id:'agua-'+tipo,name,price,qty,meta: sabor || tipo});
    });

    // Yoghurt logic
    document.getElementById('add-yoghurt').addEventListener('click', ()=>{
      const toppings = Array.from(document.querySelectorAll('.topping:checked')).map(i=>i.value);
      const qty = parseInt(document.getElementById('qty-yoghurt').value);
      const price = 18;
      const meta = toppings.length ? 'Toppings: ' + toppings.join(', ') : 'Sin toppings';
      addToCart({id:'yoghurt',name:'Yoghurt',price,qty,meta});
    });

    // Gelatina
    document.getElementById('add-gelatina').addEventListener('click', ()=>{
      const sabor = document.getElementById('gelatina-sabor').value;
      const qty = parseInt(document.getElementById('qty-gelatina').value);
      addToCart({id:'gelatina',name:`Gelatina (${sabor})`,price:12,qty,meta:sabor});
    });

    // Especial
    document.getElementById('add-especial').addEventListener('click', ()=>{
      addToCart({id:'especial',name:'Combo Queentana (especial del día)',price:30,qty:1});
    });

    // Botones individuales: ejemplo para otros productos (hacer mapping si hace falta)
    // Aquí resolvemos botones .btn-add que usan data-product

    // Pago por WhatsApp
    document.getElementById('payWhatsapp').addEventListener('click', ()=>{
      if(cart.length===0){ alert('Tu carrito está vacío. Agrega algo antes de pagar.'); return; }
      const phone = '52REPLACEPHONE'; // <<--- REEMPLAZA con tu número (ej: 521234567890)
      let text = 'Hola%20Queentana!%20Quiero%20hacer%20un%20pedido:%0A';
      cart.forEach(it=>{
        text += encodeURIComponent(`- ${it.qty} x ${it.name}`) + '%0A';
        if(it.meta) text += encodeURIComponent(`  -> ${it.meta}`) + '%0A';
      });
      text += encodeURIComponent(`Total: $${parseFloat(cartTotalEl.textContent).toFixed(2)}`);
      const url = `https://wa.me/${phone}?text=${text}`;
      window.open(url,'_blank');
    });

    // Copiar cuenta BBVA
    document.getElementById('copyAccount').addEventListener('click', ()=>{
      const account = document.getElementById('bbva-account').textContent;
      navigator.clipboard.writeText(account).then(()=>{
        alert('Número de cuenta copiado: ' + account);
      },()=>{ alert('No se pudo copiar el número. Selecciónalo manualmente.'); });
    });

    // Cart toggle button
    document.getElementById('cartToggle').addEventListener('click', ()=>{
      window.scrollTo({top:0,behavior:'smooth'});
      // simple focus on cart by highlighting
      const sidebar = document.querySelector('aside');
      sidebar.classList.add('ring-4','ring-yellow-100');
      setTimeout(()=>sidebar.classList.remove('ring-4','ring-yellow-100'),1000);
    });

    // Example: add small products when their buttons used (handled earlier). For products that used btn-add and custom qty ids, we already wired them.

    // Small UX: warn user to replace placeholders
    (function showPlaceholdersNotice(){
      const acct = document.getElementById('bbva-account');
      acct.textContent = '[BBVA-1234567890]';
      // Reminder: replace phone & account in code
      console.log('Reemplaza el número de WhatsApp (variable phone) y el número BBVA (id bbva-account) en el HTML para recibir pedidos reales.');
    })();

  </script>
</body>
</html>
