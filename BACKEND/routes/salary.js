const router = require("express").Router();
let Salary = require("../models/Salary");

http://localhost:8071/salary/add

  router.route("/add").post((req,res)=>{

    const name =req.body.name;
    const role = req.body.role;
    const salary = req.body.salary;
    const date = req.body.date;

    const newSalary = new Salary({

        name,
        role,
        salary,
        date

    })

    newSalary.save().then(()=>{
        res.json("Salary Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    Salary.find().then((salary)=>{
        res.json(salary)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {name, role, salary, date}= req.body;

    const updateSalary = {
        name,
        role,
        salary,
        date
    }
    const update = await Salary.findByIdAndUpdate(userId, updateSalary)
    .then(()=>{
         res.status(200).send({status: "Salary Update"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error : err.message});
    })

})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Salary.findByIdAndDelete(userId).then(()=>{
       res.status(200).send({status:"Salary deleted"});

    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status :"Error with delete salary", error: err.message});
    })
})



  module.exports = router;