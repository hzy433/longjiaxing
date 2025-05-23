let timeout;
window.addEventListener('scroll', () => {
    if (timeout) return;
    timeout = setTimeout(() => {
        // 执行滚动逻辑
        timeout = null;
    }, 100);
});



// // 页面加载完成后隐藏加载动画
// window.addEventListener('load', () => {
//     const loadingScreen = document.getElementById('loading-screen');
//     setTimeout(() => {
//         loadingScreen.classList.add('hidden'); // 添加隐藏类，触发渐隐动画
//     }, 2000); // 延迟 2 秒后隐藏加载动画
// });

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
// 侧边导航栏
document.querySelector('.hamburger input').addEventListener('change', function() {
  const nav = document.querySelector('.nav');
  if (this.checked) {
      nav.style.right = '0'; // 展开
      nav.style.opacity = '1';
  } else {
      nav.style.opacity = '1';
      nav.style.right = '-250px'; // 往右隐藏
  }
});

// 页面加载时检测窗口宽度
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const hamburgerInput = document.querySelector('.hamburger input');

  if (window.innerWidth > 1024) { // 假设全屏宽度为 1024px
      hamburgerInput.checked = true; // 设置复选框为选中状态
      nav.style.right = '0'; // 展开
      nav.style.opacity = '1';
  } else {
      hamburgerInput.checked = false; // 设置复选框为未选中状态
      nav.style.right = '-250px'; // 隐藏
      nav.style.opacity = '1';
  }
});

// 监听窗口大小变化
window.addEventListener('resize', () => {
  const nav = document.querySelector('.nav');
  const hamburgerInput = document.querySelector('.hamburger input');

  if (window.innerWidth > 1024) { // 假设全屏宽度为 1024px
      hamburgerInput.checked = true; // 设置复选框为选中状态
      nav.style.right = '0'; // 展开
      nav.style.opacity = '1';
  } else {
      hamburgerInput.checked = false; // 设置复选框为未选中状态
      nav.style.right = '-250px'; // 隐藏
      nav.style.opacity = '1';
  }
});









      // 丝滑页面滑动
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






// 弹窗
// 获取元素
// 获取弹窗元素
const contactModal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close-btn');

// 为所有带有 .clickable 类的父级 <p> 元素添加点击事件
document.querySelectorAll('.clickable').forEach((element) => {
    element.addEventListener('click', (e) => {
        const targetId = element.querySelector('a').id; // 获取子链接的 id

        // 判断是否是需要弹窗的链接
        if (targetId === 'contact-link' || targetId === 'contact-link4') {
            e.preventDefault(); // 阻止默认跳转行为
            contactModal.style.display = 'block'; // 显示弹窗
        } else {
            // 对于其他链接，正常跳转
            const href = element.querySelector('a').getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href; // 跳转到目标链接
            }
        }
    });
});

// 点击关闭按钮隐藏弹窗
closeBtn.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

// 点击弹窗外部隐藏弹窗
window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
});










// 导航栏子菜单

const dropdowns = document.querySelectorAll('.nav-item.dropdown');

dropdowns.forEach(dropdown => {
    let hideTimeout;

    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout); // 清除隐藏延迟
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        hideTimeout = setTimeout(() => {
            menu.style.display = 'none';
        }, 150); // 延迟 200 毫秒隐藏
    });
});






document.addEventListener('DOMContentLoaded', () => {
    const allCheckbox = document.getElementById('all');
    if (allCheckbox) {
        allCheckbox.addEventListener('change', toggleAll);
    } else {
        console.error("未找到 id 为 'all' 的复选框");
    }
});

function toggleAll(checkbox) {
    const isChecked = checkbox.checked;
    document.querySelectorAll('.filter-checkbox:not(#all)').forEach(cb => {
        cb.checked = isChecked;
    });
    filterProducts();
}

function filterProducts() {
    const allCheckbox = document.getElementById('all');
    if (!allCheckbox) {
        console.error("未找到 id 为 'all' 的复选框");
        return;
    }

    const allChecked = allCheckbox.checked;
    const otherCheckboxes = document.querySelectorAll('.filter-checkbox:not(#all)');
    const selectedCategories = Array.from(otherCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.id);

    if (allChecked) {
        document.querySelectorAll('.product-item').forEach(product => {
            product.style.display = 'block';
        });
    } else {
        if (selectedCategories.length === 0) {
            document.querySelectorAll('.product-item').forEach(product => {
                product.style.display = 'none';
            });
        } else {
            document.querySelectorAll('.product-item').forEach(product => {
                const category = product.getAttribute('data-category');
                product.style.display = selectedCategories.includes(category) ? 'block' : 'none';
            });
        }
    }
}

function toggleAll(checkbox) {
    const isChecked = checkbox.checked;
    document.querySelectorAll('.filter-checkbox:not(#all)').forEach(cb => {
        cb.checked = isChecked;
    });
    filterProducts();
}

function filterProducts() {
    const allCheckbox = document.getElementById('all');
    if (!allCheckbox) {
        console.error("未找到 id 为 'all' 的复选框");
        return;
    }

    const allChecked = allCheckbox.checked;
    const otherCheckboxes = document.querySelectorAll('.filter-checkbox:not(#all)');
    const selectedCategories = Array.from(otherCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.id);

    if (allChecked) {
        document.querySelectorAll('.product-item').forEach(product => {
            product.style.display = 'block';
        });
    } else {
        if (selectedCategories.length === 0) {
            document.querySelectorAll('.product-item').forEach(product => {
                product.style.display = 'none';
            });
        } else {
            document.querySelectorAll('.product-item').forEach(product => {
                const category = product.getAttribute('data-category');
                product.style.display = selectedCategories.includes(category) ? 'block' : 'none';
            });
        }
    }
}






  // 获取所有 "立即购买" 按钮
  document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // 阻止默认跳转行为

        // 获取当前产品的 h3 内容
        const productName = this.closest('div').querySelector('h3').innerText.trim();
        console.log('产品名称:', productName); // 检查是否正确获取产品名称

        // 动态生成 mailto 链接
        const mailtoLink = `mailto:gracelingyao@126.com?subject=购买咨询&body=您好，我想咨询关于产品【 ${productName} 】的购买信息。%0A%0A-------来自官网`;
        console.log('生成的邮件链接:', mailtoLink); // 检查生成的链接

        // 打开邮件客户端
        window.location.href = mailtoLink;
    });
});