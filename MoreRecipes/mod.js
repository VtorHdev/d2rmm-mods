const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);

if (config.recipeToken) {
  cubemain.rows.push({
    description: "Scroll of Town Portal + Scroll of Identify -> Token of Absolution",
    enabled: 1, version: 100,
    numinputs: 2, "input 1": "tsc", "input 2": "isc", output: "toa",
    "*eol": 0,
  }); //Tested
}

if (config.recipeCows) {
  cubemain.rows.push({
    description: "Wirt's Leg  -> Portal to The Secret Cow Level",
    enabled: 1, version: 100,
    numinputs: 1, "input 1": "leg", output: "Cow Portal",
    "*eol": 0,
  }); //Tested
}

if (config.recipeUbers) {
  cubemain.rows.push({
    description: "Horn + Standard of Heroes -> Portal to Uber Tristam",
    enabled: 1, version: 100,
    numinputs: 2, "input 1": "dhn", "input 2": "std", output: "Pandemonium Finale Portal",
    "*eol": 0,
  }); //Tested
  cubemain.rows.push({
    description: "Eye + Standard of Heroes -> Portal to Uber Tristam",
    enabled: 1, version: 100,
    numinputs: 2, "input 1": "bey", "input 2": "std", output: "Pandemonium Finale Portal",
    "*eol": 0,
  }); //Tested
  cubemain.rows.push({
    description: "Brain + Standard of Heroes -> Portal to Uber Tristam",
    enabled: 1, version: 100,
    numinputs: 2, "input 1": "mbr", "input 2": "std", output: "Pandemonium Finale Portal",
    "*eol": 0,
  }); //Tested
}

if (config.recipeKhalim) {
  cubemain.rows.push({
    description: "Khalim's Flail -> Khalim's Will",
    enabled: 1, version: 100,
    numinputs: 1, "input 1": "qf1", output: "qf2",
    "*eol": 0,
  }); //Tested
}

if (config.recipeLarzukSocket) {
  cubemain.rows.push({
    description: "Unique + Hel Rune + Perfect Gem -> Socketed Unique",
    enabled: 1, version: 100,
    numinputs: 3, "input 1": "weap,uni,nos", "input 2": "r15", "input 3": "gem4", output: "useitem",
    "mod 1": "sock", "mod 1 min": 1, "mod 1 max": 1,
    "*eol": 0,
  }); //Tested
  cubemain.rows.push({
    description: "Unique + Hel Rune + Perfect Gem -> Socketed Unique",
    enabled: 1, version: 100,
    numinputs: 3, "input 1": "armo,uni,nos", "input 2": "r15", "input 3": "gem4", output: "useitem",
    "mod 1": "sock", "mod 1 min": 1, "mod 1 max": 1,
    "*eol": 0,
  }); //Tested

  cubemain.rows.push({
    description: "Set + Hel Rune + Perfect Gem -> Socketed Set",
    enabled: 1, version: 100,
    numinputs: 3, "input 1": "weap,set,nos", "input 2": "r15", "input 3": "gem4", output: "useitem",
    "mod 1": "sock", "mod 1 min": 1, "mod 1 max": 1,
    "*eol": 0,
  }); //Tested
  cubemain.rows.push({
    description: "Set + Hel Rune + Perfect Gem -> Socketed Set",
    enabled: 1, version: 100,
    numinputs: 3, "input 1": "armo,set,nos", "input 2": "r15", "input 3": "gem4", output: "useitem",
    "mod 1": "sock", "mod 1 min": 1, "mod 1 max": 1,
    "*eol": 0,
  }); //Tested
}

if (config.recipeRerollSockets) {
  cubemain.rows.push({
    description: "Reroll Normal Base Weapon",
    enabled: 1, version: 100,
    numinputs: 3, "input 1": "weap, nor, nru", "input 2": "r15", "input 3": "jew", output: "useitem",
    "mod 1": "sock", "mod 1 min": 1, "mod 1 max": 6,
    "*eol": 0,
  }); //Tested
  cubemain.rows.push({
    description: "Reroll Normal Base Armor",
    enabled: 1, version: 100,
    numinputs: 3, "input 1": "armo, nor, nru", "input 2": "r15", "input 3": "jew", output: "useitem",
    "mod 1": "sock", "mod 1 min": 1, "mod 1 max": 6,
    "*eol": 0,
  }); //Tested

  cubemain.rows.push({
    description: "Reroll Superior Base Weapon",
    enabled: 1, version: 100,
    numinputs: 3, "input 1": "weap, hiq, nru", "input 2": "r15", "input 3": "jew", output: "useitem",
    "mod 1": "sock", "mod 1 min": 1, "mod 1 max": 6,
    "*eol": 0,
  }); //Tested
  cubemain.rows.push({
    description: "Reroll Superior Base Armor",
    enabled: 1, version: 100,
    numinputs: 3, "input 1": "armo, hiq, nru", "input 2": "r15", "input 3": "jew", output: "useitem",
    "mod 1": "sock", "mod 1 min": 1, "mod 1 max": 6,
    "*eol": 0,
  }); //Tested
}

if (config.recipeRerollCharms) {
  cubemain.rows.push({
    description: "Reroll Magic Small Charm",
    enabled: 1, version: 100,
    numinputs: 2, "input 1": "cm1, mag", "input 2": "gem4", output: "usetype, mag",
    "*eol": 0,
  }); //Tested
  cubemain.rows.push({
    description: "Reroll Magic Large Items",
    enabled: 1, version: 100,
    numinputs: 2, "input 1": "cm2, mag", "input 2": "gem4", output: "usetype, mag",
    "*eol": 0,
  }); //Tested
  cubemain.rows.push({
    description: "Reroll Magic Grand Charm",
    enabled: 1, version: 100,
    numinputs: 2, "input 1": "cm3, mag", "input 2": "gem4", output: "usetype, mag",
    "*eol": 0,
  }); //Tested
}

if (config.recipeUpgradeRunes) {
  for (let rune = 10; rune < 21; rune++) {
    let rin = '"r' + rune + ',qty=3"';
    let rout = "r" + (rune + 1);

    cubemain.rows.push({
      description: "Upgrade Rune",
      enabled: 1, version: 100,
      numinputs: 3, "input 1": rin, output: rout,
      "*eol": 0,
    });
  }

  for (let rune = 21; rune < 33; rune++) {
    let rin = '"r' + rune + ',qty=2"';
    let rout = "r" + (rune + 1);

    cubemain.rows.push({
      description: "Upgrade Rune",
      enabled: 1, version: 100,
      numinputs: 2, "input 1": rin, output: rout,
      "*eol": 0,
    });
  }
}

if (config.recipeDowngradeRunes) {
  for (let rune = 33; rune > 10; rune--) {
    let rin = "r" + rune;
    let rout = "r" + (rune - 1);

    cubemain.rows.push({
      description: "Rune Downgrade",
      enabled: 1, version: 100,
      numinputs: 1, "input 1": rin, output: rout,
      "*eol": 0,
    }); 
  } //Tested

  cubemain.rows.push({
    description: "Rune Downgrade",
    enabled: 1, version: 100,
    numinputs: 1, "input 1": "r10", output: "r09",
    "*eol": 0,
  }); //Tested

  for (let rune = 9; rune > 1; rune--) {
    let rin = "r0" + rune;
    let rout = "r0" + (rune - 1);

    cubemain.rows.push({
      description: "Rune Downgrade",
      enabled: 1, version: 100,
      numinputs: 1, "input 1": rin, output: rout,
      "*eol": 0,
    }); 
  } //Tested
}

D2RMM.writeTsv(cubemainFilename, cubemain);