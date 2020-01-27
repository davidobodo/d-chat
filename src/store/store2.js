// A sample of the store, just so i could really understand the whole syntax and selection that was going on

const state = {
	user : {
		name : "Obodo David",
		email : "obododavid5@gmail.com",
		profile_pic : "./social_media.jpg",
		status : "let thy will be done",
		user_id : 131
	},

	messages : {
		132 : {
			0 : {
				is_user_msg:false,
				number:0,
				text: "hey"
			},
			1 : {
				is_user_msg:true,
				number:1,
				text:"hello"
			}
		},
		133 : {
			0 : {
				is_user_msg:false,
				number:0,
				text: "boy"
			},
			1 : {
				is_user_msg:true,
				number:1,
				text:"girl"
			}
		}
	},
	
	typing : "",

	contacts : {
		132 : {
			name : "Lydia Chros",
			email : "lydiachros@gmail.com",
			profile_pic :
			status : "read for exam",
			user_id_2 : 132
		}
		133 :{
			name : "Debby Ryan"
			email : "debbyryan@gmail.com",
			profile_pic:
			status: "i am a sexy queen",
			user_id_2: 133
		}
	},

	activeUserId : 133
};