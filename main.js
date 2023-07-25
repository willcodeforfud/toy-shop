function makeToy(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Toy made!");
      resolve("Toy");
    }, time);
  });
}

function deliverToys(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Toys delivered!");
      resolve("Delivered");
    }, time);
  });
}

function sellToy(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Toy sold!");
      resolve("Sold");
    }, time);
  });
}

async function toyShopProcess() {
  try {
    const toy = await makeToy(3000); // 3 seconds
    const deliveredToys = await deliverToys(2000); // 2 seconds
    const soldToy = await sellToy(1000); // 1 second

    console.log("All steps completed successfully!");
    return soldToy;
  } catch (error) {
    console.error("Error during the toy shop process:", error);
    throw error;
  }
}

toyShopProcess()
  .then((result) => console.log("Final result:", result))
  .catch((error) => console.error("Final error:", error));
