// Yeh script index.html se linked hai (see <script src="contect.js"></script> in index.html)
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('whatsapp-form');
  if (!form) return; // Agar form nahi mila toh kuch na karo

  var loading = form.querySelector('.loading');
  var errorMsg = form.querySelector('.error-message');
  var sentMsg = form.querySelector('.sent-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    loading.style.display = 'block';
    errorMsg.style.display = 'none';
    sentMsg.style.display = 'none';

    var name = form.elements['name'].value.trim();
    var email = form.elements['email'].value.trim();
    var subject = form.elements['subject'].value.trim();
    var message = form.elements['message'].value.trim();

    if (!name || !email || !subject || !message) {
      loading.style.display = 'none';
      errorMsg.textContent = 'Please fill all fields.';
      errorMsg.style.display = 'block';
      return;
    }

    // WhatsApp number (index.html se match karta hai)
    var phone = '919142098371';

    // Message compose karo
    var text =
      '*New Portfolio Contact*%0A' +
      '*Name:* ' + encodeURIComponent(name) + '%0A' +
      '*Email:* ' + encodeURIComponent(email) + '%0A' +
      '*Subject:* ' + encodeURIComponent(subject) + '%0A' +
      '*Message:* ' + encodeURIComponent(message);

      var waUrl = 'https://wa.me/' + phone + '?text=' + text;

    // WhatsApp new tab me kholo
    window.open(waUrl, '_blank');

      loading.style.display = 'none';
      sentMsg.style.display = 'block';
      form.reset();
    });
  });