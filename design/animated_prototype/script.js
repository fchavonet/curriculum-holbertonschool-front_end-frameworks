/************************
* SCRIPT INITIALIZATION *
************************/

console.log("JavaScript has loaded successfully.");


/******************
* LUCIDE BEHAVIOR *
******************/

lucide.createIcons();


/***************
* AOS BEHAVIOR *
****************/

if (window.AOS) {
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
    offset: 80
  });
}


/*************************
* INSIGHTS GRID BEHAVIOR *
*************************/

const insightsGrid = document.getElementById("insights-grid");

async function getInsights() {
  const response = await fetch("./data/insights.json");

  if (!response.ok) {
    throw new Error("Failed to load insights data.");
  }

  const insights = await response.json();

  return insights;
}

function createInsightCard(item, index) {
  const card = document.createElement("article");

  card.className = "group relative min-h-80 rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40 overflow-hidden";

  if (index === 0) {
    card.className = "group relative min-h-80 sm:col-span-2 rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40 overflow-hidden";
  }

  card.setAttribute("data-aos", "fade-up");
  card.setAttribute("data-aos-delay", String(index * 100));

  card.innerHTML = `
    <!-- IMAGE -->
    <img class="absolute inset-0 w-full h-full object-cover opacity-50 transition duration-500 group-hover:scale-110 group-hover:opacity-75" src="${item.image}" alt="${item.title}">

    <!-- OVERLAY -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

    <!-- CONTENT -->
    <div class="relative min-h-80 p-6 flex flex-col justify-end items-start text-start z-10">
      <span class="px-4 py-2 flex flex-row justify-center items-center gap-2 text-xs text-violet-300 rounded-full border border-violet-500/20 bg-violet-500/10">
        ${item.category}
      </span>

      <h3 class="mt-2 text-2xl font-bold">${item.title}</h3>

      <p class="max-w-sm mt-1 text-sm text-slate-500">
        ${item.description}
      </p>
    </div>
  `;

  return card;
}

async function displayInsights() {
  if (!insightsGrid) {
    return;
  }

  try {
    const insights = await getInsights();

    insights.forEach(function (item, index) {
      const card = createInsightCard(item, index);

      insightsGrid.appendChild(card);
    });

    if (window.AOS) {
      AOS.refreshHard();
    }
  } catch (error) {
    insightsGrid.innerHTML = `
      <p class="text-sm text-slate-500">
        Unable to load insights at the moment...
      </p>
    `;

    console.error(error);
  }
}

displayInsights();




/*************************
* CONTACT FORM BEHAVIOR *
*************************/

const contactForm = document.getElementById("contact-form");
const contactSubmit = document.getElementById("contact-submit");
const contactFeedback = document.getElementById("contact-feedback");

const defaultContactFeedbackMessage = "Please fill all required fields.";

function isNameValid() {
  const name = document.getElementById("name");

  if (!name) {
    return false;
  }

  return name.value.trim().length >= 2;
}

function isEmailValid() {
  const email = document.getElementById("email");

  if (!email) {
    return false;
  }

  return email.value.includes("@") && email.value.includes(".");
}

function isMessageValid() {
  const message = document.getElementById("message");

  if (!message) {
    return false;
  }

  return message.value.trim().length >= 10;
}

function isContactFormValid() {
  return isNameValid() && isEmailValid() && isMessageValid();
}

function updateFieldState(field, isValid) {
  field.classList.remove("focus:border-violet-500", "focus:border-red-500");

  if (isValid) {
    field.classList.add("focus:border-violet-500");
  } else {
    field.classList.add("focus:border-red-500");
  }
}

function updateContactFormState() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name || !email || !message || !contactSubmit) {
    return;
  }

  updateFieldState(name, isNameValid());
  updateFieldState(email, isEmailValid());
  updateFieldState(message, isMessageValid());

  contactSubmit.className = "w-full px-4 py-2 font-semibold text-slate-50 rounded-md shadow-lg shadow-violet-500/40 transition";

  if (isContactFormValid()) {
    contactSubmit.disabled = false;
    contactSubmit.className += " bg-violet-500 hover:bg-violet-600 cursor-pointer";
  } else {
    contactSubmit.disabled = true;
    contactSubmit.className += " bg-violet-500 opacity-60 cursor-not-allowed";
  }

  if (contactFeedback) {
    contactFeedback.textContent = defaultContactFeedbackMessage;
  }
}

if (contactForm) {
  const contactFields = contactForm.querySelectorAll("input, textarea");

  contactFields.forEach(function (field) {
    field.addEventListener("input", updateContactFormState);
  });

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!isContactFormValid()) {
      return;
    }

    contactSubmit.disabled = true;
    contactSubmit.textContent = "Sending...";
    contactSubmit.className = "w-full px-4 py-2 font-semibold text-slate-50 rounded-md shadow-lg shadow-violet-500/40 transition bg-violet-500 opacity-60 cursor-not-allowed";

    if (contactFeedback) {
      contactFeedback.textContent = "Sending message...";
    }

    await new Promise(function (resolve) {
      setTimeout(resolve, 1500);
    });

    contactForm.reset();
    contactSubmit.textContent = "Send message";

    if (contactFeedback) {
      contactFeedback.textContent = "Your message has been sent successfully.";
    }

    updateContactFormState();

    setTimeout(function () {
      if (contactFeedback) {
        contactFeedback.textContent = defaultContactFeedbackMessage;
      }
    }, 9000);
  });

  updateContactFormState();
}

/**************************
* COPYRIGHT YEAR BEHAVIOR *
**************************/

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
} else {
  console.log("No '#year' element found.");
}
