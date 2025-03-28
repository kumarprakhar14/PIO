// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// gsap nav animations

function loadingAnimation(){

  gsap.from(".header-container", {
      y: -100,
      opacity: 0,
      delay: 0.2,
      duration: 0.9, 
      stagger: 0.1, 
  })

gsap.from(".hero-text", {
    x: -100,
    opacity: 0,
    delay: 0.9,
    duration: 1.12,
    stagger: 0.2
})

gsap.from(".hero-visual", {
  x: 100,
  opacity: 0,
  delay: 1.0,
  duration: 1.12,
  stagger: 0.2
})
}

loadingAnimation()

/* scrollTrigger */
gsap.registerPlugin(ScrollTrigger);
gsap.from(
  ".products",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".products",
      start: "top 80%", // Trigger when top of the box is 80% in view
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  }
);


// Modal form data submission
function submitWhatsAppForm() {
  document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting traditionally
  
    // Collect form data
    const name = document.getElementById('name').value;
    const cusPhoneNumber = document.getElementById('phoneNumber').value;
    const flavour = document.getElementById('flavour').value;
    const quantity = document.getElementById('quantity').value;
    const house = document.getElementById('houseNo').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    let message = document.getElementById('message').value;
    
    // Set default message if empty
    message = message ? message : 'No message';
  
    // format the address
    const address = `House/Plot No.: ${house},
  ${street}, 
  ${city}, ${state}, 
  ${zip}`;
  
    // Create pre-filled WhatsApp message
    const whatsappMessage = `Hello,%20Here's my details:%0A%0AName: ${encodeURIComponent(name)}%0APhone Number: ${encodeURIComponent(cusPhoneNumber)}%0AAddress:%0A${encodeURIComponent(address)}%0AFlavour Selected: ${encodeURIComponent(flavour)}%0AQuantity: ${encodeURIComponent(quantity)}%0AMessage: ${encodeURIComponent(message)}%0AThank you!`; 
    // %0A is URI encoded new line
  
    /*
  URL Encoding (Percent Encoding)
  URL encoding converts characters into a format that can be transmitted over the Internet.
  
  URLs can only be sent over the Internet using the ASCII character-set.
  
  Since URLs often contain characters outside the ASCII set, the URL has to be converted into a valid ASCII format.
  
  URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits.
  
  URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign or with %20. 
  */
  
    // PIO's WhatsApp number in international format (without + or 00)
    const myPhoneNumber = '917739307314';
  
    // Generate WhatsApp URL
    const whatsappURL = `https://wa.me/${myPhoneNumber}?text=${whatsappMessage}`;
  
    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
  });
}

submitWhatsAppForm();

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();
