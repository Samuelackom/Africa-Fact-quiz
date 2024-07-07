const questions = [
    { question: "What is the longest river in Africa?", answer: "The Nile River" },
    { question: "Which is the largest desert in Africa?", answer: "The Sahara Desert" },
    { question: "What is the highest mountain in Africa?", answer: "Mount Kilimanjaro" },
    { question: "Name the largest lake in Africa.", answer: "Lake Victoria" },
    { question: "Which African country has the longest coastline?", answer: "Somalia" },
    { question: "Which ancient civilization was located in present-day Egypt?", answer: "The ancient civilization of Egypt" },
    { question: "What was the name of the ancient city in Mali that was a centre of trade and scholarship?", answer: "Timbuktu" },
    { question: "When did South Africa officially end apartheid?", answer: "1994" },
    { question: "Which African empire was known for its wealth and extensive trade networks, particularly in gold?", answer: "The Mali Empire" },
    { question: "What was the Scramble for Africa?", answer: "The period during the late 19th century when European powers colonised and partitioned African territories" },
    { question: "What is the most widely spoken language in Africa?", answer: "Swahili" },
    { question: "What is the significance of the Griot in West African culture?", answer: "Griots are traditional storytellers, musicians, and oral historians" },
    { question: "Which African country is famous for its Maasai Mara National Reserve?", answer: "Kenya" },
    { question: "What is the traditional Zulu dance called that is performed at ceremonies and celebrations?", answer: "Indlamu dance" },
    { question: "Which African festival, held in Ghana, celebrates the harvesting of yams?", answer: "Homowo Festival" },
    { question: "What is Africa’s most significant natural resource export?", answer: "Oil" },
    { question: "Which country is the largest producer of cocoa beans in Africa?", answer: "Côte d'Ivoire (Ivory Coast)" },
    { question: "What precious metal is South Africa known for producing?", answer: "Gold" },
    { question: "Which African country is the leading producer of diamonds?", answer: "Botswana" },
    { question: "What is the Great Green Wall initiative?", answer: "A project aimed at combating desertification in the Sahel region of Africa" },
    { question: "What is the largest land mammal found in Africa?", answer: "The African elephant" },
    { question: "Name an African bird that is the largest bird in the world.", answer: "The ostrich" },
    { question: "Which African animal is known for its distinctive black and white stripes?", answer: "The zebra" },
    { question: "What is the name of the rainforest located in Central Africa?", answer: "The Congo Rainforest" },
    { question: "Which African country is home to the Okavango Delta?", answer: "Botswana" },
    { question: "What is the primary ingredient in the North African dish couscous?", answer: "Semolina wheat" },
    { question: "Which African city is famous for its ancient rock-hewn churches?", answer: "Lalibela in Ethiopia" },
    { question: "What is the traditional Maasai attire called?", answer: "Shuka" },
    { question: "What is the largest island in Africa?", answer: "Madagascar" },
    { question: "What is the term for a traditional West African textile made from narrow strips of cloth?", answer: "Kente cloth" },
];

const questionContainer = document.getElementById('question-container');

questions.forEach((item, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    
    const questionTitle = document.createElement('h2');
    questionTitle.textContent = `Q${index + 1}: ${item.question}`;
    
    const answerDiv = document.createElement('div');
    answerDiv.classList.add('answer');
    answerDiv.textContent = item.answer;
    
    const revealButton = document.createElement('button');
    revealButton.textContent = 'Show Answer';
    revealButton.addEventListener('click', () => {
        answerDiv.style.display = answerDiv.style.display === 'block' ? 'none' : 'block';
    });
    
    questionDiv.appendChild(questionTitle);
    questionDiv.appendChild(revealButton);
    questionDiv.appendChild(answerDiv);
    
    questionContainer.appendChild(questionDiv);
});
