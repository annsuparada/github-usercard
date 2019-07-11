/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/




const cards = document.querySelector('.cards')



axios.get(`https://api.github.com/users/annsuparada`)
 .then(response => {
  console.log(`It's work`, response)
  
  const element = createGitCard(response.data)
  cards.appendChild(element)
 
  })
  
 .catch(error => {
   console.log('The GitHub card API is currently down, try again later', error)
 })

 const followersArray = ['tetondan',
 'dustinmyers',
 'justsml',
 'luishrd',
 'bigknell',];

followersArray.forEach(item => {

  axios.get(`https://api.github.com/users/${item}`)
   .then(response => {
    console.log(`It's work`, response)
    
    const element = createGitCard(response.data)
    cards.appendChild(element)
   
    })
    
   .catch(error => {
     console.log('The GitHub card API is currently down, try again later', error)
   })
})


function createGitCard(data) {
  // create the elements
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const followers = document.createElement('p')
  const followings = document.createElement('p')
  const bio = document.createElement('p')
  const profileA = document.createElement('a')

  // set the styles
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')


  // set the content
  img.src = data.avatar_url
  name.textContent = data.name
  username.textContent = data.login
  location.textContent = `Location: ${data.location}`
  profile.textContent = `Profile: `
  profileA.textContent = data.html_url
  profileA.href = data.html_url
  followers.textContent = `Followers: ${data.followers}`
  followings.textContent = `Followings: ${data.following}`
  bio.textContent = `Bio: ${data.bio}`

  // put together
  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(followings)
  cardInfo.appendChild(bio)
  profile.appendChild(profileA)

  return card
}