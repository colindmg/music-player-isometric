const AlbumList = [
  // L'AFRO OU LES TRESSES de Yvnnis
  {
    name: "L'Afro ou les Tresses",
    year: 2024,
    artist: "Yvnnis",
    cover: "/img/covers/afrotresse-yvnnis.webp",
    songs: [
      { title: "GRAND PONT" },
      { title: "GARE DU NORD" },
      { title: "CHAMPAGNE ET JERSEYS" },
      { title: "LE PIÈGE" },
      { title: "2 ACCORDS (INTERLUDE)" },
      { title: "SEEDORF" },
      { title: "SATIVA" },
      { title: "MANAGER" },
    ],
  },
  // À MA PLACE de Deemax
  {
    name: "À ma place",
    artist: "Deemax",
    year: 2024,
    cover: "/img/covers/amaplace-deemax.webp",
    songs: [
      {
        title: "ITADORI",
        mp3: "/songs/itadori-deemax.mp3",
      },
      { title: "LA 3ème FOIS" },
      { title: "J'PARS DE LÀ" },
      { title: "SOUS L'ORAGE" },
      { title: "CERF VOLANT (interlude)" },
      { title: "SHOW" },
      {
        title: "DE BELLEVILLE À TBILISI",
        isLoved: true,
      },
      { title: "ENTIÈREMENT À TOI" },
      { title: "À MA PLACE" },
    ],
  },
  // DEADLY POISON STING de baby hayabusa
  {
    name: "Deadly Poison Sting",
    artist: "baby hayabusa",
    cover: "/img/covers/baby-hayabusa.webp",
    year: 2023,
    songs: [
      { title: "Scars" },
      { title: "Bad" },
      { title: "Daîmon" },
      { title: "Ivy" },
    ],
  },
  // ARVA OFFMODE de Snorunt
  {
    name: "Arva Offmode",
    artist: "Snorunt",
    cover: "/img/covers/arvaoffmode-snorunt.webp",
    year: 2023,
    songs: [
      { title: "%pos%" },
      { title: "mysanthROPE" },
      { title: "tramontane" },
      { title: "arva offmode" },
      { title: "ink on snow" },
      { title: "di laurentis" },
      { title: "keepsake" },
    ],
  },
  // GARCON de Luther
  {
    name: "Garçon",
    year: 2022,
    artist: "Luther",
    cover: "/img/covers/garcon-luther.webp",
    songs: [
      { title: "PK TU M'APL ?" },
      { title: "ALAKAZAM" },
      { title: "BLAKE & MORTIMER" },
      { title: "MA VIE D'AVANT" },
      {
        title: "LESSGUI",
        isLoved: true,
      },
      { title: "LE SANG" },
      { title: "TORIEL (VENI VIDI VIDE)" },
      {
        title: "GARÇON",
        isLoved: true,
        mp3: "/songs/garcon-luther.mp3",
      },
    ],
  },
  // BAISER de Wallace Cleaver
  {
    name: "Baiser",
    artist: "Wallace Cleaver",
    cover: "/img/covers/baiser-wallace.webp",
    year: 2023,
    songs: [
      { title: "çalavie" },
      { title: "déconnecté" },
      { title: "dans ma tête" },
      { title: "benelli828 (Ft. Django)" },
      { title: "xtrois" },
      { title: "murcielago (Ft. dxvl)" },
      { title: "merci pour la douleur" },
      { title: "est-ce que je l’aime ?" },
      { title: "le cœur à papa (Ft. Sheldon)" },
      { title: "pleurer pour nous" },
      { title: "content" },
      { title: "le vent (Ft. Mairo)" },
      { title: "de rien pour la douceur" },
    ],
  },
  // 1.6 de TIF
  {
    name: "1.6",
    artist: "TIF",
    cover: "/img/covers/16-tif.webp",
    year: 2023,
    songs: [
      { title: "DEMAIN C'EST B3ID" },
      { title: "SHADOW BOXING" },
      { title: "AMNESIA" },
      { title: "HINATA" },
      { title: "S12 (Ft. Flenn)" },
      { title: "NO PARTY (Interlude)" },
      { title: "MATHUSALEM" },
      { title: "BYE 3ASSIMA" },
      { title: "IL EST 2H ET TU ME MANQUES" },
      { title: "1.6" },
    ],
  },
  // ÇA VA ALLER de NeS
  {
    name: "Ça va aller",
    artist: "NeS",
    cover: "/img/covers/cavaaller-nes.webp",
    year: 2023,
    songs: [
      { title: "CVA" },
      { title: "A/R" },
      { title: "SCOREBOARD" },
      { title: "LES SAPES QUE J'VEUX" },
      { title: "-94°C (Ft. Yvnnis)" },
      { title: "4X4 (Ft. Deemax)" },
      { title: "RER C" },
      { title: "LE SOURIRE D’UNE TOMBE" },
      { title: "19 ANNÉES" },
    ],
  },
  // BOYS & BASEMENT de Ajna
  {
    name: "Boys & Basement",
    artist: "Ajna",
    cover: "/img/covers/boysbasement-ajna.webp",
    year: 2023,
    songs: [
      { title: "morisson hotel" },
      { title: "emply" },
      { title: "b&b" },
      { title: "panL" },
      { title: "bonzaï" },
      { title: "snep" },
      { title: "hellomoto" },
      { title: "spleen" },
      { title: "serial" },
      { title: "inside feelings" },
      { title: "novotel" },
      { title: "(Z)" },
    ],
  },
  // EXIT de Luther
  {
    name: "EXIT",
    artist: "Luther",
    cover: "/img/covers/exit-luther.webp",
    year: 2024,
    songs: [
      { title: "PABO" },
      { title: "ROUGE GORON" },
      { title: "MOSSY COBBLESTONE" },
      { title: "T3" },
      { title: "JOURNAL DE QUÊTES" },
      { title: "SEUIL" },
      { title: "uSQUAD" },
      { title: "CHÂTEAU FORT" },
      { title: "LOOK" },
      { title: "ALED" },
    ],
  },
  // LE BIJOU LE PLUS BRILLANT de J9ueve
  {
    name: "Le Bijou le Plus Brillant",
    artist: "J9ueve",
    cover: "/img/covers/bijouplusbrillant-j9ueve.webp",
    year: 2023,
    songs: [
      { title: "INTRO" },
      { title: "DIAMANT" },
      { title: "LES SERPENTS (Ft. Rounhaa)" },
      { title: "SEX W/ ME" },
      { title: "LE MONDE ETAIT A NOUS" },
      { title: "SANS FAIRE EXPRÈS" },
      { title: "RR INTERLUDE" },
      { title: "LE BIJOU LE PLUS BRILLANT" },
      { title: "LOUPER LE COCHE" },
      { title: "DESIRE (Ft. Ashbeck)" },
      { title: "BBY LUV" },
      { title: "LA MISSION" },
      { title: "JOB" },
    ],
  },
  // JAAFAR de Rounhaa
  {
    name: "JAAFAR",
    artist: "Rounhaa",
    cover: "/img/covers/jaafar-rounhaa.webp",
    year: 2024,
    songs: [
      { title: "LE FRÈRE DE MOÏSE" },
      { title: "LOVE DEATH ROBOTS" },
      { title: "2B2T" },
      { title: "KONTAKT" },
      { title: "MOOD 0" },
      { title: "TOTENINSEL" },
      { title: "BRUTAL" },
      { title: "WALLL" },
      { title: "UMM KULTHUM" },
      { title: "YASMEEN" },
      { title: "GRIS TANGER" },
    ],
  },
  // ERRR de La Fève
  {
    name: "ERRR",
    artist: "La Fève",
    cover: "/img/covers/errr-lafeve.webp",
    year: 2021,
    songs: [
      { title: "BELEK" },
      { title: "OTW" },
      { title: "L'APPEL" },
      { title: "CASTRO (Ft. $ouley)" },
      { title: "NO HOOK" },
      { title: "SAOULÉ" },
      { title: "CRENSHAW" },
      { title: "RAT INTERLUDE" },
      { title: "ZAZA" },
      { title: "MAUVAIS PAYEUR" },
      { title: "VOIR AILLEURS (Ft. Zamdane)" },
      { title: "BOXE INTERLUDE" },
      { title: "LONERRR" },
      { title: "VOITURE SPORTIVE" },
      { title: "ZOMBIE" },
      { title: "VVS (Ft. S.Téban)" },
      { title: "KANYE WEST" },
      { title: "LYELE OUTRO" },
    ],
  },
  // MÉTAMORPHOSES de Neophron
  {
    name: "métamorphoses",
    artist: "neophron",
    cover: "/img/covers/metamorphoses-neophron.webp",
    year: 2024,
    songs: [
      { title: "(re)naissance (Ft. Reivilose)" },
      { title: "sometime (Ft. baby hayabusa)" },
      { title: "dasti" },
      { title: "maelström" },
      { title: "éclats" },
      { title: "abysses (Ft. Esone)" },
      { title: "cauchemar (Ft. Rosaliedu38)" },
    ],
  },
  // ÉTERNEL RETOUR de Selug
  {
    name: "Éternel Retour",
    artist: "Selug",
    cover: "/img/covers/eternelretour-selug.webp",
    year: 2022,
    songs: [
      { title: "Base solide" },
      { title: "Upgrade" },
      { title: "Passionné" },
      { title: "Game Over" },
      { title: "Léon (Ft. Luther)" },
      { title: "Moi contre eux" },
      { title: "Dans 1 zion" },
      { title: "Éternel retour" },
    ],
  },
  // L'HERMITE de Ajna
  {
    name: "L'Hermite",
    artist: "Ajna",
    cover: "/img/covers/hermite-ajna.webp",
    year: 2022,
    songs: [
      { title: "NIN9.AM" },
      { title: "XfAN" },
      { title: "Pousse d'herbe" },
      { title: "PROMESSES" },
      { title: "OLYMPIEN" },
      { title: "PARAFFINE" },
      { title: "OUTRO YuU" },
    ],
  },
  // FISSURE DE VIE de So la Lune
  {
    name: "Fissure de Vie",
    artist: "So la Lune",
    cover: "/img/covers/fissuredevie-solalune.webp",
    year: 2022,
    songs: [
      { title: "Soleil mourant" },
      { title: "Fin heureuse" },
      { title: "Medellín" },
      { title: "Range Ro" },
      { title: "Guérison" },
      { title: "En bas (Ft. DA Uzi)" },
      { title: "Vide" },
      { title: "Dona" },
      { title: "Éternelle 2" },
      { title: "Déconnecté" },
      { title: "2 i" },
      { title: "Nouveaux pirates (Ft. Roshi)" },
      { title: "Nicki" },
      { title: "Péché" },
      { title: "Interlune" },
      { title: "Outrône" },
    ],
  },
  // SOLSAD de Zamdane
  {
    name: "Solsad",
    artist: "Zamdane",
    cover: "/img/covers/solsad-zamdane.webp",
    year: 2024,
    songs: [
      { title: "Mouchkila" },
      { title: "À ma guise" },
      { title: "Le grand cirque (Ft. Pomme)" },
      { title: "Million" },
      { title: "Printemps" },
      { title: "Alouette (Ft. Josman)" },
      { title: "Boboalam (Ft. So La Lune)" },
      { title: "Un peu de moi" },
      { title: "Youm wara youm (Ft. Kekra)" },
      { title: "Infini" },
      { title: "Stylo magique" },
      { title: "Loin d'ici (Ft. Niska)" },
      { title: "Mélancolie criminelle (Ft. Sofiane Pamart)" },
      { title: "Lalalala" },
      { title: "Audi GT" },
      { title: "Fleurs" },
      { title: "Si on s'aimait (Ft. Zaho)" },
      { title: "Noum (Ft. TIF)" },
      { title: "Étoiles dans les yeux" },
      { title: "Monstres" },
    ],
  },
  // KOLAF de La Fève & Kosei
  {
    name: "KOLAF",
    artist: "La Fève & Kosei",
    cover: "/img/covers/kolaf-lafevekosei.webp",
    year: 2020,
    songs: [
      { title: "DIEZ" },
      { title: "SNITCH" },
      { title: "DSMJ" },
      { title: "BELLE SOMME" },
      { title: "JEUNE INTERLUDE" },
      { title: "ALCHIMIE" },
      { title: "VILAIN (Ft. Khali)" },
      { title: "LA FOUDRE" },
      { title: "LA BRUME" },
      { title: "LE TEMPS QUI PASSE" },
    ],
  },
  // TRINITY de Laylow
  {
    name: "Trinity",
    artist: "Laylow",
    cover: "/img/covers/trinity-laylow.webp",
    year: 2020,
    songs: [
      { title: "Initialisation" },
      { title: "MEGATRON" },
      { title: "DEHORS DANS LA NIGHT" },
      { title: "HILLZ (Ft. S.Pri Noir)" },
      { title: "PLUG (Ft. Jok'Air)" },
      { title: "Menu principal" },
      { title: "PIRANHA BABY" },
      { title: "TRINITYVILLE" },
      { title: "Mieux vaut pas regarder, Pt. 1" },
      { title: "VAMONOS (Ft. Alpha Wann)" },
      { title: "AKANIZER" },
      { title: "BURNING MAN (Ft. Lomepal)" },
      { title: "Il était une fois sous l'eau" },
      { title: "LONGUE VIE..." },
      { title: "Mieux vaut pas regarder, Pt. 2" },
      { title: "... DE BATARD (Ft. Wit. (FRA))" },
      { title: "Tentative de reconnexion" },
      { title: "POIZON" },
      { title: "NAKRé" },
      { title: "MILLION FLOWERZ" },
      { title: "Manuel d'utilisation" },
      { title: "LOGICIEL TRISTE" },
    ],
  },
  // NUMÉRO 11 de So la Lune
  {
    name: "Numéro 11",
    artist: "So la Lune",
    cover: "/img/covers/numero11-solalune.webp",
    year: 2024,
    songs: [
      { title: "3 FOIS X OU SANTANA" },
      { title: "TITULAIRE" },
      { title: "MAL DE MER" },
      { title: "A DIX COULEURS" },
      { title: "SA TEILLE SON J" },
    ],
  },
  // MÖBIUS de Rounhaa
  {
    name: "Möbius",
    artist: "Rounhaa",
    cover: "/img/covers/mobius-rounhaa.webp",
    year: 2022,
    songs: [
      { title: "PAPURIR" },
      { title: "MUSIC SOUNDS BETTER WITH YOU" },
      { title: "LE MORT" },
      { title: "CÉLINE (Ft. Gio (CHE))" },
      { title: "ICE" },
      { title: "MAFIA" },
      { title: "MR. & MRS. SMITH (Ft. J9ueve)" },
      { title: "BOO" },
      { title: "ILLÉGAL TRISTE" },
      { title: "WISH I WAS SPECIAL" },
      { title: "BONBON&FLEUR" },
      { title: "LE VENTRE ET LA TOMBE" },
    ],
  },
  // NOVAE de Yvnnis
  {
    name: "Novae",
    artist: "Yvnnis",
    cover: "/img/covers/novae-yvnnis.webp",
    year: 2023,
    songs: [
      { title: "CBPM" },
      { title: "WASHINGTON" },
      { title: "IAN WRIGHT" },
      { title: "+74 (Ft. AAMO)" },
      { title: "ENCORE" },
      { title: "HÉROS" },
      { title: "Nx2" },
      { title: "SUR LE GUN" },
      { title: "VLA" },
      { title: "SOLEIL PLUVIEUX" },
    ],
  },
];

export default AlbumList;
