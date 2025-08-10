let events = JSON.parse(localStorage.getItem("events")) || [
    {
      id: 1,
      tijdstip: "2025-08-15 14:00",
      titel: "Kledinginzameling",
      omschrijving: "Breng je oude kleren voor mensen in nood.",
      organisatie: "Eigen beheer",
      email: "info@ngoanderlecht.be",
      locatie: { id: 1, naam: "Gemeentehal", adres: "Kerkstraat 12, Anderlecht", capaciteit: 100 }
    },
    {
        id: 2,
        tijdstip: "2025-08-20 10:00",
        titel: "Voedselbedeling",
        omschrijving: "Help mee voedsel te verdelen in onze buurt.",
        organisatie: "Partnerorganisatie",
        email: "contact@partner.org",
        locatie: { id: 2, naam: "Buurtcentrum", adres: "Marktplein 5, Anderlecht", capaciteit: 50 }
    },
    {
        id: 3,
        tijdstip: "2025-08-22 09:00",
        titel: "Opruimactie Park",
        omschrijving: "Samen het park schoonmaken voor een gezondere buurt.",
        organisatie: "Eigen beheer",
        email: "park@ngoanderlecht.be",
        locatie: { id: 3, naam: "Stadspark", adres: "Parklaan 1, Anderlecht", capaciteit: 30 }
    },
    {
        id: 4,
        tijdstip: "2025-08-25 18:00",
        titel: "Benefietconcert",
        omschrijving: "Muziekavond voor fondsenwerving.",
        organisatie: "Partnerorganisatie",
        email: "concert@ngoanderlecht.be",
        locatie: { id: 4, naam: "Cultuurhuis", adres: "Cultuurstraat 3, Anderlecht", capaciteit: 150 }
    },
    {
        id: 5,
        tijdstip: "2025-08-28 14:00",
        titel: "Kinderknutselmiddag",
        omschrijving: "Creatieve namiddag voor kinderen.",
        organisatie: "Eigen beheer",
        email: "knutsel@ngoanderlecht.be",
        locatie: { id: 5, naam: "Jeugdhuis", adres: "Jeugdlaan 10, Anderlecht", capaciteit: 40 }
    },
    {
        id: 6,
        tijdstip: "2025-09-01 09:00",
        titel: "Taallessen Nederlands",
        omschrijving: "Gratis taallessen voor nieuwkomers.",
        organisatie: "Partnerorganisatie",
        email: "taal@ngoanderlecht.be",
        locatie: { id: 6, naam: "Taalklas", adres: "Schoolstraat 7, Anderlecht", capaciteit: 25 }
    },
    {
        id: 7,
        tijdstip: "2025-09-05 16:00",
        titel: "Gezondheidsbeurs",
        omschrijving: "Informeer je over gezondheid en welzijn.",
        organisatie: "Eigen beheer",
        email: "gezond@ngoanderlecht.be",
        locatie: { id: 7, naam: "Sporthal", adres: "Sportlaan 2, Anderlecht", capaciteit: 200 }
    },
    {
        id: 8,
        tijdstip: "2025-09-10 11:00",
        titel: "Fietstocht door Anderlecht",
        omschrijving: "Ontdek de buurt op de fiets.",
        organisatie: "Partnerorganisatie",
        email: "fiets@ngoanderlecht.be",
        locatie: { id: 8, naam: "Fietspunt", adres: "Fietsstraat 4, Anderlecht", capaciteit: 60 }
    },
    {
        id: 9,
        tijdstip: "2025-09-15 19:00",
        titel: "Filmavond",
        omschrijving: "Filmvoorstelling met nabespreking.",
        organisatie: "Eigen beheer",
        email: "film@ngoanderlecht.be",
        locatie: { id: 9, naam: "Filmhuis", adres: "Cinemaweg 8, Anderlecht", capaciteit: 80 }
    },
    {
        id: 10,
        tijdstip: "2025-09-20 13:00",
        titel: "Workshop koken",
        omschrijving: "Leer gezonde gerechten klaarmaken.",
        organisatie: "Partnerorganisatie",
        email: "koken@ngoanderlecht.be",
        locatie: { id: 10, naam: "Keukenstudio", adres: "Kookstraat 11, Anderlecht", capaciteit: 35 }
    },

  ];

  
  document.getElementById("nav-home").addEventListener("click", showHome);
  document.getElementById("nav-new").addEventListener("click", showNewForm);
  document.getElementById("nav-about").addEventListener("click", showAbout);
  
  showHome();
  
  function showHome() {
    const laatsteEvents = [...events].slice(-10).reverse();
    let html = `
      <h1 class="text-2xl font-bold mb-4">Laatste evenementen</h1>
      <table class="w-full border-collapse border border-gray-300 mb-4">
        <thead class="bg-gray-200">
          <tr>
            <th class="border p-2">Titel</th>
            <th class="border p-2">Organisatie</th>
            <th class="border p-2">Acties</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    laatsteEvents.forEach(ev => {
      html += `
        <tr>
          <td class="border p-2">${ev.titel}</td>
          <td class="border p-2">${ev.organisatie}</td>
          <td class="border p-2 text-center">
            <button onclick="showDetails(${ev.id})" class="text-blue-600 hover:underline">Details</button>
            </td>
        </tr>
      `;
    });
  
    html += `
        </tbody>
      </table>
      <button onclick="showNewForm()" class="bg-blue-600 text-white px-4 py-2 rounded">Nieuw evenement toevoegen</button>
    `;
  
    document.getElementById("app").innerHTML = html;
  }
  
  function showNewForm() {
    document.getElementById("app").innerHTML = `
      <h1 class="text-2xl font-bold mb-4">Nieuw evenement</h1>
      <form id="eventForm" class="space-y-4">
        <input type="text" name="titel" placeholder="Titel" class="border p-2 w-full" required />
        <input type="datetime-local" name="tijdstip" class="border p-2 w-full" required />
        <textarea name="omschrijving" placeholder="Omschrijving" class="border p-2 w-full" required></textarea>
        <input type="text" name="organisatie" placeholder="Organisatie" class="border p-2 w-full" required />
        <input type="email" name="email" placeholder="E-mail contactpersoon" class="border p-2 w-full" required />
        <input type="text" name="locatieNaam" placeholder="Locatie naam" class="border p-2 w-full" required />
        <input type="text" name="locatieAdres" placeholder="Locatie adres" class="border p-2 w-full" required />
        <input type="number" name="locatieCapaciteit" placeholder="Capaciteit" class="border p-2 w-full" required />
        <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Opslaan</button>
      </form>
    `;
  
    document.getElementById("eventForm").addEventListener("submit", saveEvent);
  }
  
  function showDetails(id) {
    const ev = events.find(e => e.id === id);
    if (!ev) return;
  
    document.getElementById("app").innerHTML = `
      <h1 class="text-2xl font-bold mb-4">${ev.titel}</h1>
      <p><strong>Tijdstip:</strong> ${ev.tijdstip}</p>
      <p><strong>Omschrijving:</strong> ${ev.omschrijving}</p>
      <p><strong>Organisatie:</strong> ${ev.organisatie}</p>
      <p><strong>Contact:</strong> ${ev.email}</p>
      <p><strong>Locatie:</strong> ${ev.locatie.naam}, ${ev.locatie.adres} (capaciteit: ${ev.locatie.capaciteit})</p>
      <button onclick="showHome()" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Terug</button>
    `;
  }
  
  function showAbout() {
    document.getElementById("app").innerHTML = `
      <h1 class="text-2xl font-bold mb-4">Over onze NGO</h1>
      <p>Wij zijn een Anderlechtse NGO die zich inzet voor gemeenschapsopbouw en hulp aan mensen die het minder breed hebben.</p>
      <p>Adres: Fictiefstraat 123, 1070 Anderlecht</p>
      <p>Contact: info@ngoanderlecht.be | 02 123 45 67</p>
      <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    `;
  }
  
  
  function saveEvent(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
      id: Date.now(),
      titel: form.titel.value,
      tijdstip: form.tijdstip.value,
      omschrijving: form.omschrijving.value,
      organisatie: form.organisatie.value,
      email: form.email.value,
      locatie: {
        id: Date.now(),
        naam: form.locatieNaam.value,
        adres: form.locatieAdres.value,
        capaciteit: parseInt(form.locatieCapaciteit.value)
      }

      
    };
     
  
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      alert("Voer een geldig e-mailadres in.");
      return;
    }
  
    events.push(data);
    localStorage.setItem("events", JSON.stringify(events));
    showHome();
  }
  