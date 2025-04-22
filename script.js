// 创建一个 IntersectionObserver 实例，用于观察元素是否进入视口
const observer = new IntersectionObserver((entries) => {
  // entries 是所有被观察元素的数组
  entries.forEach((entry) => {
    // 检查当前元素是否进入视口
    if (entry.isIntersecting) {
      // 如果元素进入视口，且未被标记为已激活
      if (!entry.target.classList.contains("active")) {
        entry.target.classList.add("active"); // 添加 'active' 类
      }
    }
  });
});

// 获取所有需要被观察的元素（多个类名或选择器）
const hiddenElements = document.querySelectorAll("  .about-header, .card-container, .more-btn, .about-description, .about-image, .card, .title, .card1, .img,.flash, .product-action, .product2-action");

// 对每个找到的元素开始观察
hiddenElements.forEach((el) => observer.observe(el));






// 侧边导航栏
document.querySelector('.hamburger input').addEventListener('change', function() {
  const nav = document.querySelector('.nav');
  if (this.checked) {
      nav.style.right = '0'; // 展开
      nav.style.opacity='1' ;


  } else {

      nav.style.opacity='1' ;
      nav.style.right='-250px' // 往右隐藏
      

  }
});










document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function(event) {
      const targetId = this.getAttribute('href'); // 获取目标 ID

      // 如果是锚点链接（以 # 开头），阻止默认行为
      if (targetId.startsWith('#')) {
          event.preventDefault();
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                  inline: 'nearest'
              });
          }
      }
  });
});



// 获取元素
const contactLink = document.getElementById('contact-link');
const contactLink4 = document.getElementById('contact-link4');
const modal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close-btn');

// 点击“联系我们”显示弹窗
contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    modal.style.top ='20%'
});
// 点击“加入我们”显示弹窗
contactLink4.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
  modal.style.top ='20%'
});

// 点击关闭按钮隐藏弹窗
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 点击弹窗外部隐藏弹窗
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});