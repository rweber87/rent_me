# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.create(name: 'hammer', 
	description: 'It hammers things', 
	category: 'Hardware', owner_id: 2, 
	image_url: 'https://media.gettyimages.com/photos/hammer-picture-id183759696?b=1&k=6&m=183759696&s=170x170&h=v0F3cIXY4o_eJCd4Gl1fO2kFx2ulqJGWo4m_Jfn7WzU=', 
	cost_to_rent: 4.00)


Product.create(name: 'circular saw', 
	description: 'It cuts things', 
	category: 'Hardware', 
	owner_id: 2, 
	image_url: 'https://media.gettyimages.com/photos/circular-saw-picture-id470862472?b=1&k=6&m=470862472&s=170x170&h=vYKjqcCESLBhKpvK64ARVNyZifC3iNuiTv09hN8ryks=', 
	cost_to_rent: 8.00)

Product.create(name: 'tennis racquet', 
	description: 'You hit balls with it', 
	category: 'Recreational', 
	owner_id: 2, 
	image_url: 'https://media.gettyimages.com/photos/closeup-of-a-tennis-racket-picture-id491945650?b=1&k=6&m=491945650&s=170x170&h=1gdkIZV5F2SYXWRLa6vc5rKpJjVGoEjDH9_Tb3VCaQQ=', 
	cost_to_rent: 5.00)

Product.create(name: 'hiking boots', 
	description: 'You climb mountains with it', 
	category: 'Recreational', 
	owner_id: 2, 
	image_url: 'https://media.gettyimages.com/photos/new-hiking-boots-picture-id637206962?b=1&k=6&m=637206962&s=170x170&h=mMOFpB6SVN7PSs61BfzkcEdzbZhQWxNvNuepdIROLkk=', 
	cost_to_rent: 15.00)

Product.create(name: 'blender', 
	description: 'You bake with it', 
	category: 'Kitchenware', 
	owner_id: 2, 
	image_url: 'https://media.gettyimages.com/photos/red-electric-stand-mixer-on-kitchen-counter-top-picture-id184969917?b=1&k=6&m=184969917&s=170x170&h=DW4_FcVh7umWwR9pc_n0yfJpXquzGaqQLklSOaucLEw=', 
	cost_to_rent: 10.00) 
