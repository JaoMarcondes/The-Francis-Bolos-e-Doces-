const ORDER_URL = "https://www.ifood.com.br/delivery/sumare-sp/the-francis-bolos-e-doces-residencial-bordon/89af2576-4a26-4cfe-950b-0d02d7402735";

const images = {
  boloBranco: "https://img0.didiglobal.com/static/soda_public/img_fef157df287a3e48e9af5d85550cbb57.jpg",
  boloChocolate: "https://img0.didiglobal.com/static/soda_public/1785744239981_4g0airaf.png",
  boloChocolate2: "https://img0.didiglobal.com/static/soda_public/img_0afc92a3bf0b2c7c9e99a3a8a3c4c49c.jpg",
  caseiro: "https://img0.didiglobal.com/static/soda_public/do1_yhu3DdZshjfcvfrSNXG9",
  doces: "https://img0.didiglobal.com/static/soda_public/img_ff061f3d0fe58693823c6a5807b48c80.jpeg",
  docesMedio: "https://img0.didiglobal.com/static/soda_public/img_24f5a9ae7f53bb744169c193960137fd.jpeg",
  brigadeiro: "https://img0.didiglobal.com/static/soda_public/img_5c5f367e5e6a0131faa3047e31407e15.jpeg",
  bombons: "https://img0.didiglobal.com/static/soda_public/img_718b59bad04b8dfce155bc2f67c09e68.jpeg",
  copos: "https://img0.didiglobal.com/static/soda_public/img_14b4bded1eb317d340edd8612ee0201b.jpeg",
  salgados: "https://img0.didiglobal.com/static/soda_public/img_1f66f603b821c163d84c66a21faf99a3.jpeg"
};

const products = [
  { name: "Leite Condensado com Morango", category: "bolos", label: "Bolo branco 1 kg", price: "R$ 85,00", description: "Bolo branco com morangos, perfeito para comemorações.", image: images.boloBranco },
  { name: "Trufado com Leite Ninho", category: "bolos", label: "Bolo de chocolate 1 kg", price: "R$ 65,00", description: "Trufado de chocolate com mousse de leite em pó.", image: images.boloChocolate },
  { name: "Trufado Preto e Branco", category: "bolos", label: "Bolo de chocolate 1 kg", price: "R$ 65,00", description: "Combinação de chocolate preto e branco.", image: images.boloChocolate },
  { name: "Trufado com Mousse", category: "bolos", label: "Bolo de chocolate 1 kg", price: "R$ 65,00", description: "Trufado com mousse de chocolate.", image: images.boloChocolate2 },

  { name: "Bolo Formigueiro", category: "caseiros", label: "Bolo caseiro", price: "R$ 35,00", description: "Clássico caseiro com pedacinhos de chocolate.", image: images.caseiro },
  { name: "Bolo de Laranja", category: "caseiros", label: "Bolo caseiro", price: "R$ 35,00", description: "Massa caseira de laranja, leve e aromática.", image: images.caseiro },

  { name: "Ninho Trufado", category: "copos", label: "Copo americano", price: "R$ 20,00", description: "Sobremesa cremosa em camadas.", image: images.copos },
  { name: "Brigadeiro com Ninho", category: "copos", label: "Copo americano", price: "R$ 20,00", description: "Duas paixões em um só copo.", image: images.copos },

  { name: "12 Brigadeiros", category: "doces", label: "Doces tradicionais", price: "R$ 15,00", description: "Caixa com brigadeiros tradicionais.", image: images.brigadeiro },
  { name: "12 Beijinhos", category: "doces", label: "Doces tradicionais", price: "R$ 15,00", description: "Caixa com 12 unidades de beijinho.", image: images.docesMedio },
  { name: "12 Doces Misto", category: "doces", label: "Doces tradicionais", price: "R$ 15,00", description: "Seleção mista de doces tradicionais.", image: images.doces },
  { name: "Brigadeiro de Maracujá", category: "doces", label: "Doce tradicional", price: "R$ 18,00", description: "Brigadeiro com toque de maracujá.", image: images.bombons },
  { name: "Brigadeiro Preto e Leite Ninho", category: "doces", label: "Doces clássicos", price: "R$ 20,00", description: "Bombons de brigadeiro e leite em pó banhados no chocolate.", image: images.bombons },
  { name: "Bombom de Limão", category: "doces", label: "Doces finos", price: "R$ 18,00", description: "Bombom com recheio de brigadeiro de limão.", image: images.bombons },

  { name: "Hambúrguer Cheddar", category: "salgados", label: "Salgado grande assado", price: "R$ 10,00", description: "Opção assada para um lanche completo.", image: images.salgados },
  { name: "Esfinha de Frango com Requeijão", category: "salgados", label: "Salgado grande assado", price: "R$ 10,00", description: "Esfinha assada com recheio cremoso.", image: images.salgados },
  { name: "30 Salgadinhos Fritos (Misto)", category: "salgados", label: "Mini salgadinhos", price: "R$ 25,00", description: "Mix com coxinha, queijo, calabresa e outros sabores.", image: images.salgados },
  { name: "100 Salgadinhos Fritos (Misto)", category: "salgados", label: "Mini salgadinhos", price: "R$ 70,00", description: "Ideal para festas e encontros maiores.", image: images.salgados },

  { name: "Coca-Cola 350 ml", category: "bebidas", label: "Bebida", price: "R$ 7,00", description: "Refrigerante em lata 350 ml.", image: images.copos },
  { name: "Fanta Laranja 350 ml", category: "bebidas", label: "Bebida", price: "R$ 7,00", description: "Refrigerante em lata 350 ml.", image: images.copos }
];

const productsGrid = document.getElementById("productsGrid");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("menuSearch");
const filterButtons = [...document.querySelectorAll(".filter")];
let currentFilter = "todos";

function normalize(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function renderProducts() {
  const term = normalize(searchInput.value.trim());
  const visible = products.filter(product => {
    const matchesCategory = currentFilter === "todos" || product.category === currentFilter;
    const haystack = normalize(`${product.name} ${product.label} ${product.description}`);
    return matchesCategory && (!term || haystack.includes(term));
  });

  productsGrid.innerHTML = visible.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-badge">${product.label}</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-bottom">
          <div class="price"><small>A partir de / referência</small><strong>${product.price}</strong></div>
          <a class="product-link" href="${ORDER_URL}" target="_blank" rel="noopener" aria-label="Pedir ${product.name}">↗</a>
        </div>
      </div>
    </article>
  `).join("");

  noResults.hidden = visible.length !== 0;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach(btn => btn.classList.toggle("active", btn === button));
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

document.querySelectorAll("[data-go-filter]").forEach(card => {
  card.addEventListener("click", () => {
    const filter = card.dataset.goFilter;
    currentFilter = filter;
    filterButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.filter === filter));
    renderProducts();
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const backdrop = document.querySelector(".menu-backdrop");

function setMenu(open) {
  if (!toggle || !nav) return;
  nav.classList.toggle("open", open);
  toggle.classList.toggle("active", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  document.body.classList.toggle("menu-open", open);
}

if (toggle && nav) {
  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  backdrop?.addEventListener("click", () => setMenu(false));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) setMenu(false);
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
