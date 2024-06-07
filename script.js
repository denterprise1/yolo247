const quizData = [
    {
        question: "What is the capital of Maharashtra?",
        options: ["Mumbai", "Pune", "Nagpur", "Nashik"],
        correct: "Mumbai"
    },
    {
        question: "Which famous monument is located in Mumbai?",
        options: ["Gateway of India", "Taj Mahal", "India Gate", "Red Fort"],
        correct: "Gateway of India"
    },
    {
        question: "What is the local train system in Mumbai called?",
        options: ["Mumbai Metro", "Mumbai Local", "Mumbai Monorail", "Mumbai Rapid"],
        correct: "Mumbai Local"
    },
    {
        question: "Which famous Bollywood film studio is located in Mumbai?",
        options: ["Film City", "Ramoji Film City", "Universal Studios", "Warner Bros Studios"],
        correct: "Film City"
    },
    {
        question: "What is the name of the famous beach in Mumbai?",
        options: ["Juhu Beach", "Marina Beach", "Calangute Beach", "Baga Beach"],
        correct: "Juhu Beach"
    },
    {
        question: "Which festival is celebrated with great enthusiasm in Mumbai?",
        options: ["Diwali", "Holi", "Ganesh Chaturthi", "Eid"],
        correct: "Ganesh Chaturthi"
    },
    {
        question: "What is the name of Mumbai's famous dabbawala service?",
        options: ["Lunchbox Service", "Dabbawala Service", "Food Delivery Service", "Tiffin Service"],
        correct: "Dabbawala Service"
    },
    {
        question: "Which sea is Mumbai located on the coast of?",
        options: ["Arabian Sea", "Bay of Bengal", "Red Sea", "Caspian Sea"],
        correct: "Arabian Sea"
    },
    {
        question: "What is the name of Mumbai's famous street food?",
        options: ["Vada Pav", "Samosa", "Pani Puri", "Dosa"],
        correct: "Vada Pav"
    },
    {
        question: "Which is the largest and most popular cricket stadium in Mumbai?",
        options: ["Wankhede Stadium", "Eden Gardens", "Feroz Shah Kotla", "M. Chinnaswamy Stadium"],
        correct: "Wankhede Stadium"
    },
    {
        question: "Which island is Mumbai located on?",
        options: ["Salsette Island", "Majuli Island", "Divar Island", "Vypin Island"],
        correct: "Salsette Island"
    },
    {
        question: "Which famous Bollywood actor is often referred to as the 'King of Bollywood'?",
        options: ["Amitabh Bachchan", "Shah Rukh Khan", "Salman Khan", "Aamir Khan"],
        correct: "Shah Rukh Khan"
    },
    {
        question: "Which iconic hotel is located near the Gateway of India?",
        options: ["Taj Mahal Palace Hotel", "The Oberoi", "Leela Palace", "ITC Grand Central"],
        correct: "Taj Mahal Palace Hotel"
    },
    {
        question: "Which historic train station is a UNESCO World Heritage Site in Mumbai?",
        options: ["Chhatrapati Shivaji Maharaj Terminus", "Mumbai Central", "Bandra Terminus", "Dadar Station"],
        correct: "Chhatrapati Shivaji Maharaj Terminus"
    },
    {
        question: "What is the name of Mumbai's main airport?",
        options: ["Chhatrapati Shivaji Maharaj International Airport", "Indira Gandhi International Airport", "Rajiv Gandhi International Airport", "Kempegowda International Airport"],
        correct: "Chhatrapati Shivaji Maharaj International Airport"
    },
    {
        question: "Which neighborhood in Mumbai is known for its colonial architecture?",
        options: ["Colaba", "Andheri", "Bandra", "Dadar"],
        correct: "Colaba"
    },
    {
        question: "What is the name of the popular seaside promenade in Mumbai?",
        options: ["Marine Drive", "Bandra-Worli Sea Link", "Linking Road", "Carter Road"],
        correct: "Marine Drive"
    },
    {
        question: "Which popular hill station is located near Mumbai?",
        options: ["Lonavala", "Ooty", "Shimla", "Darjeeling"],
        correct: "Lonavala"
    },
    {
        question: "Which popular shopping street is located in South Mumbai?",
        options: ["Fashion Street", "Commercial Street", "MG Road", "Brigade Road"],
        correct: "Fashion Street"
    },
    {
        question: "Which university is one of the oldest in Mumbai?",
        options: ["University of Mumbai", "Pune University", "Delhi University", "JNU"],
        correct: "University of Mumbai"
    },
    {
        question: "Which famous Mumbai landmark is also known as the 'Queen's Necklace'?",
        options: ["Marine Drive", "Juhu Beach", "Gateway of India", "Worli Sea Face"],
        correct: "Marine Drive"
    }
];


let currentQuestionIndex = 0;

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    const questionData = quizData[currentQuestionIndex];
    const questionElement = document.createElement('h2');
    questionElement.textContent = questionData.question;
    quizContainer.appendChild(questionElement);

    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(optionElement, option);
        quizContainer.appendChild(optionElement);
    });
}

function checkAnswer(optionElement, selectedOption) {
    const questionData = quizData[currentQuestionIndex];
    const correctAnswer = questionData.correct;

    if (selectedOption === correctAnswer) {
        optionElement.classList.add('correct');
    } else {
        optionElement.classList.add('wrong');
    }

    document.querySelectorAll('.option').forEach(option => {
        option.onclick = null;
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        }
    });

    document.getElementById('next').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuiz();
        document.getElementById('next').disabled = true;
    } else {
        document.getElementById('quiz').innerHTML = '<h2>Quiz Completed!</h2>';
    
        document.getElementById('next').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
    document.getElementById('next').disabled = true;
});
