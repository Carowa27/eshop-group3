const products = {
  "blueberry-blackberry": {
    id: "blueberry-blackberry",
    name: "Blåbär & Björnbär",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Bär",
    description: `
            Blåbärs- och björnbärsmuffins med saftiga, solmogna bär som ger en fyllig och naturligt fruktig smak. Muffinsen har en mjuk och luftig konsistens där blåbärens sötma möter björnbärens lätt syrliga ton. Toppad med len färskostfrosting passar den perfekt till fika, kaffepaus eller som en liten dessert.
        `,
    image: {
      src: "Images/prodimages/blueberryblackberry.jpg",
      alt: "Blåbärs- och björnbärsmuffins",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, mjölk,
            blåbär (15%), björnbär (5%),
            rapsolja, bakpulver, kanel, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "340 kcal" },
      { label: "Fett", value: "14 g" },
      { label: "- varav mättat fett", value: "4 g" },
      { label: "Kolhydrater", value: "46 g" },
      { label: "- varav sockerarter", value: "19 g" },
      { label: "Fiber", value: "3.5 g" },
      { label: "Protein", value: "6 g" },
      { label: "Salt", value: "0.45 g" },
    ],
  },

  raspberry: {
    id: "raspberry",
    name: "Hallon",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Bär",
    description: `
            Saftig hallonmuffins med generösa mängder solmogna hallon som ger en frisk och balanserad syrlighet. Muffinsen har en mjuk konsistens som lyfter bärens naturliga arom och skapar en behaglig sötma. Toppad med krämig färskostfrosting är detta en uppskattad favorit som passar lika bra till vardagsfika som till festligare tillfällen.
        `,
    image: {
      src: "Images/prodimages/raspberry.jpg",
      alt: "Hallonmuffins",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            hallon (20%), rapsolja, bakpulver, vanilj, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "330 kcal" },
      { label: "Fett", value: "13 g" },
      { label: "- varav mättat fett", value: "3.5 g" },
      { label: "Kolhydrater", value: "45 g" },
      { label: "- varav sockerarter", value: "18 g" },
      { label: "Fiber", value: "4 g" },
      { label: "Protein", value: "6 g" },
      { label: "Salt", value: "0.4 g" },
    ],
  },

  "rhubarb-vanilla": {
    id: "rhubarb-vanilla",
    name: "Rabarber & Vanilj",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Frukt",
    description: `
            Muffins med syrlig rabarber och len vanilj som tillsammans skapar en välbalanserad smakupplevelse. Den mjuka och saftiga konsistensen ger en tydlig hembakad känsla där rabarberns friskhet möter vaniljens rundhet. Toppad med färskostfrosting är detta en somrig muffins som passar utmärkt till kaffe och fika.
        `,
    image: {
      src: "Images/prodimages/rhubarb.jpg",
      alt: "Rabarber- och vaniljmuffins",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            rabarber (20%), rapsolja, bakpulver, vanilj, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "325 kcal" },
      { label: "Fett", value: "12 g" },
      { label: "- varav mättat fett", value: "3 g" },
      { label: "Kolhydrater", value: "47 g" },
      { label: "- varav sockerarter", value: "20 g" },
      { label: "Fiber", value: "2.5 g" },
      { label: "Protein", value: "5.5 g" },
      { label: "Salt", value: "0.4 g" },
    ],
  },

  "coffee-cream": {
    id: "coffee-cream",
    name: "Mocka",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Kaffe",
    description: `
            Smakrik mockamuffins med tydlig kaffearom och mjuk, saftig konsistens. Den fylliga smaken ger en rund och balanserad helhet som tilltalar kaffeälskare. Kaffets djupa toner möter en behaglig sötma och toppas med len färskostfrosting, vilket gör muffinsen perfekt till kaffepausen eller som ett lyxigare fikaval.
        `,
    image: {
      src: "Images/prodimages/coffee.jpg",
      alt: "Kaffemuffins med grädde",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            kaffeextrakt, rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "360 kcal" },
      { label: "Fett", value: "18 g" },
      { label: "- varav mättat fett", value: "7 g" },
      { label: "Kolhydrater", value: "42 g" },
      { label: "- varav sockerarter", value: "19 g" },
      { label: "Fiber", value: "2 g" },
      { label: "Protein", value: "6 g" },
      { label: "Salt", value: "0.5 g" },
    ],
  },

  lemoncurd: {
    id: "lemoncurd",
    name: "Lemoncurd",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Citrus",
    description: `
            Frisk citronmuffins med len lemoncurd som ger en balanserad kombination av sötma och syra. Den mjuka konsistensen lyfter citronsmaken utan att bli för skarp och skapar en lätt och uppfriskande helhet. Toppad med krämig färskostfrosting är detta ett perfekt val för dig som uppskattar fräscha och pigga smaker.
        `,
    image: {
      src: "Images/prodimages/lemoncurd.jpg",
      alt: "Citronmuffins med lemoncurd",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            citron, lemoncurd, rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "345 kcal" },
      { label: "Fett", value: "15 g" },
      { label: "- varav mättat fett", value: "5 g" },
      { label: "Kolhydrater", value: "48 g" },
      { label: "- varav sockerarter", value: "23 g" },
      { label: "Fiber", value: "2 g" },
      { label: "Protein", value: "5.5 g" },
      { label: "Salt", value: "0.45 g" },
    ],
  },

  "brown-butter-tonka": {
    id: "brown-butter-tonka",
    name: "Brynt smör & Tonkaböna",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Aromatisk",
    description: `
            Elegant muffins med djup, nötig smak av brynt smör och en subtil arom av tonkaböna. Den saftiga konsistensen ger en fyllig och rund smakupplevelse med lätt kryddig karaktär. Toppad med len färskostfrosting är detta ett sofistikerat val för dig som uppskattar mer komplexa och vuxna smaker.
        `,
    image: {
      src: "Images/prodimages/tonka.jpg",
      alt: "Muffins med brynt smör och tonkaböna",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            <span class="allergen">smör</span>, tonkaböna,
            rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "375 kcal" },
      { label: "Fett", value: "20 g" },
      { label: "- varav mättat fett", value: "9 g" },
      { label: "Kolhydrater", value: "40 g" },
      { label: "- varav sockerarter", value: "18 g" },
      { label: "Fiber", value: "2 g" },
      { label: "Protein", value: "6 g" },
      { label: "Salt", value: "0.5 g" },
    ],
  },

  chocolate: {
    id: "chocolate",
    name: "Choklad",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Choklad",
    description: `
            Fyllig Chokladmuffins med rik kakaosmak och saftig konsistens som ger en djup och rund smakupplevelse. Den balanserade sötman lyfter Chokladens karaktär och gör muffinsen till en tidlös klassiker. Toppad med krämig färskostfrosting passar den perfekt till fika, dessert eller när suget efter Choklad gör sig påmint.
        `,
    image: {
      src: "Images/prodimages/chocolate.jpg",
      alt: "Chokladmuffins",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            kakao, Chokladbitar, rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "390 kcal" },
      { label: "Fett", value: "21 g" },
      { label: "- varav mättat fett", value: "10 g" },
      { label: "Kolhydrater", value: "44 g" },
      { label: "- varav sockerarter", value: "26 g" },
      { label: "Fiber", value: "3 g" },
      { label: "Protein", value: "6.5 g" },
      { label: "Salt", value: "0.55 g" },
    ],
  },

  "apple-cinnamon": {
    id: "apple-cinnamon",
    name: "Äpple & Kanel",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Frukt",
    description: `
            Klassisk muffins med saftiga äppelbitar och varm kanel som ger en välbekant och hemtrevlig smak. Den mjuka konsistensen och milda kryddigheten skapar en balanserad helhet som passar året runt. Toppad med len färskostfrosting är detta en omtyckt muffins som känns lika rätt till höstfika som till vardag.
        `,
    image: {
      src: "Images/prodimages/apple.jpg",
      alt: "Äpple- och kanelmuffins",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            äpple (20%), kanel, rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "335 kcal" },
      { label: "Fett", value: "13 g" },
      { label: "- varav mättat fett", value: "3 g" },
      { label: "Kolhydrater", value: "48 g" },
      { label: "- varav sockerarter", value: "21 g" },
      { label: "Fiber", value: "3 g" },
      { label: "Protein", value: "5.5 g" },
      { label: "Salt", value: "0.4 g" },
    ],
  },

  lingonberry: {
    id: "lingonberry",
    name: "Lingon",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Bär",
    description: `
            Muffins med syrliga lingon som ger en frisk kontrast till den söta och mjuka kakan. Inspirerad av nordiska smaker kombinerar denna muffins tradition med modern fikaglädje. Den lena färskostfrostingen rundar av smaken och skapar en balanserad helhet som passar perfekt till kaffe och lugna fikastunder.
        `,
    image: {
      src: "Images/prodimages/lingon.jpg",
      alt: "Lingonmuffins",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            lingon (15%), rapsolja, bakpulver, vanilj, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "330 kcal" },
      { label: "Fett", value: "12 g" },
      { label: "- varav mättat fett", value: "3 g" },
      { label: "Kolhydrater", value: "46 g" },
      { label: "- varav sockerarter", value: "18 g" },
      { label: "Fiber", value: "4 g" },
      { label: "Protein", value: "5.5 g" },
      { label: "Salt", value: "0.4 g" },
    ],
  },

  "after-eight": {
    id: "after-eight",
    name: "After Eight",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Choklad",
    description: `
            Chokladmuffins med frisk mintsmak som ger en tydlig kontrast mellan fyllig kakao och sval mynta. Den saftiga konsistensen gör smaken rund och balanserad. Toppad med len färskostfrosting är detta en uppfriskande muffins som passar perfekt för dig som uppskattar klassiska smakkombinationer med en fräsch twist.
        `,
    image: {
      src: "Images/prodimages/aftereight.jpg",
      alt: "Choklad- och mintmuffins",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            kakao, mint, Choklad, rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "385 kcal" },
      { label: "Fett", value: "20 g" },
      { label: "- varav mättat fett", value: "9 g" },
      { label: "Kolhydrater", value: "45 g" },
      { label: "- varav sockerarter", value: "24 g" },
      { label: "Fiber", value: "2.5 g" },
      { label: "Protein", value: "6 g" },
      { label: "Salt", value: "0.55 g" },
    ],
  },

  "strawberry-shortcake": {
    id: "strawberry-shortcake",
    name: "Strawberry Shortcake",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Bär",
    description: `
            Ljus och fluffig muffins med smak av jordgubb och vanilj, inspirerad av den klassiska desserten strawberry shortcake. Den saftiga konsistensen ger en mild och balanserad sötma där bären står i centrum. Toppad med krämig färskostfrosting är detta en lätt och somrig muffins som passar perfekt till fika.
        `,
    image: {
      src: "Images/prodimages/strawberry.jpg",
      alt: "Jordgubbsmuffins",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            jordgubbar (20%), vanilj, rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "345 kcal" },
      { label: "Fett", value: "14 g" },
      { label: "- varav mättat fett", value: "4 g" },
      { label: "Kolhydrater", value: "49 g" },
      { label: "- varav sockerarter", value: "22 g" },
      { label: "Fiber", value: "2.5 g" },
      { label: "Protein", value: "5.5 g" },
      { label: "Salt", value: "0.45 g" },
    ],
  },

  "salted-caramel": {
    id: "salted-caramel",
    name: "Salt karamell",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Kola",
    description: `
            Fyllig muffins med krämig karamell och en balanserad sälta som ger en rund och djup smakupplevelse. Den saftiga konsistensen lyfter karamellens sötma och skapar en harmonisk helhet. Toppad med len färskostfrosting är detta en populär muffins för dig som uppskattar kontrasten mellan sött och salt.
        `,
    image: {
      src: "Images/prodimages/caramel.jpg",
      alt: "Muffins med salt karamell",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            karamell, rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "400 kcal" },
      { label: "Fett", value: "22 g" },
      { label: "- varav mättat fett", value: "10 g" },
      { label: "Kolhydrater", value: "46 g" },
      { label: "- varav sockerarter", value: "28 g" },
      { label: "Fiber", value: "2 g" },
      { label: "Protein", value: "5.5 g" },
      { label: "Salt", value: "0.8 g" },
    ],
  },

  "matcha-green-tea": {
    id: "matcha-green-tea",
    name: "Matcha grönt te",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Aromatisk",
    description: `
            Mild och aromatisk muffins med matcha som ger en subtil grön te-smak och elegant färg. Den saftiga konsistensen låter matchans karaktär komma fram på ett balanserat sätt utan bitterhet. Toppad med krämig färskostfrosting är detta ett lätt och harmoniskt val för dig som uppskattar nyanserade smaker.
        `,
    image: {
      src: "Images/prodimages/matcha.jpg",
      alt: "Matchamuffins",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            matcha, rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "320 kcal" },
      { label: "Fett", value: "11 g" },
      { label: "- varav mättat fett", value: "2.5 g" },
      { label: "Kolhydrater", value: "44 g" },
      { label: "- varav sockerarter", value: "17 g" },
      { label: "Fiber", value: "3 g" },
      { label: "Protein", value: "6 g" },
      { label: "Salt", value: "0.35 g" },
    ],
  },

  pistachio: {
    id: "pistachio",
    name: "Pistage",
    allergens: ["Gluten", "Mjölk", "Ägg", "Nötter"],
    category: "Aromatisk",
    description: `
            Nötig och mjuk muffins med tydlig smak av pistage som ger en elegant och lätt söt karaktär. Den saftiga konsistensen lyfter nötens naturliga arom och skapar en balanserad helhet. Toppad med len färskostfrosting är detta en lyxig muffins som passar perfekt till en finare fikastund.
        `,
    image: {
      src: "Images/prodimages/pistage.jpg",
      alt: "Pistagemuffins",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            <span class="allergen">pistagenötter</span>,
            rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "380 kcal" },
      { label: "Fett", value: "19 g" },
      { label: "- varav mättat fett", value: "6 g" },
      { label: "Kolhydrater", value: "41 g" },
      { label: "- varav sockerarter", value: "18 g" },
      { label: "Fiber", value: "3.5 g" },
      { label: "Protein", value: "7 g" },
      { label: "Salt", value: "0.45 g" },
    ],
  },

  "carrot-cake": {
    id: "carrot-cake",
    name: "Morotskaka",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Frukt",
    description: `
            Kryddig och saftig morotsmuffins inspirerad av klassisk morotskaka. Smaken av morot och milda kryddor ger en fyllig och varm karaktär. Den mjuka konsistensen kombineras med len färskostfrosting som rundar av smaken och gör muffinsen till en omtyckt favorit vid fikabordet.
        `,
    image: {
      src: "Images/prodimages/carrot.jpg",
      alt: "Morotsmuffins",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            morot (25%), kanel, rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "365 kcal" },
      { label: "Fett", value: "16 g" },
      { label: "- varav mättat fett", value: "5 g" },
      { label: "Kolhydrater", value: "47 g" },
      { label: "- varav sockerarter", value: "22 g" },
      { label: "Fiber", value: "3 g" },
      { label: "Protein", value: "6 g" },
      { label: "Salt", value: "0.5 g" },
    ],
  },

  "white-chocolate": {
    id: "white-chocolate",
    name: "Vit Choklad",
    allergens: ["Gluten", "Mjölk", "Ägg"],
    category: "Choklad",
    description: `
            Söt och krämig muffins med bitar av vit Choklad som ger en mjuk och len smakupplevelse. Den saftiga konsistensen balanserar Chokladens sötma och skapar en rund helhet. Toppad med krämig färskostfrosting är detta en populär muffins för dig som uppskattar milda, mjuka och dessertlika smaker.
        `,
    image: {
      src: "Images/prodimages/whitechocolate.jpg",
      alt: "Muffins med vit Choklad",
    },
    ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            <span class="allergen">vit Choklad</span>,
            rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            <span class="allergen">färskost</span>,
            <span class="allergen">smör</span>,
            florsocker.
        `,
    nutrition: [
      { label: "Energi", value: "395 kcal" },
      { label: "Fett", value: "22 g" },
      { label: "- varav mättat fett", value: "11 g" },
      { label: "Kolhydrater", value: "45 g" },
      { label: "- varav sockerarter", value: "27 g" },
      { label: "Fiber", value: "2 g" },
      { label: "Protein", value: "5.5 g" },
      { label: "Salt", value: "0.55 g" },
    ],
  },

  /* Gluten- & mjölkfria */

  "pear-vanilla-gf-df": {
    id: "pear-vanilla-gf-df",
    name: "Päron & Vanilj (gluten- och mjölkfri)",
    allergens: ["Ägg"],
    category: "Frukt",
    description: `
            Saftig päronmuffins med mild vanilj som ger en mjuk och fruktig smakupplevelse. Päronets naturliga sötma och lätt blommiga ton möter vaniljens rundhet i en luftig, bakad kaka. Toppad med mjölkfri, krämig frosting blir detta ett fräscht och lätt fikaval som passar perfekt till kaffe eller te.
        `,
    image: {
      src: "Images/prodimages/pearvanilla.jpg",
      alt: "Gluten- och mjölkfri päron- och vaniljmuffins",
    },
    ingredients: `
            Glutenfri mjölmix (ris-/majsmjöl), socker,
            <span class="allergen">ägg</span>, päron (20%),
            rapsolja, bakpulver, vanilj, salt.
            <br><br>
            Frosting:
            mjölkfritt margarin, florsocker, vanilj.
        `,
    nutrition: [
      { label: "Energi", value: "330 kcal" },
      { label: "Fett", value: "14 g" },
      { label: "- varav mättat fett", value: "3.5 g" },
      { label: "Kolhydrater", value: "47 g" },
      { label: "- varav sockerarter", value: "22 g" },
      { label: "Fiber", value: "2 g" },
      { label: "Protein", value: "5.5 g" },
      { label: "Salt", value: "0.45 g" },
    ],
  },

  "chocolate-gf-df": {
    id: "chocolate-gf-df",
    name: "Choklad (gluten- och mjölkfri)",
    allergens: ["Ägg"],
    category: "Choklad",
    description: `
            Fyllig Chokladmuffins med tydlig Chokladsmak och mjuk, saftig konsistens, helt utan gluten och mjölk. Den mörka Chokladtonen balanseras av en behaglig sötma som gör muffinsen till en klassisk favorit även i mjölkfri version. Toppad med krämig, mjölkfri frosting passar den perfekt som fika eller liten dessert.
        `,
    image: {
      src: "Images/prodimages/chocolategfdf.jpg",
      alt: "Gluten- och mjölkfri Chokladmuffins",
    },
    ingredients: `
            Glutenfri mjölmix (ris-/majsmjöl), socker,
            <span class="allergen">ägg</span>, kakao,
            rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            mjölkfritt margarin, florsocker, kakao.
        `,
    nutrition: [
      { label: "Energi", value: "360 kcal" },
      { label: "Fett", value: "17 g" },
      { label: "- varav mättat fett", value: "4 g" },
      { label: "Kolhydrater", value: "48 g" },
      { label: "- varav sockerarter", value: "26 g" },
      { label: "Fiber", value: "3 g" },
      { label: "Protein", value: "6 g" },
      { label: "Salt", value: "0.55 g" },
    ],
  },

  "lemon-gf-df": {
    id: "lemon-gf-df",
    name: "Citron (gluten- och mjölkfri)",
    allergens: ["Ägg"],
    category: "Citrus",
    description: `
            Frisk citronmuffins med tydlig citrussmak och mjuk, luftig konsistens, bakad utan gluten och mjölk. Den pigga syran ger en lätt och uppfriskande karaktär som balanseras av en mild sötma. Toppad med krämig, mjölkfri frosting blir detta ett fräscht fikaval som passar perfekt när du vill ha något ljust och friskt.
        `,
    image: {
      src: "Images/prodimages/lemongfdf.jpg",
      alt: "Gluten- och mjölkfri citronmuffins",
    },
    ingredients: `
            Glutenfri mjölmix (ris-/majsmjöl), socker,
            <span class="allergen">ägg</span>, citron (saft & zest),
            rapsolja, bakpulver, salt.
            <br><br>
            Frosting:
            mjölkfritt margarin, florsocker, citronzest.
        `,
    nutrition: [
      { label: "Energi", value: "325 kcal" },
      { label: "Fett", value: "13 g" },
      { label: "- varav mättat fett", value: "3 g" },
      { label: "Kolhydrater", value: "48 g" },
      { label: "- varav sockerarter", value: "24 g" },
      { label: "Fiber", value: "2 g" },
      { label: "Protein", value: "5.5 g" },
      { label: "Salt", value: "0.45 g" },
    ],
  },

  "blueberry-gf-df": {
    id: "blueberry-gf-df",
    name: "Blåbär (gluten- och mjölkfri)",
    allergens: ["Ägg"],
    category: "Bär",
    description: `
            Saftig blåbärsmuffins med solmogna blåbär som ger en naturligt fruktig och mild smak, bakad utan gluten och mjölk. Den mjuka konsistensen gör muffinsen lätt och uppskattad, med bär som ger friskhet i varje tugga. Toppad med krämig, mjölkfri frosting blir detta ett tryggt och gott fikaval för många.
        `,
    image: {
      src: "Images/prodimages/blueberrygfdf.jpg",
      alt: "Gluten- och mjölkfri blåbärsmuffins",
    },
    ingredients: `
            Glutenfri mjölmix (ris-/majsmjöl), socker,
            <span class="allergen">ägg</span>, blåbär (20%),
            rapsolja, bakpulver, vanilj, salt.
            <br><br>
            Frosting:
            mjölkfritt margarin, florsocker, vanilj.
        `,
    nutrition: [
      { label: "Energi", value: "320 kcal" },
      { label: "Fett", value: "13 g" },
      { label: "- varav mättat fett", value: "3 g" },
      { label: "Kolhydrater", value: "46 g" },
      { label: "- varav sockerarter", value: "21 g" },
      { label: "Fiber", value: "2.5 g" },
      { label: "Protein", value: "5.5 g" },
      { label: "Salt", value: "0.4 g" },
    ],
  },
};
