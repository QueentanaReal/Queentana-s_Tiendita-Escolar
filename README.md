<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Tiendita Escolar Queentana</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root{
      --brand-bg: #F9F6F0;
      --text-dark: #1F1F1F;
      --accent-gold: #C69B4B;
      --muted: #7a7468;
    }
    body{background:var(--brand-bg); color:var(--text-dark);}
    .brand-gradient{background:linear-gradient(90deg, rgba(198,155,75,0.12), rgba(198,155,75,0.02));}
    .card {background: white; border-radius: 14px; box-shadow: 0 6px 18px rgba(31,31,31,0.06);}
    .accent {color: var(--accent-gold)}
  </style>
</head>
<body class="min-h-screen p-6 md:p-12">
  <header class="max-w-5xl mx-auto mb-8">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <!-- logo placeholder -->
        <div class="w-14 h-14 rounded-full brand-gradient flex items-center justify-center font-semibold text-lg">Q</div>
        <div>
          <h1 class="text-2xl md:text-3xl font-extrabold">Tiendita Escolar <span class="accent">Queentana</span></h1>
          <p class="text-sm text-[var(--muted)]">Dulces y antojos para tu día a día — con cariño y sazón real.</p>
        </div>
      </div>
      <nav>
        <button id="cart-btn" class="relative btn px-4 py-2 bg-white card hover:shadow-md rounded-lg">
          🛒 Carrito <span id="cart-count" class="ml-2 bg-[var(--accent-gold)] text-white rounded-full px-2 py-0.5 text-xs">0</span>
        </button>
      </nav>
    </div>
  </header>

  <main class="max-w-5xl mx-auto grid gap-8">
    <!-- Welcome -->
    <section class="card p-6 md:p-10">
      <div class="md:flex md:items-center md:justify-between">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold">Bienvenido a mi tiendita escolar</h2>
          <p class="mt-3 text-lg text-[var(--muted)]">Elige lo que más te apetezca hoy: desde un antojito calentito hasta una bebida refrescante. Todo preparado con cariño y listo para acompañarte en tu día. ¡Explora el menú y arma tu pedido!</p>
        </div>
        <div class="mt-6 md:mt-0 md:ml-6">
          <img src="" alt="imagen de la tiendita (opcional)" class="w-48 h-32 object-cover rounded-lg border" />
        </div>
      </div>
    </section>

    <!-- Sections -->
    <section class="grid md:grid-cols-2 gap-6">
      <!-- Menu Diario -->
      <div class="card p-6">
        <h3 class="text-2xl font-bold mb-4">Menu diario</h3>

        <div id="menu-diario" class="space-y-4">
          <!-- Product template will be injected by JS -->
        </div>
      </div>

      <!-- Especial del día -->
      <div class="card p-6">
        <h3 class="text-2xl font-bold mb-4">Especial del día</h3>
        <p class="text-sm text-[var(--muted)] mb-4">Aquí aparecen los productos especiales que cambiamos cada día. Puedes actualizar esta lista desde el código fácilmente.</p>
        <div id="especial-dia" class="flex gap-4 overflow-x-auto">
          <!-- Specials added by JS horizontally -->
        </div>
      </div>
    </section>

    <!-- Checkout & Payment info -->
    <section class="card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h4 class="font-semibold">Resumen del carrito</h4>
        <p class="text-sm text-[var(--muted)]">Los totales se actualizan automáticamente cuando agregas o quitas productos.</p>
      </div>
      <div class="ml-auto flex gap-3 items-center">
        <div class="text-right">
          <div class="text-sm text-[var(--muted)]">Total</div>
          <div id="cart-total" class="text-xl font-bold">$0.00</div>
        </div>
        <div class="flex gap-2">
          <button id="pay-whatsapp" class="px-4 py-2 rounded-lg card">Pagar por WhatsApp</button>
          <button id="pay-bank" class="px-4 py-2 rounded-lg bg-white card">Pagar por BBVA</button>
        </div>
      </div>
    </section>

  </main>

  <!-- Cart Drawer -->
  <div id="cart-drawer" class="fixed right-6 bottom-6 w-80 max-h-[70vh] overflow-y-auto card p-4 hidden">
    <h4 class="font-semibold mb-2">Tu carrito</h4>
    <ul id="cart-list" class="space-y-3 text-sm"></ul>
    <div class="mt-4 flex justify-between items-center">
      <div>Total:</div>
      <div id="drawer-total" class="font-bold">$0.00</div>
    </div>
    <div class="mt-3 flex gap-2">
      <button id="close-cart" class="flex-1 px-3 py-2 rounded-lg">Cerrar</button>
      <button id="clear-cart" class="flex-1 px-3 py-2 rounded-lg bg-white card">Vaciar</button>
    </div>
  </div>

  <!-- Modal for BBVA details -->
  <div id="bank-modal" class="fixed inset-0 bg-black/40 flex items-center justify-center hidden">
    <div class="bg-white p-6 rounded-lg w-[90%] max-w-md card">
      <h4 class="font-bold mb-2">Pago por transferencia (BBVA)</h4>
      <p class="text-sm text-[var(--muted)] mb-4">Usa los siguientes datos para realizar tu pago y luego confirma en WhatsApp con la foto del comprobante.</p>
      <div class="bg-gray-50 p-4 rounded">
        <p><strong>Banco:</strong> BBVA</p>
        <p><strong>Titular:</strong> Queentana Real (Tu nombre)</p>
        <p><strong>Cuenta CLABE:</strong> 012345678901234567</p>
        <p><strong>Referencia:</strong> Pedido Tiendita Escolar</p>
      </div>
      <div class="mt-4 flex gap-2 justify-end">
        <button id="close-bank" class="px-3 py-2 rounded-lg">Cerrar</button>
        <button id="bank-confirm" class="px-3 py-2 rounded-lg bg-white card">Confirmar y enviar por WhatsApp</button>
      </div>
    </div>
  </div>

  <script>
    const menuDiario = [
      { id: 'mini-torta', name: 'Mini torta de pan blanco', price: 13 },
      { id: 'moyete', name: 'Moyete', price: 13 },
      { id: 'burritos', name: 'Burritos (guisado variado)', price: 24 },
      { id: 'fruta', name: 'Fruta', price: 25 },
      { id: 'jugo', name: 'Jugo', price: 12 },
      { id: 'papas', name: 'Papas caseras', price: 32 },
      { id: 'agua', name: 'Agua', price: 0, options: {
        size: [{k:'chica', label:'Chica $6', price:6},{k:'grande', label:'Grande $12', price:12},{k:'sabor', label:'Agua de sabor $25', price:25}],
        sabor: ['Jamaica','Horchata','Piña colada','Limón','Sandía','Melón']
      }},
      { id: 'yoghurt', name: 'Yoghurt', price: 18, options: { toppings: ['Cacahuate','Chispas payaso','Chispas de chocolate','Nuez','Miel'] }},
      { id: 'gelatina', name: 'Gelatina', price: 12, options: { sabor: ['Limón','Piña','Fresa','Durazno','Mango'] }},
    ];

    const especialDia = [
      { id: 'especial-1', name: 'Brownie especial', price: 28 },
      { id: 'especial-2', name: 'Galleta con chispas', price: 15 }
    ];

    let cart = [];

    const $ = sel => document.querySelector(sel);
    function format(n){ return '$' + n.toFixed(2); }

    function createProductElement(p){
      const el = document.createElement('div');
      el.className = 'p-4 border rounded-lg flex flex-col gap-3 min-w-[200px]';
      el.innerHTML = `
        <div class="flex justify-between items-start">
          <div>
            <div class="font-semibold">${p.name}</div>
            <div class="text-sm text-[var(--muted)]">${p.price>0 ? format(p.price) : ''}</div>
          </div>
        </div>

        <div class="flex gap-2 items-center">
          <label class="text-sm">Cantidad</label>
          <select class="qty-select p-1 border rounded">
            ${[1,2,3,4,5].map(q=>`<option value="${q}">${q}</option>`).join('')}
          </select>
        </div>

        <div class="options-area"></div>

        <div class="flex gap-2 mt-2">
          <button class="add-btn px-3 py-1 rounded-lg bg-white card">Agregar</button>
        </div>
      `;

      const optionsArea = el.querySelector('.options-area');
      if(p.options){
        if(p.options.size){
          const sizeSel = document.createElement('select');
          sizeSel.className = 'size-select p-1 border rounded';
          sizeSel.innerHTML = p.options.size.map(s=>`<option value="${s.k}" data-price="${s.price}">${s.label}</option>`).join('');
          optionsArea.appendChild(sizeSel);
          const saborSel = document.createElement('select');
          saborSel.className = 'sabor-select p-1 border rounded';
          saborSel.innerHTML = `<option value="">-- Sabor --</option>` + p.options.sabor.map(s=>`<option value="${s}">${s}</option>`).join('');
          optionsArea.appendChild(saborSel);
        }
        if(p.options.toppings){
          const topSel = document.createElement('select');
          topSel.className = 'topping-select p-1 border rounded';
          topSel.innerHTML = `<option value="">Sin topping</option>` + p.options.toppings.map(t=>`<option value="${t}">${t}</option>`).join('');
          optionsArea.appendChild(topSel);
        }
        if(p.options.sabor && !p.options.size){
          const saborSel = document.createElement('select');
          saborSel.className = 'sabor-select p-1 border rounded';
          saborSel.innerHTML = p.options.sabor.map(s=>`<option value="${s}">${s}</option>`).join('');
          optionsArea.appendChild(saborSel);
        }
      }

      el.querySelector('.add-btn').addEventListener('click', ()=>{
        const qty = parseInt(el.querySelector('.qty-select').value);
        const item = { id: p.id, name: p.name, price: p.price, qty };
        cart.push(item);
        updateCartUI();
      });

      return el;
    }

    function renderMenus(){
      const diario = document.getElementById('menu-diario');
      diario.innerHTML = '';
      menuDiario.forEach(p=> diario.appendChild(createProductElement(p)));

      const especial = document.getElementById('especial-dia');
      especial.innerHTML = '';
      especialDia.forEach(p=> especial.appendChild(createProductElement(p)));
    }

    function updateCartUI(){
      const total = cart.reduce((s,i)=> s + (i.price * i.qty), 0);
      document.getElementById('cart-count').textContent = cart.length;
      document.getElementById('cart-total').textContent = format(total);
      document.getElementById('drawer-total').textContent = format(total);
    }

    renderMenus();
  </script>
</body>
</html>
