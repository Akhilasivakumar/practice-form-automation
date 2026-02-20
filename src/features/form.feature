Feature: DemoQA Practice Form

  @smoke
  Scenario: Fill practice form from homepage
    Given I open DemoQA homepage
    When I navigate to Practice Form
When I fill the form
    Then I should see success message

  
