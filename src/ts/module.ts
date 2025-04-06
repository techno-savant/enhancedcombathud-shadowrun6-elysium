import "../styles/module.scss";

import { registerSettings, registerSkillSettings } from "./settings";
import { setupDragonbaneHud } from "./shadowrun";

Hooks.once("init", () => {
  registerSettings();
  console.log("Argon HUD - Shadowrun6 Elysium: init complete");
});

Hooks.once("ready", () => {
  registerSkillSettings();
  console.log("Argon HUD - Shadowrun6 Elysium: skill settings complete");
});

Hooks.on("argonInit", (CoreHUD) => {
  setupDragonbaneHud(CoreHUD);
  console.log("Argon HUD - Shadowrun6 Elysium: UI setup complete");
});
