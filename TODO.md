### Cruddy App Todo

#### Basic Improvments (requirements)

- [ ] create indivdiual items
- [ ] delete individual items
- [ ] edit individual items

##### Notes
- [ ] Keep DOM and localStorage matching 
- [ ] Remember event Delegation when adding new items to .show-text
- [ ] make sure we do not duplicate data
- [ ] add different values to the item

  ex.
```javascript
 item =  {
  id: "thing used for key",
  text-value: "some text",
  categories: [ 'cat1', 'cat2' ],
  isComplete: boolean,
  dateCreated: dateCreated,
  dateCompleted: dateCompleted
  ...
  etc
  }
```

Plan:
I like to do problems on codewars and codesignal. There are usually problems
that take me awhile to figure out, or problems that I don't know how to approach.
I want to make an app that will let me add/save problems that I want to redo. I can edit whether i've completed the problem, how many times I've done it, how long it took me.
I want something like 3 groups of problems.
- problems I've completed but need a better understanding
- problems I don't know how to solve
- problems that I really enjoyed(decryption, rotate image, nQueens.)
delete problems I've fully learned or edit them to a different group.
give me a random problem to complete.
App will open new tab in browser

When adding a new problem, I want to be able to customize the title and place it in a specific group

Thinking of adding:
Although it's random, make problems that I need more practice with have a higher chance of showing up. So when adding a new problem, also add a priority level to make it occur more frequently.
Maybe create a history of the problems you just completed.

Mention how, that it was a bad habit that you apporached a lot of these problems like a conjurer where you just started writing code. And when you visited the problem again, you vaguely remembered how you approached it, but you couldnt immediately replicate it. Also mention how, when attempting a problem a 2nd time, you came up with a completely different way to solve it. Maybe add in my app a tab that shows the different solutions you've made so that you can compare which one is most efficient.

Maybe add a feature that makes it not limited to codewars or codesignal. If you encounter any problem, the app will create a repl for you to navigate to the problem.


#### Potential Libraries
- [ ] lodash/underscore
- [ ] jquery ui
- [ ] bootstrap/material (css library)

#### My Spin
(to be filled out by you)
