$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/wikipedia.feature");
formatter.feature({
  "name": "Wiki Search Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user searches for \"\u003ckey\u003e\" on Wikipedia",
  "keyword": "When "
});
formatter.step({
  "name": "user should see \"\u003ckey\u003e\" in the title",
  "keyword": "Then "
});
formatter.step({
  "name": "user should see \"\u003ckey\u003e\" in the url",
  "keyword": "And "
});
formatter.step({
  "name": "user should see \"\u003ckey\u003e\" in the first heading",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "key"
      ]
    },
    {
      "cells": [
        "Elon Musk"
      ]
    },
    {
      "cells": [
        "Bill Gates"
      ]
    },
    {
      "cells": [
        "Johnny Depp"
      ]
    },
    {
      "cells": [
        "Post Malone"
      ]
    },
    {
      "cells": [
        "Jack Harlow"
      ]
    },
    {
      "cells": [
        "Lil Baby"
      ]
    },
    {
      "cells": [
        "Bob the Builder"
      ]
    },
    {
      "cells": [
        "Jennifer Lopez"
      ]
    },
    {
      "cells": [
        "Robert Downey Jr."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user searches for \"Elon Musk\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Elon Musk\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Elon Musk\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Elon Musk\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user searches for \"Bill Gates\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Bill Gates\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Bill Gates\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Bill Gates\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user searches for \"Johnny Depp\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Johnny Depp\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Johnny Depp\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Johnny Depp\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user searches for \"Post Malone\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Post Malone\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Post Malone\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Post Malone\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user searches for \"Jack Harlow\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Jack Harlow\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Jack Harlow\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Jack Harlow\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user searches for \"Lil Baby\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Lil Baby\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Lil Baby\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Lil Baby\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user searches for \"Bob the Builder\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Bob the Builder\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Bob the Builder\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Bob the Builder\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user searches for \"Jennifer Lopez\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Jennifer Lopez\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Jennifer Lopez\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Jennifer Lopez\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user searches for \"Robert Downey Jr.\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Robert Downey Jr.\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Robert Downey Jr.\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Robert Downey Jr.\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});