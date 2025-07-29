document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.querySelector(".chat-form");
  const chatInput = chatForm.querySelector("input");
  const chatWindow = document.querySelector(".chat-window");

  const botReply = (message) => {
    const response = {
      // Greetings
      hello: "Waa salaaman tahay! Sidee baan kuu caawin karaa?",
      hi: "Salaan! Maxaa war ah?",
      salaam: "Waa salaaman tahay! Ku soo dhawoow SamaBot.",
      "see tahay": "Waan fiicanahay, Alxamdulillah! Adigana?",
      "is ka warran": "Waan fiicanahay, adigana?",
      "how are you": "I'm good! How can I help you today?",

      // Soil & Farming
      soil: "Fadlan geli xogta ciidda ama eeg qaybta 'Soil Test' si aad u aragto natiijooyinka.",
      ciid: "Natiijada ciidda: Qoyaan: 42%, pH: 6.7, NPK: dheellitiran.",
      ph: "pH-ga ciidda waa 6.7 – taasoo ah mid yar oo aashito ah.",
      npk: "NPK: Nitrogen – Sare, Phosphorus – Dhexdhexaad, Potassium – Hoose.",
      dalag:
        "Talo: Beer yaanyo, basal, ama bocor – waxay ku habboon tahay xilligan.",
      crop: "Try planting tomatoes, onions, or squash — they suit current soil conditions.",

      // Weather
      weather: "Cimiladu waa qorrax leh, 32°C, huuradu waa 55%.",
      cimilo: "Maanta waa qorrax leh oo heerkulku waa 32°C.",

      // Health
      health: "Haddii aad xanuunsanayso, la xiriir xarun caafimaad oo ku dhow.",
      caafimaad:
        "Talo caafimaad: Cab biyo badan, ilaali nadaafadda, kuna raaxayso cunto caafimaad leh.",
      doctor: "Raadi xarun caafimaad ama dhakhtar deegaankaaga.",
      dhakhtar:
        "Waxaad booqan kartaa xarunta caafimaadka deegaankaaga si aad u hesho talo dhakhtar.",

      // Chat closure
      "thank you": "Adigaa mudan! Soo noqo markasta oo aad u baahato.",
      mahadsanid:
        "Waad ku mahadsan tahay! Waxaan halkaan u joogaa in aan kaa caawiyo.",
      bye: "Nabad gelyo! Ilaahay ha kuu barakeeyo beertaada 😊",
      nabadey: "Nabadey walaal! Ku soo laabo mar kasta.",

      // Identity
      "who are you": "I'm SamaBot – your Somali farming and health assistant!",
      "yaad tahay":
        "Anigu waxaan ahay SamaBot – caawiye ku taageera beeraleyda Soomaaliyeed.",
    };
    // Normalize the message to lowercase for case-insensitive matching
    message = message.toLowerCase();

    const reply =
      response[message.toLowerCase()] ||
      "Waan ka xumahay, su’aashaas weli lama taageerin.";
    addMessage(reply, "bot");
  };

  const addMessage = (text, sender) => {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  };

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userText = chatInput.value.trim();
    if (!userText) return;

    addMessage(userText, "user");
    chatInput.value = "";
    setTimeout(() => botReply(userText), 1000);
  });
});
