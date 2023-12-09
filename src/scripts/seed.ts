const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Mathematics" },
        { name: "Accounting" },
        { name: "Religion" },
        { name: "History" },
      ],
    });

    console.log("Categories Successfully seeded");
  } catch (error) {
    console.log("Error seeding the database: ", error);
  } finally {
    await database.$disconnect();
  }
}
main();
