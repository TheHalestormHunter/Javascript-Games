var pokemon = [
p1 = {name: "Bulbasaur", type: ["grass", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p2 = {name: "Ivysaur", type: ["grass", "poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p3 = {name: "Venusaur", type: ["grass", "poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p4 = {name: "Charmander", type: ["fire", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p5 = {name: "Charmeleon", type: ["fire", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p6 = {name: "Charizard", type: ["fire", "flying", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p7 = {name: "Squirtle", type: ["water", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p8 = {name: "Wartortle", type: ["water", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p9 = {name: "Blastoise", type: ["water", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p10 = {name: "Caterpie", type: ["bug", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Snake"},
p11 = {name: "Metapod", type: ["bug", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Snake"},
p12 = {name: "Butterfree", type: ["bug", "flying", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bug"},
p13 = {name: "Weedle", type: ["bug", "poison"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Snake"},
p14 = {name: "Kakuna", type: ["bug", "poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Snake"},
p15 = {name: "Beedrill", type: ["bug", "poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bug"},
p16 = {name: "Pidgey", type: ["normal", "flying"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p17 = {name: "Pidgeotto", type: ["normal", "flying"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p18 = {name: "Pidgeot", type: ["normal", "flying"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p19 = {name: "Rattata", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p20 = {name: "Raticate", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p21 = {name: "Spearow", type: ["normal", "flying"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p22 = {name: "Fearow", type: ["normal", "flying"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p23 = {name: "Ekans", type: ["poison", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Snake"},
p24 = {name: "Arbok", type: ["poison", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Snake"},
p25 = {name: "Pikachu", type: ["electric", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Electric"},
p26 = {name: "Raichu", type: ["electric", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Electric"},
p27 = {name: "Sandshrew", type: ["ground", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p28 = {name: "Sandslash", type: ["ground", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p29 = {name: "Nidoran♀", type: ["poison", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p30 = {name: "Nidorina", type: ["poison", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p31 = {name: "Nidoqueen", type: ["poison", "ground", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p32 = {name: "Nidoran♂", type: ["poison", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p33 = {name: "Nidorino", type: ["poison", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p34 = {name: "Nidoking", type: ["poison", "ground", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p35 = {name: "Clefairy", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Fairy"},
p36 = {name: "Clefable", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Fairy"},
p37 = {name: "Vulpix", type: ["fire", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p38 = {name: "Ninetales", type: ["fire", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p39 = {name: "Jigglypuff", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Fairy"},
p40 = {name: "Wigglytuff", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Fairy"},
p41 = {name: "Zubat", type: ["poison", "flying", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p42 = {name: "Golbat", type: ["poison", "flying", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p43 = {name: "Oddish", type: ["grass","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Plant"},
p44 = {name: "Gloom", type: ["grass","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Plant"},
p45 = {name: "Vileplume", type: ["grass","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Plant"},
p46 = {name: "Paras", type: ["bug","grass", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Plant"},
p47 = {name: "Parasect", type: ["bug","grass", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bug"},
p48 = {name: "Venonat", type: ["bug","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bug"},
p49 = {name: "Venomoth", type: ["bug","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bug"},
p50 = {name: "Diglett", type: ["ground", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p51 = {name: "Dugtrio", type: ["ground", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p52 = {name: "Meowth", type: ["normal", "dark"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p53 = {name: "Persian", type: ["normal", "dark"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p54 = {name: "Psyduck", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p55 = {name: "Golduck", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p56 = {name: "Mankey", type: ["fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p57 = {name: "Primeape", type: ["fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p58 = {name: "Growlithe", type: ["fire", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bull"},
p59 = {name: "Arcanine", type: ["fire", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bull"},
p60 = {name: "Poliwag", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p61 = {name: "Poliwhirl", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p62 = {name: "Poliwrath", type: ["water", "fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p63 = {name: "Abra", type: ["fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p64 = {name: "Kadabra", type: ["fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p65 = {name: "Alakazam", type: ["fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p66 = {name: "Machop", type: ["fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p67 = {name: "Machoke", type: ["fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p68 = {name: "Machamp", type: ["fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p69 = {name: "Bellsprout", type: ["grass","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Plant"},
p70 = {name: "Weepinbell", type: ["grass","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Plant"},
p71 = {name: "Victreebel", type: ["grass","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Plant"},
p72 = {name: "Tentacool", type: ["water","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p73 = {name: "Tentacruel", type: ["water","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p74 = {name: "Geodude", type: ["ground", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Ball"},
p75 = {name: "Graveler", type: ["rock", "ground", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p76 = {name: "Golem", type: ["rock", "ground", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p77 = {name: "Ponyta", type: ["fire", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bull"},
p78 = {name: "Rapidash", type: ["fire", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bull"},
p79 = {name: "Slowpoke", type: ["water", "psychic", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p80 = {name: "Slowbro", type: ["water", "psychic", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p81 = {name: "Magnemite", type: ["electric", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Ball"},
p82 = {name: "Magneton", type: ["electric", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Ball"},
p83 = {name: "Farfetch'd", type: ["normal", "flying"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p84 = {name: "Doduo", type: ["normal", "flying"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p85 = {name: "Dodrio", type: ["normal", "flying"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p86 = {name: "Seel", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p87 = {name: "Dewgong", type: ["water", "ice", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p88 = {name: "Grimer", type: ["poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p89 = {name: "Muk", type: ["poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p90 = {name: "Shellder", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p91 = {name: "Cloyster", type: ["water", "ice", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p92 = {name: "Gastly", type: ["ghost","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Ball"},
p93 = {name: "Haunter", type: ["ghost","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p94 = {name: "Gengar", type: ["ghost","poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p95 = {name: "Onix", type: ["rock", "ground", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p96 = {name: "Drowzee", type: ["fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p97 = {name: "Hypno", type: ["fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p98 = {name: "Krabby", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p99 = {name: "Kingler", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p100 = {name: "Voltorb", type: ["electric", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Ball"},
p101 = {name: "Electrode", type: ["electric", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Ball"},
p102 = {name: "Exeggcute", type: ["grass", "psychic", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Ball"},
p103 = {name: "Exeggutor", type: ["grass", "psychic", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p104 = {name: "Cubone", type: ["ground", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p105 = {name: "Marowak", type: ["ground", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p106 = {name: "Hitmonlee", type: ["fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p107 = {name: "Hitmonchan", type: ["fighting", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p108 = {name: "Lickitung", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p109 = {name: "Koffing", type: ["poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p110 = {name: "Weezing", type: ["poison", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p111 = {name: "Rhyhorn", type: ["ground", "rock", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bull"},
p112 = {name: "Rhydon", type: ["ground", "rock", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bull"},
p113 = {name: "Chansey", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Fairy"},
p114 = {name: "Tangela", type: ["grass", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p115 = {name: "Kangaskhan", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p116 = {name: "Horsea", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p117 = {name: "Seadra", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p118 = {name: "Goldeen", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p119 = {name: "Seaking", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p120 = {name: "Staryu", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p121 = {name: "Starmie", type: ["water", "psychic", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p122 = {name: "Mr. Mime", type: ["psychic", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p123 = {name: "Scyther", type: ["bug", "flying", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bug"},
p124 = {name: "Jynx", type: ["ice", "psychic", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p125 = {name: "Electabuzz", type: ["electric", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Electric"},
p126 = {name: "Magmar", type: ["fire", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p127 = {name: "Pinsir", type: ["bug", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bug"},
p128 = {name: "Tauros", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bull"},
p129 = {name: "Magikarp", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p130 = {name: "Gyarados", type: ["water", "flying", "dark", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p131 = {name: "Lapras", type: ["water", "ice", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p132 = {name: "Ditto", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p133 = {name: "Eevee", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bull"},
p134 = {name: "Vaporeon", type: ["water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Water"},
p135 = {name: "Jolteon", type: ["electric", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Electric"},
p136 = {name: "Flareon", type: ["fire", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p137 = {name: "Porygon", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p138 = {name: "Omanyte", type: ["rock", "water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Fossil"},
p139 = {name: "Omastar", type: ["rock", "water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Fossil"},
p140 = {name: "Kabuto", type: ["rock",	"water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Fossil"},
p141 = {name: "Kabutops", type: ["rock", "water", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Fossil"},
p142 = {name: "Aerodactyl", type: ["rock", "flying", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Fossil"},
p143 = {name: "Snorlax", type: ["normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p144 = {name: "Articuno", type: ["ice", "flying", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p145 = {name: "Zapdos", type: ["electric", "flying", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p146 = {name: "Moltres", type: ["fire", "flying", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Bird"},
p147 = {name: "Dratini", type: ["dragon", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Snake"},
p148 = {name: "Dragonair", type: ["dragon", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Snake"},
p149 = {name: "Dragonite", type: ["dragon", "flying", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p150 = {name: "Mewtwo", type: ["psychic", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"},
p151 = {name: "Mew", type: ["psychic", "normal"], level: 1, maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [], sprite: "Beast"}
];