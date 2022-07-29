// Tab Menu
const makeActive = (tabId) => {
    $("#tabMenu").children(".activeTab").removeClass("activeTab")
    $(`${tabId}`).addClass("activeTab")
    $(".tab").hide()
    $(`${tabId}Form`).show()
}

$("#login").click( function () {
    makeActive("#login")
})
$("#signup").click(() => {
    makeActive("#signup")
})

makeActive("#login")


const showError = (inputId, errorMessage) => {
    errorMessage = errorMessage || "Invalid Input"
    $(`#${inputId}`).addClass("inputError")
    $(`#${inputId}Error`).text(errorMessage)
}
const clearErrors = () => {
    $(".error").text("")
    $(".inputError").removeClass("inputError")
}


const validateInput = (inputId, validateFunc) => {
    const inputValue = $(`#${inputId}`).val() || ""
    const result = validateFunc(inputValue.trim())
    if (result === true) return true
    const [isValid, errorMessage] = result
    showError(inputId, errorMessage)
    return false
}

const regTest = (reg, str) => {
    const regexStr = new RegExp(reg)
    if (regexStr.test(str))
        return true
    return false
}

const validateName = (inputValue) => {
    if (!inputValue) return [false, "Field Required"]
    if (!regTest("^[A-Za-z]+$", inputValue)) return [false, "Only letters allowed"]
    return true
}

const validateEmail = (inputValue) => {
    if (!inputValue) return [false, "Field Required"]
    if (!inputValue.includes("@")) return [false, "Must include @"]
    if (inputValue.endsWith("@")) return [false, "Please Mention domain"]
    return true
}

const validatePass = (inputValue) => {
    if (!inputValue) return [false, "Field Required"]
    if (inputValue.length < 8) return [false, "Password too short"]
    if (!regTest("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}", inputValue))
        return [false, "Password not inline with our password police"]
    return true
}

const validateCPass = (inputValue) => {
    let passValue = $("#pass").val().trim()
    if (!inputValue) return [false, "Field Required"]
    if (inputValue != passValue) return [false, "Password's don't match"]
    return true
}

$("#loginForm").submit((event) => {
    event.preventDefault()

    // form validation code
    clearErrors()
    const validationList = [
        ["lemail", validateEmail],
        ["lpass", validatePass],
    ]
    const isValidList = validationList.map(
        (val) => {
            const [id, func] = val
            return validateInput(id, func)
        }
    )

    if (isValidList.includes(false)) {
        return false
    }

    // form submission code
    const showSuccess = () => {
        window.alert("Logedin Successfully! 🥳")
    }
    showSuccess()
})

$("#signupForm").submit((event) => {
    console.log("Trying to submit");
    event.preventDefault()

    // form validation code
    clearErrors()
    const validationList = [
        ["name", validateName],
        ["email", validateEmail],
        ["pass", validatePass],
        ["cpass", validateCPass]
    ]
    const isValidList = validationList.map(
        (val) => {
            const [id, func] = val
            return validateInput(id, func)
        }
    )

    if (isValidList.includes(false)) {
        return false
    }

    // form submission code
    const showSuccess = () => {
        window.alert("Registered Successfully! 🥳")
    }
    showSuccess()
})

$("button[type=reset]").click((event) => {
    clearErrors()
})

$(".see").click((event) => {
    const togglePassword = () => {
        const passNode = $("[name=pass]")
        console.log(passNode);
        if (passNode.prop("type") === "password") {
            passNode.prop({type: "text"})
        } else {
            passNode.prop({type: "password"})
        }
    }
    togglePassword()
})

