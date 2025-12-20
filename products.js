const products = {

    "blueberry-blackberry": {
        name: "Blåbär & Björnbär",
        description: `
            Blåbärs- och björnbärsmuffins bakad med saftiga blåbär och en touch
            av syrliga björnbär. En mjuk och luftig muffins med en välbalanserad,
            fruktig smak. Perfekt till fika eller kaffepaus.
        `,
        image: {
            src: "images/prodimages/blueberryblackberry.jpg",
            alt: "Blåbärs- och björnbärsmuffins"
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
            { label: "Salt", value: "0.45 g" }
            ]
    },

    "raspberry": {
        name: "Hallon",
        description: `
            Saftig hallonmuffins fylld med solmogna hallon som ger en frisk,
            lätt syrlig smak. En klassisk favorit som passar lika bra till
            kaffe som till festligare tillfällen.
        `,
        image: {
            src: "images/prodimages/raspberry.jpg",
            alt: "Hallonmuffins"
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
            { label: "Salt", value: "0.4 g" }
            ]
    },

    "rhubarb-vanilla": {
        name: "Rabarber & Vanilj",
        description: `
            Mjuk muffins med syrlig rabarber och len vanilj som balanserar
            smaken perfekt. En somrig kombination med tydlig hembakad känsla.
        `,
        image: {
            src: "images/prodimages/rhubarb.jpg",
            alt: "Rabarber- och vaniljmuffins"
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
            { label: "Salt", value: "0.4 g" }
            ]
    },

    "coffee-cream": {
        name: "Mocka",
        description: `
            Smakrik kaffemuffins med mjuk gräddig ton som rundar av kaffets
            djupa arom. Ett utmärkt val för kaffeälskaren.
        `,
        image: {
            src: "images/prodimages/coffee.jpg",
            alt: "Kaffemuffins med grädde"
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
            { label: "Salt", value: "0.5 g" }
            ]
    },

    "lemoncurd": {
        name: "Lemoncurd",
        description: `
            Frisk och syrlig citronmuffins med len lemoncurd som ger en
            härligt balanserad sötma. Perfekt för dig som gillar fräscha smaker.
        `,
        image: {
            src: "images/prodimages/lemoncurd.jpg",
            alt: "Citronmuffins med lemoncurd"
        },
        ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            citron, lemoncurd (citronjuice, <span class="allergen">ägg</span>, socker, <span class="allergen">smör</span>, gelatin), rapsolja, bakpulver, salt.
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
            { label: "Salt", value: "0.45 g" }
            ]
    },

    "brown-butter-tonka": {
        name: "Brynt smör & Tonkaböna",
        description: `
            Elegant muffins med nötig smak av brynt smör och en subtil,
            aromatisk ton av tonkaböna. En sofistikerad smakupplevelse.
        `,
        image: {
            src: "images/prodimages/tonka.jpg",
            alt: "Muffins med brynt smör och tonkaböna"
        },
        ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            <span class="allergen">smör</span>, tonkaböna, <span class="allergen">mandel</span>,
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
            { label: "Salt", value: "0.5 g" }
            ]
    },

    "chocolate": {
        name: "Choklad",
        description: `
            Fyllig chokladmuffins med rik kakaosmak och mjuk konsistens.
            En tidlös klassiker för alla chokladälskare.
        `,
        image: {
            src: "images/prodimages/chocolate.jpg",
            alt: "Chokladmuffins"
        },
        ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            kakao, chokladbitar, rapsolja, bakpulver, salt.
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
            { label: "Salt", value: "0.55 g" }
            ]
    },

    "apple-cinnamon": {
        name: "Äpple & Kanel",
        description: `
            Klassisk muffins med saftiga äppelbitar och varm kanel.
            En omtyckt smak som passar året runt.
        `,
        image: {
            src: "images/prodimages/apple.jpg",
            alt: "Äpple- och kanelmuffins"
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
            { label: "Salt", value: "0.4 g" }
            ]
    },

    "lingonberry": {
        name: "Lingon",
        description: `
            Mjuk muffins med syrliga lingon som ger en frisk kontrast
            till den söta smeten. Inspirerad av klassiska nordiska smaker.
        `,
        image: {
            src: "images/prodimages/lingon.jpg",
            alt: "Lingonmuffins"
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
        { label: "Salt", value: "0.4 g" }
        ]
    },

    "after-eight": {
        name: "After Eight",
        description: `
            Chokladmuffins med frisk mintsmak som påminner om den klassiska
            kombinationen choklad och mynta. En uppfriskande favorit.
        `,
        image: {
            src: "images/prodimages/aftereight.jpg",
            alt: "Choklad- och mintmuffins"
        },
        ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            kakao, mint, choklad, rapsolja, bakpulver, salt.
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
            { label: "Salt", value: "0.55 g" }
            ]
    },

    "strawberry-shortcake": {
        name: "Strawberry Shortcake",
        description: `
            Ljus och fluffig muffins med jordgubb och vanilj,
            inspirerad av den klassiska desserten strawberry shortcake.
        `,
        image: {
            src: "images/prodimages/strawberry.jpg",
            alt: "Jordgubbsmuffins"
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
            { label: "Salt", value: "0.45 g" }
            ]
    },

    "salted-caramel": {
        name: "Salt karamell",
        description: `
            Söt och fyllig muffins med krämig karamell och en lätt sälta
            som balanserar smaken perfekt.
        `,
        image: {
            src: "images/prodimages/caramel.jpg",
            alt: "Muffins med salt karamell"
        },
        ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            <span class="allergen">smör</span>, rapsolja, <span class="allergen">mandel</span>, bakpulver, salt.
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
            { label: "Salt", value: "0.8 g" }
            ]
    },

    "matcha-green-tea": {
        name: "Matcha grönt te",
        description: `
            Mild och aromatisk muffins med matcha som ger en subtil
            grön te-smak och elegant färg.
        `,
        image: {
            src: "images/prodimages/matcha.jpg",
            alt: "Matchamuffins"
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
            { label: "Salt", value: "0.35 g" }
            ]
    },

    "pistachio": {
        name: "Pistage",
        description: `
            Nötig och mjuk muffins med smak av pistage som ger en
            elegant och lätt söt karaktär.
        `,
        image: {
            src: "images/prodimages/pistachio.jpg",
            alt: "Pistagemuffins"
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
            { label: "Salt", value: "0.45 g" }
            ]
    },

    "carrot-cake": {
        name: "Morotskaka",
        description: `
            Kryddig och saftig morotsmuffins inspirerad av klassisk
            morotskaka. En mustig och omtyckt favorit.
        `,
        image: {
            src: "images/prodimages/carrot.jpg",
            alt: "Morotsmuffins"
        },
        ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            morot (25%), kanel, rapsolja, <span class="allergen">mandel</span>, bakpulver, salt.
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
            { label: "Salt", value: "0.5 g" }
            ]
    },

    "white-chocolate": {
        name: "Vit choklad",
        description: `
            Söt och krämig muffins med bitar av vit choklad som smälter
            i munnen. En len och uppskattad smak.
        `,
        image: {
            src: "images/prodimages/whitechocolate.jpg",
            alt: "Muffins med vit choklad"
        },
        ingredients: `
            <span class="allergen">Vetemjöl</span>, socker,
            <span class="allergen">ägg</span>, <span class="allergen">mjölk</span>,
            <span class="allergen">vit choklad</span>, rapsolja, bakpulver, salt.
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
            { label: "Salt", value: "0.55 g" }
            ]
    }
};
