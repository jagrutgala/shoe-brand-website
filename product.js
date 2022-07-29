document.querySelectorAll(".product").forEach((ele) => {
    let timeout = true
    const showProduct = () => {
        if (!timeout) return
        timeout = false
        ele.classList.add("productFullSize")
    }
    ele.addEventListener("click", showProduct)

    ele.querySelector(".cross").addEventListener("click", (event) => {
        ele.classList.remove("productFullSize")
        window.setTimeout(() => {
            clearTimeout(timeout)
            timeout = true
        }, 100)
    })

})
