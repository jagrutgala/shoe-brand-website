const btnTheme = document.querySelector("#btnTheme")

btnTheme.onclick = (event) => {
    if (document.body.classList.contains("light")) {
        document.body.classList.replace("light", "dark")
        document.querySelector("#logo").style = "filter: invert(100%)"
    } else {
        document.body.classList.replace("dark", "light")
        document.querySelector("#logo").style = "filter: invert(0%)"
    }
}

document.addEventListener("scroll", (event) => {
    const btnTop = document.querySelector("#topLink")
    const scrollHeight = 100
    if ((document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight)) {
        btnTop.classList.remove("hidden")
        return
    }
    btnTop.classList.add("hidden")
})


