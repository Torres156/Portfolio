window.addEventListener("scroll", (e) => {
    const scrollValue = this.scrollY;
    const headerElement = document.getElementById('header');

    let text = 'none';
    if (scrollValue > 10)
        text = 'flex';

    if (headerElement.style.display != text)
        headerElement.style.display = text;

    const sections = document.querySelectorAll("section");
    if (sections.length > 0) {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const winHeight = (window.innerHeight || document.documentElement.clientHeight);
            if (rect.top <= winHeight - 10) {
                const className = section.className.split(" ")[0];
                let currentActive = document.getElementsByClassName("menu-active")[0];
                if (currentActive.classList.contains("menu-active"))
                    currentActive.classList.remove("menu-active");

                currentActive = document.getElementById(className);

                if (!currentActive.classList.contains(className))
                    currentActive.classList.add("menu-active");
            }
        });
    }
})

