import { db } from "./index";
import { wishes } from "./schema";

const desserts = [
  // Lithuanian
  { dessert: "Kūčiukai", nationality: "Lithuanian" },
  { dessert: "Aguonų pienas", nationality: "Lithuanian" },
  { dessert: "Kisielius", nationality: "Lithuanian" },
  { dessert: "Meduoliai", nationality: "Lithuanian" },
  { dessert: "Grybukai", nationality: "Lithuanian" },
  { dessert: "Auselės", nationality: "Lithuanian" },
  { dessert: "Šimtalapis", nationality: "Lithuanian" },
  
  // International
  { dessert: "Panettone", nationality: "Italian" },
  { dessert: "Stollen", nationality: "German" },
  { dessert: "Christmas Pudding", nationality: "British" },
  { dessert: "Bûche de Noël", nationality: "French" },
  { dessert: "Turrón", nationality: "Spanish" },
  { dessert: "Pavlova", nationality: "Australian/New Zealander" },
  { dessert: "Lebkuchen", nationality: "German" },
  { dessert: "Melomakarona", nationality: "Greek" },
];

async function seed() {
  console.log("Seeding database...");
  
  for (const item of desserts) {
    await db.insert(wishes).values({
      dessert: item.dessert,
      nationality: item.nationality,
      createdAt: Date.now(),
    });
  }

  console.log("Seeding complete!");
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
