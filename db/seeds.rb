# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Store.create(name:"", img_url:"", description:"", address:"", website_link:"")

store1 = Store.create(name:"Cambridge Naturals", img_url:"https://static1.squarespace.com/static/5366ed3ee4b0b47b799380bb/t/5bec3df86d2a73b65ae9a65d/1596738465566/?format=1500w", category:"Health and Welness", description:"Our mission is to provide the best choices in natural wellness products (nutritional supplements, clean body care, organic foods, and healthy lifestyle supplies) and offer an amazing customer experience to our local community. We are committed to sourcing products locally, organically, and ethically via fair trade and direct trade channels, and to donating a portion of our profits to social and environmental organizations that impact our community. As part of our vision for a more just, equitable and sustainable world, we strive to partner with businesses owned by women and under-served individuals. We offer a curated selection of wonderful products, just for you!", address:"23 White Street Cambridge \n\n MA 02140, 92 Guest Street Boston MA 02135", website_link:"https://www.cambridgenaturals.com/")

store2 = Store.create(name:"Ash & Rose", img_url:"https://cdn.shopify.com/s/files/1/0973/8220/files/logo-staggered_cc3d00a6-4e2b-4a61-90d6-068eb87c2f77_170x.png?v=1595430703", category:"Clothing", description:"We believe in shopping thoughtfully and intentionally, so that we can live more joyfully. \n\n Fashion is one of the most polluting and exploitative industries in the world, and we're doing our best to be part of the solution - not the problem. There is no such thing as an ethically perfect product, but we choose to support designers who are genuinely trying to make a positive impact, both on the planet and on their workers' lives. \n\n We embrace the concept of Slow Fashion, shopping thoughtfully and intentionally and connecting with the stories behind our possessions. We reject the idea that Fast Fashion is an acceptable 'cheap' alternative to caring for people and the planet.", website_link:"https://www.ashandrose.com/")

user1 = User.create(email:"test1@test.com", username:"User1", password:"12345678")
user2 = User.create(email:"test2@test.com", username:"User2", password:"12345678")
user3 = User.create(email:"test3@test.com", username:"User3", password:"12345678")
user4 = User.create(email:"test4@test.com", username:"User4", password:"12345678")
user5 = User.create(email:"test5@test.com", username:"User5", password:"12345678")

review1 = Review.create(username:user1.username, rating:5, comment:"amazing", store_id:store1.id, user_id:user1.id)
review2 = Review.create(username:user2.username, rating:4, comment:"pretty great", store_id:store1.id, user_id:user2.id)
review3 = Review.create(username:user3.username, rating:4, comment:"cool store", store_id:store2.id, user_id:user3.id)
review4 = Review.create(username:user4.username, rating:3, comment:"neat", store_id:store2.id, user_id:user4.id)
review5 = Review.create(username:user5.username, rating:5, comment:"awesome stuff", store_id:store2.id, user_id:user5.id)

