# on the frontend side (react), we have different routes:

these need to be updated

1. **/** - returns the homepage, nothing yet here
2. **/player/info** - returns a search bar where when a player is inputted, we get their name, height, position, weight, and team
3. **/team/info** - returns a search bar where when a team is inputted, we get the team name, its conference, and division
4. **/player/averages** - returns a search bar where when a player is inputted, we get their season averages
   - could add a feature that changes which season it looks for
5. **/boxscores/today** - returns the status, home and away team name and score for the games on the day
   - should probably change it to match the others, where there is a search bar for the games on the day
6. **/player/lastgame** - returns a search bar where when a player is inputted, we get their stats for their last game
   - this seems a little stupid, should probably be for all their games
7. **/boxscores/game** - returns a search bar where when a game id is inputted, we get the boxscores of all players from that game
   - this is also a little stupid, should be a function inside another function since no one actually knows game ids
8. **/team/lastgames** - returns a search bar where when a team is inputted, we get all the games in the season, and their results and date
   - should make a featture that changes which season it looks for
   - when someone clicks on a game, it shows the boxscore for that game
9. **/player/topperformers** - returns a search bar where when a date is inputted in form (YYYY-MM-DD), we get the top players from each game
   - add a calendar instead for the input for the date

<!-- # on the backend side (flask) we have: -->

# To-Do:

<!-- 1. fix /player/lastgame: just make it /player/games so it displays all their games -->
<!-- 2. make a /boxscores that just is similar to topperformers where you input a date and get the boxscore for that date -->

<!-- 3. combine /team/lastgames and /boxscores/game so when you click on a game by the team, you get the boxscore for the whole game -->

<!-- 4. do the same for the newly made /player/games with /boxscores/game -->

5. https://www.geeksforgeeks.org/how-to-use-combobox-in-reactjs/ use this for combobox?\
6. make the react work with any size screen (responsive design)
7. make a dark mode
   <!-- 5. add the season searcher for /player/averages -->
   <!-- 6. add the calendar for inputs -->
