// 1. DATA: THE SCENARIOS
const gameData = {
    "Design": [
        {
            situation: "A prestigious agency offers you high pay to 'white label' a project for a global brand. You get the money, but you can never mention you worked on it or show it in your portfolio. What do you do?",
            options: [
                { text: "Use the funds to finance your own personal projects. ", outcome: "You are financially stable, but your professional portfolio remains stagnant during your most productive months." },
                { text: "Offer a lower rate in exchange for the right to show the work in private pitches. ", outcome: "You get the best of both worlds, though the lower pay might strain your monthly budget." },
                { text: "If you can't show it, it didn't happen. You hold out for a public credit job. ", outcome: "You maintain your 'brand', but you face a lean month financially while waiting for the next lead." }
            ]
        },
        {
            situation: "You are overloaded. A talented peer offers to do 70% of the heavy lifting for a client project at half your rate. The client expects you to do the work. What do you do?",
            options: [
                { text: "Review and polish their work, then present it as your own.", outcome: "You finish on time and make a profit, but you live in constant fear of the client asking for a live 'work-session.'" },
                { text: "Tell the client you’re bringing in an associate to help.", outcome: "You build trust with the client, but you risk losing the project if they prefer to work directly with you." },
                { text: "Work 18-hour days to ensure every pixel is yours.", outcome: "You finish the project, but you burn out and lose your edge." }
            ]
        },
        {
            situation: "You designed a beautiful, innovative website layout. The client loves it, but the developer says it's too complex to build within the current budget. What do you do?",
            options: [
                { text: "Insist the developer finds a way, even if they have to work overtime.", outcome: "The site looks amazing, but you’ve burned your bridge with a key collaborator who won't work with you again." },
                { text: "Simplify the design to fit within budget.", outcome: "The site is functional and within budget, but you feel you've compromised on your vision." },
                { text: "Present the design to the client and explain the complexity.", outcome: "The client understands the limitations, but they may choose a different approach or increase the budget." }
            ]
        },
        {
            situation: "A client sends you a competitor's design and asks you to make something 'exactly like this, but with our logo.' It borders on plagiarism. What do you do?",
            options: [
                { text: "Explain that copying another brand's design violates ethical standards and copyright laws.", outcome: "You maintain your integrity, but you risk losing the client if they insist on a direct copy." },
                { text: "Adapt the design with minor changes to avoid direct copying.", outcome: "You avoid legal issues, but you may still face ethical concerns and potential backlash." },
                { text: "Request a more creative direction that doesn't involve copying.", outcome: "You stay true to your values, but you might delay the project or lose the client if they don't agree." }
            ]
        },
        {
            situation: "You’re interviewing for your dream agency. They ask to see 'behind the scenes' of your best project, but that project is under a strict Non-Disclosure Agreement (NDA). What do you do?",
            options: [
                { text: "Show the work but blur out all sensitive data and the client's logo.", outcome: "You demonstrate professional integrity and problem-solving, which impresses the hiring manager more than the work itself." },
                { text: "Show it anyway, assuming they won't tell.", outcome: "You get the job, but the agency now knows you’re willing to break contracts—making them trust you less with their own clients." },
                { text: "Politely decline and redirect to your portfolio.", outcome: "You protect your confidentiality, but you risk losing the job opportunity if they are not satisfied with your portfolio." }
            ]
        },
        {
            situation: "You're working on a project with a tight deadline. A team member suggests you take a shortcut that might compromise quality but saves time. What do you do?",
            options: [
                { text: "Accept the suggestion to meet the deadline.", outcome: "You finish on time, but the client may notice the compromise in quality." },
                { text: "Refuse the shortcut and push for quality.", outcome: "You deliver a high-quality product, but you risk missing the deadline." },
                { text: "Discuss how to balance speed and quality.", outcome: "You find a middle ground that respects both deadlines and standards." }
            ]
        },
        {
            situation: "You found the 'perfect' font for a massive campaign. The license for commercial use is $2,000, which wasn't in the budget. The client won't pay extra. What do you do?",
            options: [
                { text: "Use it anyway and hope the foundry doesn't notice a mid-sized campaign.", outcome: " 6 months later, the client gets a 'Cease and Desist' and sues you for the legal costs. Your career takes a massive hit." },
                { text: "Find a free alternative that fits the campaign's aesthetic.", outcome: "You save money and avoid legal issues, but the font might not be as perfect." },
                { text: "Buy the license out of your own profit to save the design.", outcome: "The project looks perfect and you’re safe legally, but you’ve effectively worked for free this month." }
            ]
        },



    ],

    "Music": [
        {
            situation: "You spent 6 hours in a 'jam session' where you wrote 90% of the lyrics, but the drummer came up with the 'hook' melody. They demand a 50/50 split.",
            options: [
                { text: "Accept the 50/50 split and move on.", outcome: "You maintain a good relationship with your collaborator, but you feel resentful every time you hear the song." },
                { text: "Insist on a 90/10 split based on work hours.", outcome: "You keep your royalties, but the band chemistry is poisoned and they refuse to play the song live." },
                { text: "Suggest a 60/20/20 split (including the producer).", outcome: "You keep control over your work, but you risk losing the collaboration." }
            ]
        },
        {
            situation: "A major artist offers you an opening slot on their tour, but you have to pay $5,000 for 'production costs' and travel yourself. What do you do?",
            options: [
                { text: "Max out your credit cards to pay the fee.", outcome: "You get great photos and new fans, but return home with massive debt and no guaranteed follow-up gigs." },
                { text: "Ask your fans to fund the 'tour of a lifetime.'", outcome: "You raise the money, but your fans expect high-level 'perks' that take up all your creative energy during the tour." },
                { text: "Say no and spend that $5,000 on a targeted digital marketing campaign.", outcome: "You grow your audience safely, though you miss the industry 'buzz' of being on that specific tour." }
            ]
        },
        {
            situation: " Your best track uses a 3-second sample of an old soul record. Your manager wants to release it now, even though the legal 'clearance' is still pending. What do you do?",
            options: [
                { text: "Release it anyway and hope for the best.", outcome: "You get the track out quickly, but you risk a lawsuit and lose control over your work." },
                { text: "Wait for clearance before releasing.", outcome: "You miss the opportunity to capitalize on the track's popularity, but you avoid legal issues and the song is fully yours when relesaed." },
                { text: "Use a different sample or rework the track.", outcome: "You maintain control and avoid legal issues, but you might lose some of the original's charm." }
            ]
        },
        {
            situation: "You have a sold-out show tonight, but your voice is at 30% due to a cold. Performing could cause permanent vocal cord damage. What do you do?",
            options: [
                { text: "Take a steroid shot and sing through the pain.", outcome: "The show is a success, but you are forced to cancel the next 2 weeks of the tour to recover." },
                { text: "Cancel the show and reschedule.", outcome: "You protect your voice, but you disappoint fans and lose revenue." },
                { text: "Perform a stripped-down version of the set.", outcome: "You maintain your integrity, but you risk a poor performance." }
            ]
        },
        {
            situation: "A top-tier producer wants to work with you, but they want to change your 'indie' sound into a polished, commercial pop style. What do you do?",
            options: [
                { text: "Accept the change and embrace the new direction.", outcome: "You gain access to a wider audience and industry connections, but your core fanbase feels betrayed and calls you a 'sell-out.'" },
                { text: "Negotiate a compromise that preserves your core sound.", outcome: "You maintain your artistic integrity while gaining some commercial exposure, but you might not fully satisfy either party." },
                { text: "Decline the offer and find a producer who 'gets' your current style.", outcome: "You stay authentic and keep your artistic identity intact, but you miss out on potential opportunities and industry exposure." }
            ]
        },
        {
            situation: " A huge influencer wants to use your song in a video but wants you to write them a 'custom verse' for free to 'help you go viral'. What do you do?",
            options: [
                { text: "The exposure to their 5M followers is worth the day of work. ", outcome: "You gain exposure and a potential fanbase, but you lose control over your creative work and the video is short-lived." },
                { text: "Negotiate a fair payment for the custom verse.", outcome: "You maintain control over your work and get fair compensation, but you might miss out on exposure if the influencer doesn't agree." },
                { text: "Decline the offer and focus on building your own audience.", outcome: "You preserve your artistic integrity, but you miss out on a potential opportunity to grow your fanbase." }
            ]
        },
        {
            situation: "Your band is about to sign a record deal, but the label only wants to sign you as a solo artist, keeping the band as 'hired hands'. What do you do?",
            options: [
                { text: "Accept the deal and become a solo artist.", outcome: "You gain individual recognition and financial benefits, but you lose the collaborative experience and creative freedom of being part of a band." },
                { text: "Refuse to sign unless everyone is included equally.", outcome: "The label walks away from the deal. You are still independent, but the band is more united than ever." },
                { text: "Sign solo, but form a separate company where band profits are shared.", outcome: "Complex legal setup that costs money upfront, but keeps everyone legally and financially satisfied." }
            ]
        },

    ],

    "Cinema": [
        {
            situation: "You are losing light on a crucial emotional scene. The lead actor's performance is mediocre, but the crew is hitting overtime. What do you do?",
            options: [
                { text: "Demand the crew stays until the performance is perfect.", outcome: "You got the shot, but the exhausted crew makes a massive technical error the next day." },
                { text: "Wrap the scene and plan to use editing tricks to hide the bad acting.", outcome: "You stayed on budget, but the emotional heart of the movie feels hollow in the final edit." },
                { text: "Change the shot to a close-up of the supporting actor’s reaction instead.", outcome: "A creative solution that saves time, though you’ve now shifted the focus of the scene away from your lead." }
            ]
        },
        {
            situation: "The producer wants a high-impact action shot, but the stunt coordinator says the safety rig isn't 100% ready. You are behind schedule.",
            options: [
                { text: "Do it anyway; the coordinator is just being ‘too cautious.’", outcome: "An accident occurs. Production is shut down indefinitely, and your career faces a massive legal investigation." },
                { text: "Spend 3 hours finding a way to fake the impact with camera angles.", outcome: "Everyone is safe, but you lose half a day of shooting and have to cut a different scene tomorrow." },
                { text: "Remove the action beat entirely to save time and ensure safety.", outcome: "The safety of the crew is preserved, but the film loses its ‘big trailer moment,’ making it harder to sell." }
            ]
        },
        {
            situation: "You found the perfect rooftop, but you don't have a permit. It would take 2 weeks and $2,000 to get one.",
            options: [
                { text: "Sneak the crew up at 4 AM and shoot ‘guerilla style.’", outcome: "You get the shot for free, but a neighbor calls the police. You are blacklisted from that neighborhood forever." },
                { text: "Wait the 2 weeks and pay the fee, even if it delays the edit.", outcome: "You are a professional, but the delay causes your lead actor to leave for their next project before you finish." },
                { text: "Shoot in a public park with a cheaper ‘easy’ permit instead.", outcome: "The scene is finished legally, but the visual aesthetic of the movie is noticeably diminished." }
            ]
        },
        {
            situation: "Your lead actor is highly talented but is making the crew uncomfortable with aggressive, rude comments.",
            options: [
                { text: "Shut them down in front of everyone to show who's boss.", outcome: "The crew feels supported, but the actor retreats to their trailer and refuses to come out for hours." },
                { text: "Take them aside and explain that their behavior is hurting the film.", outcome: "You build a bridge of respect; the actor calms down, but some crew members feel you were ‘too soft.’" },
                { text: "They are the ‘talent’—let them do what they want as long as the film gets made.", outcome: "You finish the film, but your best crew members quit halfway through and won't work with you again." }
            ]
        },
        {
            situation: "You love your 3-hour epic, but the test audience found it ‘confusing’ and ‘too slow.’ The studio wants a 90-minute cut.",
            options: [
                { text: "Stand by your vision and demand the 3-hour release.", outcome: "The studio gives you a ‘limited release’ with zero marketing. Your film stays pure but nobody sees it." },
                { text: "Cut it to 120 minutes by removing subplots you like but aren't essential.", outcome: "The film is tighter and more successful commercially, even if you feel a little ‘creative heartbreak.’" },
                { text: "Let the studio's editor make the 90-minute ‘action’ cut.", outcome: "The film is a hit, but it’s unrecognizable to you. You lose your ‘Auteur’ status in the industry." }
            ]
        },
        {
            situation: "You have a choice between a brilliant theatre actor and a TikTok star with 10M followers for the same role.",
            options: [
                { text: "Hire the influencer to guarantee a massive opening weekend.", outcome: "The film makes money, but the reviews are terrible because the acting is wooden, hurting your long-term brand." },
                { text: "Hire the talent. The film will be better for it.", outcome: "The film is a critical darling, but it struggles to find an audience because it lacks ‘big names.’" },
                { text: "Cast the actor in the lead and the TikToker in a flashy supporting role.", outcome: "You get the quality and the marketing, though you have to navigate two very different egos on set." }
            ]
        },
     {
            situation: "A major streaming service offers you a flat fee that covers your costs, but you lose the chance for a theatrical release.",
            options: [
                { text: "Ensure your investors get their money back immediately.", outcome: "You are a ‘safe’ director to invest in, but you never get the prestige of a big-screen premiere." },
                { text: "Turn down the guaranteed money and wait for a cinema deal.", outcome: "You might wait a year for a deal that never comes, leaving your investors angry and your film ‘on the shelf.’" },
                { text: "Negotiate a 2-week theatrical window before it hits streaming.", outcome: "You get the prestige and the security, though both the streamer and the theaters are annoyed by the compromise." }
            ]
        },
    ],

    "Event Management": [
        {
            situation: "You're planning a large-scale event and have a limited budget. A vendor offers a deal that seems too good to be true, but it includes hidden costs.",
            options: [
                { text: "Accept the offer and hope for the best.", outcome: "You save money initially, but you end up spending more than planned due to hidden fees." },
                { text: "Ask for a detailed breakdown of all costs.", outcome: "You avoid hidden fees, but you might miss out on the deal if it's not worth it." },
                { text: "Ask for a better deal or find an alternative vendor.", outcome: "You get the best value for your money, but you spend more time negotiating." }
            ]
        },
        {
            situation: "Your ‘sold-out’ launch party has a line around the block. You realize the venue’s fire marshal is watching, and you are 20 people over legal capacity.",
            options: [
                { text: "Strictly halt entry until people leave.", outcome: "You stay safe and legal, but high-profile guests in line leave frustrated and post negative reviews about your ‘poor planning.’" },
                { text: "Open a restricted ‘staff-only’ balcony to disperse the crowd.", outcome: "You lower the density on the main floor, but you’ve created a new security blind spot and increased your liability." },
                { text: "Try to convince the marshal that the outdoor patio counts toward capacity.", outcome: "If they agree, you win; if they don't, they shut the whole event down immediately for non-compliance." }
            ]
        },
        {
            situation: "You discover the ‘Vegan/Gluten-Free’ meals weren't delivered for a high-end corporate gala. 15% of your guests have nothing to eat.",
            options: [
                { text: "Send a staffer to a nearby high-end restaurant to buy 50 premium meals on your personal card.", outcome: "You save the night and the guests never know, but you lose your entire profit margin for the event." },
                { text: "Inform the affected guests and offer a partial refund on their ticket.", outcome: "You save money, but the optics are terrible—hungry guests are unhappy guests, regardless of the refund." },
                { text: "Ask the kitchen to ‘improvise’ using side dishes from other meals.", outcome: "You feed everyone, but the quality is noticeably lower, making your event look unprofessional to the VIPs." }
            ]
        },
    {
            situation: "During the peak of the event, the main speakers blow out. You only have small ‘monitor’ speakers left.",
            options: [
                { text: "Pivot the event to an ‘intimate, acoustic’ session.", outcome: "You turn a disaster into a ‘unique experience,’ but the back of the room can’t hear anything and they start to leave." },
                { text: "Call a local supplier for a 1-hour rush delivery at 4x the price.", outcome: "You restore the sound, but the 60-minute silence is a ‘vibe killer’ that people will remember forever." },
                { text: "Stop everything for 10 minutes to try and rewire the system yourself.", outcome: "High risk. If it works, you're a hero. If it fails, you've wasted 10 minutes of ‘social’ time for nothing." }
            ]
        },
        {
            situation: "Your client is demanding last-minute changes to the stage layout that contradict the safety plan you both signed off on.",
            options: [
                { text: "Cite the safety contract and refuse to move the equipment.", outcome: "You stay safe, but the client feels ‘disrespected’ and vows never to hire your agency again." },
                { text: "Move some of the decor but keep the heavy tech where it is.", outcome: "The client feels heard, but the ‘half-baked’ look of the stage satisfies nobody and looks bad in photos." },
                { text: "Do exactly what they want but make them sign a ‘Liability Release’ on the spot.", outcome: "You please the client, but you spend the whole night anxious about a potential equipment collapse." }
            ]
        },
        {
            situation: "A group of uninvited local influencers has entered the VIP lounge and is making the paying sponsors uncomfortable.",
            options: [
                { text: "Have security escort them out immediately in full view of guests.", outcome: "You protect the ‘exclusivity’ of the event, but the influencers post a viral video claiming your event is ‘hostile.’" },
                { text: "Offer to let them stay if they post 3 specific stories tagging your main sponsor.", outcome: "You turn a nuisance into ‘free marketing,’ but your paying sponsors feel cheated that others got in for free." },
                { text: "Invite them to a different, less-exclusive area with free drinks.", outcome: "You clear the VIP zone without a scene, but the gatecrashers likely won't follow your instructions." }
            ]
        },
     {
            situation: "A local journalist notices your ‘Green’ event is using non-recyclable plastic behind the scenes and asks for a comment.",
            options: [
                { text: "Admit the mistake and explain the supply chain failure.", outcome: "You gain points for transparency, but the ‘Green’ branding of the event is permanently tarnished." },
                { text: "Show them the other 90% of the event that IS sustainable to distract them.", outcome: "You might kill the story, but if the journalist is persistent, you look like you are ‘greenwashing.’" },
                { text: "Order staff to hide all plastic immediately and replace it with glass.", outcome: "You solve the visual problem, but the extra labor costs and chaos slow down the service for the guests." }
            ]
        },

    ],
};

// 2. STATE MANAGEMENT
let currentCategory = "";
let currentIdx = 0;
let shuffledQuestions = [];
const categories = ["Design", "Music", "Cinema", "Event Management"];

// 3. UTILITY: SHUFFLE FUNCTION (Fisher-Yates Algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 4. NAVIGATION & LOGIC
window.onload = () => {
    setTimeout(() => { transitionTo('main-menu'); }, 5000);
};

function transitionTo(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function showCategories() {
    const list = document.getElementById('category-list');
    list.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.innerText = cat;
        btn.onclick = () => startGame(cat);
        list.appendChild(btn);
    });
    transitionTo('category-screen');
}

function startGame(category) {
    currentCategory = category;
    currentIdx = 0;
    
    // RANDOMIZE QUESTIONS: Clone the array and shuffle it
    const originalQuestions = gameData[currentCategory] || gameData["Design"];
    shuffledQuestions = shuffleArray([...originalQuestions]); 
    
    loadQuestion();
    transitionTo('game-screen');
}

function loadQuestion() {
    const q = shuffledQuestions[currentIdx];

    document.getElementById('question-number').innerText = `Question ${currentIdx + 1}/7`;
    document.getElementById('situation-text').innerText = q.situation;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    document.getElementById('outcome-container').classList.add('hidden');
    container.classList.remove('hidden');

    // RANDOMIZE OPTIONS: Shuffle the choices so the "best" one moves around
    const randomizedOptions = shuffleArray([...q.options]);

    randomizedOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.onclick = () => showOutcome(opt.outcome);
        container.appendChild(btn);
    });

    const navBtn = document.getElementById('nav-btn');
    if (currentIdx === shuffledQuestions.length - 1 || currentIdx === 14) {
        navBtn.innerText = "Finish Game";
        navBtn.onclick = () => transitionTo('main-menu');
    } else {
        navBtn.innerText = "Next Question";
        navBtn.onclick = nextQuestion;
    }
}

function showOutcome(text) {
    document.getElementById('options-container').classList.add('hidden');
    document.getElementById('outcome-container').classList.remove('hidden');
    document.getElementById('outcome-text').innerText = text;
}

function resetQuestion() {
    document.getElementById('outcome-container').classList.add('hidden');
    document.getElementById('options-container').classList.remove('hidden');
}

function nextQuestion() {
    currentIdx++;
    loadQuestion();
}
