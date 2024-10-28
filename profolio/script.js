// 平滑滚动效果
document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
