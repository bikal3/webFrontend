var storage = multer.diskStorage({
        destination: "menu_images",
        filename: function(req, file, callback) {
            const ext = path.extname(file.originalname);
            callback(null, "dish" + Date.now() + ext);
        }
    });
    var imageFileFilter = (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) { 
            return cb(new Error("You can upload only image files!"), false); 
        }
        cb(null, true);
    };
    
    var upload = multer({
        storage: storage,
        fileFilter: imageFileFilter,
        limits: {
            fileSize: 10000000
        }
    });
    
    app.post('/uploadimg', upload.single('imageFile'), (req, res) => {
        console.log('here')
        res.send(req.file)
        console.log(req.file)
        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/json');
        // res.json(req.file);
    })
    

    app.post('/uploadTable', upload.single('ImageName'), (req, res) => {
        res.json(req.file.filename)
        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/json');
        // res.json(req.file);
    })