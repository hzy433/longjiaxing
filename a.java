document.addEventListener('DOMContentLoaded', function() {
  // 1. 获取"支持"导航项
  const supportLink = document.querySelector('.nav-item[active-color="rebeccapurple"]');
  
  // 2. 获取目标输入框（假设是newsletter输入框）
  const newsletterInput = document.querySelector('.newsletter input');
  
  // 3. 添加点击事件
  supportLink.addEventListener('click', function(e) {
    e.preventDefault(); // 阻止默认跳转行为
    
    // 4. 滚动到newsletter部分（平滑滚动）
    document.querySelector('#newsletter').scrollIntoView({ 
      behavior: 'smooth' 
    });
    
    // 5. 延迟300ms后聚焦输入框（等待滚动完成）
    setTimeout(() => {
      newsletterInput.focus();
    }, 300);
  });
});
