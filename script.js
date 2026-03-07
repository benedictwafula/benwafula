const STORAGE_KEYS = {
  cart: "bhf_cart_v1",
  orders: "bhf_orders_v1",
  settings: "bhf_store_settings_v1"
};

const DEFAULT_SETTINGS = {
  shippingFeeKes: 350,
  whatsappNumber: "254700000000"
};

const PRODUCTS = [
  {
    id: "bhf-run-01",
    name: "Aero Run X",
    category: "Running",
    priceKes: 5200,
    sizes: [39, 40, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description: "Lightweight running shoe with breathable mesh upper and responsive sole.",
    featured: true
  },
  {
    id: "bhf-run-02",
    name: "Velocity Knit",
    category: "Running",
    priceKes: 6100,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    description: "Flexible daily trainer built for soft landings and stable stride.",
    featured: false
  },
  {
    id: "bhf-snk-01",
    name: "Street Craft",
    category: "Sneakers",
    priceKes: 4800,
    sizes: [38, 39, 40, 41, 42, 43],
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=900&q=80",
    description: "Low-top sneaker with clean lines and everyday comfort padding.",
    featured: true
  },
  {
    id: "bhf-snk-02",
    name: "Metro Step",
    category: "Sneakers",
    priceKes: 5600,
    sizes: [39, 40, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=900&q=80",
    description: "Cushioned street sneaker made for all-day movement.",
    featured: false
  },
  {
    id: "bhf-cas-01",
    name: "Canvas Drift",
    category: "Casual",
    priceKes: 3900,
    sizes: [37, 38, 39, 40, 41, 42],
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    description: "Breathable casual pair with laid-back profile and durable outsole.",
    featured: true
  },
  {
    id: "bhf-cas-02",
    name: "Weekend Flex",
    category: "Casual",
    priceKes: 4300,
    sizes: [38, 39, 40, 41, 42, 43],
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=900&q=80",
    description: "Soft insole casual shoe for weekend errands and travel.",
    featured: false
  },
  {
    id: "bhf-trk-01",
    name: "Trail Force",
    category: "Outdoor",
    priceKes: 7100,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=900&q=80",
    description: "Rugged outsole grip and toe guard for mixed terrain.",
    featured: true
  },
  {
    id: "bhf-trk-02",
    name: "Rockline Pro",
    category: "Outdoor",
    priceKes: 7600,
    sizes: [41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?auto=format&fit=crop&w=900&q=80",
    description: "High-traction outdoor shoe with reinforced ankle support.",
    featured: false
  },
  {
    id: "bhf-gym-01",
    name: "Core Lift",
    category: "Training",
    priceKes: 5900,
    sizes: [39, 40, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=900&q=80",
    description: "Stable training shoe with flat base for gym sessions.",
    featured: false
  },
  {
    id: "bhf-gym-02",
    name: "Pulse Trainer",
    category: "Training",
    priceKes: 6400,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    description: "Cross-training build for cardio, agility drills, and class workouts.",
    featured: true
  },
  {
    id: "bhf-ltd-01",
    name: "Monarch Gold",
    category: "Limited",
    priceKes: 8900,
    sizes: [40, 41, 42, 43],
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=80",
    description: "Limited edition colorway with premium upper and signature heel detail.",
    featured: true
  },
  {
    id: "bhf-ltd-02",
    name: "Night Ember",
    category: "Limited",
    priceKes: 9200,
    sizes: [40, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80",
    description: "High-demand drop with textured finish and impact cushioning.",
    featured: false
  }
];

const state = {
  filters: {
    search: "",
    category: "all",
    size: "all"
  },
  selectedProductId: null,
  selectedSizeByProduct: {},
  cart: readStorage(STORAGE_KEYS.cart, []),
  orders: readStorage(STORAGE_KEYS.orders, []),
  settings: {
    ...DEFAULT_SETTINGS,
    ...readStorage(STORAGE_KEYS.settings, {})
  }
};

const els = {
  featuredGrid: document.getElementById("featured-grid"),
  catalogGrid: document.getElementById("catalog-grid"),
  catalogMeta: document.getElementById("catalog-meta"),
  catalogEmpty: document.getElementById("catalog-empty"),
  categoryFilter: document.getElementById("category-filter"),
  sizeFilter: document.getElementById("size-filter"),
  searchInput: document.getElementById("search-input"),
  resetFilters: document.getElementById("reset-filters"),
  cartCount: document.getElementById("cart-count"),
  heroShippingFee: document.getElementById("hero-shipping-fee"),
  openCartBtn: document.getElementById("open-cart-btn"),
  heroOpenCart: document.getElementById("hero-open-cart"),
  closeCartBtn: document.getElementById("close-cart-btn"),
  cartDrawer: document.getElementById("cart-drawer"),
  cartBackdrop: document.getElementById("cart-backdrop"),
  cartItems: document.getElementById("cart-items"),
  cartEmpty: document.getElementById("cart-empty"),
  cartSubtotal: document.getElementById("cart-subtotal"),
  cartShipping: document.getElementById("cart-shipping"),
  cartTotal: document.getElementById("cart-total"),
  goCheckoutBtn: document.getElementById("go-checkout-btn"),
  checkoutItems: document.getElementById("checkout-items"),
  checkoutEmpty: document.getElementById("checkout-empty"),
  summarySubtotal: document.getElementById("summary-subtotal"),
  summaryShipping: document.getElementById("summary-shipping"),
  summaryTotal: document.getElementById("summary-total"),
  checkoutForm: document.getElementById("checkout-form"),
  formError: document.getElementById("form-error"),
  successSection: document.getElementById("success"),
  successMessage: document.getElementById("success-message"),
  continueShopping: document.getElementById("continue-shopping"),
  productModal: document.getElementById("product-modal"),
  closeModalBtn: document.getElementById("close-modal-btn"),
  modalImage: document.getElementById("modal-image"),
  modalCategory: document.getElementById("modal-category"),
  modalName: document.getElementById("modal-name"),
  modalDescription: document.getElementById("modal-description"),
  modalPrice: document.getElementById("modal-price"),
  modalSizes: document.getElementById("modal-sizes"),
  modalError: document.getElementById("modal-error"),
  modalAddBtn: document.getElementById("modal-add-btn")
};

init();

function init() {
  writeStorage(STORAGE_KEYS.settings, state.settings);
  initFilters();
  bindEvents();
  renderFeatured();
  renderCatalog();
  renderCart();
  renderCheckoutSummary();
  els.heroShippingFee.textContent = formatKes(state.settings.shippingFeeKes);
}

function initFilters() {
  const categories = [...new Set(PRODUCTS.map((product) => product.category))].sort();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.categoryFilter.appendChild(option);
  });

  const sizes = [...new Set(PRODUCTS.flatMap((product) => product.sizes))].sort((a, b) => a - b);
  sizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = String(size);
    option.textContent = String(size);
    els.sizeFilter.appendChild(option);
  });
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.filters.search = event.target.value.trim().toLowerCase();
    renderCatalog();
  });

  els.categoryFilter.addEventListener("change", (event) => {
    state.filters.category = event.target.value;
    renderCatalog();
  });

  els.sizeFilter.addEventListener("change", (event) => {
    state.filters.size = event.target.value;
    renderCatalog();
  });

  els.resetFilters.addEventListener("click", () => {
    state.filters = { search: "", category: "all", size: "all" };
    els.searchInput.value = "";
    els.categoryFilter.value = "all";
    els.sizeFilter.value = "all";
    renderCatalog();
  });

  els.openCartBtn.addEventListener("click", openCart);
  els.heroOpenCart.addEventListener("click", openCart);
  els.closeCartBtn.addEventListener("click", closeCart);
  els.cartBackdrop.addEventListener("click", closeCart);

  els.goCheckoutBtn.addEventListener("click", () => {
    closeCart();
    document.getElementById("checkout").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  els.closeModalBtn.addEventListener("click", closeModal);
  els.productModal.addEventListener("click", (event) => {
    if (event.target === els.productModal) {
      closeModal();
    }
  });

  els.modalAddBtn.addEventListener("click", handleModalAddToCart);

  els.checkoutForm.addEventListener("submit", handlePlaceOrder);

  els.continueShopping.addEventListener("click", () => {
    els.successSection.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function getFilteredProducts() {
  return PRODUCTS.filter((product) => {
    const matchesSearch =
      state.filters.search.length === 0 ||
      product.name.toLowerCase().includes(state.filters.search) ||
      product.description.toLowerCase().includes(state.filters.search);

    const matchesCategory =
      state.filters.category === "all" || product.category === state.filters.category;

    const matchesSize =
      state.filters.size === "all" || product.sizes.includes(Number(state.filters.size));

    return matchesSearch && matchesCategory && matchesSize;
  });
}

function renderFeatured() {
  const featuredProducts = PRODUCTS.filter((product) => product.featured);
  els.featuredGrid.innerHTML = "";
  featuredProducts.forEach((product) => {
    els.featuredGrid.appendChild(createProductCard(product));
  });
}

function renderCatalog() {
  const filtered = getFilteredProducts();
  els.catalogGrid.innerHTML = "";

  filtered.forEach((product) => {
    els.catalogGrid.appendChild(createProductCard(product));
  });

  els.catalogMeta.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;
  els.catalogEmpty.classList.toggle("hidden", filtered.length > 0);
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${escapeHtml(product.name)}">
    <div class="product-info">
      <span class="product-chip">${escapeHtml(product.category)}</span>
      <h3>${escapeHtml(product.name)}</h3>
      <p class="price">${formatKes(product.priceKes)}</p>
      <div class="card-actions">
        <button class="btn btn-primary" type="button" data-action="view" data-product-id="${product.id}">View Details</button>
        <button class="btn btn-secondary" type="button" data-action="quick-add" data-product-id="${product.id}">Quick Add</button>
      </div>
    </div>
  `;

  card.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) {
      return;
    }

    const action = button.dataset.action;
    const productId = button.dataset.productId;
    if (action === "view") {
      openModal(productId);
      return;
    }

    if (action === "quick-add") {
      openModal(productId);
      return;
    }
  });

  return card;
}

function openModal(productId) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) {
    return;
  }

  state.selectedProductId = product.id;

  els.modalImage.src = product.image;
  els.modalImage.alt = product.name;
  els.modalCategory.textContent = product.category;
  els.modalName.textContent = product.name;
  els.modalDescription.textContent = product.description;
  els.modalPrice.textContent = formatKes(product.priceKes);
  els.modalError.classList.add("hidden");

  const selectedSize = state.selectedSizeByProduct[product.id];

  els.modalSizes.innerHTML = "";
  product.sizes.forEach((size) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `size-btn${selectedSize === size ? " active" : ""}`;
    button.textContent = String(size);
    button.addEventListener("click", () => {
      state.selectedSizeByProduct[product.id] = size;
      updateModalSizeButtons(size);
      els.modalError.classList.add("hidden");
    });
    els.modalSizes.appendChild(button);
  });

  els.productModal.classList.remove("hidden");
  els.productModal.setAttribute("aria-hidden", "false");
}

function updateModalSizeButtons(activeSize) {
  [...els.modalSizes.querySelectorAll(".size-btn")].forEach((button) => {
    button.classList.toggle("active", Number(button.textContent) === activeSize);
  });
}

function closeModal() {
  els.productModal.classList.add("hidden");
  els.productModal.setAttribute("aria-hidden", "true");
  state.selectedProductId = null;
  els.modalError.classList.add("hidden");
}

function handleModalAddToCart() {
  if (!state.selectedProductId) {
    return;
  }

  const product = PRODUCTS.find((item) => item.id === state.selectedProductId);
  if (!product) {
    return;
  }

  const selectedSize = state.selectedSizeByProduct[product.id];
  if (!selectedSize) {
    els.modalError.textContent = "Select a shoe size before adding to cart.";
    els.modalError.classList.remove("hidden");
    return;
  }

  addToCart(product, selectedSize);
  closeModal();
  openCart();
}

function addToCart(product, size) {
  const existingLine = state.cart.find(
    (line) => line.productId === product.id && Number(line.size) === Number(size)
  );

  if (existingLine) {
    existingLine.qty += 1;
    existingLine.lineTotalKes = existingLine.qty * existingLine.unitPriceKes;
  } else {
    state.cart.push({
      productId: product.id,
      name: product.name,
      size,
      unitPriceKes: product.priceKes,
      qty: 1,
      lineTotalKes: product.priceKes
    });
  }

  persistCartAndRefresh();
}

function changeLineQuantity(productId, size, delta) {
  const index = state.cart.findIndex(
    (line) => line.productId === productId && Number(line.size) === Number(size)
  );

  if (index === -1) {
    return;
  }

  state.cart[index].qty += delta;

  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  } else {
    state.cart[index].lineTotalKes = state.cart[index].qty * state.cart[index].unitPriceKes;
  }

  persistCartAndRefresh();
}

function removeLine(productId, size) {
  state.cart = state.cart.filter(
    (line) => !(line.productId === productId && Number(line.size) === Number(size))
  );
  persistCartAndRefresh();
}

function persistCartAndRefresh() {
  writeStorage(STORAGE_KEYS.cart, state.cart);
  renderCart();
  renderCheckoutSummary();
}

function renderCart() {
  els.cartItems.innerHTML = "";

  if (state.cart.length === 0) {
    els.cartEmpty.classList.remove("hidden");
  } else {
    els.cartEmpty.classList.add("hidden");
  }

  state.cart.forEach((line) => {
    const row = document.createElement("div");
    row.className = "cart-line";
    row.innerHTML = `
      <div class="cart-line-head">
        <strong>${escapeHtml(line.name)}</strong>
        <button class="icon-btn" type="button" data-action="remove">x</button>
      </div>
      <small>Size ${line.size}</small>
      <div class="qty-controls">
        <button type="button" data-action="decrease">-</button>
        <span>${line.qty}</span>
        <button type="button" data-action="increase">+</button>
        <strong>${formatKes(line.lineTotalKes)}</strong>
      </div>
    `;

    row.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) {
        return;
      }

      const action = button.dataset.action;
      if (action === "increase") {
        changeLineQuantity(line.productId, line.size, 1);
      }
      if (action === "decrease") {
        changeLineQuantity(line.productId, line.size, -1);
      }
      if (action === "remove") {
        removeLine(line.productId, line.size);
      }
    });

    els.cartItems.appendChild(row);
  });

  const totals = getTotals();
  const itemCount = state.cart.reduce((sum, line) => sum + line.qty, 0);

  els.cartCount.textContent = String(itemCount);
  els.cartSubtotal.textContent = formatKes(totals.subtotalKes);
  els.cartShipping.textContent = formatKes(totals.shippingKes);
  els.cartTotal.textContent = formatKes(totals.totalKes);
}

function renderCheckoutSummary() {
  els.checkoutItems.innerHTML = "";
  const totals = getTotals();

  if (state.cart.length === 0) {
    els.checkoutEmpty.classList.remove("hidden");
  } else {
    els.checkoutEmpty.classList.add("hidden");
  }

  state.cart.forEach((line) => {
    const item = document.createElement("div");
    item.className = "summary-line";
    item.innerHTML = `
      <span>
        <strong>${escapeHtml(line.name)}</strong><br>
        <small>Size ${line.size} x ${line.qty}</small>
      </span>
      <strong>${formatKes(line.lineTotalKes)}</strong>
    `;
    els.checkoutItems.appendChild(item);
  });

  els.summarySubtotal.textContent = formatKes(totals.subtotalKes);
  els.summaryShipping.textContent = formatKes(totals.shippingKes);
  els.summaryTotal.textContent = formatKes(totals.totalKes);
}

function getTotals() {
  const subtotalKes = state.cart.reduce((sum, line) => sum + line.lineTotalKes, 0);
  const shippingKes = subtotalKes > 0 ? state.settings.shippingFeeKes : 0;
  const totalKes = subtotalKes + shippingKes;
  return { subtotalKes, shippingKes, totalKes };
}

function openCart() {
  els.cartDrawer.classList.add("open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
  els.cartBackdrop.classList.add("show");
}

function closeCart() {
  els.cartDrawer.classList.remove("open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
  els.cartBackdrop.classList.remove("show");
}

function handlePlaceOrder(event) {
  event.preventDefault();
  els.formError.classList.add("hidden");

  if (state.cart.length === 0) {
    els.formError.textContent = "Your cart is empty. Add shoes before checkout.";
    els.formError.classList.remove("hidden");
    return;
  }

  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();
  const location = document.getElementById("delivery-location").value.trim();
  const notes = document.getElementById("order-notes").value.trim();

  if (!name || !phone || !location) {
    els.formError.textContent = "Fill name, phone, and delivery location.";
    els.formError.classList.remove("hidden");
    return;
  }

  const totals = getTotals();
  const orderId = createOrderId();
  const order = {
    orderId,
    createdAt: new Date().toISOString(),
    customer: {
      name,
      phone,
      location,
      notes
    },
    items: state.cart,
    subtotalKes: totals.subtotalKes,
    shippingKes: totals.shippingKes,
    totalKes: totals.totalKes,
    status: "pending_m_pesa_confirmation",
    paymentMethod: "M-Pesa"
  };

  state.orders.unshift(order);
  writeStorage(STORAGE_KEYS.orders, state.orders);

  const whatsappText = buildWhatsAppMessage(order);
  const whatsappUrl = `https://wa.me/${state.settings.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  state.cart = [];
  writeStorage(STORAGE_KEYS.cart, state.cart);

  renderCart();
  renderCheckoutSummary();
  els.checkoutForm.reset();

  els.successMessage.textContent =
    `Order ${orderId} created. WhatsApp is opening for M-Pesa payment confirmation.`;
  els.successSection.classList.remove("hidden");
  els.successSection.scrollIntoView({ behavior: "smooth", block: "center" });

  window.open(whatsappUrl, "_blank", "noopener");
}

function buildWhatsAppMessage(order) {
  const lines = order.items.map((item, index) => {
    return `${index + 1}. ${item.name} | Size ${item.size} | Qty ${item.qty} | ${formatKes(item.lineTotalKes)}`;
  });

  return [
    "BHF Apparel Order Request",
    `Order ID: ${order.orderId}`,
    "",
    "Customer Details:",
    `Name: ${order.customer.name}`,
    `Phone: ${order.customer.phone}`,
    `Location: ${order.customer.location}`,
    `Notes: ${order.customer.notes || "None"}`,
    "",
    "Items:",
    ...lines,
    "",
    `Subtotal: ${formatKes(order.subtotalKes)}`,
    `Shipping: ${formatKes(order.shippingKes)}`,
    `Total: ${formatKes(order.totalKes)}`,
    "",
    "Payment Method: M-Pesa",
    "Please share M-Pesa confirmation once paid."
  ].join("\n");
}

function createOrderId() {
  const now = new Date();
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
    now.getDate()
  ).padStart(2, "0")}`;
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `BHF-${datePart}-${rand}`;
}

function formatKes(amount) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0
  }).format(amount);
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
