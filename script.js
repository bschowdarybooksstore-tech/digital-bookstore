const PRODUCTS = {
    'Python': [
        {id: 101, name: 'python basics for beginners', price: 499, originalprice: 999, pages: 120, size: '12MB', desc: 'Learn the worlds most popular programming language in just 20 days! Designed for people who think coding is too hard, this book uses plain English and hands-on projects to turn you into a coder fast. No math degree required.', img: 'https://placehold.co/400x600?text=Python+programming'},
        {id: 102, name: 'python Roadmapfor beginners', price: 99, originalprice: 199, pages: 20, size: '2MB', desc: 'Stop getting lost in random YouTube tutorials. This visual roadmap provides the exact 11-step path used by professional developers to master Python. Designed by Team B.S.CHOWDARY.', img: 'https://placehold.co/400x600?text=Python+ROADMAP'},
        {id: 103, name: 'DSA with Python', price: 399, originalprice:599, pages: 150, size: '10MB', desc: 'Complete Python DSA journey. Covers basic DSA problem solving.', img: 'https://placehold.co/400x600?text=NOT+AVAILABLE'}
    ],
    'Java':[
        {id: 201, name: 'Javabasics for Beginners', price: 399, originalprice: 999, pages: 95, size: '10MB', desc: 'Learn the worlds most popular programming language in just 10 days! Designed for people who think coding is too hard, this book uses plain English and hands-on projects to turn you into a coder fast.', img: 'https://placehold.co/400x600?text=NOT+AVAILABLE'},
        {id: 202, name: 'Java DSA', price: 399, originalprice: 999, pages: 95, size: '10MB', desc: 'Learn the DSA in JAVA! Designed for people who think coding is too hard, to turn you into a coder fast.', img: 'https://placehold.co/400x600?text=NOT+AVAILABLE'},
    ],
    'Computer basics':[
        {id: 301, name: 'Computer basics for Beginners', price: 399, originalprice: 999, pages: 95, size: '10MB', desc: 'Master the Basics of Computer, Explaining in a simpler style such that every learner can understand', img: 'https://placehold.co/400x600?text=Computer basics'},
    ],
    'C language':[
        {id: 401, name: 'C Language Basics', price: 399, originalprice: 999, pages: 95, size: '10MB', desc: 'Master the Stock Market. Learn Technical Analysis and Option Trading strategies.', img: 'https://placehold.co/400x600?text=BASICS OF C'},
        {id: 402, name: 'DSA with C', price: 399, originalprice: 999, pages: 95, size: '10MB', desc: 'Master the Stock Market. Learn Technical Analysis and Option Trading strategies.', img: 'https://placehold.co/400x600?text=NOT+AVAILABLE'},
        {id: 403, name: 'Simple projects with C', price: 399, originalprice: 999, pages: 95, size: '10MB', desc: 'Master the Stock Market. Learn Technical Analysis and Option Trading strategies.', img: 'https://placehold.co/400x600?text=Projects'}
    ],    
    'Html': [
        {id: 501, name: 'Basics of the HTML', price: 399, originalprice: 499, pages: 95, size: '10MB', desc: 'Master the Stock Market. Learn Technical Analysis and Option Trading strategies.', img: 'https://placehold.co/400x600?text=NOT+AVAILABLE'},
        {id: 502, name: 'Basics of Web Development', price: 399, originalprice:459, pages: 95, size: '10MB', desc: 'Master the Stock Market. Learn Technical Analysis and Option Trading strategies.', img: 'https://placehold.co/400x600?text=NOT+AVAILABLE'}
    ],
    'English':[
        {id: 601, name: 'English Grammar Part 1', price: 299, originalprice: 799, pages: 95, size: '10MB', desc: 'Speak and write with 100% confidence. This is a "no-fluff" guide to English grammar, focusing on the rules that actually matter in exams and professional life. Perfect for students and those preparing for competitive interviews.', img: 'https://placehold.co/400x600?text=ENGLISH GRAMMAR'},
    ],
    'Stock Market':[
        {id: 701, name: 'Stock market for Beginners', price: 299, originalprice: 699, pages: 100, size: '10MB', desc: 'Stop being intimidated by the stock market. This book is a simple, risk-aware guide for anyone in India looking to build wealth. We take you from the history of trading to placing your first buy order, all while keeping your money safe through SEBI regulations.', img: 'https://placehold.co/400x600?text=STOCK+MARKET'},
        {id: 702, name: 'History of Stocks', price: 399, originalprice: 999, pages: 95, size: '10MB', desc: 'Master the Stock Market. Learn the history of stock market and also the most used trading strategies.', img: 'https://placehold.co/400x600?text=NOT+AVAILABLE'},
        {id: 703, name: 'Trading Blueprint', price: 399, originalprice: 999, pages: 95, size: '10MB', desc: 'Master the Stock Market. Learn Technical Analysis and Option Trading strategies.', img: 'https://placehold.co/400x600?text=NOT+AVAILABLE'},
    ],

};


const COUPONS = { 
    'WELCOME20': { off: 0.20 },
    'CVIBES20': { off: 0.20 },
    'DIWALI2026':{ off: 0.15},
    'DUSSEHRA25':{ off: 0.25},
    'EBOOK15':{off: 0.15}
};

let cart = []; 
let discount = 0; 
let activeOID = "";

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(id + '-page').classList.remove('hidden');
    window.scrollTo(0,0);
}

function loadCategory(cat) {
    const list = document.getElementById('book-list');
    const categoryKey = cat.toLowerCase();
    document.getElementById('cat-title').innerText = cat + " Selection";
    list.innerHTML = '';
    PRODUCTS[cat].forEach(p => {
        list.innerHTML += `
        <div class="card animate">
            <div class="badge-discount">SAVE ${Math.round((1 - p.price / p.originalprice) * 100)}%</div>
            <img src="${p.img}" class="book-thumb">
            <h3>${p.name}</h3>
            <div style="margin: 10px 0;">
            <span style="color:#94a3b8; text-decoration: line-through; font-size: 1rem;">₹${p.originalprice}</span>
            <p style="color:var(--accent); font-weight:800; font-size:1.5rem; margin:10px 0;">₹${p.price}</p>
            <button class="btn btn-p" onclick="addToCart(${p.id},'${cat}')">Add to Cart</button>
            <button class="btn btn-s" onclick="openPreview(${p.id},'${cat}')">View Details</button>
        </div>`;
    });
    showPage('books');
}

function openPreview(id, cat) {
    const b = PRODUCTS[cat].find(x => x.id === id);
    document.getElementById('preview-title').innerText = b.name;
    document.getElementById('preview-img').src = b.img;
    document.getElementById('preview-desc').innerText = b.desc;
    document.getElementById('meta-pages').innerText = b.pages + " Pages";
    document.getElementById('meta-size').innerText = b.size;
    document.getElementById('preview-action').innerHTML = `
    <button class="btn btn-p" onclick="addToCart(${b.id},'${cat}'); document.getElementById('preview-overlay').style.display='none'">Buy Now - ₹${b.price}</button>
    `;
    document.getElementById('preview-overlay').style.display = 'flex';
}

function closePreview(e) { if(e.target.id === 'preview-overlay') e.target.style.display = 'none'; }

function addToCart(id, cat) {
    if(cart.some(c => c.id === id)) return alert("Already in cart!");
    cart.push(PRODUCTS[cat].find(x => x.id === id));
    updateCartDisplay();
}

function updateCartDisplay() {
    document.getElementById('cart-count').innerText = cart.length;
    const disp = document.getElementById('cart-items-display');
    let total = 0; disp.innerHTML = '';
    cart.forEach((c, idx) => {
        total += c.price;
        disp.innerHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:10px;"><span>${c.name}</span><span>₹${c.price} <small onclick="removeItem(${idx})" style="color:red; cursor:pointer;">✕</small></span></div>`;
    });
    const final = Math.round(total * (1 - discount));
    document.getElementById('final-total').innerText = final;
    document.getElementById('checkout-btn').disabled = cart.length === 0;
}

function removeItem(idx) { cart.splice(idx,1); updateCartDisplay(); }

function applyPromo() {
    const code = document.getElementById('coupon-input').value.toUpperCase();
    if(COUPONS[code]) {
        discount = COUPONS[code].off;
        document.getElementById('coupon-msg').innerText = "Applied!";
        showBlastEffect(); // 🎉 trigger blast effect
        showConfettiBlast();

    } else { 
        discount = 0; 
        document.getElementById('coupon-msg').innerText = "Invalid or expired."; 
    }
    updateCartDisplay();
}

function initPayment() {
    activeOID = "BSC-" + Math.random().toString(36).substr(2, 5).toUpperCase();
    document.getElementById('display-oid').innerText = activeOID;
    const amt = document.getElementById('final-total').innerText;
    const upiUrl = `upi://pay?pa=6305024350@fam&pn=B.S.Chowdary&am=${amt}&tn=Order_${activeOID}&cu=INR`;
    document.getElementById('payment-qr').src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;
    
    if(/Android|iPhone/i.test(navigator.userAgent)) {
        document.getElementById('mobile-area').classList.remove('hidden');
        document.getElementById('phonepe-link').href = upiUrl;
    }
    showPage('payment');
}

function verifyLock() {
    const emailVal = document.getElementById('user-email').value;
    const nameVal = document.getElementById('user-name').value;
    const phoneVal = document.getElementById('user-whatsapp').value;
    const utrVal = document.getElementById('utr-input').value;
    const checkOk = document.getElementById('agree-check').checked;

    const isEmailValid = emailVal.includes('@') && emailVal.includes('.');
    const isNameValid = nameVal.trim().length >= 3; 
    const isPhoneValid = phoneVal.trim().length >= 10; 
    const isUtrValid = utrVal.trim().length >= 10; 

    const submitBtn = document.getElementById('submit-final');
    
    if (isEmailValid && isNameValid && isPhoneValid && isUtrValid && checkOk) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1"; 
    } else {
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.5"; 
    }
}

function handleFormSubmission() {
    const name = document.getElementById('user-name').value;
    const whatsapp = document.getElementById('user-whatsapp').value;
    const email = document.getElementById('user-email').value;
    const utr = document.getElementById('utr-input').value;
    const books = cart.map(c => c.name).join(", ");
    const orderID = typeof activeOID !== 'undefined' ? activeOID : "N/A";

    const originalPrice = cart.reduce((sum, item) => sum + item.price, 0); 
    
    const couponApplied = (discount > 0) ? document.getElementById('coupon-input').value.toUpperCase() : "NONE"; 
    const discountAmount = Math.round(originalPrice * discount); 
    const finalTotal = originalPrice - discountAmount;

    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLScBbVmjTI-zvZKpH_wWQBpfmvkFH2O7d8yAyODApyj7cnsG1w/formResponse?usp=pp_url` + 
        `&entry.1142408861=${encodeURIComponent(name)}` +
        `&entry.1524366174=${encodeURIComponent(whatsapp)}` +
        `&entry.687794501=${encodeURIComponent(email)}` +
        `&entry.398043900=${encodeURIComponent(books)}` +
        `&entry.1159049155=${encodeURIComponent(finalTotal)}` +
        `&entry.2145820642=${encodeURIComponent(utr)}` +
        `&entry.1699157614=${encodeURIComponent(orderID)}` +
        `&entry.56363711=${encodeURIComponent(couponApplied)}` +
        `&entry.1354362077=${encodeURIComponent(discountAmount)}` +
        `&entry.1241446376=${encodeURIComponent(originalPrice)}`;

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = formUrl;
    document.body.appendChild(iframe);

    setTimeout(() => {
        showPage('success');
        cart = [];
        discount = 0; 
        document.getElementById('coupon-input').value = "";
        updateCartDisplay();
    }, 1000);
}



function showBlastEffect() {
    let leftBanner = document.createElement("div");
    leftBanner.className = "banner left";
    leftBanner.innerText = "🎉 You Got a Discount!";
    
    let rightBanner = document.createElement("div");
    rightBanner.className = "banner right";
    rightBanner.innerText = "🎉 You Got a Discount! ";
    
    document.body.appendChild(leftBanner);
    document.body.appendChild(rightBanner);
    
    setTimeout(() => {
        leftBanner.remove();
        rightBanner.remove();
    }, 3000);
}

function showConfettiBlast() {
    const colors = ["#ff0", "#f0f", "#0ff", "#0f0", "#f00", "#00f", "#ffa500", "#ff69b4", "#102bf4", "#f410d6"];
    const numPieces = 200; 

    for (let i = 0; i < numPieces; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-20px"; 
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.position = "fixed";
        confetti.style.zIndex = "9999";
        confetti.style.opacity = "0.8";
        confetti.style.borderRadius = "2px";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);

        let fallDuration = 3000 + Math.random() * 2000; 
        confetti.animate([
            { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(720deg)`, opacity: 0 }
        ], {
            duration: fallDuration,
            easing: "ease-out",
            fill: "forwards"
        });
        setTimeout(() => confetti.remove(), fallDuration);
    }
}

function sendSupportQuery() {
    const name = document.getElementById('q-name').value;
    const orderid = document.getElementById('q-orderid').value; // Removed the "N/A" fallback
    const email = document.getElementById('q-email').value;
    const contact = document.getElementById('q-contact').value;
    const complaint = document.getElementById('q-complaint').value;

    // 1. STRENGTHENED VALIDATION: Now checks for Order ID specifically
    if(!name || !email || !orderid || !complaint) {
        alert("CRITICAL: Please provide your Order ID along with other details so we can track your payment.");
        return;
    }

    // 2. Your Google Form Submission
    const feedbackFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSc1Qns3fxyoCLw-3htMmSsdcUq5RXjx6TEHdbrZ7XqusRq6hA/formResponse?usp=pp_url` + 
        `&entry.704989690=${encodeURIComponent(name)}` +
        `&entry.73513246=${encodeURIComponent(orderid)}` +
        `&entry.704844315=${encodeURIComponent(email)}` +
        `&entry.1192138966=${encodeURIComponent(contact)}` +
        `&entry.2138539612=${encodeURIComponent(complaint)}`;

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = feedbackFormUrl;
    document.body.appendChild(iframe);

    alert("Query Submitted! We will verify Order #" + orderid + " and email you shortly.");
    showPage('home');
}