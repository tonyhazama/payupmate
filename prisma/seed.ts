import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
  // const room1 = await prisma.room.upsert({
  //   create: {

  //     name: "Mawar",
  //     description: "Kamar Mawar Ujung",
  //     price: 200000,
  //     number: "001",
  //   }
  // })
  // const room2 = await prisma.room.upsert({
  //   create: {
  //     name: "Melati",
  //     description: "Kamar Melati Ujung",
  //     price: 300000,
  //     number: "001",
  //   }
  // })

  const id = "cl9ebqhxk00003b600tymydho";
  await prisma.example.upsert({
    where: {
      id,
    },
    create: {
      id,
    },
    update: {},
  });
  // console.log({ room1, room2 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })