const parrentsImage = document.querySelectorAll(".download");

parrentsImage &&
  parrentsImage.forEach((downloadBlock) => {
    const fileInput = downloadBlock.querySelector(".download__input");
    const downloadBox = downloadBlock.querySelector(".download__box");
    const text = downloadBlock.querySelector(".download__text");

    fileInput.addEventListener("change", function (event) {
      const files = event.target.files;
      
      if (files.length > 0) {
        text.style.display = "none";

        Array.from(files).forEach(file => {
          const reader = new FileReader();
          
          reader.onload = function (e) {
            const newImage = document.createElement('img');
            newImage.src = e.target.result;
            newImage.width = 80;
            newImage.height = 80;
            newImage.alt = "image";
            
            downloadBox.appendChild(newImage);
          };

          reader.readAsDataURL(file);
        });
      }
    });
  });
