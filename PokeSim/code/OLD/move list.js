//{name: "Name", PP:, Power:, Accuracy:, desc:}
var moves = {
"bug": [
	{name: "String Shot", PP: 15, power: 80, accuracy: 100, desc: "No additional effect.", type: "bug"},
	{name: "Leech Life", PP: 15, power: 0, accuracy: 80, desc: "Lowers the target's accuracy by one stage.", type: "bug"},
	{name: "Twin Needle", PP: 10, power: 80, accuracy: 100, desc: "No additional effect.", type: "bug"},
	{name: "Pin Missle", PP: 20, power: 70,accuracy: 100, desc: "Repeats for two to three turns. Confuses the user at the end.", type: "bug"},
	],
"dragon": [
	{name: "Dragon Rage", PP: 10, power: 40, accuracy: 100, desc: "Always inflicts 40 HP.", type: "dragon"},
	],
 "electric": [
	{name: "Thunder", PP: 10, power: 120, accuracy: 70, desc: "May paralyze opponent. 10%", type: "electric"},
	{name: "Thunder Punch", PP: 15, power: 75, accuracy: 100, desc: "May paralyze opponent. 10%", type: "electric"},
	{name: "Thunder Shock", PP: 30, power: 40, accuracy: 100, desc: "May paralyze opponent. 10%", type: "electric"},
	{name: "Thunder Wave", PP: 20, power: 0, accuracy: 100, desc: "Paralyzes opponent.", type: "electric"},
	{name: "Thunderbolt", PP: 15, power: 95, accuracy: 100, desc: "May paralyze opponent. 10%", type: "electric"},
	],
"fighting": [
	{name: "Counter", PP: 20, power: 0, accuracy: 100, desc: "When hit by a Physical Attack, user strikes back with 2x power.", type: "fighting"},
	{name: "Double Kick", PP: 30, power: 30, accuracy: 100, desc: "Hits twice in one turn.", type: "fighting"},
	{name: "High Jump Kick", PP: 10, power: 130, accuracy: 90, desc: "If it misses, the user loses half their HP.", type: "fighting"},
	{name: "Jump Kick", PP: 10, power: 100, accuracy: 95, desc: "If it misses, the user loses half their HP.", type: "fighting"},
	{name: "Low Kick", PP: 20, power: 0, accuracy: 100, desc: "The heavier the opponent, the stronger the attack.", type: "fighting"},
	{name: "Karate Chop", PP: 25, power: 50, accuracy: 100, desc: "High critical hit ratio", type: "fighting"},
	{name: "Rolling Kick", PP: 15, power: 60, accuracy: 85, desc: "May cause flinching.", type: "fighting"},
	{name: "Seismic Toss", PP: 20, power: 0, accuracy: 100, desc: "Inflicts damage equal to user's level.", type: "fighting"},
	{name: "Submission", PP: 20, power: 80, accuracy: 80, desc: "User receives recoil damage.", type: "fighting"},
	],
"flying": [
	{name: "Drill Peck", PP: 20, power: 80, accuracy: 100, desc: "No additional effect.", type: "flying"},
	{name: "Fly", PP: 15, power: 0, accuracy: 95, desc: "Flies up on first turn, attacks on second turn.", type: "flying"},
	{name: "Gust", PP: 35, power: 40, accuracy: 100, desc: "Hits Pokémon using Fly/Bounce with double power.", type: "flying"},
	{name: "Mirror Move", PP: 20, power: 0, accuracy: 0, desc: "User performs the opponent's last move.", type: "flying"},
	{name: "Peck", PP: 35, power: 35, accuracy: 100, desc: "No additional effect.", type: "flying"},
	{name: "Sky Attack", PP: 5, power: 140, accuracy: 90, desc: "Charges on first turn, attacks on second. May cause flinching.", type: "flying"},
	{name: "Wing Attack", PP: 35, power: 60, accuracy: 100, desc: "No additional effect.", type: "flying"}
	],
"fire": [
	{name: "Ember", PP: 25, power: 40, accuracy: 100, desc: "May burn opponent.", type: "fire"},
	{name: "Fire Blast", PP: 5, power: 110, accuracy: 85, desc: "May burn opponent.", type: "fire"},
	{name: "Fire Punch", PP: 15, power: 75, accuracy: 100, desc: "May burn opponent.", type: "fire"},
	{name: "Fire Spin", PP: 15, power: 35, accuracy: 85, desc: "Traps opponent, damaging them for 4-5 turns.", type: "fire"},
	{name: "Flamethrower", PP: 15, power: 90, accuracy: 100, desc: "May burn opponent.", type: "fire"}
	],
"ghost": [
	{name: "Confuse Ray", PP: 10, power: 0, accuracy: 100, desc: "Confuses opponent.", type: "ghost"},
	{name: "Lick", PP: 30, power: 30, accuracy: 100, desc: "May paralyze opponent.", type: "ghost"},
	{name: "Night Shade", PP: 15, power: 0, accuracy: 100, desc: "Inflicts damage equal to user's level.", type: "ghost"}
	],
"grass": [
	{name: "Absorb", PP: 25, power: 20, accuracy: 100, desc: "User recovers half the HP inflicted on opponent.", type: "grass"},
	{name: "Leech Seed", PP: 10, power: 0, accuracy: 90, desc: "User steals HP from opponent each turn.", type: "grass"},
	{name: "Mega Drain", PP: 15, power: 40, accuracy: 100, desc: "User recovers half the HP inflicted on opponent.", type: "grass"},
	{name: "Petal Dance", PP: 10, power: 120, accuracy: 100, desc: "User attacks for 2-3 turns but then becomes confused.", type: "grass"},
	{name: "Razor Leaf", PP: 25, power: 55, accuracy: 95, desc: "High critical hit ratio.", type: "grass"},
	{name: "Sleep Powder", PP: 15, power: 0, accuracy: 75, desc: "Puts opponent to sleep.", type: "grass"},
	{name: "Solar Beam", PP: 10, power: 120, accuracy: 100, desc: "Charges on first turn, attacks on second.", type: "grass"},
	{name: "Spore", PP: 15, power: 0, accuracy: 100, desc: "Puts opponent to sleep.", type: "grass"},
	{name: "Stun Spore", PP: 30, power: 0, accuracy: 75, desc: "Paralyzes opponent.", type: "grass"},
	{name: "Vine Whip", PP: 25, power: 45, accuracy: 100, desc: "No additional effect.", type: "grass"}
	],
"ground": [
	{name: "Bone Club", PP: 20, power: 65, accuracy: 85, desc: "May cause flinching.", type: "ground"},
	{name: "Bonemerang", PP: 10, power: 50, accuracy: 90, desc: "Hits twice in one turn.", type: "ground"},
	{name: "Dig", PP: 10, power: 80, accuracy: 100, desc: "Digs underground on first turn, attacks on second.", type: "ground"},
	{name: "Earthquake", PP: 10, power: 100, accuracy: 100, desc: "Power is doubled if opponent is underground from using Dig.", type: "ground"},
	{name: "Fissure", PP: 5, power: 0, accuracy: 0, desc: "One-Hit-KO, if it hits.", type: "ground"},
	{name: "Sand Attack", PP: 15, power: 0, accuracy: 100, desc: "Lowers opponent's Accuracy.", type: "ground"},
	],
"ice": [
	{name: "Aurora Beam", PP: 20, power: 65, accuracy: 100, desc: "May lower opponent's Attack.", type: "ice"},
	{name: "Blizzard", PP: 5, power: 110, accuracy: 70, desc: "May freeze opponent.", type: "ice"},
	{name: "Haze", PP: 30, power: 0, accuracy: 0, desc: "Resets all stat changes.", type: "ice"},	
	{name: "Ice Beam", PP: 10, power: 90, accuracy: 100, desc: "May freeze opponent.", type: "ice"},
	{name: "Ice Punch", PP: 15, power: 75, accuracy: 100, desc: "May freeze opponent.", type: "ice"},
	{name: "Mist", PP: 30, power: 0, accuracy: 0, desc: "User's stats cannot be changed for a period of time.", type: "ice"}
	],
"normal": [
	{name: "Barrage", PP: 20, power: 15, accuracy: 85, desc: "Hits 2-5 times in one turn.", type: "normal"},
	{name: "Bide", PP: 10, power: 0, accuracy: 0, desc: "User takes damage for two turns then strikes back double.", type: "normal"},
	{name: "Bind", PP: 20, power: 15, accuracy: 85, desc: "Traps opponent, damaging them for 4-5 turns.", type: "normal"},
	{name: "Body Slam", PP: 15, power: 85, accuracy: 100, desc: "May paralyze opponent.", type: "normal"},
	{name: "Comet Punch", PP: 15, power: 18, accuracy: 85, desc: "Hits 2-5 times in one turn.", type: "normal"},
	{name: "Constrict", PP: 35, power: 10, accuracy: 100, desc: "May lower opponent's Speed by one stage.", type: "normal"},
	{name: "Conversion", PP: 30, power: 0, accuracy: 0, desc: "Changes user's type to that of its first move.", type: "normal"},
	{name: "Cut", PP: 30, power: 50, accuracy: 95, desc: "No additional effect.", type: "normal"},
	{name: "Defense Curl", PP: 40, power: 0, accuracy: 0, desc: "Raises user's Defense.", type: "normal"},
	{name: "Disable", PP: 20, power: 0, accuracy: 100, desc: "Opponent can't use its last attack for a few turns.", type: "normal"},
	{name: "Dizzy Punch", PP: 10, power: 70, accuracy: 100, desc: "May confuse opponent.", type: "normal"},
	{name: "Double Slap", PP: 10, power: 15, accuracy: 85, desc: "Hits 2-5 times in one turn.", type: "normal"},
	{name: "Double Team", PP: 15, power: 0, accuracy: 0, desc: "Raises user's Evasiveness.", type: "normal"},
	{name: "Double-Edge", PP: 15, power: 120, accuracy: 100, desc: "User receives recoil damage.", type: "normal"},
	{name: "Egg Bomb", PP: 10, power: 100, accuracy: 75, desc: "No additional effect.", type: "normal"},
	{name: "Explosion", PP: 5, power: 250, accuracy: 100, desc: "User faints.", type: "normal"},
	{name: "Flash", PP: 20, power: 0, accuracy: 100, desc: "Lowers opponent's Accuracy.", type: "normal"},
	{name: "Focus Energy", PP: 30, power: 0, accuracy: 0, desc: "Increases critical hit ratio.", type: "normal"},
	{name: "Fury Attack", PP: 20, power: 15, accuracy: 85, desc: "Hits 2-5 times in one turn.", type: "normal"},
	{name: "Fury Swipes", PP: 15, power: 18, accuracy: 80, desc: "Hits 2-5 times in one turn.", type: "normal"},
	{name: "Glare", PP: 30, power: 0, accuracy: 100, desc: "Paralyzes opponent.", type: "normal"},
	{name: "Growl", PP: 40, power: 0, accuracy: 100, desc: "Lowers opponent's Attack.", type: "normal"},
	{name: "Growth", PP: 40, power: 0, accuracy: 0, desc: "Raises user's Attack and Special Attack.", type: "normal"},
	{name: "Guillotine", PP: 5, power: 0, accuracy: 0, desc: "One-Hit-KO, if it hits.", type: "normal"},
	{name: "Harden", PP: 30, power: 0, accuracy: 0, desc: "Raises user's Defense.", type: "normal"},
	{name: "Headbutt", PP: 15, power: 70, accuracy: 100, desc: "May cause flinching.", type: "normal"},
	{name: "Horn Attack", PP: 25, power: 65, accuracy: 100, desc: "No additional effect.", type: "normal"},
	{name: "Horn Drill", PP: 5, power: 0, accuracy: 0, desc: "One-Hit-KO, if it hits.", type: "normal"},
	{name: "Hyper Beam", PP: 5, power: 150, accuracy: 90, desc: "User must recharge next turn.", type: "normal"},
	{name: "Hyper Fang", PP: 15, power: 80, accuracy: 90, desc: "May cause flinching.", type: "normal"},
	{name: "Leer", PP: 30, power: 0, accuracy: 100, desc: "Lowers opponent's Defense.", type: "normal"},
	{name: "Lovely Kiss", PP: 10, power: 0, accuracy: 75, desc: "Puts opponent to sleep.", type: "normal"},
	{name: "Mega Kick", PP: 5, power: 120, accuracy: 75, desc: "No additional effect.", type: "normal"},
	{name: "Mega Punch", PP: 20, power: 80, accuracy: 85, desc: "No additional effect.", type: "normal"},
	{name: "Metronome", PP: 10, power: 0, accuracy: 0, desc: "User performs any move in the game at random.", type: "normal"},
	{name: "Mimic", PP: 10, power: 0, accuracy: 0, desc: "Copies the opponent's last move.", type: "normal"},
	{name: "Minimize", PP: 10, power: 0, accuracy: 0, desc: "Sharply raises user's Evasiveness.", type: "normal"},
	{name: "Pay Day", PP: 20, power: 40, accuracy: 100, desc: "A small amount of money is gained after the battle resolve.", type: "normal"},
	{name: "Pound", PP: 35, power: 40, accuracy: 100, desc: "No additional effect.", type: "normal"},
	{name: "Quick Attack", PP: 30, power: 40, accuracy: 100, desc: "User attacks first.", type: "normal"},
	{name: "Rage", PP: 20, power: 20, accuracy: 100, desc: "Raises user's Attack when hit.", type: "normal"},
	{name: "Razor Wind", PP: 10, power: 80, accuracy: 100, desc: "Charges on first turn, attacks on second. High critical hit ratio.", type: "normal"},
	{name: "Recover", PP: 10, power: 0, accuracy: 0, desc: "User recovers half its max HP.", type: "normal"},
	{name: "Roar", PP: 20, power: 0, accuracy: 0, desc: "In battles, the opponent switches. In the wild, the Pokémon runs", type: "normal"},
	{name: "Scratch", PP: 35, power: 40, accuracy: 100, desc: "No additional effect.", type: "normal"},
	{name: "Screech", PP: 40, power: 0, accuracy: 85, desc: "Sharply lowers opponent's Defense.", type: "normal"},
	{name: "Self-Destruct", PP: 5, power: 200, accuracy: 100, desc: "User faints.", type: "normal"},
	{name: "Sharpen", PP: 30, power: 0, accuracy: 0, desc: "Raises user's Attack.", type: "normal"},
	{name: "Sing", PP: 15, power: 0, accuracy: 55, desc: "Puts opponent to sleep.", type: "normal"},
	{name: "Skull Bash", PP: 10, power: 130, accuracy: 100, desc: "Raises Defense on first turn, attacks on second.", type: "normal"},
	{name: "Slam", PP: 20, power: 80, accuracy: 75, desc: "No additional effect.", type: "normal"},
	{name: "Slash", PP: 20, power: 70, accuracy: 100, desc: "High critical hit ratio.", type: "normal"},
	{name: "Smokescreen", PP: 20, power: 0, accuracy: 100, desc: "Lowers opponent's Accuracy.", type: "normal"},
	{name: "Soft-Boiled", PP: 10, power: 0, accuracy: 0, desc: "User recovers half its max HP.", type: "normal"},
	{name: "Sonic Boom", PP: 20, power: 0, accuracy: 90, desc: "Always inflicts 20 HP.", type: "normal"},
	{name: "Spike Cannon", PP: 15, power: 20, accuracy: 100, desc: "Hits 2-5 times in one turn.", type: "normal"},
	{name: "Splash", PP: 40, power: 0, accuracy: 0, desc: "Doesn't do ANYTHING.", type: "normal"},
	{name: "Stomp", PP: 20, power: 65, accuracy: 100, desc: "May cause flinching.", type: "normal"},
	{name: "Strength", PP: 15, power: 80, accuracy: 100, desc: "No additional effect.", type: "normal"},
	{name: "Struggle", PP: 0, power: 50, accuracy: 100, desc: "Only usable when all PP are gone. Hurts the user.", type: "normal"},
	{name: "Substitute", PP: 10, power: 0, accuracy: 0, desc: "Uses HP to creates a decoy that takes hits.", type: "normal"},
	{name: "Super Fang", PP: 10, power: 0, accuracy: 90, desc: "Always takes off half of the opponent's HP.", type: "normal"},
	{name: "Supersonic", PP: 20, power: 0, accuracy: 55, desc: "Confuses opponent.", type: "normal"},
	{name: "Swift", PP: 20, power: 60, accuracy: 100, desc: "Ignores Accuracy and Evasiveness.", type: "normal"},
	{name: "Swords Dance", PP: 20, power: 0, accuracy: 0, desc: "Sharply raises user's Attack.", type: "normal"},
	{name: "Tackle", PP: 35, power: 40, accuracy: 100, desc: "No additional effect.", type: "normal"},
	{name: "Tail Whip", PP: 30, power: 0, accuracy: 100, desc: "Lowers opponent's Defense.", type: "normal"},
	{name: "Take Down", PP: 20, power: 90, accuracy: 85, desc: "User receives recoil damage.", type: "normal"},
	{name: "Thrash", PP: 10, power: 120, accuracy: 100, desc: "User attacks for 2-3 turns but then becomes confused.", type: "normal"},
	{name: "Transform", PP: 10, power: 0, accuracy: 0, desc: "User takes on the form and attacks of the opponent.", type: "normal"},
	{name: "Tri Attack", PP: 10, power: 80, accuracy: 100, desc: "May paralyze, burn or freeze opponent.", type: "normal"},
	{name: "Vice Grip", PP: 30, power: 55, accuracy: 100, desc: "No additional effect.", type: "normal"},
	{name: "Whirlwind", PP: 20, power: 0, accuracy: 0, desc: "In battles, the opponent switches. In the wild, the Pokémon runs.", type: "normal"},
	{name: "Wrap", PP: 20, power: 15, accuracy: 90, desc: "Traps opponent, damaging them for 4-5 turns.", type: "normal"}	
	],
"poison": [
	{name: "Acid Armor", PP: 20, power: 0, accuracy: 0, desc: "Sharply raises user's Defense.", type: "poison"},
	{name: "Poison Gas", PP: 40, power: 0, accuracy: 90, desc: "Poisons opponent.", type: "poison"},
	{name: "Poison Powder", PP: 35, power: 0, accuracy: 75, desc: "Poisons opponent.", type: "poison"},
	{name: "Poison Sting", PP: 35, power: 15, accuracy: 100, desc: "May poison the opponent.", type: "poison"},
	{name: "Sludge", PP: 20, power: 65, accuracy: 100, desc: "May poison opponent.", type: "poison"},
	{name: "Smog", PP: 20, power: 30, accuracy: 70, desc: "May poison opponent.", type: "poison"},
	{name: "Toxic", PP: 10, power: 0, accuracy: 90, desc: "Badly poisons opponent.", type: "poison"},
	],
"psychic": [
	{name: "Agility", PP: 30, power: 0, accuracy: 0, desc: "Sharply raises user's Speed.", type: "psychic"},
	{name: "Amnesia", PP: 20, power: 0, accuracy: 0, desc: "Sharply raises user's Special Defense.", type: "psychic"},
	{name: "Barrier", PP: 20, power: 0, accuracy: 0, desc: "Sharply raises user's Defense.", type: "psychic"},
	{name: "Confusion", PP: 25, power: 50, accuracy: 100, desc: "May confuse opponent.", type: "psychic"},
	{name: "Dream Eater", PP: 15, power: 100, accuracy: 100, desc: "User recovers half the HP inflicted on a sleeping opponent.", type: "psychic"},
	{name: "Hypnosis", PP: 20, power: 0, accuracy: 60, desc: "Puts opponent to sleep.", type: "psychic"},
	{name: "Kinesis", PP: 15, power: 0, accuracy: 80, desc: "Lowers opponent's Accuracy.", type: "psychic"},
	{name: "Light Screen", PP: 30, power: 0, accuracy: 0, desc: "Halves damage from Special attacks for 5 turns.", type: "psychic"},
	{name: "Meditate", PP: 40, power: 0, accuracy: 0, desc: "Raises user's Attack.", type: "psychic"},
	{name: "Psybeam", PP: 20, power: 65, accuracy: 100, desc: "May confuse opponent.", type: "psychic"},
	{name: "Psychic", PP: 10, power: 90, accuracy: 100, desc: "May lower opponent's Special Defense.", type: "psychic"},
	{name: "Psywave", PP: 15, power: 0, accuracy: 80, desc: "Inflicts damage 50-150% of user's level.", type: "psychic"},
	{name: "Reflect", PP: 20, power: 0, accuracy: 0, desc: "Halves damage from Physical attacks for 5 turns.", type: "psychic"},
	{name: "Rest", PP: 10, power: 0, accuracy: 0, desc: "User sleeps for 2 turns, but user is fully healed.", type: "psychic"},
	],
"rock": [
	{name: "Rock Slide", PP: 10, power: 75, accuracy: 90, desc: "May cause flinching.", type: "rock"},
	{name: "Rock Throw", PP: 15, power: 50, accuracy: 90, desc: "No additional effect.", type: "rock"},
	],
"water": [
	{name: "Bubble", PP: 30, power: 40, accuracy: 100, desc: "May lower opponent's Speed.", type: "water"},
	{name: "Bubble Beam", PP: 20, power: 65, accuracy: 100, desc: "May lower opponent's Speed.", type: "water"},
	{name: "Clamp", PP: 10, power: 35, accuracy: 85, desc: "Traps opponent, damaging them for 4-5 turns.", type: "water"},
	{name: "Crabhammer", PP: 10, power: 00, accuracy: 90, desc: "High critical hit ratio.", type: "water"},
	{name: "Hydro Pump", PP: 5, power: 110, accuracy: 80, desc: "No additional effect.", type: "water"},
	{name: "Surf", PP: 15, power: 90, accuracy: 100, desc: "Hits all adjacent Pokémon.", type: "water"},
	{name: "Water Gun", PP: 25, power: 40, accuracy: 100, desc: "No additional effect.", type: "water"},
	{name: "Waterfall", PP: 15, power: 80, accuracy: 100, desc: "May cause flinching.", type: "water"},
	{name: "Withdraw", PP: 40, power: 0, accuracy: 0, desc: "Raises user's Defense.", type: "water"}
	],
"dark": [
	{name: "Bite", PP: 25, power: 60, accuracy: 100, desc: "May cause flinching.", type: "dark"}
	]
}