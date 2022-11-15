const {BeforeAll} = require('@cucumber/cucumber');

BeforeAll(async () => {
  await startWebDriver();
  await createSession();
  console.log("Naveen S **********");
});