function setUpTabs() {
    document.querySelectorAll(".tabs__button").forEach(button => {
        button.addEventListener("click", () =>{
            const sideBar = button.parentElement;
            const thinSection = sideBar.parentElement;
            const tabsContainer = thinSection.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActive = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

            sideBar.querySelectorAll(".tabs__button").forEach(e => {
                e.classList.remove("tabs__button--active");
            });

            tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
                tab.classList.remove("tabs__content--active");
            });

            button.classList.add("tabs__button--active");
            tabToActive.classList.add("tabs__content--active");


        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setUpTabs();
})