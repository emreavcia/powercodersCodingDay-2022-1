let questionList = [
    {
        question:
            "Where in an HTML document is the correct place to refer to an external style sheet (such as style.css)?",
        answers: [
            "In the head section",
            "In the body section",
            "At the end of the document",
            "In the css section",
        ],
        correct: "0",
    },
    {
        question: "Which of the following tags is used for the dropdown list?",
        answers: ["dropdown", "textarea", "select", "text"],
        correct: "2",
    },
    {
        question: "Which is not correct?",
        answers: [
            "document.getElementById(id)",
            "document.getElementsByTagName(tagname)",
            "document.getElementsByClassName(classname)",
            "document.getElementsByTagType(tagtype)",
        ],
        correct: "3",
    },
    {
        question: "How do you call a function?",
        answers: [
            "call myfunction()",
            "myfunction()",
            "call function myfunction()",
        ],
        correct: "2",
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            "//This is a comment",
            "<--this is a comment-->",
            "this is a comment",
        ],
        correct: "0",
    }

]

const rootDiv = document.getElementById("root")
const mainHeading = document.getElementById("main-question")
const listForQuestions = document.getElementById("question-list")
//randomize the array when page loads
questionList = questionList.sort(() => Math.random() - 0.5);


const renderContent = (increment = 0) => {

    mainHeading.innerHTML = `${questionList[increment].question}`
    listForQuestions.innerHTML = ` ${questionList[increment].answers.map((answer, index) => {
        return (
            `
            <li>
              <input type="radio" name="option" id="radio_${index}" />
              <label for="radio_${index}">${answer}</label>
            </li>
                    `
        )
    }).join("")
        } `
}
renderContent()

const nextBtn = document.getElementById("next-btn")

let increment = 0;

nextBtn.addEventListener("click", () => {
    increment++
    renderContent(increment)
    if (increment > 3) {
        alert("you finished the quiz")
        increment = 0
    }
    radios.forEach(radio => {
        radio.style.backgroundColor = "white"
    })

})

const submitBtn = document.getElementById("submit-btn")
const radios = document.querySelectorAll("input[type='radio']")


submitBtn.addEventListener("click", () => {
    radios.forEach(radio => {
        if (radio.id == "radio_" + questionList[increment].correct) {
            let label = document.querySelector(`label[for='${radio.id}']`)
            label.style.backgroundColor = "green"
        } else {
            let label = document.querySelector(`label[for='${radio.id}']`)
            label.style.backgroundColor = "red"
        }
    })
})


