"use strict";

var Nightmare = require("nightmare");
var expect = require("chai").expect;
var xpath = require("xpath");

describe("Habittracker", function () {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages
  var login = ".user-login-link";
  var myHabits = "#my-habits-link";
  var goodHabitBox = "#entergoodHabit";
  var badHabitBox = "#enterbadHabit";
  var submitMake = "#makeSubmit";
  var submitBreak = "#breakSubmit";
  var backLink = "#back-link";
  var createUser = "#makehabit";
  var usr = "#usr";
  var pwd = "#pwd";
  var create = "#createButton";

  this.timeout(30000);
  it("should create a new habit after creating test user", function (done) {
    // ID for the login button.
    Nightmare({ show: true })
      .goto("http://localhost:8080")
      //Just to be safe;
      .wait(createUser)
      .screenshot("landingPage.png")
      //Click the create user button
      .click(createUser)
      //Steps to create user
      .wait(pwd)
      .click(pwd)
      .type(pwd, "password")
      .wait(usr)
      .click(usr)
      .type(usr, "test1")

      .wait(create)
      .click(create)
      // Just to be safe.
      .wait(login)
      // Click the login button.
      .click(login)
      // Evaluate the making new habits
      .wait(myHabits)
      .click(myHabits)
      .wait(goodHabitBox)
      .click(goodHabitBox)
      .type(goodHabitBox, "Make1")
      .click(submitMake)
      .wait(badHabitBox)
      .click(badHabitBox)
      .type(badHabitBox, "Break1")
      .click(submitBreak)
      .wait(backLink)
      .click(backLink)
      .wait(login)
      .click(login)
      .evaluate(function () {
        return document.querySelector("a[id='Test']");
      })
      // Asset the title is as expected
      .then(function (catalog) {
        expect(catalog).to.not.equal(undefined);
        done();
      });
  });

  //   it("should present a link to course catalog after login", function(done) {
  //     Nightmare({ show: true })
  //       .goto("https://codecademy.com")
  //       // Just to be safe.
  //       .wait(login)
  //       // Click the login button.
  //       .click(login)
  //       // Wait for the login input
  //       .wait("#user_login")
  //       // Actually log in
  //       .type("#user_login", "ResilD")
  //       .type("#user_password", "dummy*password")
  //       .click("#user_submit")
  //       // Evaluate the following selector
  //       .evaluate(function() {
  //         // Assert the catalog exists
  //         return document.querySelector("a[href='/learn/all']");
  //       })
  //       .then(function(catalog) {
  //         expect(catalog).to.not.equal(undefined);
  //         done();
  //       });
  //   });

  //   it("should ", function() {
  //     throw new Error(
  //       "Failed on purpose, just to make the Mocha output more interesting."
  //     );
  //   });
});