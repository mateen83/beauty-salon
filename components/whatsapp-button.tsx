'use client';

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/923089340529', '_blank');
  };

  return (
   <button
  onClick={handleWhatsApp}
  className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110"
  title="Chat with us on WhatsApp"
  aria-label="Chat with us on WhatsApp"
>
  <svg
    className="w-9 h-9 translate-y-[1px] cursor-pointer" // <- scale down & center vertically
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
   <path 
  d="M19.11 17.205c-.372-.186-2.2-1.086-2.54-.967-.34-.124-.588-.186-.836.186-.248.372-.96 1.21-1.178 1.458-.217.248-.434.279-.806.093-.372-.186-1.57-.579-2.99-1.847-1.105-.986-1.85-2.205-2.067-2.577-.217-.372-.023-.572.163-.758.167-.166.372-.434.558-.651.186-.217.248-.372.372-.62.124-.248.062-.465-.031-.651-.093-.186-.836-2.015-1.147-2.763-.303-.727-.61-.628-.836-.639l-.713-.013c-.248 0-.651.093-.992.465-.34.372-1.302 1.273-1.302 3.104 0 1.83 1.333 3.598 1.519 3.846.186.248 2.623 4.003 6.356 5.616.888.383 1.58.612 2.12.784.89.283 1.7.243 2.34.148.714-.106 2.2-.9 2.512-1.77.31-.868.31-1.613.217-1.77-.093-.155-.34-.248-.713-.434z" 
  transform="translate(5,4) scale(.8)" 
/>
    <path d="M16.003 3C8.82 3 3 8.82 3 16c0 2.82.92 5.42 2.48 7.54L3 29l5.62-2.41A12.94 12.94 0 0016.003 29C23.18 29 29 23.18 29 16S23.18 3 16.003 3zm0 23.5c-2.25 0-4.35-.66-6.11-1.8l-.44-.26-3.33 1.43.71-3.24-.29-.47A10.46 10.46 0 015.5 16c0-5.79 4.71-10.5 10.5-10.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5z"/>
  </svg>
</button>
  );
}
