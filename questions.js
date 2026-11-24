document.addEventListener("DOMContentLoaded", () => {

    // SECTION A: CHOOSE (45 MARKS)
    // Correct answer index: 0=A, 1=B, 2=C, 3=D

    const choose = [
        ["Communication skills are the abilities to convey our ____.", ["Ideas", "Money", "Pictures", "Numbers"], 0],
        ["Communication should be precise and ____.", ["Confusing", "Lucid", "Careless", "Silent"], 1],
        ["Communication can be in ____ form.", ["Spoken or written", "Written only", "Spoken only", "Visual only"], 0],
        ["Which is a communication device?", ["Phone", "Chair", "Table", "Cup"], 0],
        ["E-mail is a form of ____ communication.", ["Electronic", "Physical", "Silent", "Body"], 0],
        ["Communication is usually a ____ interaction.", ["One-way", "Two-way", "Three-way", "Silent"], 1],
        ["Which skills are also communication skills?", ["Listening and reading", "Running and jumping", "Drawing and painting", "Cooking"], 0],
        ["Spoken communication involves ____.", ["Body language", "Handwriting only", "Spelling only", "Punctuation only"], 0],
        ["Which is a feature of spoken communication?", ["Facial expressions", "Paragraphs", "Letter size", "Text organisation"], 0],
        ["Posture is a part of ____.", ["Body language", "Written language", "Reading", "Grammar"], 0],
        ["Which is a non-verbal feature?", ["Eye contact", "E-mail", "Sentence pattern", "Word order"], 0],
        ["The distance between a speaker and listener is called ____.", ["Proximity", "Vocabulary", "Attitude", "Perception"], 0],
        ["Written communication exploits the choice of ____.", ["Words", "Clothes", "Perfume", "Gestures"], 0],
        ["Written communication uses sentence ____.", ["Patterns", "Postures", "Expressions", "Movements"], 0],
        ["More than one ____ can be conveyed by a single utterance.", ["Meaning", "Letter", "Speaker", "Device"], 0],
        ["Indirectness communicates different shades of ____.", ["Meaning", "Clothing", "Distance", "Sound"], 0],
        ["Clothes and hair may convey a person's ____.", ["Personality", "Height", "Weight", "Food"], 0],
        ["Communication skills are a vital ____ skill.", ["Life", "Sports", "Cooking", "Driving"], 0],
        ["Appearance creates the first ____.", ["Impression", "Conversation", "Sentence", "Question"], 0],
        ["Communication skills are important in social ____.", ["Dealings", "Buildings", "Machines", "Games"], 0],
        ["Good communication can improve ____.", ["Relationships", "Weather", "Buildings", "Machines"], 0],
        ["Communication skills are required by many ____.", ["Jobs", "Holidays", "Games", "Hobbies"], 0],
        ["A CEO needs good ____ skills.", ["Communication", "Cooking", "Drawing", "Singing"], 0],
        ["People in higher positions need more ____ in communication.", ["Expertise", "Silence", "Shyness", "Fear"], 0],
        ["Which language is especially mentioned in the passage?", ["English", "French", "Japanese", "Chinese"], 0],
        ["Translation and interpretation are important ____ skills.", ["Communication", "Sporting", "Musical", "Cooking"], 0],
        ["Young people often spend time with their ____.", ["Cell phones", "Blackboards", "Chairs", "Tables"], 0],
        ["Young people need to overcome their ____.", ["Shyness", "Knowledge", "Vocabulary", "Interest"], 0],
        ["The place to begin training young people is the ____.", ["Home", "Office", "Market", "Factory"], 0],
        ["Parents should talk with their children as often as ____.", ["Possible", "Never", "Rarely", "Once"], 0],
        ["Parental talk develops children's ____ skills.", ["Language", "Sport", "Driving", "Painting"], 0],
        ["Children can enrich their stock of ____.", ["Vocabulary", "Furniture", "Clothes", "Money"], 0],
        ["Parental talk develops critical ____.", ["Thinking", "Sleeping", "Dancing", "Swimming"], 0],
        ["Parents should teach children to use ____ language.", ["Polite", "Rude", "Angry", "Careless"], 0],
        ["Schools should promote effective ____.", ["Communication", "Silence", "Sleep", "Entertainment"], 0],
        ["Communication skills can bring academic ____.", ["Success", "Failure", "Confusion", "Fear"], 0],
        ["Communication skills can be taught in Myanmar and ____ courses.", ["English", "Chemistry", "Physics", "Biology"], 0],
        ["Students should be aware of their ____.", ["Audience", "Food", "Games", "Clothes"], 0],
        ["Audience awareness includes age, gender, job and ____.", ["Status", "Weather", "Colour", "Distance"], 0],
        ["Communication should be appropriate to the ____.", ["Setting", "Clothing", "Weather", "Device"], 0],
        ["One should have relevant knowledge and ____.", ["Vocabulary", "Jewellery", "Make-up", "Perfume"], 0],
        ["Communication should be ____.", ["Informative", "Meaningless", "Confusing", "Unorganised"], 0],
        ["One should be aware of the available ____.", ["Time", "Money", "Food", "Space"], 0],
        ["Communication should be well-____.", ["Organised", "Hidden", "Forgotten", "Ignored"], 0],
        ["Polite language helps create ____.", ["Rapport", "Anger", "Fear", "Confusion"], 0]
    ];

    // SECTION B: INITIAL LETTERS (45 MARKS)

    const initial = [
        ["Communication skills convey our i________.", "ideas"],
        ["We communicate our f________ and attitudes.", "feelings"],
        ["Communication should be precise and l________.", "lucid"],
        ["Communication can be in spoken or w________ form.", "written"],
        ["E-mail and video c________ are communication methods.", "conferencing"],
        ["Communication is usually a t________-way interaction.", "two"],
        ["L________ and reading are communication skills.", "listening"],
        ["Spoken communication involves body l________.", "language"],
        ["Facial e________ are features of spoken communication.", "expressions"],
        ["P________ is a part of body language.", "posture"],
        ["G________ are used in spoken communication.", "gestures"],
        ["E________ contact is important in communication.", "eye"],
        ["The distance between speakers is p________.", "proximity"],
        ["Written communication uses the choice of w________.", "words"],
        ["Written communication uses sentence p________.", "patterns"],
        ["A single utterance can convey more than one m________.", "meaning"],
        ["Indirectness communicates different shades of m________.", "meaning"],
        ["Clothes may convey a person's p________.", "personality"],
        ["Communication skills are a vital life s________.", "skill"],
        ["Appearance creates the first i________.", "impression"],
        ["Communication is important in social d________.", "dealings"],
        ["Good communication improves r________.", "relationships"],
        ["Communication skills are required by many j________.", "jobs"],
        ["A CEO needs communication s________.", "skills"],
        ["Higher positions require more e________ in communication.", "expertise"],
        ["English is an important f________ language.", "foreign"],
        ["Translation and i________ are important skills.", "interpretation"],
        ["Young people spend time with cell p________.", "phones"],
        ["Young people need to overcome their s________.", "shyness"],
        ["The home is the place to begin t________.", "training"],
        ["Parents should talk with their c________.", "children"],
        ["Parental talk develops language s________.", "skills"],
        ["Children enrich their v________ through conversation.", "vocabulary"],
        ["Children develop critical t________.", "thinking"],
        ["Parents should teach p________ language.", "polite"],
        ["Schools promote effective c________.", "communication"],
        ["Communication skills bring academic s________.", "success"],
        ["Students should consider their a________.", "audience"],
        ["Audience awareness includes social s________.", "status"],
        ["Communication must suit the s________.", "setting"],
        ["Speakers need relevant k________.", "knowledge"],
        ["Communication should be i________.", "informative"],
        ["Speakers should consider available t________.", "time"],
        ["Communication should be relevant to the t________.", "topic"],
        ["Polite language creates r________.", "rapport"]
    ];

    // SECTION C: GRAMMAR (10 MARKS)

    const grammar = [{
            q: "The teacher teaches English every day. (Change into Passive Voice.)",
            a: ["english is taught by the teacher every day"]
        },
        {
            q: "If I study hard, I ______ (pass) the examination.",
            a: ["will pass"]
        },
        {
            q: "He was careless. He lost his wallet. (Rewrite using It was ... that.)",
            a: ["it was because he was careless that he lost his wallet"]
        },
        {
            q: 'She said, "I am reading a book." (Change into Reported Speech.)',
            a: ["she said that she was reading a book"]
        },
        {
            q: "The girl is my sister. She is wearing a red dress. (Join using who.)",
            a: ["the girl who is wearing a red dress is my sister"]
        },
        {
            q: "Yangon is the largest city in Myanmar. It is beautiful. (Use Noun in Apposition.)",
            a: ["yangon, the largest city in myanmar, is beautiful"]
        },
        {
            q: "Although he is poor, he is happy. (Rewrite using No matter.)",
            a: ["no matter how poor he is, he is happy"]
        },
        {
            q: "Someone has stolen my bicycle. (Change into Passive Voice.)",
            a: ["my bicycle has been stolen"]
        },
        {
            q: "If I were a bird, I ______ (fly) in the sky.",
            a: ["would fly"]
        },
        {
            q: 'He said to me, "Do you like English?" (Change into Reported Speech.)',
            a: ["he asked me if i liked english", "he asked me whether i liked english"]
        }
    ];

    // QUESTION DISPLAY

    const byId = id => document.getElementById(id);

    function renderChoose() {
        const root = byId("choose");
        if (!root) return;

        choose.forEach((q, i) => {
            const box = document.createElement("div");
            box.className = "question";

            let html = `<p><b>${i + 1}.</b> ${q[0]}</p>`;

            q[1].forEach((option, j) => {
                html += `
          <label>
            <input type="radio" name="choose${i}" value="${j}">
            ${String.fromCharCode(65 + j)}. ${option}
          </label>`;
            });

            html += `<div class="feedback" id="fb-choose-${i}"></div>`;
            box.innerHTML = html;
            root.appendChild(box);
        });
    }

    function renderText(data, id, prefix) {
        const root = byId(id);
        if (!root) return;

        data.forEach((q, i) => {
            const box = document.createElement("div");
            box.className = "question";

            const question = prefix === "initial" ? q[0] : q.q;

            box.innerHTML = `
        <p><b>${i + 1}.</b> ${question}</p>
        <input type="text" name="${prefix}${i}"
          placeholder="Your answer" autocomplete="off">
        <div class="feedback" id="fb-${prefix}-${i}"></div>
      `;

            root.appendChild(box);
        });
    }

    renderChoose();
    renderText(initial, "initial", "initial");
    renderText(grammar, "grammar", "grammar");

    // NORMALIZE ANSWERS

    function normalize(value) {
        return value.toLowerCase()
            .trim()
            .replace(/[.,!?]/g, "")
            .replace(/\s+/g, " ");
    }

    // FEEDBACK

    function showFeedback(type, i, ok, answer) {
        const el = byId(`fb-${type}-${i}`);
        if (!el) return;

        el.textContent = ok ? "Correct ✓" : `Incorrect ✗ Correct answer: ${answer}`;
        el.className = `feedback ${ok ? "correct" : "incorrect"}`;
    }

    // CHECK ANSWERS

    const check = byId("checkAnswers");

    if (check) {
        check.addEventListener("click", () => {
            let score = 0;

            choose.forEach((q, i) => {
                const selected = document.querySelector(
                    `input[name="choose${i}"]:checked`
                );

                const ok = !!selected && Number(selected.value) === q[2];

                if (ok) score++;

                showFeedback(
                    "choose",
                    i,
                    ok,
                    q[1][q[2]]
                );
            });

            initial.forEach((q, i) => {
                const input = document.querySelector(
                    `[name="initial${i}"]`
                );

                const ok = !!input &&
                    normalize(input.value) === normalize(q[1]);

                if (ok) score++;

                showFeedback("initial", i, ok, q[1]);
            });

            grammar.forEach((q, i) => {
                const input = document.querySelector(
                    `[name="grammar${i}"]`
                );

                const ok = !!input &&
                    q.a.some(answer =>
                        normalize(input.value) === normalize(answer)
                    );

                if (ok) score++;

                showFeedback(
                    "grammar",
                    i,
                    ok,
                    q.a[0]
                );
            });

            const scoreEl = byId("score");

            if (scoreEl) {
                scoreEl.textContent =
                    `Your Score: ${score} / 100`;
            }
        });
    }

    // CLEAR ANSWERS

    const clear = byId("clearAnswers");

    if (clear) {
        clear.addEventListener("click", () => {
            document.querySelectorAll(
                "#choose input, #initial input, #grammar input"
            ).forEach(input => {
                if (input.type === "radio") {
                    input.checked = false;
                } else {
                    input.value = "";
                }
            });

            document.querySelectorAll(".feedback").forEach(el => {
                el.textContent = "";
                el.className = "feedback";
            });

            const scoreEl = byId("score");
            if (scoreEl) scoreEl.textContent = "";
        });
    }

});