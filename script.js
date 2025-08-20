// Mobile Menu Toggle
document.querySelectorAll('.mobile-menu-btn').forEach(btn=>{
    btn.addEventListener('click', function(){
        const ul = this.closest('nav').querySelector('ul');
        ul.classList.toggle('show');
    });
});

// Cart functionality
const cart = [];
document.querySelectorAll('.add-to-cart').forEach(btn=>{
    btn.addEventListener('click', function(){
        const card = this.closest('.product-card');
        const title = card.querySelector('.product-title').textContent;
        const price = parseFloat(card.querySelector('.product-price').textContent.replace('$',''));
        const img = card.querySelector('img').src;

        const existing = cart.find(item=>item.title===title);
        if(existing){ existing.quantity++; } 
        else { cart.push({title, price, img, quantity:1}); }

        alert(`${title} added to cart!`);
        console.log(cart);
    });
});

// WhatsApp Button
document.querySelectorAll('.whatsapp-btn').forEach(btn=>{
    btn.addEventListener('click', function(e){
        e.preventDefault();
        const title = this.closest('.product-card').querySelector('.product-title').textContent;
        const message = `Hi, I'm interested in ${title}. Can you provide more details?`;
        window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`,'_blank');
    });
});

// Color Selection
document.querySelectorAll('.color-option').forEach(option=>{
    option.addEventListener('click', function(){
        const parent = this.parentElement;
        parent.querySelectorAll('.color-option').forEach(opt=>opt.classList.remove('active'));
        this.classList.add('active');

        const targetId = this.getAttribute('data-product');
        const targetImg = document.getElementById(targetId);
        if(targetImg){
            targetImg.src = this.getAttribute('data-image');
        }
    });
});
