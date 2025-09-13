function filterMenu(category) {
    let items = document.querySelectorAll(".item");

    items.forEach(item => {
        if (category === "all" || item.getAttribute("data-category") === category) {
            item.style.display = "block";
        } else {
            item.style.display = "none";       }
    }
    );
}
