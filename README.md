### Frontend Requirements

#### Form

-   Username field
-   Create Game button
-   Gamecode field
-   Join Game button

### Create game

-   Win conditions:
    -   1st to X
    -   Best of X
-   Time to think between every turn

### Game logic

-   Game only starts when you have 2 players
-   Calculate how many rouunds will be played
-   Assign a color to both players
-   Host has first turn || Alternate after game end.
-   Place turn

### Placement requirements

-   If placed turn has no foundation underneath, make it drop, else place it

### Win conditions

-   Connected 4 of the same color horizontally
-   Connected 4 of the same color vertically
-   Connected 4 of the same color diagonally

### After win

-   Add winner score +1
