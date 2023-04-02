const { Builder, Browser, By, until } = require("selenium-webdriver");

const driver = new Builder().forBrowser(Browser.CHROME).build();

beforeAll(async () => {
  await driver.get("http://localhost:8000");
});

afterAll(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("clicking draw displays choices div", async () => {
    const deleteBtn = await driver.findElement(
      By.xpath("/html/body/button[2]")
    );
    await deleteBtn.click();
    const choicesDiv = await driver.findElement(
      By.xpath("/html/body/section[1]/div")
    ).isDisplayed();
    expect(choicesDiv).toEqual(true);
  });

  test("clicking 'add to duo' displays player-duo div", async () => {
    const addBtn = await driver.findElement(By.xpath("/html/body/section[1]/div/div[1]/button"));
    await addBtn.click();

    const playerDiv = await driver.findElement(By.xpath("/html/body/section[2]/section[1]/div")).isDisplayed();
    expect(playerDiv).toEqual(true);
  })
});
