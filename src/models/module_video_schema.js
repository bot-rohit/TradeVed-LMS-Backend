const mongoose = require('mongoose')
const vidio_schmea = new mongoose.Schema({
    module_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'all_modules',
        requried:true,
    },
    course_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'courses',
        required:true,
    },
    total_vids:{
        type:Number,
        required:true,
    },
    video_links:[
        {
            type:String,

        }
    ],
    transcript:[
        {
            Type:String,

        }
    ],
    Time_Stamp:[
        {
            Type:String,
        }
    ]
    


})