"use strict";
var fs = require('fs');
var path = require('path');
var shortid = require('shortid');
var bodyParser = require('body-parser');



module.exports = (req, res, next, img) => {

    var db = req.db;
    var usuario = db.get('users');

    switch (req.body.toaccess) {
        case 'pdoxlurjhgf':

        	function verify(body, toFile) {
        		console.log(toFile.avatar.name.length);
        		
        		if(toFile.avatar.name.length > 0 ) {
        			
        			profileAvatar('avatar');

        		} else {
        			
        			profileAvatar('text');        		
        		}

        	}

			verify(req.body, img);        		


			function profileAvatar(type) {
				if(type == 'avatar') {
		            fs.readFile(img.avatar.path, (err, data) => {
		                if (err) {
		                    return err;
		                } else {
		                    var name = shortid() + img.avatar.name;
		                    var save_avatar = path.join(__dirname, '..', 'public', 'users/' + name);

		                    fs.writeFile(save_avatar, data, (err) => {

		                        usuario.update({ _id: req.user._id }, {
		                            $set: {
		                                'avatar': name,
		                                'namecomplet': req.body.isname0,
		                                'nickname': req.body.isname1

		                            }
		                        }, (err, great) => {
		                            res.redirect('/panel/profile');
		                        });


		                    });
		                }
		            });
				} else {
					usuario.update({_id: req.user._id}, {
						$set: {
							'namecomplet': req.body.isname0,
							'nickname': req.body.isname1
						}
					}, (err, great) => {
						if(err) {
							return err;
						} else {
							res.redirect('/panel/profile');
						}
					});
				}

			}



            break;
        default:

            console.log('Esta mal');

    }



}
