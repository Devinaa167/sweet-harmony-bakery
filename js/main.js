/* ================================================================= */
/* SWEET HARMONY ARTISAN BAKERY - MAIN JAVASCRIPT                    */
/* Enhancing Functionality, Interactivity & SEO              */
/* ================================================================= */

document.addEventListener("DOMContentLoaded", () => {
    
    /* ------------------------------------------------------------- */
    /* 1. LIGHTBOX GALLERY MODAL FUNCTIONALITY                       */
    /* ------------------------------------------------------------- */
    const lightboxModal = document.getElementById("lightboxModal");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeBtn = document.querySelector(".lightbox-close");

    if (lightboxModal && lightboxImg) {
        const triggers = document.querySelectorAll(".lightbox-trigger, .card img");
        
        triggers.forEach(img => {
            img.style.cursor = "pointer";
            img.addEventListener("click", () => {
                lightboxModal.style.display = "flex";
                lightboxImg.src = img.src;
                lightboxCaption.textContent = img.alt || "Bakery Product Showcase";
            });
        });

        const closeLightbox = () => {
            lightboxModal.style.display = "none";
        };

        if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
        lightboxModal.addEventListener("click", (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });
    }

    /* ------------------------------------------------------------- */
    /* 2. LIVE SEARCH & CATEGORY FILTERING (Services Page)           */
    /* ------------------------------------------------------------- */
    const searchInput = document.getElementById("searchInput");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll("#productGrid .card, .card-grid .card");

    if (searchInput || filterButtons.length > 0) {
        let currentFilter = "all";
        let searchTerm = "";

        const filterProducts = () => {
            productCards.forEach(card => {
                const category = card.getAttribute("data-category") || "all";
                const textContent = card.textContent.toLowerCase();
                
                const matchesCategory = (currentFilter === "all" || category === currentFilter);
                const matchesSearch = textContent.includes(searchTerm);

                if (matchesCategory && matchesSearch) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        };

        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                searchTerm = e.target.value.toLowerCase().trim();
                filterProducts();
            });
        }

        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                currentFilter = btn.getAttribute("data-filter");
                filterProducts();
            });
        });
    }

    /* ------------------------------------------------------------- */
    /* 3. ENQUIRY FORM VALIDATION & QUOTE CALCULATOR                 */
    /* ------------------------------------------------------------- */
    const enquiryForm = document.querySelector('#enquiryForm');
    const customModal = document.getElementById('custom-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('fullname');
            const emailInput = document.getElementById('email');
            const dateInput = document.getElementById('event-date');
            const productSelect = document.getElementById('product');

            const nameVal = nameInput ? nameInput.value.trim() : "";
            const emailVal = emailInput ? emailInput.value.trim() : "";
            const dateVal = dateInput ? dateInput.value : "";
            const productVal = productSelect ? productSelect.value : "";

            if (!nameVal || !emailVal || !dateVal || !productVal) {
                alert('Please fill in all required fields before submitting your enquiry.');
                return;
            }

            // Email format verification
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailVal)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Date Check: Ensure event date is in the future
            const selectedDate = new Date(dateVal);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                alert('Please select a valid future date for your event.');
                return;
            }

            // Calculate starting estimate based on selection
            let basePrice = 450;
            if (productVal === 'custom-cake') basePrice = 650;
            else if (productVal === 'cupcake-box') basePrice = 180;
            else if (productVal === 'french-pastries') basePrice = 220;

            const successText = `Thank you, ${nameVal}! Your custom order enquiry has been validated. Estimated starting price: R${basePrice}.00. We will contact you shortly.`;

            // Trigger Custom Centered Modal instead of browser alert()
            if (customModal && modalMessage) {
                modalMessage.textContent = successText;
                customModal.removeAttribute('hidden');
                customModal.setAttribute('aria-hidden', 'false');
            } else {
                alert(successText); // Fallback if modal isn't found
            }
        });
    }

    // Modal Close Button Handler
    if (modalCloseBtn && customModal) {
        modalCloseBtn.addEventListener('click', () => {
            customModal.setAttribute('hidden', '');
            customModal.setAttribute('aria-hidden', 'true');
        });
    }

    /* ------------------------------------------------------------- */
    /* 4. GENERAL CONTACT FORM HANDLER (Contact Page)                */
    /* ------------------------------------------------------------- */
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const type = document.getElementById("msg-type").value;
            const message = document.getElementById("contact-message").value.trim();
            const feedback = document.getElementById("contactFeedback");

            if (!name || !email || !type || !message) {
                alert("Please fill in all required fields.");
                return;
            }

            // Compile into a mailto link as requested by the brief
            const recipient = "hello@sweetharmony.co.za";
            const subject = encodeURIComponent(`[Website Contact] ${type} From ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nType: ${type}\n\nMessage:\n${message}`);

            if (feedback) {
                feedback.style.display = "block";
                feedback.className = "form-feedback success";
                feedback.innerHTML = `Thank you, <strong>${name}</strong>! Your message has been compiled. Opening your email client to send to <em>${recipient}</em>...`;
            }

            setTimeout(() => {
                window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
            }, 1200);
        });
    }

}); // <-- Clean single closing wrapper for the entire script
