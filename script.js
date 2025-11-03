// ----------------- Product Data -----------------
const PRODUCTS = [
  {id: 101, title: "Headphones",category: "Electronics", price: 459, old: 1999, rating: 3.9, img:"images/headphones1.jpg",desc: "Clear,immersive sound for music and calls."},
  { id: 102, title: "Wireless Earbuds", category: "Electronics", price: 1299, old: 2499, rating: 4.3, img:"images/earbuds1.jpg", desc: "Compact,free audio experience."},
  { id: 103, title: "Smartwatch", category: "Electronics", price:2599, old: 3899, rating: 4.0, img:"images/smartwatch1.jpg", desc: "Track fitness,time and notifications on your wrist."},
  { id: 114, title: "Wireless Charger Pad", category: "Electronics", price: 699, old: 1199, rating: 4.0, img: "images/charger1.jpg", desc: "Fast Qi wireless charging."},
  { id: 115, title: "Home theatres ", category: "Electronics", price: 1500, old: 2400, rating: 4.3, img:"images/hometheatre1.jpg" , desc: "Powerful surround sound for your home."},
  { id: 116, title: "Wired earphones", category: "Electronics", price: 499, old: 1099, rating: 4.0, img: "images/earphones1.jpg", desc: "High quality sound with reliable connection."},
  { id: 117, title: "Mobile speaker", category: "Electronics", price: 1200, old: 1399 ,rating: 4.4, img: "images/speaker1.jpg", desc: "Portable speaker for on-the-go music."},
  { id: 118, title: "Power bank", category: "Electronics", price: 899, old: 1999, rating: 4.2, img: "images/power1.jpg", desc: "Keeps your device charged anytime."},

  { id: 105, title: "Women Straight Fit Jeans", category: "Fashion", price: 404, old: 2499, rating: 4.0, img: "images/jeans1.jpg", desc: "Versatile straight fit for daily wear."},
  { id: 106, title: "Mens Formal",category: "Fashion", price: 599, old: 999, rating: 4.0, img: "images/shirt1.jpg", desc:"Sharp outfits for office or events."},
  { id: 107, title: "Mens Hoodie", category: "Fashion", price: 699, old: 1199, rating: 4.0, img: "images/hoodie1.jpg", desc: "Cozy causal wear for all seasons."},
  { id: 113, title: "Women Kurtis", category: "Fashion", price: 589, old: 2100, rating: 4.5, img: "images/kurta1.jpg", desc: "Traditional yet trendy ethnic wear."},
  { id: 119, title: "Women shoes", category: "Fashion", price: 399, old: 1500, rating: 3.0, img: "images/shoes1.jpg", desc: "Stylish and comfortable footwear."},
  { id: 104, title: "Mens shoes", category: "Fashion", price: 799, old: 1049, rating: 4.1, img: "images/men1.jpg", desc: "Durable shoes for work or causal wear."},
  { id: 110, title: "Sun glasses", category: "Fashion", price: 299, old: 400, rating: 4.0, img: "images/sunglass1.jpg", desc: "UV protection with trendy look."},
  { id: 112, title: "Womens flats", category: "Fashion", price: 499, old: 899, rating: 4.2, img: "images/flat1.jpg", desc: "Elegant flats for all-day comfort."},
  
  { id: 203, title: "Protective Phone Case", category: "Accessories", price: 599, old: 1499, rating: 5.0, img: "images/case1.jpg", desc: "Shock-absorbing and stylish phone case."},
  { id: 206, title: "Canvas Handbag", category: "Accessories", price: 749, old: 1299, rating: 4.5, img: "images/bag1.jpg", desc: "Spacious and eco-friendly tote."},
  { id: 215, title: "Perfume (Fresh)", category: "Accessories", price: 699, old: 1099, rating: 4.4, img: "images/perfume1.jpg", desc: "Long-lasting fresh scent."},
  { id: 209, title: "Travel Backpack", category: "Accessories", price: 2199, old: 3999, rating: 4.3, img: "images/bag2.jpg", desc: "Spacious and sturdy for travel essentials."},
  { id: 109, title: "Jewellery set", category: "Accessories", price: 2199, old: 3999, rating: 4.3, img: "images/jewel1.jpg" ,desc: "Elegant accessories for special occasions."},
  { id: 409, title: "Earrings", category: "Accessories", price: 199, old: 399, rating: 4.3, img: "images/earrings1.jpg", desc: "Add sparkle to any outfit."},
  { id: 309, title: "Anklets", category: "Accessories", price: 289, old: 899, rating: 4.3, img: "images/anklets1.jpg", desc: "Stylish accessory for your feet."},
  { id: 399, title: " Girls Watch", category: "Accessories", price: 289, old: 899, rating: 3.3, img: "images/watch1.jpg", desc: "Looks stylish on your wrist."},

  { id: 100, title: "Scented Candle Set", category: "Home", price: 599, old: 899, rating: 4.7, img: "images/candle1.jpg", desc: "Relaxing fragrance set."},
  { id: 128, title: "Ceramic Plant Pot", category: "Home", price: 349, old: 599, rating: 4.5, img: "images/pot1.jpg", desc: "Minimal ceramic planter."},
  { id: 130, title: "Yoga Mat (Eco)", category: "Fitness", price: 799, old: 1299, rating: 4.6, img: "images/mat1.jpg", desc: "Non-slip eco-friendly mat."},
  { id: 111, title: "Desk Lamp LED", category: "Home", price: 1299, old: 1999, rating: 4.0, img: "images/lamp1.jpg", desc: "Adjustable brightness lamp."},
  { id: 119, title: "Stainless Steel Bottle", category: "Home", price: 499, old: 899, rating: 4.2, img: "images/bottle1.jpg", desc: "Keeps drinks cold for 12h."},
  { id: 212, title: "lights", category: "Home", price: 499, old: 899, rating: 4.2, img: "images/lights1.jpg", desc: "Gives brighter view."},
  { id: 216, title: "kitchen set", category: "Home", price: 609, old: 1999, rating: 4.3, img: "images/set1.jpg", desc: "Complete set of cooking essentials for every home."},
  { id: 413, title: "Wall decor", category: "Home", price: 1500, old: 1999, rating: 4.3, img: "images/wall1.jpg", desc: "Gives perfectlook to your wall."},
  { id: 349, title: "Kitchen Container", category: "Home", price: 349, old: 799, rating: 4.3, img: "images/container1.jpg", desc: "Stores many things in one box."},
];


// ----------------- Utilities -----------------
const $ = (sel) => document.querySelector(sel);
const $all = (sel) => Array.from(document.querySelectorAll(sel));
const formatIN = (n) => "₹" + n.toLocaleString("en-IN");

// Cart stored in localStorage as array of items with qty: [{id, qty}]
function readCart(){ return JSON.parse(localStorage.getItem("ps_cart") || "[]"); }
function saveCart(cart){ localStorage.setItem("ps_cart", JSON.stringify(cart)); updateMiniCount(); }

// Users stored in localStorage as [{name,email,password}]
function readUsers(){ return JSON.parse(localStorage.getItem("ps_users") || "[]"); }
function saveUsers(users){ localStorage.setItem("ps_users", JSON.stringify(users)); }

// Logged-in user
function currentUser(){ return JSON.parse(localStorage.getItem("ps_user") || "null"); }
function setUser(u){ localStorage.setItem("ps_user", JSON.stringify(u)); updateAccountLink(); }

// Update mini cart count in header
function updateMiniCount(){
  const cart = readCart();
  const total = cart.reduce((s,i)=>s+i.qty,0);
  $all("#miniCount,#miniCount2,#miniCount3,#miniCount4,#miniCount5,#miniCount6").forEach(el => { if(el) el.textContent = total; });
  const target = $("#miniCount") || $("#miniCount3");
  if($("#miniCount")) $("#miniCount").textContent = total;
}

// ----------------- Page renderers -----------------
function renderHome(){
  const grid = $("#homeGrid");
  if(!grid) return;
  grid.innerHTML = "";
  // show 6 featured
  PRODUCTS.slice(0,6).forEach(p => {
    const card = document.createElement("div"); card.className = "product-card card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h4>${p.title}</h4>
      <div class="muted">${p.category} · ${p.rating} ★</div>
      <div style="margin-top:8px;font-weight:800">${formatIN(p.price)} <span class="muted" style="text-decoration:line-through;font-weight:400"> ${formatIN(p.old)}</span></div>
      <div class="controls">
        <button class="btn" onclick="viewProduct(${p.id})">View</button>
        <button class="btn primary" onclick="addToCart(${p.id},1)">Add</button>
      </div>`;
    grid.appendChild(card);
  });
}

function renderCategories(){
  const list = $("#categoryList");
  if(!list) return;
  const cats = Array.from(new Set(PRODUCTS.map(p=>p.category)));
  list.innerHTML = "";
  cats.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    li.onclick = () => location.href = `products.html?cat=${encodeURIComponent(c)}`;
    list.appendChild(li);
  });
  // recently viewed placeholder
  const recent = $("#recent");
  if(recent){
    recent.innerHTML = PRODUCTS.slice(0,5).map(p=>`<div class="card small"><img src="${p.img}" style="width:80px;height:80px;border-radius:8px"><div>${p.title}</div></div>`).join("");
  }
}

function renderProductList(){
  const grid = $("#productList");
  if(!grid) return;
  const params = new URLSearchParams(location.search);
  const cat = params.get("cat") || "";
  const q = params.get("q") || "";
  const sort = $("#sortSelect") ? $("#sortSelect").value : "relevance";
  let list = PRODUCTS.slice();

  if(cat) list = list.filter(p => p.category.toLowerCase() === cat.toLowerCase());
  if(q) list = list.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.desc.toLowerCase().includes(q.toLowerCase()));

  if(sort === "price-asc") list.sort((a,b)=>a.price-b.price);
  if(sort === "price-desc") list.sort((a,b)=>b.price-a.price);
  if(sort === "rating") list.sort((a,b)=>b.rating-a.rating);

  $("#listTitle").textContent = cat ? `Category: ${cat}` : (q ? `Search: ${q}` : "Products");
  grid.innerHTML = "";
  list.forEach(p => {
    const el = document.createElement("div"); el.className = "product-card card";
    el.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h4>${p.title}</h4>
      <div class="muted">${p.category} · ${p.rating} ★</div>
      <div style="margin-top:8px;font-weight:800">${formatIN(p.price)} <span class="muted" style="text-decoration:line-through">${formatIN(p.old)}</span></div>
      <div class="controls">
        <button class="btn" onclick="viewProduct(${p.id})">View</button>
        <button class="btn primary" onclick="addToCart(${p.id},1)">Add to cart</button>
      </div>`;
    grid.appendChild(el);
  });
}

function renderProductDetail(){
  const container = $("#productDetail");
  if(!container) return;
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get("id"));
  const p = PRODUCTS.find(x=>x.id === id);
  if(!p){ container.innerHTML = "<p>Product not found.</p>"; return; }
  container.innerHTML = `
    <div class="card">
      <img src="${p.img}" alt="${p.title}" style="max-width:720px;display:block;margin-bottom:8px">
    </div>
    <div style="flex:1">
      <h2>${p.title}</h2>
      <div class="muted">${p.category} · ${p.rating} ★</div>
      <div style="font-size:20px;margin-top:8px;font-weight:800">${formatIN(p.price)} <span class="muted" style="text-decoration:line-through;font-weight:400"> ${formatIN(p.old)}</span></div>
      <p class="muted" style="margin-top:8px">${p.desc}</p>
      <div style="margin-top:12px;display:flex;gap:8px">
        <button class="btn primary" onclick="addToCart(${p.id},1)">Add to Cart</button>
        <button class="btn" onclick="buyNow(${p.id})">Buy Now</button>
      </div>
    </div>`;
}

function renderCartPage(){
  const area = $("#cartArea");
  const summary = $("#cartSummary");
  if(!area || !summary) return;
  const cart = readCart();
  if(cart.length === 0){ area.innerHTML = "<p>Your cart is empty.</p>"; summary.innerHTML = ""; return; }

  area.innerHTML = "";
  let subtotal = 0;
  cart.forEach(item => {
    const prod = PRODUCTS.find(p=>p.id === item.id);
    subtotal += prod.price * item.qty;
    const div = document.createElement("div"); div.className = "item";
    div.innerHTML = `
      <img src="${prod.img}" alt="${prod.title}">
      <div style="flex:1">
        <div style="font-weight:700">${prod.title}</div>
        <div class="muted">${formatIN(prod.price)} x ${item.qty}</div>
        <div style="margin-top:6px">
          <button class="btn" onclick="changeQty(${prod.id}, ${item.qty - 1})">-</button>
          <button class="btn" onclick="changeQty(${prod.id}, ${item.qty + 1})">+</button>
          <button class="btn" onclick="removeFromCart(${prod.id})" style="color:#d44">Remove</button>
        </div>
      </div>`;
    area.appendChild(div);
  });

  const saved = Math.round((subtotal * 0.25)); // fake savings for demo
  summary.innerHTML = `<div style="font-weight:800">Subtotal: ${formatIN(subtotal)}</div>
                       <div class="muted">You'll save ${formatIN(saved)} on this order</div>
                       <div style="margin-top:10px"><button class="btn primary" onclick="placeOrder()">Place Order</button></div>`;
}

// ----------------- Cart functions -----------------
function addToCart(id, qty = 1){
  const cart = readCart();
  const found = cart.find(i => i.id === id);
  if(found) found.qty += qty;
  else cart.push({ id, qty });
  saveCart(cart);
  toast("Added to cart");
}

function removeFromCart(id){
  let cart = readCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  renderCartPage();
}

function changeQty(id, qty){
  let cart = readCart();
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty = qty;
  if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  renderCartPage();
}

function placeOrder(){
  const cart = readCart();
  if(cart.length === 0){ alert("Cart is empty"); return; }
  // Demo flow: clear cart and show message
  localStorage.removeItem("ps_cart");
  updateMiniCount();
  alert("Order placed! (demo)");
  location.href = "index.html";
}

function buyNow(id){
  addToCart(id,1);
  location.href = "cart.html";
}

function viewProduct(id){
  location.href = `product.html?id=${id}`;
}

function goCategory(cat){
  location.href = `products.html?cat=${encodeURIComponent(cat)}`;
}

// ----------------- Login & Register -----------------
function setupAuthHandlers(){
  // Only run on pages where login elements exist
  const showRegister = $("#showRegister");
  const showLogin = $("#showLogin");
  if(showRegister){
    showRegister.onclick = (e) => { e.preventDefault(); toggleAuth(true); };
  }
  if(showLogin){
    showLogin.onclick = (e) => { e.preventDefault(); toggleAuth(false); };
  }

  const regBtn = $("#regBtn");
  if(regBtn){
    regBtn.onclick = () => {
      const name = $("#regName").value.trim();
      const email = $("#regEmail").value.trim();
      const pass = $("#regPass").value.trim();
      if(!name || !email || !pass){ alert("Fill all fields"); return; }
      const users = readUsers();
      if(users.find(u => u.email === email)){ alert("User exists. Login."); return; }
      users.push({ name, email, password: pass });
      saveUsers(users);
      alert("Registered — please login.");
      toggleAuth(false);
    };
  }

  const loginBtn = $("#loginBtn");
  if(loginBtn){
    loginBtn.onclick = () => {
      const userVal = $("#loginUser").value.trim();
      const pass = $("#loginPass").value.trim();
      if(!userVal || !pass){ alert("Fill all fields"); return; }
      const users = readUsers();
      const user = users.find(u => (u.email === userVal || u.name === userVal) && u.password === pass);
      if(user){ setUser(user); alert("Welcome, " + user.name); location.href = "index.html"; }
      else alert("Invalid credentials");
    };
  }

  updateAccountLink();
}

// toggle register/login
function toggleAuth(reg){
  const loginBox = document.querySelector(".login-box");
  const registerBox = document.querySelector(".register-box");
  if(!loginBox || !registerBox) return;
  if(reg){ loginBox.classList.add("hidden"); registerBox.classList.remove("hidden"); }
  else { registerBox.classList.add("hidden"); loginBox.classList.remove("hidden"); }
}

// update header account link to greet or show logout
function updateAccountLink(){
  const user = currentUser();
  const accLinks = $all("#accountLink, #acctNav");
  accLinks.forEach(el => {
    if(!el) return;
    if(user) el.textContent = `Hi, ${user.name}`; else el.textContent = "Account";
  });
  updateMiniCount();
}

// logout utility
function logout(){
  localStorage.removeItem("ps_user");
  updateAccountLink();
  location.href = "index.html";
}

// small toast helper
function toast(msg){
  const t = document.createElement("div");
  t.textContent = msg;
  Object.assign(t.style,{position:"fixed",left:"50%",top:"22px",transform:"translateX(-50%)",background:"#243044",color:"#fff",padding:"8px 12px",borderRadius:"8px",zIndex:120});
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),1400);
}

// ----------------- Boot logic for each page -----------------
document.addEventListener("DOMContentLoaded", () => {
  updateMiniCount();
  setupAuthHandlers();

  // Home page
  if($("#homeGrid")) {
    renderHome();
    const search = $("#homeSearch");
    if(search) {
      $("#searchBtn").onclick = () => {
        const q = search.value.trim();
        location.href = `products.html?q=${encodeURIComponent(q)}`;
      };
    }
  }

  // Categories page
  if($("#categoryList")) {
    renderCategories();
  }

  // Product listing page
  if($("#productList")) {
    // prefill search if query param exists
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";
    const cat = params.get("cat") || "";
    if(q && $("#listSearch")) $("#listSearch").value = q;
    renderProductList();

    if($("#sortSelect")) $("#sortSelect").addEventListener("change", renderProductList);
    if($("#listSearch")) $("#listSearch").addEventListener("input", (e) => {
      // ephemeral filter on same page (not navigate)
      const val = e.target.value;
      const url = new URL(location.href);
      if(val) url.searchParams.set("q", val); else url.searchParams.delete("q");
      history.replaceState({}, "", url.toString());
      renderProductList();
    });
  }

  // Product detail page
  if($("#productDetail")) {
    renderProductDetail();
  }

  // Cart page
  if($("#cartArea")) {
    renderCartPage();
  }
});
