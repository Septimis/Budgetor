# Minimum Viable Product Requirements

## Functional

* **1 (Account Sign Up):** New Users shall be able to sign up for a new account and be verified in **under 10 minutes**
    * **1.1:** New users will be required to provide a unique email and password, and optionally a non-unique (to other users) username
        * **1.1.1:** If the user does *not* provide a username, the text to the left of the '**@**' symbol in their email will be used as their username
    * **1.2:** New Users must have their email verified prior to creating any Budgets, or having a role in any budget
* **2 (Creation of Budgets):** [RaVU](#acronyms)s shall be able to create a new Budget
    * **2.1:** The Budget shall have a name (non-unique to other users)
    * **2.2:** The user shall have one, and only one budget
* **3 (Sharing of Budgets):** [RaVU](#acronyms)s shall have the option to share their budget with other [RaVU](#acronyms)s, which will be known as collaborators to the budget
    * **3.1:** If the owner of a budget wants to share their budget with another user (collaborator), they can do so by looking up that user by their email
        * **3.1.1:** The owner of a budget sharing their budget must choose which role they want that collaborator to have (Editor or Viewer), *before* inviting the collaborator
    * **3.2:** Collaborators shall be one of two roles: Editor or Viewer
        * **3.2.1:** Editors shall be able to edit all parts of a budget as if they were the owner with the exception of the name of the budget
        * **3.2.2:** Viewers shall be only able to view the budget in its entirety
    * **3.3:** Users shall be able to collaborate on a maximum of 3 budgets in any role
* **4 (Financial Accounts):** [RaVU](#acronyms)s shall be able to add financial accounts to their budget
    * **4.1:** Financial Accounts shall have unique names to others within the budget
    * **4.2:** Each transaction shall belong to a financial account
    * **4.3:** Users shall be able to create a manual financial account (not attached to an existing financial institution), or have their finanical account reflect an existing institution such as a bank or credit union
        * **4.3.1:** All transactions from an existing financial account will be reflected in Budgetor *(See requirement **7** for transaction requirements)*
        * **4.3.2:** All transactions, manual or retrieved, shall be able to be modified or deleted from a financial account
* **5 (Flow Objects):** [RaVU](#acronyms)s shall be able to create, modify, and delete flow objects in their budget
    * **5.1 (Splitters):** Users shall be able to create, modify, and delete splitters
        * **5.1.1:** Splitters shall distribute, according to the relevant splitter rules, all money which flows into them to the specified flow objects
            * **5.1.1.1:** Splitter rules will determine how much money (fixed or a percentage) will be taken from what comes in, and where it goes.
            * **5.1.1.2:** There may be many layers of rules which pass what remains to the next layer
        * **5.1.2:** All money which flows into a splitter shall be distributed, with none remaining
    * **5.2 (Containers):** Users shall be able to create, modify, and delete containers
        * **5.2.1:** Containers shall have a unique name to other containers in the budget
        * **5.2.2:** Containers shall have a fixed capacity, which when exceeded, will send all extra money to a specified flow object
            * **5.2.2.1:** The containers shall one exception to the fixed capacity requirement by allowing infinite capacity (Such as a savings container)
        * **5.2.3:** Users shall have the ability to 'withdraw' from a container if the current amount is greater than the withdrawl
* **6 (Categories):** [RaVU](#acronyms)s shall be able to create categories within *Flow Objects*
    * **6.1:** Categories shall have a unique name to other categories in the budget
    * **6.2:** Categories shall have the ability to nest within each other (categories in categories)
    * **6.3:** Categories shall have the option to be non-selectable to *transactions*, meaning transactions cannot be assigned to them
* **7 (Transactions):** [RaVU](#acronyms)s shall be able to manually create or import transactions from a financial institution
    * **7.1:** A transaction shall be assigned to one and only one financial account *(See requirement **4** for financial accounts)*
    * **7.2:** A transaction shall have the ability to be split into multiple parts
        * **7.2.1:** Each transaction part shall be assigned to a *Category*, but not necessisarily the *same* Category *(See Requirement **7.3**)*
        * **7.2.2:** A transaction part shall belong to one and only one transaction
        * **7.2.3:** The sum of all transaction parts must equal the transaction amount
        * **7.2.4:** The name of the transaction part shall be the name of the transaction
    * **7.3:** A transaction, whether in parts or in whole, shall be assigned to a *Category* in order to be counted towards a *Containers* amount and by extension, the budget

## Non-Functional

* **1:** New Users shall be able to identify what budgetor is, who it is for, and how it functions *before* signing up.
* **2:** Newly registered (pre-verified) users shall be given resources on how Budgetor works and how to interact with the software
    * **2.1:** These resources shall be available at all times to users, and its location should be known and easily accessible
* **3:** [RaVU](#acronyms)s shall be able to easily distinguish between their own budget and budgets shared by other [RaVU](#acronyms)s
* **4:** The flow of money from flow object to flow object shall be visually intuitive
* **5:** Uncategorized transactions shall be visually distinct and indicate a warning to the user that the transaction is *not* being counted toward the budget
    * **5.1:** The user shall not be able to run inqueries on their budget until all uncategorized transactions have been categorized

## Acronyms

| Acronym | Meaning | Description |
| :------ | :------ | :---------- |
| RaVU | Registered and Verified User | A user which has gone through the sign up process and verified their e-mail |