# GCE Frontend Template

GCE Frontend cohort template to used in every project except
in wierd cases.

****

## What are we building?
DevZen your go to application/tool for most of your Development work. The main aim of this is to create a tool that can help you automate some of your tasks. Thank you for deciding to contribute to this 🎉
Here is the [figma link](https://www.figma.com/design/KEtyU67tfnDrIgxVuj9Hyw/DevZen?node-id=55-437&t=kg7kZEbCaRpb0lWN-1) 

## Stacks

Here are the main tools/technologies that is being used for this build. They automatically form the prerequisites.
- React JS
- TypeScript
- React Router
- Tailwind CSS

## SETUP

### 1. Clone project

```git
  git clone https://github.com/GitHub-Campus-Experts-Unilag/DevzenFrontend.git
```

### 2. Install dependencies

```markdown
  🍕. npm install 
```

### 3. Create environment files and file them correctly

```bash
    .env.local
```

### 4. Start project

```bash
  npm run dev
```


## Project Structure

```markdown
src\
 |--components\         # Folder for working on particular features
    |-- converters\    # All logic and components that concerns the converters tool
    |-- formatters\    # All logic and components that concerns the formatters tool
    |-- generators\    # All logic and components that concerns the generators tool
    |-- quickSketch\    # All logic and components that concerns the quickSketch tool
 |--layouts\ # This is where the layout component (Sidebar) will be created then it can be used in the routes
 |--assets\ # Evrything about media - icons, images, svgs
 |--helpers\ # Here you can create a logic that you feel can be used in multiple places. More like extracting a logic for the sake of reusability
 |--pages\
    |--auth
routes\      # All routes logic are embedded here
main.tsx        # App entry point
package.json  # All installed technologies that makes up this build 
```

### GUIDELINES

****

* When creating *new branch* if you're fixing a bug or implementing a feature follow this pattern
  * fixing: *`fix/<name-of-fix>`*
  * feature: *`feat/<name-of-feature>`*
* Never commit directly into the *`main`* branch. Always create a new branch and PR.