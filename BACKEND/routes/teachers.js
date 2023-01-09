 const router = require("express").Router();
 let Teacher = require("../models/teacher");

 router.route("/add").post((req,res)=>{

    const name        = req.body.name;
    const age         = req.body.age;
    const gender      = req.body.gender;
    const phoneNumber = req.body.phoneNumber;
    const email       = req.body.email;
    const description = req.body.description;

    const newTeacher = new Teacher({

        name,
        age,
        gender,
        phoneNumber,
        email,
        description

    })

    newTeacher.save().then(()=>{
        res.json("Teacher Added")

    }).catch((err)=>{
        console.log(err);

    })

})

router.route("/").get((req,res)=>{

    Teacher.find().then((teachers)=>{
        res.json(teachers) 

    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{name, age, gender, phoneNumber, email, password, description} = req.body;

    const updateTeacher = {
        name,
        age,
        gender,
        phoneNumber,
        email,
        password,
        description

    }

    const update = await Teacher.findByIdAndUpdate(userId, updateTeacher).then(()=>{
        res.status(200).send({status: "User Updated"})

    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with Updating User", error: err.message});
    })
})

router.route("/delete/:id").delete(async(req,res)=>{

    let userId = req.params.id;

    await Teacher.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with Delete User", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    await Teacher.findById(userId).then((teacher)=>{
        res.status(200).send({status: "User fetched", teacher})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with Get User", error: err.message});
    })

})

module.exports = router;


