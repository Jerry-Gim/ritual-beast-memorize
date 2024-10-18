// 复位按钮点击事件
document.getElementById("resetButton").addEventListener("click", function() {
    // 获取所有滑动按钮
    const toggleButtons = document.querySelectorAll(".toggle-button");
    // 将所有按钮的状态设置为未选中
    toggleButtons.forEach(button => {
        button.checked = false;
    });
});
