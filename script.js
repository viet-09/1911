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

let lastHeartX = 0; // Vị trí X cuối cùng tạo trái tim
let lastHeartY = 0; // Vị trí Y cuối cùng tạo trái tim
const minDistance = 50; // Khoảng cách tối thiểu để tạo trái tim mới

document.addEventListener("mousemove", (event) => {
    const currentX = event.pageX;
    const currentY = event.pageY;

    // Tính khoảng cách giữa vị trí hiện tại và vị trí cuối cùng tạo trái tim
    const distance = Math.sqrt((currentX - lastHeartX) ** 2 + (currentY - lastHeartY) ** 2);

    if (distance >= minDistance) {
        // Cập nhật vị trí cuối cùng tạo trái tim
        lastHeartX = currentX;
        lastHeartY = currentY;
        // Tạo phần tử img cho hình trái tim
        const heart = document.createElement("img");
        heart.src = "heart.png"; // Đường dẫn đến hình ảnh trái tim của bạn
        heart.classList.add("heart");

        heart.style.left = `${currentX}px`;
        heart.style.top = `${currentY}px`;

        document.body.appendChild(heart);

        // Xóa trái tim khỏi DOM sau khi hoạt ảnh kết thúc
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
});

const music = document.getElementById("background-music");
const toggleButton = document.getElementById("music-toggle-button");

function toggleMusic() {
    if (music.paused) {
        music.play();
        toggleButton.textContent = "🔊";
    } else {
        music.pause();
        toggleButton.textContent = "🔈";
    }
}

// Phát nhạc khi người dùng lần đầu nhấn vào bất kỳ đâu trên trang (nếu cần)
window.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        toggleButton.textContent = "🔊";
    }
}, { once: true });

const textElement = document.getElementById("typing-text");

const text = textElement.textContent; // Lưu nội dung gốc
textElement.textContent = ""; // Xóa nội dung ban đầu

let index = 0;

function typeEffect() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Điều chỉnh tốc độ gõ từng chữ
    }
}

// Gọi hàm để bắt đầu hiệu ứng khi trang tải xong
window.onload = typeEffect;

// Lấy danh sách khung ảnh
const imageBoxes = document.querySelectorAll('.image-box');

// Gắn sự kiện toggle animation cho mỗi khung
imageBoxes.forEach((box) => {
  const imageList = box.querySelector('.image-list');

  // Gắn sự kiện click
  box.addEventListener('click', () => {
    // Nếu đang tạm dừng thì tiếp tục
    if (imageList.classList.contains('paused')) {
      imageList.classList.remove('paused');
    } else {
      imageList.classList.add('paused');
    }
  });
});
