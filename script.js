function showMoreWishes() {
    const moreWishes = document.getElementById('more-wishes');
    if (moreWishes.classList.contains('hidden')) {
      moreWishes.classList.remove('hidden');
    } else {
      moreWishes.classList.add('hidden');
    }
  }
  
  function createSakura() {
    const sakura = document.createElement("div");
    sakura.classList.add("sakura");
  
    // ??t v? tr? ng?u nhi?n ? ph?a tr?n m?n h?nh
    sakura.style.left = Math.random() * 80 + "vw";
    sakura.style.animationDuration = Math.random() * 3 + 10 + "s"; // Th?i gian r?i t? 4 ??n 7 gi?y
    sakura.style.opacity = Math.random() * 0.5 + 1; // ?? trong su?t ng?u nhi?n
  
    // T?o k?ch th??c ng?u nhi?n cho c?nh hoa
    //sakura.style.width = sakura.style.height = Math.random() * 10 + 15 + "px";
  
    document.body.appendChild(sakura);
  
    // Lo?i b? c?nh hoa sau khi ho?n th?nh hi?u ?ng
    setTimeout(() => {
      sakura.remove();
    }, 2000); // Th?i gian r?i t?i ?a l? 7 gi?y
  }
  
  // T?o c?nh hoa m?i 250 mili gi?y
  setInterval(createSakura, 50);

  function createVideoFrame() {
    const videoContainer = document.getElementById('video-container');
    const button = document.querySelector('button');

    // Kiểm tra xem video đã tồn tại hay chưa
    if (videoContainer.innerHTML === "") {
        // Tạo thẻ video
        const video = document.createElement("video");
        video.width = 200;
        video.height = 356;
        video.controls = true; // Hiện nút điều khiển video
        video.autoplay = true; // Tự động phát video
        video.muted = false; // Tắt âm thanh
        
        // Tạo phần tử nguồn cho video
        const source = document.createElement("source");
        source.src = "video.mp4"; // Thay đổi đường dẫn đến file MP4 của bạn
        source.type = "video/mp4";

        // Thêm nguồn vào video
        video.appendChild(source);
        // Thêm video vào videoContainer

        // Thêm iframe vào videoContainer
        videoContainer.appendChild(video);

        // Chuyển text nút thành "Đóng Video"
        button.textContent = "Đóng Video";
    } else {
        // Xóa iframe và đổi text nút lại thành "Xem Video Chúc Mừng"
        videoContainer.innerHTML = "";
        button.textContent = "Xem Video Chúc Mừng";
    }
}
