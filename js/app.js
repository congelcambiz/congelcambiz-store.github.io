const products = [
  {
    id:'nike-pegasus-42', brand:'Nike', name:'Pegasus 42', category:'tenis', tag:'Daily trainer', price:155.00,
    desc:'Tenis de carretera versátil para kilometraje diario.',
    image:'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/022d5196-6815-4288-b922-241a4c08d983/AIR%2BZOOM%2BPEGASUS%2B42%2BCM.png',
    source:'https://www.nike.com/t/pegasus-42-mens-road-running-shoes-YkxGlKa0'
  },
  {
    id:'nike-vaporfly-4', brand:'Nike', name:'Vaporfly 4', category:'tenis', tag:'Race day', price:234.97, oldPrice:270.00, sale:true,
    desc:'Modelo de competición ligero con placa para ritmos rápidos.',
    image:'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/5099975e-9d67-42dd-bfe3-1a18f13d1e95/ZOOMX%2BVAPORFLY%2BNEXT%25%2B4.png',
    source:'https://www.nike.com/t/vaporfly-4-mens-road-racing-shoes-HK05JWOf'
  },
  {
    id:'nike-structure-26', brand:'Nike', name:'Structure 26', category:'tenis', tag:'Stability', price:145.00,
    desc:'Soporte estable y amortiguación para rodajes de carretera.',
    image:'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/18aaef35-370f-4cbc-8a51-856f2f0b89e0/NIKE%2BSTRUCTURE%2B26.png',
    source:'https://www.nike.com/t/structure-26-mens-road-running-shoes-M4sx9fru'
  },
  {
    id:'asics-novablast-5', brand:'ASICS', name:'NOVABLAST 5', category:'tenis', tag:'Bounce', price:150.00,
    desc:'Sensación reactiva y amortiguada para entrenamientos diarios.',
    image:'https://images.asics.com/is/image/asics/1011B974_500_SL_LT_GLB?%24sfcc-product%24=',
    source:'https://www.asics.com/us/en-us/novablast--5/p/ANA_1011B974-500.html?size=13&width=Standard'
  },
  {
    id:'hoka-bondi-9', brand:'HOKA', name:'Bondi 9', category:'tenis', tag:'Max cushion', price:174.99,
    desc:'Amortiguación máxima para rodajes cómodos y recuperación.',
    image:'https://media.au.hoka.com/cdn-cgi/image/fit%3Dscale-down%2Cf%3Dauto%2Cw%3D1280/products/e2db3652-d1d1-4ec5-906d-5e1732b9fe24/a0915550/1162011-bblc_bblc_01.jpg',
    source:'https://au.hoka.com/products/m-bondi-9-1162011-bblc-bblc'
  },
  {
    id:'saucony-endorphin-speed-5', brand:'Saucony', name:'Endorphin Speed 5', category:'tenis', tag:'Speed', price:129.95, oldPrice:175.00, sale:true,
    desc:'Entrenamiento rápido y versátil para tempo y sesiones de calidad.',
    image:'https://thekit.wolverineworldwide.com/match/media_lookup/S21007-10_1/?preset=dw-altprodthm',
    source:'https://www.saucony.com/en/endorphin-speed-5/60307M.html?dwvar_60307M_color=S21007-140'
  },
  {
    id:'new-balance-1080v15', brand:'New Balance', name:'1080v15', category:'tenis', tag:'Cushion', price:169.99,
    desc:'Entrenador premium suave para uso diario y tiradas largas.',
    image:'https://nb.scene7.com/is/image/NB/m10807e3_nb_02_i?%24pdpflexf2%24=&hei=440&wid=440',
    source:'https://www.newbalance.com/pd/1080v15/M10807E3-B-08.html'
  },
  {
    id:'adidas-boston-13', brand:'adidas', name:'Adizero Boston 13', category:'tenis', tag:'Tempo', price:160.00,
    desc:'Entrenador de ritmo para velocidad, tempo y distancias largas.',
    image:'https://assets.adidas.com/images/w_500%2Cf_auto%2Cq_auto/181cc269605d429991c443652f4472fc_9366/Adizero_Boston_13_Running_Shoes_White_KK4991_01_00_standard.jpg',
    source:'https://www.adidas.com/us/adizero-boston-13-running-shoes/KK4991.html'
  },
  {
    id:'brooks-ghost-18', brand:'Brooks', name:'Ghost 18', category:'tenis', tag:'Daily trainer', price:150.00,
    desc:'Rodaje neutro con transición suave y ajuste cómodo.',
    image:'https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw3d84a72f/original/110493/110493-429-l-ghost-18-mens-neutral-cushion-running-shoe.jpg?bgcolor=F8F8F8&sfrm=png&sh=425&sm=fit&strip=false&sw=425',
    source:'https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/ghost-18/1104931D429.070.html'
  },
  {
    id:'feetures-elite-light', brand:'Feetures', name:'Elite Light Cushion No Show Tab', category:'medias', tag:'Socks', price:19.00,
    desc:'Media técnica ligera con ajuste anatómico y tab trasero.',
    image:'https://feetures.com/cdn/shop/files/Elite_LC_Tab_ArcticBlue_E50106935_1.jpg?v=1784293790&width=1600',
    source:'https://feetures.com/products/elite-light-cushion-no-show-tab?variant=39336333508680'
  },
  {
    id:'balega-hidden-comfort', brand:'Balega', name:'Hidden Comfort No Show Tab', category:'medias', tag:'Socks', price:17.00,
    desc:'Amortiguación cómoda y diseño no-show para correr.',
    image:'https://balega.com/cdn/shop/files/neon-blue-new.jpg?v=1742932783&width=1200',
    source:'https://balega.com/products/hidden-comfort-no-show-tab'
  },
  {
    id:'nike-run-lightweight-crew', brand:'Nike', name:'Run Lightweight Crew Socks', category:'medias', tag:'Socks', price:20.00,
    desc:'Calceta ligera de running, 1 par, con gestión de humedad.',
    image:'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/cd3b8b55-2749-4beb-a2ee-81734670998b/U%2BNK%2BLTWT%2BRUN%2BCREW%2B1PR%2B-%2B200.png',
    source:'https://www.nike.com/us/es/t/calcetas-de-correr-1par-run-lightweight-NJFhFI9M/HV6919-100'
  },
  {
    id:'nike-fly-cap', brand:'Nike', name:'Dri-FIT ADV Fly Cap', category:'gorras', tag:'Cap', price:47.00,
    desc:'Gorra de running ligera con tecnología de ventilación.',
    image:'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/08f2a140-2be7-46a8-a2a5-8fc3357b0e4b/U%2BNK%2BDFADV%2BFLY%2BCAP%2BU%2BAB%2BAEROAD.png',
    source:'https://www.nike.com/us/es/t/dri-fit-adv-fly-unstructured-aerobill-aeroadapt-cap-kv5CVX/FJ0736-100'
  },
  {
    id:'adidas-superlite-3', brand:'adidas', name:'Superlite 3 Hat', category:'gorras', tag:'Cap', price:28.00,
    desc:'Gorra deportiva ligera para entrenamientos al aire libre.',
    image:'https://assets.adidas.com/images/w_500%2Cf_auto%2Cq_auto/9b21f086bd0e4715b655fb95225555c9_9366/Superlite_3_Hat_Black_IU9184_01_standard.jpg',
    source:'https://www.adidas.com/us/superlite-3-hat/IU9184.html'
  },
  {
    id:'hydrapak-softflask-500', brand:'HydraPak', name:'SoftFlask Speed 500ml', category:'accesorios', tag:'Hydration', price:22.00,
    desc:'Botella flexible de 500 ml para hidratación durante la carrera.',
    image:'https://www.hydrapak.com/cdn/shop/files/SoftFlask_Speed_500ml_Front_HP26_HighRes.webp?v=1784654734&width=750',
    source:'https://www.hydrapak.com/products/softflask%E2%84%A2-speed-500ml'
  }
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const money = (n) => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n);
let filter = 'todos';
let query = '';
let cart = JSON.parse(localStorage.getItem('congelcambiz-cart') || '{}');

function productCard(p){
  return `<article class="product-card">
    <div class="product-image">
      <img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.style.opacity='.18';this.alt='Imagen externa temporalmente no disponible';">
      <span class="badge ${p.sale?'sale':''}">${p.sale?'OFERTA':p.tag}</span><span class="brand-pill">${p.brand}</span>
    </div>
    <div class="product-body">
      <span class="product-meta">${p.category} • ${p.tag}</span>
      <div class="product-name">${p.name}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="price-row"><span class="price">${money(p.price)}</span>${p.oldPrice?`<span class="old-price">${money(p.oldPrice)}</span>`:''}</div>
      <div class="product-actions">
        <button class="add-btn" data-add="${p.id}">Agregar al carrito</button>
        <a class="source-btn" href="${p.source}" target="_blank" rel="noopener noreferrer" title="Ver fuente oficial del producto">↗</a>
      </div>
    </div>
  </article>`;
}
function renderProducts(){
  const matches = products.filter(p => (filter==='todos'||p.category===filter) && `${p.brand} ${p.name} ${p.category} ${p.tag}`.toLowerCase().includes(query.toLowerCase()));
  $('#productGrid').innerHTML = matches.map(productCard).join('');
  $('#emptyState').hidden = matches.length>0;
  $$('[data-add]').forEach(btn=>btn.addEventListener('click',()=>addToCart(btn.dataset.add)));
}
function saveCart(){localStorage.setItem('congelcambiz-cart',JSON.stringify(cart));renderCart()}
function addToCart(id){cart[id]=(cart[id]||0)+1;saveCart();showToast();}
function changeQty(id,delta){cart[id]=(cart[id]||0)+delta;if(cart[id]<=0)delete cart[id];saveCart()}
function removeItem(id){delete cart[id];saveCart()}
function renderCart(){
  const entries=Object.entries(cart);
  const totalQty=entries.reduce((s,[,q])=>s+q,0);
  $('#cartCount').textContent=totalQty;
  $('#cartEmpty').style.display=entries.length?'none':'block';
  $('#cartItems').innerHTML=entries.map(([id,qty])=>{
    const p=products.find(x=>x.id===id); if(!p)return '';
    return `<div class="cart-item"><img src="${p.image}" referrerpolicy="no-referrer" alt="${p.name}"><div><strong>${p.brand} ${p.name}</strong><small>${money(p.price)}</small><div class="qty"><button data-dec="${id}">−</button><span>${qty}</span><button data-inc="${id}">+</button></div></div><button class="remove" data-remove="${id}" title="Eliminar">×</button></div>`;
  }).join('');
  const subtotal=entries.reduce((s,[id,qty])=>{const p=products.find(x=>x.id===id);return s+(p?p.price*qty:0)},0);
  $('#cartSubtotal').textContent=money(subtotal);
  $$('[data-dec]').forEach(b=>b.onclick=()=>changeQty(b.dataset.dec,-1));
  $$('[data-inc]').forEach(b=>b.onclick=()=>changeQty(b.dataset.inc,1));
  $$('[data-remove]').forEach(b=>b.onclick=()=>removeItem(b.dataset.remove));
}
function openCart(){ $('#cartDrawer').classList.add('open'); $('#overlay').classList.add('show'); $('#cartDrawer').setAttribute('aria-hidden','false'); }
function closeCart(){ $('#cartDrawer').classList.remove('open'); $('#overlay').classList.remove('show'); $('#cartDrawer').setAttribute('aria-hidden','true'); }
function showToast(){const t=$('#toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1600)}

$('#searchInput').addEventListener('input',e=>{query=e.target.value;renderProducts()});
$$('.filter').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;$$('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProducts()}));
$$('[data-category-jump]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.categoryJump;$$('.filter').forEach(x=>x.classList.toggle('active',x.dataset.filter===filter));renderProducts();$('#productos').scrollIntoView({behavior:'smooth'})}));
$('#cartBtn').onclick=openCart;$('#closeCart').onclick=closeCart;$('#overlay').onclick=closeCart;
$('#checkoutBtn').onclick=()=>alert('Checkout de demostración. Conecta Stripe, Shopify o tu proveedor de pagos antes de aceptar pagos reales.');
$('#menuBtn').onclick=()=>$('#mainNav').classList.toggle('open');

renderProducts();renderCart();
