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
        <div id="especial-dia" class="space-y-4">
          <!-- Specials added by JS -->
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
    // Data model
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
      // Ejemplo: cambia aquí los especiales del día
      { id: 'especial-1', name: 'Brownie especial', price: 28 },
      { id: 'especial-2', name: 'Galleta con chispas', price: 15 }
    ];

    // Cart
    let cart = [];

    // Utilities
    const $ = sel => document.querySelector(sel);
    const $$ = sel => document.querySelectorAll(sel);

    function format(n){ return '$' + n.toFixed(2); }

    // Render product card
    function createProductElement(p){
      const el = document.createElement('div');
      el.className = 'p-4 border rounded-lg flex flex-col gap-3';
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

          ${p.options ? `<div class="ml-auto">Opciones disponibles</div>` : '' }
        </div>

        <div class="options-area"></div>

        <div class="flex gap-2 mt-2">
          <button class="add-btn px-3 py-1 rounded-lg bg-white card">Agregar</button>
        </div>
      `;

      // fill options
      const optionsArea = el.querySelector('.options-area');
      if(p.options){
        if(p.options.size){
          const sizeSel = document.createElement('select');
          sizeSel.className = 'size-select p-1 border rounded';
          sizeSel.innerHTML = p.options.size.map(s=>`<option value="${s.k}" data-price="${s.price}">${s.label}</option>`).join('');
          const wrapper = document.createElement('div');
          wrapper.className = 'flex items-center gap-2';
          wrapper.innerHTML = '<label class="text-sm">Tamaño</label>';
          wrapper.appendChild(sizeSel);
          optionsArea.appendChild(wrapper);

          // if flavor required for agua de sabor
          const saborSel = document.createElement('select');
          saborSel.className = 'sabor-select p-1 border rounded';
          saborSel.innerHTML = `<option value="">-- Sabor --</option>` + p.options.sabor.map(s=>`<option value="${s}">${s}</option>`).join('');
          const saborWrapper = document.createElement('div');
          saborWrapper.className = 'mt-2';
          saborWrapper.appendChild(saborSel);
          optionsArea.appendChild(saborWrapper);
        }
        if(p.options.toppings){
          const topSel = document.createElement('select');
          topSel.className = 'topping-select p-1 border rounded';
          topSel.innerHTML = `<option value="">Sin topping</option>` + p.options.toppings.map(t=>`<option value="${t}">${t}</option>`).join('');
          const wrapper = document.createElement('div');
          wrapper.className = 'flex items-center gap-2';
          wrapper.innerHTML = '<label class="text-sm">Topping</label>';
          wrapper.appendChild(topSel);
          optionsArea.appendChild(wrapper);
        }
        if(p.options.sabor && !p.options.size){
          // gelatina flavor
          const saborSel = document.createElement('select');
          saborSel.className = 'sabor-select p-1 border rounded';
          saborSel.innerHTML = p.options.sabor.map(s=>`<option value="${s}">${s}</option>`).join('');
          optionsArea.appendChild(saborSel);
        }
      }

      // add event
      el.querySelector('.add-btn').addEventListener('click', ()=>{
        const qty = parseInt(el.querySelector('.qty-select').value);
        const item = { id: p.id, name: p.name, basePrice: p.price };
        // handle options
        if(p.options){
          if(p.options.size){
            const size = el.querySelector('.size-select').value;
            const selectedOption = p.options.size.find(s=>s.k===size);
            if(selectedOption) item.size = selectedOption.k, item.price = (selectedOption.price || 0);
            const sabor = el.querySelector('.sabor-select').value;
            if(sabor) item.sabor = sabor;
          }
          if(p.options.toppings){
            const topping = el.querySelector('.topping-select').value;
            if(topping) item.topping = topping;
            item.price = p.price; // yoghurt price
          }
          if(p.options.sabor && !p.options.size){
            // gelatina
            const sabor = el.querySelector('.sabor-select').value;
            if(sabor) item.sabor = sabor;
            item.price = p.price;
          }
        }
        if(!item.price) item.price = p.price;
        item.qty = qty;
        addToCart(item);
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

    function addToCart(item){
      // simple merge by id + options
      const key = JSON.stringify({id:item.id, size:item.size || '', sabor:item.sabor||'', topping:item.topping||''});
      const existing = cart.find(c=>c.key===key);
      if(existing){ existing.qty += item.qty; }
      else { cart.push({...item, key}); }
      updateCartUI();
    }

    function removeFromCart(key){ cart = cart.filter(i=>i.key!==key); updateCartUI(); }
    function clearCart(){ cart=[]; updateCartUI(); }

    function updateCartUI(){
      const count = cart.reduce((s,i)=>s+i.qty,0);
      $('#cart-count').textContent = count;
      const total = cart.reduce((s,i)=> s + (i.price * i.qty), 0);
      $('#cart-total').textContent = format(total);
      $('#drawer-total').textContent = format(total);

      const list = $('#cart-list'); list.innerHTML = '';
      cart.forEach(i=>{
        const li = document.createElement('li');
        li.className = 'flex justify-between items-start gap-2';
        li.innerHTML = `<div class="text-sm">
          <div class="font-medium">${i.name} ${i.size? '('+i.size+')':''} ${i.sabor?'- '+i.sabor:''} ${i.topping?'- '+i.topping:''}</div>
          <div class="text-[var(--muted)]">${i.qty} x ${format(i.price)}</div>
        </div>
        <div class="text-right">
          <div class="font-medium">${format(i.price * i.qty)}</div>
          <button class="remove text-xs mt-1">Eliminar</button>
        </div>`;
        li.querySelector('.remove').addEventListener('click', ()=> removeFromCart(i.key));
        list.appendChild(li);
      });

      // small animation to show drawer if items
      if(cart.length>0) $('#cart-drawer').classList.remove('hidden'); else $('#cart-drawer').classList.add('hidden');
    }

    // Buttons
    $('#cart-btn').addEventListener('click', ()=>{
      const drawer = $('#cart-drawer'); drawer.classList.toggle('hidden');
    });
    $('#close-cart').addEventListener('click', ()=> $('#cart-drawer').classList.add('hidden'));
    $('#clear-cart').addEventListener('click', ()=> clearCart());

    // Payment actions
    function buildWhatsAppMessage(){
      const lines = ['Hola, quisiera confirmar mi pedido desde Tiendita Escolar Queentana:'];
      cart.forEach(i=>{
        lines.push(`${i.qty}x ${i.name} ${i.size?('('+i.size+')'):''} ${i.sabor?('- '+i.sabor):''} ${i.topping?('- '+i.topping):''} - ${format(i.price * i.qty)}`);
      });
      const total = cart.reduce((s,i)=> s + (i.price * i.qty), 0);
      lines.push('Total: ' + format(total));
      return encodeURIComponent(lines.join('\n'));
    }

    $('#pay-whatsapp').addEventListener('click', ()=>{
      if(cart.length===0){ alert('El carrito está vacío. Agrega productos antes de pagar.'); return; }
      const phone = '5210000000000'; // reemplaza con tu número (ej: 521 + lada + número)
      const msg = buildWhatsAppMessage();
      const url = `https://wa.me/${phone}?text=${msg}`;
      window.open(url, '_blank');
    });

    $('#pay-bank').addEventListener('click', ()=>{
      $('#bank-modal').classList.remove('hidden');
    });
    $('#close-bank').addEventListener('click', ()=> $('#bank-modal').classList.add('hidden'));
    $('#bank-confirm').addEventListener('click', ()=>{
      // after user did transfer, open whatsapp to send comprobante + order
      $('#bank-modal').classList.add('hidden');
      const phone = '5210000000000';
      const msg = buildWhatsAppMessage() + encodeURIComponent('\nHe realizado la transferencia, adjunto comprobante.');
      const url = `https://wa.me/${phone}?text=${msg}`;
      window.open(url, '_blank');
    });

    // Init
    renderMenus();
    updateCartUI();

    // Small UX: close modal on outside click
    document.getElementById('bank-modal').addEventListener('click', (e)=>{ if(e.target.id==='bank-modal') e.currentTarget.classList.add('hidden'); });
  </script>
</body>
</html>
