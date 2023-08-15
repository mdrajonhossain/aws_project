import nextConnect from 'next-connect';
import multer from 'multer';

export const config = {
  api: {
    bodyParser: false, 
  },
};



const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.jpg')
    },
  }),
});

const quizecatagory = nextConnect({

  onError(error, req, res){
    res.status(501).json({ error: "Sorry something Happened!" });
  },

  onNoMatch(req, res){
    res.status(405).json({ error: "Not Allowed" });
  },

});



quizecatagory.use(upload.single('file'));

quizecatagory.post((req, res) => {
  res.status(200).json({ data: req.file.filename });
});



export default quizecatagory;

